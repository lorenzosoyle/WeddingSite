const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const chokidar = require('chokidar');

const app = express();

// Parse JSON for edit endpoints
app.use(express.json({ limit: '1mb' }));

// Lightweight edit endpoints for local development
// Disable by setting ENABLE_EDITOR=0
const ENABLE_EDITOR = process.env.ENABLE_EDITOR !== '0';
if (ENABLE_EDITOR) {
  app.get('/__edit/ping', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/__edit/save', async (req, res) => {
    try {
      const bodyHTML = req.body && typeof req.body.body === 'string' ? req.body.body : null;
      if (!bodyHTML) return res.status(400).json({ error: 'Missing body HTML' });
      const filePath = path.join(__dirname, 'index.html');
      const current = await fs.readFile(filePath, 'utf8');
      const startIdx = current.indexOf('<body');
      const bodyOpenEnd = current.indexOf('>', startIdx);
      const endIdx = current.lastIndexOf('</body>');
      const before = startIdx !== -1 && bodyOpenEnd !== -1 ? current.slice(0, bodyOpenEnd + 1) : '<body>';
      const after = endIdx !== -1 ? current.slice(endIdx) : '</body>\n</html>';
      const scriptTag = `\n    <script src="assets/js/main.js" defer></script>\n`;
      const next = `${before}\n${bodyHTML}${scriptTag}  ${after}`;
      await fs.writeFile(filePath, next, 'utf8');
      res.json({ ok: true });
    } catch (e) {
      console.error('Edit save failed:', e);
      res.status(500).json({ error: 'Failed to write file' });
    }
  });
}

// Hot reload with Server-Sent Events
let clients = [];

app.get('/__reload', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Send initial connection message
  res.write('data: {"type":"connected"}\n\n');

  // Add this client to the list
  clients.push(res);

  // Remove client on close
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

// Watch for file changes
const watcher = chokidar.watch([
  'index.html',
  'assets/**/*.css',
  'assets/**/*.js',
  'assets/**/*.svg',
  'assets/**/*.png',
  'assets/**/*.jpg',
  'assets/**/*.jpeg'
], {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  ignoreInitial: true
});

watcher.on('change', (filePath) => {
  console.log(`File changed: ${filePath}`);
  // Notify all connected clients
  clients.forEach(client => {
    client.write(`data: {"type":"reload","file":"${filePath}"}\n\n`);
  });
});

// Serve the static site
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
