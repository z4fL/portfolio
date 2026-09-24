import { useState } from "react";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import PdfPreviewModal from "../Components/PdfPreviewModal";
import CTAButton from "../Components/CTAButton";

const publication = {
  id: "match-outcome-prediction-msc2025",
  title:
    "Match Outcome Prediction in Draft Pick and In-game Phases of MSC 2025 Mobile Legends using Random Forest and XGBoost",
  journal: "Journal of Applied Informatics and Computing (JAIC)",
  issue: "Vol. 9, No. 6 · December 2025 · pp. 3892–3903",
  authors: "Dzaky Fadli Firmansyah · Adam Prayogo Kuncoro · Riyanto",
  methods: ["Random Forest", "XGBoost", "Machine Learning", "Mobile Legends"],
  fileUrlpdf: "/publications/dzaky-msc-2025-match-outcome-prediction.pdf",
  fileUrlmd: "/publications/dzaky-msc-2025-match-outcome-prediction.md",
  doiUrl: "https://doi.org/10.30871/jaic.v9i6.11658",
};

const Publications = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <section id="publications" className="py-15 text-slate-200">
        <h4
          className="mb-8 border-b-2 border-b-highlight/80 font-maple text-xl font-bold uppercase tracking-widest pb-2
                    before:content-['|>'] before:tracking-normal before:inline-block before:mr-2"
        >
          Publication
        </h4>

        <article
          id={publication.id}
          style={{
            "--button-background": "transparent",
          }}
          className="border-y border-slate-700 bg-slate-950/35"
        >
          <div className="grid gap-7 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10 lg:px-9">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-maple text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <span>{publication.journal}</span>
              </div>

              <h3 className="mt-4 max-w-4xl font-general text-2xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-3xl">
                {publication.title}
              </h3>

              <p className="mt-4 max-w-3xl font-general text-sm leading-relaxed text-slate-300 sm:text-base">
                This study compares Random Forest and XGBoost for predicting
                Mobile Legends match outcomes from both draft-pick composition
                and in-game snapshots during MSC 2025. In-game models produced
                the stronger signal, reaching 88% accuracy with Random Forest
                and 84% with XGBoost, with both models achieving a 0.94 ROC AUC.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-maple text-[10px] uppercase tracking-[0.13em] text-slate-400 sm:text-[11px]">
                {publication.methods.map((method, index) => (
                  <span key={method} className="flex items-center gap-3">
                    {index > 0 && <span className="h-1 w-1 bg-slate-600" />}
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <aside className="flex flex-col justify-between border-t border-slate-700 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div className="font-maple text-xs leading-relaxed text-slate-400">
                <p>{publication.issue}</p>
                <p className="mt-3 text-slate-300">{publication.authors}</p>
              </div>

              <div className="mt-7 flex flex-wrap items-start gap-3 lg:mt-10 lg:flex-col">
                <CTAButton
                  text={
                    <>
                      <FiFileText className="h-4 w-4" />
                      Preview
                    </>
                  }
                  onClick={() => setIsPreviewOpen(true)}
                  style={{
                    "--button-padding-x": "16px",
                    "--button-padding-y": "12px",
                  }}
                  className="w-full font-maple text-[11px] tracking-[0.14em]"
                  contentClassName="inline-flex items-center justify-center gap-2"
                />
                <a href={publication.fileUrlpdf} download className="w-full">
                  <CTAButton
                    text={
                      <>
                        <FiDownload className="h-4 w-4" />
                        Download PDF
                      </>
                    }
                    dark={false}
                    style={{
                      "--button-background": "var(--color-base-color)",
                      "--button-padding-x": "16px",
                      "--button-padding-y": "12px",
                    }}
                    className="w-full font-maple text-[11px] tracking-[0.14em]"
                    contentClassName="inline-flex items-center justify-center gap-2"
                  />
                </a>
                <a href={publication.fileUrlmd} download className="w-full">
                  <CTAButton
                    text={
                      <>
                        <FiDownload className="h-4 w-4" />
                        Download Markdown
                      </>
                    }
                    dark={false}
                    style={{
                      "--button-background": "var(--color-base-color)",
                      "--button-padding-x": "16px",
                      "--button-padding-y": "12px",
                    }}
                    className="w-full font-maple text-[11px] tracking-[0.14em]"
                    contentClassName="inline-flex items-center justify-center gap-2"
                  />
                </a>
                <a
                  href={publication.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <CTAButton
                    text={
                      <>
                        <FiExternalLink className="h-4 w-4" />
                        Read on DOI
                      </>
                    }
                    dark={false}
                    style={{
                      "--button-background": "var(--color-base-color)",
                      "--button-padding-x": "16px",
                      "--button-padding-y": "12px",
                    }}
                    className="w-full font-maple text-[11px] tracking-[0.14em]"
                    contentClassName="inline-flex items-center justify-center gap-2"
                  />
                </a>
              </div>
            </aside>
          </div>
        </article>
      </section>

      <PdfPreviewModal
        key={publication.fileUrlpdf}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        fileUrl={publication.fileUrlpdf}
        title={publication.title}
        citation={publication.authors}
      />
    </>
  );
};

export default Publications;
