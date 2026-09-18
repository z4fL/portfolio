import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import {
  FiChevronUp,
  FiChevronDown,
  FiDownload,
  FiMinus,
  FiPlus,
  FiX,
} from "react-icons/fi";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfPreviewModal = ({ isOpen, onClose, fileUrl, title, citation }) => {
  const previewRef = useRef(null);
  const pageRefs = useRef([]);
  const restorePageRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollSettleTimeoutRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageDraft, setPageDraft] = useState("1");
  const [scale, setScale] = useState(1);
  const [pageWidth, setPageWidth] = useState(640);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !previewRef.current) return undefined;
    const updateWidth = () => {
      const availableWidth = previewRef.current?.clientWidth ?? 640;
      setPageWidth(Math.max(260, Math.min(680, availableWidth - 32)));
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, [isOpen]);

  // Rebuild DOM refs when the modal is reopened without resetting
  // the persisted current page. Remember the page so it can be restored
  // after react-pdf has rendered the target page.
  useEffect(() => {
    if (isOpen) {
      pageRefs.current = [];
    } else {
      restorePageRef.current = null;
    }
  }, [isOpen]);

  // Track which page is most visible while the user scrolls manually.
  useEffect(() => {
    if (!isOpen || !numPages || !previewRef.current) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        // Ignore intersection changes while restoring the page saved before
        // the modal was closed, or while any programmatic scroll (button
        // click, jump-to-page) is still animating. Without this, pages that
        // cross the 0.5 threshold mid-animation can overwrite pageNumber
        // with a transient, incorrect value.
        if (restorePageRef.current !== null || isProgrammaticScrollRef.current)
          return;

        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const page = Number(mostVisible.target.dataset.pageNumber);
          if (page) {
            setPageNumber(page);
            setPageDraft(String(page));
          }
        }
      },
      { root: previewRef.current, threshold: [0.5] },
    );
    pageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isOpen, numPages]);

  const scrollToPage = (page) => {
    const el = pageRefs.current[page - 1];
    if (!el) return;
    isProgrammaticScrollRef.current = true;
    if (scrollSettleTimeoutRef.current)
      clearTimeout(scrollSettleTimeoutRef.current);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Smooth scrollIntoView is async with no completion callback, so give it
    // a fixed window to finish before letting the observer take over again.
    scrollSettleTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 500);
  };

  // Single source of truth for any navigation that targets a specific page
  // (prev/next buttons, jump-to-page input). Updates pageNumber immediately
  // instead of waiting for the intersection observer to infer it from the
  // resulting scroll, which is what let prev/next go stale after a reopen.
  const goToPage = (page) => {
    if (!numPages) return;
    const clamped = Math.min(Math.max(page, 1), numPages);
    setPageNumber(clamped);
    setPageDraft(clamped);
    scrollToPage(clamped);
  };

  const commitPageDraft = () => {
    const parsed = Number.parseInt(pageDraft, 10);
    if (!Number.isNaN(parsed) && numPages) {
      goToPage(parsed);
    } else {
      setPageDraft(String(pageNumber));
    }
  };

  const handleClose = () => {
    restorePageRef.current = pageNumber;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-preview-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div className="flex h-[96vh] w-full max-w-5xl flex-col border border-slate-600 bg-slate-900 text-slate-100 shadow-2xl">
        {/* Compact single-row header: no kicker label, title + citation share one line */}
        <header className="flex items-center justify-between gap-4 border-b border-slate-700 px-4 py-2.5 sm:px-5">
          <div className="flex min-w-0 items-baseline gap-3">
            <h2
              id="pdf-preview-title"
              className="truncate font-general text-sm font-semibold text-slate-100 sm:text-base"
            >
              {title}
            </h2>
            {citation && (
              <p className="hidden truncate font-fira-code text-[10px] text-slate-500 sm:block">
                {citation}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 border border-slate-600 p-1.5 text-slate-300 transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            aria-label="Close document preview"
          >
            <FiX className="h-4 w-4" />
          </button>
        </header>

        {/* Outer wrapper stays fixed in place; only the inner pane scrolls, so the
            floating toolbar (a sibling, not a child, of the scroll area) never
            travels with the document content. */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-slate-950">
          <div
            ref={previewRef}
            className="terminal-scrollbar absolute inset-0 overflow-auto p-4 sm:p-6"
          >
            <div className="mx-auto flex w-fit flex-col items-center gap-4">
              <Document
                file={fileUrl}
                onLoadSuccess={({ numPages: totalPages }) => {
                  setNumPages(totalPages);
                }}
                loading={
                  <p className="p-10 font-fira-code text-xs text-slate-600">
                    Loading document…
                  </p>
                }
                error={
                  <p className="max-w-md p-10 font-general text-sm leading-relaxed text-slate-700">
                    The preview could not be loaded. You can still download the
                    document using the action above.
                  </p>
                }
              >
                {Array.from({ length: numPages }, (_, index) => index + 1).map(
                  (page) => (
                    <div
                      key={page}
                      ref={(el) => {
                        pageRefs.current[page - 1] = el;
                      }}
                      data-page-number={page}
                      className="border border-slate-700 bg-slate-100"
                    >
                      <Page
                        pageNumber={page}
                        width={pageWidth}
                        scale={scale}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        onRenderSuccess={() => {
                          if (restorePageRef.current !== page) return;

                          requestAnimationFrame(() => {
                            scrollToPage(page);
                            restorePageRef.current = null;
                          });
                        }}
                      />
                    </div>
                  ),
                )}
              </Document>
            </div>
          </div>

          {/* Floating vertical toolbar: absolute against the outer wrapper above,
              pinned to the bottom-right corner regardless of scroll position. */}
          <div className="absolute right-3 bottom-4 z-10 flex flex-col items-center gap-1 border border-slate-700 bg-slate-900/85 p-1.5 shadow-lg backdrop-blur-sm">
            <button
              type="button"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="border border-slate-700 p-1.5 text-slate-300 transition-colors enabled:hover:border-highlight enabled:hover:text-highlight disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous page"
            >
              <FiChevronUp className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-0.5 font-fira-code text-[10px] text-slate-400">
              <input
                type="text"
                inputMode="numeric"
                value={pageDraft}
                onChange={(event) =>
                  setPageDraft(event.target.value.replace(/[^0-9]/g, ""))
                }
                onBlur={commitPageDraft}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.currentTarget.blur();
                  }
                }}
                disabled={numPages <= 1}
                aria-label="Jump to page"
                className="w-7 border-none bg-transparent py-0.5 text-center text-slate-200 focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-highlight"
              />
              <span className="whitespace-nowrap">
                {numPages ? `/${numPages}` : ""}
              </span>
            </div>
            <button
              type="button"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={!numPages || pageNumber >= numPages}
              className="border border-slate-700 p-1.5 text-slate-300 transition-colors enabled:hover:border-highlight enabled:hover:text-highlight disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next page"
            >
              <FiChevronDown className="h-4 w-4" />
            </button>

            <div className="my-1 h-px w-full bg-slate-700" />

            <button
              type="button"
              onClick={() => setScale((value) => Math.min(1.3, value + 0.1))}
              disabled={scale >= 1.3}
              className="border border-slate-700 p-1.5 text-slate-300 transition-colors enabled:hover:border-highlight enabled:hover:text-highlight disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Zoom in"
            >
              <FiPlus className="h-4 w-4" />
            </button>
            <span className="whitespace-nowrap px-1 py-0.5 font-fira-code text-[10px] text-slate-400">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setScale((value) => Math.max(0.8, value - 0.1))}
              disabled={scale <= 0.8}
              className="border border-slate-700 p-1.5 text-slate-300 transition-colors enabled:hover:border-highlight enabled:hover:text-highlight disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Zoom out"
            >
              <FiMinus className="h-4 w-4" />
            </button>

            <div className="my-1 h-px w-full bg-slate-700" />

            <a
              href={fileUrl}
              download
              className="border border-highlight p-1.5 text-highlight transition-colors hover:bg-highlight hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
              aria-label="Download document"
            >
              <FiDownload className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreviewModal;
