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

// Locate compiled production asset files in dist/assets
const assetsDir = path.join(distDir, 'assets');
let mainJsFile = '';
let mainCssFile = '';

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  mainJsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js')) || '';
  mainCssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css')) || '';
}

// Prepare production dist/index.html with production asset references
const rootIndexHtml = path.join(rootDir, 'index.html');
const distIndexHtml = path.join(distDir, 'index.html');

if (fs.existsSync(rootIndexHtml)) {
  let htmlContent = fs.readFileSync(rootIndexHtml, 'utf8');

  // Replace dev script tag with production bundled JS script tag
  if (mainJsFile) {
    htmlContent = htmlContent.replace(
      /<script type="module" src="\/src\/start\.js"><\/script>/,
      `<script type="module" src="/assets/${mainJsFile}"></script>`
    );
  }

  // Inject production CSS link tag into <head>
  if (mainCssFile && !htmlContent.includes(mainCssFile)) {
    htmlContent = htmlContent.replace(
      '</head>',
      `  <link rel="stylesheet" href="/assets/${mainCssFile}" />\n</head>`
    );
  }

  fs.writeFileSync(distIndexHtml, htmlContent, 'utf8');
}

// Create a top-level dist/index.mjs helper forwarding to server entry point
const serverEntry = path.join(distDir, 'server', 'index.mjs');
if (fs.existsSync(serverEntry)) {
  fs.writeFileSync(
    path.join(distDir, 'index.mjs'),
    `import('./server/index.mjs');\n`
  );
}

console.log('Successfully generated production-ready dist/ folder!');
