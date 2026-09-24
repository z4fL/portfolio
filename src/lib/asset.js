/**
 * Resolves a path in `public/` to the correct URL, accounting for Vite's
 * `base` config (e.g. "/portfolio/" on GitHub Pages, "/" in dev).
 *
 * Vite only rewrites asset URLs that go through its import pipeline, a
 * hardcoded string like "/logo.webp" is never touched and always resolves
 * against the domain root. This helper fixes that for any path referenced
 * as a plain string (data files, inline JSX).
 *
 * @param {string} path - path relative to `public/`, with or without a leading "/"
 * @returns {string}
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
