# How to Build Your Dojo App

## Table of Contents
1. [Stack](#stack)
2. [Core Features](#core-features)
3. [Recommended Next Steps](#recommended-next-steps)
    - [Back-End Setup](#back-end-setup)
    - [Front-End Kata Runner](#front-end-kata-runner)
    - [Data Model](#data-model)
    - [Initial Kata/Quiz Content](#initial-kataquiz-content)
    - [Belt Advancement Logic](#belt-advancement-logic)
4. [Belt Progression & Dojo Logic](#belt-progression--dojo-logic)
    - [Overview](#overview)
    - [Kata Attempt Tracking](#kata-attempt-tracking)
    - [Advancement & Demotion Rules](#advancement--demotion-rules)
    - [Example Rules](#example-rules)
    - [Belt Calculation](#belt-calculation)
    - [Benefits](#benefits)
    - [Belt Progression Thresholds & Rules](#belt-progression-thresholds--rules)
    - [Kata History Data Model](#kata-history-data-model)
    - [Back-End Implementation: Belt Calculation & Data Flow](#back-end-implementation-belt-calculation--data-flow)
5. [Back-End API Documentation](#back-end-api-documentation)
    - [Overview](#overview-1)
    - [File Structure](#file-structure)
    - [Dependencies](#dependencies)
    - [API Endpoints](#api-endpoints)
6. [Local & Remote Server Setup](#local--remote-server-setup)
    - [Quick Start (Local Development)](#quick-start-local-development)
    - [How Data is Injected in index.html](#how-data-is-injected-in-indexhtml)
    - [Production & Migration Notes](#production--migration-notes)
7. [Session Review & Key Notes](#session-review--key-notes)
    - [Overview](#overview-2)
    - [Belt Progression & Data Flow](#belt-progression--data-flow)
    - [Front-End & Back-End Integration](#front-end--back-end-integration)
    - [Running & Deploying the App](#running--deploying-the-app)
    - [Lessons & Next Steps](#lessons--next-steps)
8. [Technical Deployment & Migration](#technical-deployment--migration)
9. [Development Logs](#development-logs)
    - [May 31, 2025 - 11:30 PM: Fixed Kata Selection Functionality](#may-31-2025--1130-pm-fixed-kata-selection-functionality)

## Stack
- **Front-End:** HTML/CSS (possibly Tailwind), Vanilla JS or a framework (React/Vue, optional)
- **Back-End:** Node.js + Express (like `finances`)
- **Data:** JSON, local file, or a simple DB (no AI, no Firebase unless you want it)
- **API:** REST endpoints for katas, user progress, belt status, etc.

## Core Features
- **User Progression:** Track which katas/tests are completed, current belt, etc.
- **Kata Runner:** UI to view, attempt, and submit katas/tests.
- **Admin Tools:** (Optional) Add/edit katas and belt requirements.
- **Persistence:** Save progress (localStorage, file, or DB).

## Recommended Next Steps

### Back-End Setup
- Scaffold `server.js` in `martial_arts/` (like in `finances/`).
- API routes:
  - `/api/katas` (list, get by id)
  - `/api/submit` (submit solution/quiz)
  - `/api/progress` (get/set user belt/progress)

### Front-End Kata Runner
- Use `kata-runner.js` and `index.html` as the UI for challenges.
- Display current belt, available katas, and progress.

### Data Model
- Design a JSON or JS object for katas (id, title, description, type, solution, belt, etc).
- Track user progress (completed katas, current belt).

### Initial Kata/Quiz Content
- Start with a few white belt katas (basic JS, HTML, CSS).
- Add logic to check answers (code output, quiz answers).

### Belt Advancement Logic
- Define requirements for each belt (e.g., “complete 5 white belt katas and a form test to advance”).

---

## Belt Progression & Dojo Logic

### Overview
The Dojo app enforces a discipline-based belt system. Belt progression is not set manually, but is calculated by the system based on user performance, consistency, and engagement. This ensures users must practice, learn, and maintain their skills to advance and retain their belt status.

### Kata Attempt Tracking
- Every time a kata is attempted, the following is recorded:
  - Kata ID
  - Timestamp of attempt
  - Result (pass/fail)
- This history is stored in the user's progress data (or a dedicated kata history file).

### Advancement & Demotion Rules
- **Advancement:**
  - Complete a required number of katas (and/or form tests) for the current belt within a set period (e.g., 1 week).
  - Advancement may require a streak or minimum success rate.
- **Demotion:**
  - No kata completed in a given timeframe (e.g., 30 days) results in demotion to the previous belt.
  - Multiple failed attempts or low success rate over a period may also trigger demotion.

### Example Rules
- **White → Yellow:** Complete 5 white belt katas and 1 form test in 7 days.
- **Yellow → Green:** Complete 6 yellow belt katas in 10 days.
- **Demotion:** If no kata is completed in 30 days, drop one belt level.
- **Failing:** If the user fails 3 katas in a row, a warning is issued. 5 consecutive fails may result in demotion.

### Belt Calculation
- On app load, the system reviews the kata attempt history and determines the correct belt.
- The front-end always displays the calculated belt and corresponding icon.
- Manual belt setting is not allowed; all belt changes are earned or lost by performance.

### Benefits
- Encourages regular study and practice.
- Prevents "belt hoarding" without skill retention.
- Makes the Dojo a true learning and discipline tracker.

### Belt Progression Thresholds & Rules

| Belt         | To Advance | Time Limit | Form Test Required | Demotion Rule                        | Notes                                 |
|--------------|------------|------------|-------------------|--------------------------------------|---------------------------------------|
| White        | 5 katas    | 7 days     | Yes               | 30 days inactivity or 5 fails        | Entry level                           |
| Yellow       | 6 katas    | 10 days    | Yes               | 30 days inactivity or 5 fails        | Must pass 1 “Form Test”               |
| Green        | 7 katas    | 14 days    | Yes               | 30 days inactivity or 5 fails        |                                       |
| Blue         | 8 katas    | 21 days    | Yes               | 30 days inactivity or 5 fails        |                                       |
| Brown        | 9 katas    | 30 days    | Yes               | 30 days inactivity or 5 fails        |                                       |
| Red          | 10 katas   | 45 days    | Yes               | 30 days inactivity or 5 fails        |                                       |
| Black Rec.   | 12 katas   | 60 days    | Yes               | 30 days inactivity or 5 fails        | “Recommended” before full Black Belt  |
| Black        | Ongoing    | —          | Ongoing           | 30 days inactivity or 5 fails        | Must maintain activity to keep status |

**Additional Rules:**
- 3 consecutive fails = warning; 5 consecutive fails = demotion.
- No kata completed in 30 days = demotion.
- Form Test required to advance at each belt.
- All time limits are rolling windows.

### Kata History Data Model

```json
{
  "username": "sample_user",
  "dateStarted": "2025-05-31T22:34:46-04:00",
  "currentBelt": "yellow",
  "completedKatas": ["wb-js-1", "wb-html-1", "wb-css-1", "wb-js-2", "wb-html-2"],
  "kataHistory": [
    {
      "kataId": "wb-js-1",
      "timestamp": "2025-05-31T10:00:00-04:00",
      "result": "pass"
    },
    {
      "kataId": "wb-html-1",
      "timestamp": "2025-05-31T11:00:00-04:00",
      "result": "fail"
    },
    {
      "kataId": "wb-html-1",
      "timestamp": "2025-05-31T11:30:00-04:00",
      "result": "pass"
    }
    // ...more attempts
  ]
}
```

### Back-End Implementation: Belt Calculation & Data Flow

- The Express server implements all belt progression logic in code (see `server.js`).
- The `/api/progress` endpoint always returns the user's current belt as calculated from their kata history and completion data.
- The `/api/submit` endpoint records each kata attempt (with timestamp, result, and belt) in `kataHistory`, updates `completedKatas` if passed, and recalculates the belt.
- Demotion for inactivity (no pass in 30 days) or fail streaks (5 consecutive fails) is enforced automatically.
- Advancement is based on the number of katas passed, passing the required form test, and completing them within the time window for each belt.
- All belt changes, warnings, and progression are determined server-side and returned to the client.
- The client (front-end) always fetches `/api/progress` to display the current belt, belt icon, and any warnings.
- Manual belt setting is not allowed; the system is fully data-driven and discipline-based.

**Data Flow Example:**
1. User submits a kata via `/api/submit` (POST): `{ kataId, answer, result, belt }`
2. Server appends the attempt to `kataHistory`, updates `completedKatas` if passed, recalculates the belt, and persists progress.
3. Client fetches `/api/progress` to get the updated belt, warnings, and progress data for display.

---

## Back-End API Documentation

### Overview
The Dojo app uses an ExpressJS server to provide RESTful API endpoints for kata challenges, user submissions, and progress tracking. Data is stored in local JSON files for simplicity and easy prototyping.

### File Structure
```
martial_arts/
├── server.js         # Express server and API routes
├── katas.json        # Kata challenge data
├── progress.json     # User progress data
```

### Dependencies
- express
- cors
- fs (Node built-in)
- path (Node built-in)

### API Endpoints

#### `GET /api/katas`
- Returns a list of all katas.

#### `GET /api/katas/:id`
- Returns a specific kata by its `id`.
- 404 if not found.

#### `POST /api/submit`
- Accepts a kata solution or quiz answer in the request body.
- (Stub) Currently just acknowledges receipt.

#### `GET /api/progress`
- Returns the user's progress (completed katas, current belt, etc).

#### `POST /api/progress`
- Updates the user's progress.
- Expects `{ completedKatas: [], currentBelt: "white", ... }` in the body.

### Example Code Snippet
```js
// Utility: Read/Write JSON
function readJson(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Get all katas
app.get('/api/katas', (req, res) => {
  const katas = readJson(katasPath);
  res.json(katas);
});
// ...other endpoints
```

### Notes
- Data is stored in flat JSON files for easy editing and prototyping.
- The solution checking logic is a stub and should be implemented for real kata validation.
- This setup is modeled after the `finances` app for consistency and familiarity.

## Local & Remote Server Setup

### Quick Start (Local Development)

To get your Dojo Express server running locally:

1. **Navigate to your project directory:**
   ```bash
   cd /Users/chad.buie/Documents/DevA/personal/martial_arts
   ```
2. **Install dependencies (if not already done):**
   ```bash
   npm install express cors
   ```
3. **Start the server:**
   ```bash
   node server.js
   ```
   - By default, the server runs on port 4000 (or as set in your environment).
   - If you want auto-reload on code changes during development, install nodemon:
     ```bash
     npm install -g nodemon
     nodemon server.js
     ```
4. **Access the app:**
   - Open `index.html` directly in your browser for static testing (for full API functionality, see below).
   - For full API functionality, serve the static files and ensure your browser can reach the Express endpoints (`/api/katas`, `/api/progress`, etc.).
   - If you want to serve static files from Express, add this to `server.js`:
     ```js
     app.use(express.static(__dirname));
     ```
   - Then you can access the app at [http://localhost:4000/index.html](http://localhost:4000/index.html)

### How Data is Injected in index.html

Your front-end (`index.html` + `kata-runner.js`) is designed for dynamic, data-driven UI updates:

- **On load:**
  - `kata-runner.js` runs an async IIFE that calls both `fetchProgress()` and `fetchKatas()`.
- **Progress and Belt:**
  - `fetchProgress()` fetches `/api/progress`, then updates the DOM:
    - Sets the current belt name and icon
    - Renders the belt progress ladder
    - Shows any warnings (e.g., inactivity, fail streaks)
    - Populates the kata attempt history
- **Kata List:**
  - `fetchKatas()` fetches `/api/katas` and dynamically builds the kata selection list.
- **Kata Details:**
  - When a kata is selected, its title, description, and starter code are injected into the workspace fields.
- **Kata Submission:**
  - When you click "Check," the answer is POSTed to `/api/submit` (with kataId, answer, result, and belt).
  - The server updates kata history, recalculates the belt, and responds with status and warnings.
  - The UI then refreshes all progress, warnings, and history.
- **All updates are handled by JavaScript; the HTML is a dynamic shell populated by API responses.**

### Production & Migration Notes

To deploy your Dojo app to a remote server (e.g., Linode, DigitalOcean, AWS):

- **Server Prep:**
  - Provision a Linux VPS and install Node.js (LTS) and npm.
  - Update system packages:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt install -y nodejs
    ```
- **Upload/Clone Project:**
  - Use `scp`, `rsync`, or `git clone` to copy your project files to the server.
- **Install Dependencies:**
  ```bash
  cd /path/to/your/app
  npm install
  ```
- **Run the App:**
  ```bash
  node server.js
  # or for dev: npx nodemon server.js
  ```
- **Persistent Process:**
  - Install and use `pm2` for production:
    ```bash
    sudo npm install -g pm2
    pm2 start server.js --name dojo-app
    pm2 save
    pm2 startup
    ```
- **Serving Static Files:**
  - Serve with Express (`express.static`) or set up Nginx as a reverse proxy for both API and static assets.
- **Security:**
  - Open necessary ports (80, 443, 4000) in your firewall.
  - Use HTTPS (Let's Encrypt with Nginx recommended).
  - Regularly back up your data files.
- **CORS:**
  - If your front-end and back-end are on different domains/ports, ensure CORS is enabled in Express.
- **Monitoring:**
  - Use `pm2 logs dojo-app` or similar tools for monitoring and troubleshooting.

**Summary:**
- The front-end is fully set up to fetch and inject data from your Express API.
- For local dev: `npm install`, then `node server.js`.
- For production: deploy as a Node app, serve static files, and ensure API endpoints are reachable and secure.

## Session Review & Key Notes

### Overview
This section summarizes the key technical and architectural decisions, logic, and integration patterns developed during this build. Use this as a study and review reference for how the Dojo app works, why it works this way, and how to extend or deploy it.

### Belt Progression & Data Flow
- Belt advancement/demotion is calculated automatically by the back-end on every `/api/progress` or `/api/submit` call.
- Belt logic is based on kata attempt history, pass/fail streaks, inactivity, and time windows for each belt (see Belt Progression & Dojo Logic section).
- Manual belt setting is not allowed; all changes are earned by performance and discipline.
- The data model includes `kataHistory` (array of attempts), `completedKatas`, and `currentBelt` (calculated, not set).

### Front-End & Back-End Integration
The Dojo app is architected for clear separation of concerns and robust data flow:
- The front-end (`index.html` with `kata-runner.js`) fetches all progress and kata data from the Express API endpoints.
- On page load, `kata-runner.js` calls `fetchProgress()` and `fetchKatas()`:
  - `fetchProgress()` updates the belt, ladder, warnings, and kata history in the DOM.
  - `fetchKatas()` renders the kata list for user selection.
- When a kata is selected, its details (title, description, starter code) are injected into the UI.
- On submission, the user's answer and result are sent to `/api/submit`, which updates `kataHistory` and recalculates the belt server-side.
- All UI state (belt, warnings, progress, history) is always fetched fresh from the back-end, ensuring consistency and discipline.
- The front-end never stores or sets user progression; it is fully data-driven by the API.

### Running & Deploying the App
- **Local Development:**
  - Install dependencies (`npm install express cors`), then run `node server.js`.
  - For static testing, open `index.html` directly. For full API access, serve via Express or a local server.
- **Production Deployment:**
  - Upload your project to a remote server (e.g., Linode, DigitalOcean, AWS) and install Node.js and dependencies.
  - Use a process manager like `pm2` to keep the server running and restart on reboot.
  - Serve static files with Express (`express.static`) or set up Nginx as a reverse proxy for both API and static assets.
  - Open required ports (80, 443, 4000) and secure with HTTPS (Let's Encrypt recommended).
  - Enable CORS in Express if your front-end and back-end are on different domains/ports.
- **Monitoring & Maintenance:**
  - Use `pm2 logs` or similar for monitoring.
  - Regularly back up your JSON data files to avoid data loss.

### Lessons & Next Steps
- The Dojo app now provides a robust, discipline-based progression system with clear front-end/back-end boundaries.
- All belt logic and progression is enforced server-side, promoting fairness and consistency.
- The architecture is modular, allowing for easy extension (admin tools, richer validation, multi-user support).
- **Recommended next steps:**
  - Implement real kata validation logic on the server.
  - Add admin endpoints or UI for kata and belt management.
  - Improve UI/UX for belt progress, warnings, and feedback.
  - Migrate to a database for multi-user support if needed.
  - Document troubleshooting and add sample configs for Nginx or other deployment tools.

## Technical Deployment & Migration

## Appendix: Command Reference

### Back-End Server Commands

#### Basic Server Management
```bash
# Install dependencies
npm install express cors

# Start the server (basic)
node server.js

# Start with auto-reload for development
npm install -g nodemon  # Install nodemon globally (one-time)
nodemon server.js       # Run with auto-reload

# Start on a specific port (overriding default 4000)
PORT=5000 node server.js
```

#### Production Process Management with PM2
```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start server.js --name dojo-app

# Configure PM2 to start on system boot
pm2 startup
pm2 save

# View running applications
pm2 list

# Monitor application
pm2 monit

# View logs
pm2 logs dojo-app

# Restart application
pm2 restart dojo-app

# Stop application
pm2 stop dojo-app

# Remove application from PM2
pm2 delete dojo-app
```

### Front-End Development Server

#### Serving Static Files for Development
```bash
# Using Node.js http-server (install if needed)
npm install -g http-server
http-server -p 8000

# Using Python (if installed)
python -m http.server 8000

# Using PHP (if installed)
php -S localhost:8000
```

### Data Management

#### Backup and Restore JSON Data Files
```bash
# Create a backup of data files
mkdir -p backups/$(date +%Y-%m-%d)
cp katas.json progress.json backups/$(date +%Y-%m-%d)/

# Restore from backup
cp backups/YYYY-MM-DD/katas.json backups/YYYY-MM-DD/progress.json ./
```

### Troubleshooting

#### Check Server Status
```bash
# Check if Node.js process is running
ps aux | grep node

# Check which process is using port 4000
lsof -i :4000

# Test API endpoint with curl
curl http://localhost:4000/api/katas
```

#### Common Issues and Solutions

**Port already in use:**
```bash
# Find the process using the port
lsof -i :4000

# Kill the process
kill -9 <PID>
```

**CORS issues:**
Ensure your server.js includes proper CORS configuration:
```js
const cors = require('cors');
app.use(cors());
```

**File permission issues:**
```bash
# Check file permissions
ls -la

# Fix permissions if needed
chmod 644 *.json
chmod 755 *.js
```


## Development Logs

### May 31, 2025 - 11:30 PM: Fixed Kata Selection Functionality

#### Problem
The "Select Kata Challenge" dropdown in the Dojo application was not functioning properly. Users were unable to select kata challenges from the dropdown menu. Investigation revealed a disconnect between the HTML structure and JavaScript implementation:

1. The HTML had a proper `<select id="kata-select">` dropdown element in the UI
2. However, the JavaScript was creating a separate unordered list (`#kata-list`) element and appending it to the document body
3. This resulted in the dropdown being empty while a separate list of katas was being created outside the main UI
4. Additionally, there were some DOM element reference errors in the JavaScript code

#### Solution
Implemented the following fixes:

1. Modified the `renderKataList()` function to properly populate the existing `<select>` dropdown instead of creating a separate list element
2. Added an `onchange` event handler to the dropdown to load the selected kata when a user makes a selection
3. Fixed incorrect DOM element references (e.g., `belt-warning` vs. `belt-warnings`)
4. Removed the code that was creating and inserting an unnecessary unordered list into the document
5. Updated the UI reset logic when a user selects the default "-- Choose a kata --" option

#### Technical Details
The key changes were made in the `kata-runner.js` file:

- Replaced references to the non-existent `kataListEl` with the proper `kataSelectEl`
- Updated the `renderKataList()` function to clear and populate the select dropdown
- Added proper event handling for the dropdown selection change
- Fixed incorrect DOM element ID references

These changes ensure that users can now properly select kata challenges from the dropdown menu, which will load the appropriate kata title, description, and starter code into the workspace.

#### Testing
Manually tested the application by:

1. Loading the Dojo application in the browser
2. Verifying the kata dropdown is populated with the available katas from the server
3. Selecting different katas and confirming they load correctly
4. Testing the reset functionality by selecting the default option

The kata selection feature is now working as expected.

### May 31, 2025 - 11:40 PM: Added Offline Mode Support

#### Problem
The Dojo application was failing to load properly when the backend API server was not available or when running in a standalone mode. This resulted in error messages in the console and a non-functional UI due to failed API requests:

1. Fetch requests to `/api/katas` and `/api/progress` were failing with 404 errors
2. The kata selection dropdown remained empty due to these failed requests
3. Users couldn't interact with the application without the backend API running

#### Solution
Implemented a graceful fallback mechanism to allow the application to function even when the backend API is not available:

1. Added try-catch blocks around all fetch requests to handle API connection failures
2. Implemented mock data for katas and user progress when API requests fail
3. Added local validation for kata solutions when the submission API endpoint is not available
4. Created a local progress tracking mechanism that updates the UI appropriately

#### Technical Details
The key changes were made in the `kata-runner.js` file:

- Modified `fetchKatas()` to use mock kata data when the API request fails
- Updated `fetchProgress()` to initialize with default progress data when the API is unavailable
- Enhanced the kata submission handler to validate solutions locally and update the UI accordingly
- Added error handling throughout the code to prevent uncaught exceptions

These changes ensure that the Dojo application can function in a standalone mode without requiring the backend API to be running, making it more resilient and user-friendly for development and testing purposes.

#### Testing
Manually tested the application by:

1. Running the application without the backend API server
2. Verifying that the kata dropdown is populated with mock kata data
3. Selecting different katas and confirming they load correctly
4. Submitting kata solutions and verifying that local validation works
5. Checking that the UI updates appropriately based on kata submissions

The offline mode is now working as expected, allowing users to interact with the Dojo application even when the backend API is not available.

### May 31, 2025 - 11:55 PM: Enhanced Error Handling and DOM Safety

#### Problem
Despite the previous improvements, the application was still experiencing issues when running in offline mode:

1. JSON parsing errors occurred when API responses were empty or malformed
2. The application would crash with "Cannot set properties of null" errors when trying to update DOM elements that might not exist
3. Fetch requests would sometimes hang indefinitely when network connectivity was poor

#### Solution
Implemented comprehensive error handling and DOM safety checks throughout the application:

1. Added robust null checks for all DOM element references before attempting to modify them
2. Implemented fetch request timeouts using AbortController to prevent hanging on slow connections
3. Enhanced response handling by first reading responses as text and checking for empty content before parsing JSON
4. Extracted repeated code into helper functions for better maintainability

#### Technical Details
The key improvements were made in the `kata-runner.js` file:

- Added null checks in all rendering functions (renderBeltProgress, renderBeltWarning, renderKataHistory, etc.)
- Updated the DOM element selectors to match the actual HTML structure (e.g., using `.belt-progress-ladder` instead of `#belt-progress`)
- Implemented timeout handling for all fetch requests to prevent hanging
- Added comprehensive error handling for edge cases like empty responses and malformed JSON
- Added additional checks for undefined objects before accessing their properties

#### Testing
Manually tested the application by:

1. Running the application with network connectivity disabled
2. Verifying that all UI elements render correctly without errors
3. Testing with slow network conditions to ensure timeout handling works
4. Checking console logs to confirm proper error handling and fallback mechanisms

The application now gracefully handles all error conditions and provides a seamless user experience even when running offline or with poor network connectivity.
