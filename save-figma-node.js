import https from 'https';
import fs from 'fs';
import path from 'path';

const [, , fileKey, nodeId, outPathArg] = process.argv;

if (!fileKey || !nodeId) {
  console.error('Usage: node scripts/save-figma-node.js <fileKey> <nodeId> [outPath]');
  process.exit(1);
}

const FIGMA_API_KEY = process.env.FIGMA_API_KEY || process.env.FIGMA_ACCESS_TOKEN;
if (!FIGMA_API_KEY) {
  console.error('Missing FIGMA_API_KEY in environment.');
  process.exit(1);
}

const outPath = outPathArg || path.join('data', 'figma', `node_${fileKey}_${nodeId.replace(':', '_')}.json`);

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${encodeURIComponent(fileKey)}/nodes?ids=${encodeURIComponent(nodeId)}`,
  method: 'GET',
  headers: {
    'X-Figma-Token': FIGMA_API_KEY
  }
};

function ensureDirSync(targetPath) {
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
}

console.log(`Fetching Figma node: fileKey=${fileKey}, nodeId=${nodeId}`);
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.err) {
        console.error('Figma API Error:', parsed.err);
        process.exit(1);
      }
      ensureDirSync(outPath);
      fs.writeFileSync(outPath, JSON.stringify(parsed, null, 2), 'utf8');
      console.log(`Saved to ${outPath}`);
    } catch (e) {
      console.error('Failed to parse response:', e);
      console.error('Raw:', data);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.error('Request error:', err);
  process.exit(1);
});

req.end();


