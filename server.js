// Dojo App Express Server
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all origins (for development)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Data file paths
const katasPath = path.join(__dirname, 'katas.json');
const progressPath = path.join(__dirname, 'progress.json');

// Utility: Read/Write JSON
function readJson(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// --- API Routes ---

// Get all katas or a specific kata by id
app.get('/api/katas', (req, res) => {
  const katas = readJson(katasPath);
  res.json(katas);
});
app.get('/api/katas/:id', (req, res) => {
  const katas = readJson(katasPath);
  const kata = katas.find(k => k.id === req.params.id);
  if (!kata) return res.status(404).json({ error: 'Kata not found' });
  res.json(kata);
});

// Submit a kata solution or quiz answer (implementation moved below)

// --- Belt Calculation Logic ---
const BELTS = [
  { name: 'white', required: 5, days: 7 },
  { name: 'yellow', required: 6, days: 10 },
  { name: 'green', required: 7, days: 14 },
  { name: 'blue', required: 8, days: 21 },
  { name: 'brown', required: 9, days: 30 },
  { name: 'red', required: 10, days: 45 },
  { name: 'black-recommended', required: 12, days: 60 },
  { name: 'black', required: 0, days: 365 }
];

function calculateBelt(progress) {
  const now = new Date();
  const history = progress.kataHistory || [];
  let completedKatas = new Set();
  let lastPassDate = null;
  let failStreak = 0;
  let passStreak = 0;
  let mostRecent = null;
  let warnings = [];

  // Sort history by timestamp ascending
  const sorted = [...history].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  for (let i = 0; i < sorted.length; i++) {
    const attempt = sorted[i];
    if (attempt.result === 'pass') {
      completedKatas.add(attempt.kataId);
      lastPassDate = attempt.timestamp;
      passStreak++;
      failStreak = 0;
    } else if (attempt.result === 'fail') {
      failStreak++;
      passStreak = 0;
    }
    mostRecent = attempt;
  }

  // Inactivity demotion: 30 days since last pass
  if (lastPassDate) {
    const daysSince = (now - new Date(lastPassDate)) / (1000 * 60 * 60 * 24);
    if (daysSince > 30) {
      warnings.push('No kata completed in 30 days: demotion applied.');
      return { belt: 'white', warnings };
    }
  }

  // Fail streak demotion
  if (failStreak >= 5) {
    warnings.push('5 consecutive fails: demotion applied.');
    return { belt: 'white', warnings };
  } else if (failStreak >= 3) {
    warnings.push('3 consecutive fails: warning.');
  }

  // Advancement logic
  let beltIndex = 0;
  for (let i = 0; i < BELTS.length - 1; i++) {
    const belt = BELTS[i];
    const nextBelt = BELTS[i + 1];
    // Count passes for this belt
    const passes = sorted.filter(a => a.result === 'pass' && a.belt === belt.name);
    // Find if form test passed (assume form test has kataId ending with '-form')
    const formTest = sorted.find(a => a.result === 'pass' && a.belt === belt.name && a.kataId.endsWith('-form'));
    // Check time window (from first to last pass for this belt)
    if (passes.length >= belt.required && formTest) {
      const first = passes[0] ? new Date(passes[0].timestamp) : null;
      const last = passes[passes.length - 1] ? new Date(passes[passes.length - 1].timestamp) : null;
      if (first && last && (last - first) / (1000 * 60 * 60 * 24) <= belt.days) {
        beltIndex = i + 1;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  let beltName = BELTS[beltIndex].name;
  return { belt: beltName, warnings };
}

// Get user progress with calculated belt
app.get('/api/progress', (req, res) => {
  const progress = readJson(progressPath);
  const calc = calculateBelt(progress);
  progress.currentBelt = calc.belt;
  progress.warnings = calc.warnings;
  res.json(progress);
});

// Update user progress (manual update)
app.post('/api/progress', (req, res) => {
  writeJson(progressPath, req.body);
  res.json({ status: 'progress updated' });
});

// On kata submit, append to kataHistory and update completedKatas if passed
app.post('/api/submit', (req, res) => {
  const { kataId, answer, result, belt } = req.body;
  const progress = readJson(progressPath);
  const now = new Date().toISOString();
  // For now, just accept result from client (should validate in real app)
  progress.kataHistory = progress.kataHistory || [];
  progress.kataHistory.push({ kataId, timestamp: now, result, belt });
  if (result === 'pass' && !progress.completedKatas.includes(kataId)) {
    progress.completedKatas.push(kataId);
  }
  // Recalculate belt
  const calc = calculateBelt(progress);
  progress.currentBelt = calc.belt;
  progress.warnings = calc.warnings;
  writeJson(progressPath, progress);
  res.json({ status: 'kata recorded', belt: calc.belt, warnings: calc.warnings });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Dojo API server running on port ${PORT}`);
});
