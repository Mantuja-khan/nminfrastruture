import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const outputDir = path.join(rootDir, '.output');
const distDir = path.join(rootDir, 'dist');

console.log('Creating dist/ folder from .output...');

if (!fs.existsSync(outputDir)) {
  console.error('Error: .output directory does not exist. Run vite build first.');
  process.exit(1);
}

// Clean old dist folder if exists
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

fs.mkdirSync(distDir, { recursive: true });

// Copy entire .output structure into dist (dist/public and dist/server)
fs.cpSync(outputDir, distDir, { recursive: true });

// Also copy contents of .output/public into dist root for static servers
const publicDir = path.join(outputDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// Copy root index.html to dist/index.html if not already present
const rootIndexHtml = path.join(rootDir, 'index.html');
const distIndexHtml = path.join(distDir, 'index.html');
if (fs.existsSync(rootIndexHtml) && !fs.existsSync(distIndexHtml)) {
  fs.cpSync(rootIndexHtml, distIndexHtml);
}

// Create a top-level dist/index.mjs helper forwarding to server entry point
const serverEntry = path.join(distDir, 'server', 'index.mjs');
if (fs.existsSync(serverEntry)) {
  fs.writeFileSync(
    path.join(distDir, 'index.mjs'),
    `import('./server/index.mjs');\n`
  );
}

console.log('Successfully generated dist/ folder!');
