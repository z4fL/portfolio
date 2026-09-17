#!/usr/bin/env node
// Bikin snapshot arsip dari HEAD (commit stabil sebelum redesign berikutnya dimulai).
// Usage: node scripts/create-version-snapshot.mjs <angka-versi>
// Contoh: node scripts/create-version-snapshot.mjs 2
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const label = process.argv[2];
if (!label) {
  console.error("Usage: node scripts/create-version-snapshot.mjs <angka-versi>");
  console.error("Contoh: node scripts/create-version-snapshot.mjs 2");
  process.exit(1);
}

const versionName = `v${label}`;
const snapshotDir = path.join(root, "public", "old", label);
const worktreeDir = path.join(root, `.snapshot-worktree-${label}`);
const distDir = path.join(root, ".snapshot-dist");

console.log(`\n> Membuat snapshot ${versionName} dari HEAD (commit stabil terakhir)...\n`);

// 1. Checkout HEAD ke worktree terpisah, sama sekali gak nyentuh working tree yang lagi dipake
execSync(`git worktree add --detach "${worktreeDir}" HEAD`, { cwd: root, stdio: "inherit" });

// 2. Reuse node_modules dari root biar gak install ulang
fs.symlinkSync(path.join(root, "node_modules"), path.join(worktreeDir, "node_modules"), "dir");

// 3. Build dengan base relatif, biar path asset bener meski dipindah ke folder nested
execSync(`npx vite build --outDir "${distDir}" --base=./`, {
  cwd: worktreeDir,
  stdio: "inherit",
});

// 4. Cuma copy bundle JS/CSS + favicon + index.html. Asset lain (icon, font, img)
//    tetap ambil dari root, satu sumber, gak digandain per versi.
fs.mkdirSync(path.join(snapshotDir, "assets"), { recursive: true });
fs.copyFileSync(path.join(distDir, "index.html"), path.join(snapshotDir, "index.html"));
fs.copyFileSync(path.join(root, "public", "favicon.ico"), path.join(snapshotDir, "favicon.ico"));
for (const file of fs.readdirSync(path.join(distDir, "assets"))) {
  if (/^index-.*\.(js|css)$/.test(file)) {
    fs.copyFileSync(path.join(distDir, "assets", file), path.join(snapshotDir, "assets", file));
  }
}

// 5. Sisipin banner arsip (murni HTML statis, di luar bundle React yang dibekukan)
const indexPath = path.join(snapshotDir, "index.html");
let html = fs.readFileSync(indexPath, "utf-8");
const banner = `<div style="font-family: 'Fira Code', monospace; font-size: 12px; background: #131A2A; color: #ECE8E1; border-bottom: 2px solid #F9564F; padding: 10px 16px; display: flex; align-items: center; justify-content: center; gap: 12px; text-align: center;">
      <span>\ud83d\udce6 Archive <strong style="color: #ff8b86;">${versionName}</strong> \u2014 previous version, not the latest.</span>
      <a href="../../" style="color: #ECE8E1; text-decoration: underline;">Back to the latest version \u2192</a>
    </div>
    <div id="root"></div>`;
html = html.replace('<div id="root"></div>', banner);
fs.writeFileSync(indexPath, html);

// 6. version-history.json jadi satu-satunya sumber, dipake juga sama Footer.jsx
const historyPath = path.join(root, "version-history.json");
const history = JSON.parse(fs.readFileSync(historyPath, "utf-8"));
if (!history.find((v) => v.path === `old/${label}`)) {
  history.push({ label: versionName, path: `old/${label}` });
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + "\n");
}

// 7. Beres-beres
fs.rmSync(distDir, { recursive: true, force: true });
execSync(`git worktree remove "${worktreeDir}" --force`, { cwd: root, stdio: "inherit" });

console.log(`\n\u2713 Snapshot ${versionName} selesai di public/old/${label}/`);
console.log(`\u2713 version-history.json ke-update otomatis\n`);
