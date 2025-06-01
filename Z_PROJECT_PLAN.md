# Financial Planner Kata Training Course
**Version:** 1.0  
**Date:** May 31, 2025

## 1. Project Vision
To develop an interactive, Kata-based training course built around an existing Financial Planner web application. The course aims to teach core to advanced JavaScript, CSS (including responsive design and Flexbox), HTML, and Firebase integration concepts. The learning journey will be structured using a "belt" system, providing clear progression, practical application through "Katas" (coding exercises), and "Form Tests" (milestone assessments) to reinforce learning and track mastery. The ultimate goal is to empower the learner to confidently scaffold and build JavaScript applications.

## 2. Table of Contents
1. [Project Vision](#1-project-vision)
2. [Table of Contents](#2-table-of-contents)
3. [Phase 1: Deconstructing the Existing Financial Planner Code](#3-phase-1-deconstructing-the-existing-financial-planner-code)
   - [3.1 HTML Structure](#31-html-structure)
   - [3.2 CSS (TailwindCSS & Custom)](#32-css)
   - [3.3 JavaScript Fundamentals](#33-javascript-fundamentals)
   - [3.4 DOM Manipulation](#34-dom-manipulation)
   - [3.5 Event Handling](#35-event-handling)
   - [3.6 Asynchronous JavaScript](#36-asynchronous-javascript)
   - [3.7 Firebase Integration](#37-firebase-integration)
   - [3.8 Chart.js](#38-chartjs)
   - [3.9 Application State Management](#39-application-state-management)
   - [3.10 Error Handling](#310-error-handling)
   - [3.11 API Interaction](#311-api-interaction)
   - [3.12 Modularity/Code Structure](#312-modularitycode-structure)
4. [Phase 2: The "Belt" System and Course Structure](#4-phase-2-the-belt-system-and-course-structure)
5. [Phase 3: Scaffolding the "Kata Runner"](#5-phase-3-scaffolding-the-kata-runner)
6. [Phase 4: Development and Iteration Strategy](#6-phase-4-development-and-iteration-strategy)
7. [Potential Challenges and Considerations](#7-potential-challenges-and-considerations)
8. [Future Enhancements/Vision](#8-future-enhancements-vision)

## 3. Phase 1: Deconstructing the Existing Financial Planner Code
The existing Financial Planner application serves as the primary source material for developing Katas and structuring the curriculum. Key concepts to be extracted and taught include:

### 3.1 HTML Structure
- Semantic HTML elements (`<aside>`, `<main>`, `<section>`, `<header>`, `<nav>`, `<footer>`, etc.)
- Layout `<div>`s
- Forms (`<form>`, `<input>`, `<button>`, `<select>`, `<label>`)
- Tables (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`)
- Linking external resources (`<link>`, `<script>`)
- Meta tags (`<meta charset="UTF-8">`, `<meta name="viewport"...>`)

### 3.2 CSS
#### TailwindCSS:
- Utility-first philosophy
- Layout: Flexbox (`flex`, `flex-col`, `items-center`, `justify-center`, `gap`, etc.), Grid (`grid`, `grid-cols-`, etc.)
- Responsive Design: Breakpoint prefixes (`sm:`, `md:`, `lg:`)
- Styling: Colors, padding, margins, borders, fonts, shadows, rounded corners
- Pseudo-classes (`hover:`, `focus:`)

#### Custom CSS:
- Animations (`@keyframes fadeIn`)
- Specific component styling (e.g., `.chart-container`, `.table-container` scrollbars)
- Font imports (`@font-face` or Google Fonts link)

### 3.3 JavaScript Fundamentals
- Variables: `let`, `const`, scope
- Data Types: Strings, Numbers, Booleans, Arrays, Objects, `null`, `undefined`
- Operators: Arithmetic, comparison, logical, assignment, ternary
- Control Flow: `if`/`else`, `switch`
- Loops: `forEach`, `for...of`, `for`
- Functions: Declaration, expression, arrow functions, parameters, return values, scope, closures
- ES6+ Features: Modules, template literals, destructuring
- Built-in Objects: `Math`, `Date`
- Type Conversion: `parseFloat()`, `parseInt()`, `String()`, `Number()`, `Boolean()`
- Utility functions: `isNaN()`, `toFixed()`

### 3.4 DOM Manipulation
- Selecting Elements: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`
- Modifying Content: `textContent`, `innerHTML`, `value`
- Modifying Attributes: `setAttribute()`, `getAttribute()`, `removeAttribute()`
- Modifying Styles: `element.style.property`
- Modifying Classes: `element.classList.add()`, `element.classList.remove()`, `element.classList.toggle()`
- Creating Elements: `document.createElement()`
- Appending/Inserting Elements: `appendChild()`, `insertBefore()`, `prepend()`, `element.remove()`
- Working with Tables: `table.insertRow()`, `row.insertCell()`

### 3.5 Event Handling
- Event Listeners: `element.addEventListener('event', handlerFunction)`
- Event Object: `event`, `event.target`, `event.preventDefault()`
- Common Events: `click`, `submit`, `change`, `DOMContentLoaded`, `load`
- Inline Event Handlers: Discussion of pros/cons and alternatives

### 3.6 Asynchronous JavaScript
- Promises: Conceptual understanding, `.then()`, `.catch()`, `.finally()`
- `async`/`await` syntax for cleaner asynchronous code
- `fetch()` API for making HTTP requests
- Error handling in asynchronous operations

### 3.7 Firebase Integration
#### Firebase SDK:
- Importing and initializing the Firebase app
- Authentication:
  - `getAuth()`
  - `onAuthStateChanged()` for tracking user login state
  - `signInAnonymously()`
  - `signInWithCustomToken()`
  - User object (`user.uid`)
- Firestore (Database):
  - `getFirestore()`
  - Data Model: Collections, Documents, Fields
  - CRUD Operations:
    - Create: `addDoc()`, `setDoc()`
    - Read: `getDoc()`, `getDocs()`
    - Update: `setDoc({ merge: true })`, `updateDoc()`
    - Delete: `deleteDoc()`
  - Queries: `collection()`, `doc()`, `query()`, `where()`
  - Real-time Updates: `onSnapshot()`
  - Batch Writes: `writeBatch()`
  - Firestore paths and security rules

### 3.8 Chart.js
- Including Chart.js library
- Creating Chart Instances: `new Chart(context, config)`
- Chart Configuration: type (pie, bar), data (labels, datasets), options
- Updating Charts: Modifying `chart.data` and calling `chart.update()`
- Customization: Tooltips, legends, scales, colors, responsiveness

### 3.9 Application State Management
- Global JavaScript object (`financialData`) to hold application state
- Functions to update this state
- Re-rendering UI components based on state changes
- Discussion of limitations and potential improvements for larger apps

### 3.10 Error Handling
- `try...catch` blocks for synchronous and asynchronous code
- Displaying user-friendly error messages
- Console logging for debugging (`console.log()`, `console.error()`, `console.warn()`)

### 3.11 API Interaction
- Using `fetch()` to call external APIs
- Constructing API request (URL, method, headers, body)
- Handling API response (JSON parsing, checking status)
- Managing API keys (conceptual, security considerations)
- Displaying data from API response

### 3.12 Modularity/Code Structure
- Organizing code into functions with specific responsibilities
- Separation of concerns (data logic, UI updates, event handling)
- Utility functions for common tasks
- Event listener setup
- Initial load logic

## 4. Phase 2: The "Belt" System and Course Structure
The course follows a martial arts-inspired "belt" system to denote progression and mastery. Each belt includes:

### 4.1 🥋 White Belt: The Absolute Basics
**Focus:** Understanding page structure and basic styling

**Concepts from Code:**
- Basic HTML tags
- Linking CSS (Tailwind via CDN) and JS
- Intro to Tailwind
- Simple CSS concepts
- Layout structure

**Example Katas:**
1. HTML: "Identify 5 different HTML tags and explain their purpose"
2. CSS: "Change background color using Tailwind class"
3. HTML: "Add a new paragraph with specific content"
4. Concept: "Explain viewport meta tag purpose"

**Form Test:** Modify HTML to add a new static section with styling

### 4.2 🥋 Yellow Belt: Introduction to JavaScript & DOM Interaction
**Focus:** Making the page interactive, reading from and writing to the DOM

**Concepts from Code:**
- JS Variables and Data Types
- Functions and Event Handling
- DOM Selection and Manipulation
- Basic debugging with `console.log`

**Example Katas:**
1. JS/DOM: "Update text content of specific element on button click"
2. JS/DOM: "Log current content of an element to console"
3. JS: "Create and test a simple addition function"

**Form Test:** Create an interactive name greeting system

### 4.3 🥋 Green Belt: Working with Data & Forms
**Focus:** Handling user input, working with arrays/objects, advanced CSS

**Concepts from Code:**
- Arrays and Objects
- Form handling
- Data parsing and validation
- Advanced Tailwind layouts

**Example Katas:**
1. JS/Forms: "Log form data on submission"
2. JS/Arrays: "Calculate sum of number array"
3. CSS/Tailwind: "Style form layout with Flexbox"
4. JS/DOM: "Dynamically populate table with array data"

**Form Test:** Create a simple To-Do List feature

### 4.4 🥋 Blue Belt: Asynchronous Operations & Firebase
**Focus:** Understanding async/await, promises, and Firebase integration

**Concepts from Code:**
- Async/await syntax
- Firebase setup and basic operations
- Error handling with try/catch
- Real-time data updates

**Example Katas:**
1. JS/Firebase: "Add document to test collection"
2. JS/Firebase: "Fetch and display collection data"
3. JS/Concept: "Explain async/await usage"
4. JS/Firebase: "Implement document deletion"

**Form Test:** Create a simple Firebase-powered data management system

### 4.5 🥋 Brown Belt: Advanced Features
**Focus:** Real-time updates, data visualization, complex JS/CSS

**Concepts from Code:**
- Firestore real-time listeners
- Chart.js implementation
- Advanced array methods
- Responsive design
- API integration

**Example Katas:**
1. JS/Firebase: "Implement real-time data updates"
2. JS/Chart.js: "Create and update simple chart"
3. JS/Arrays: "Complex data transformation"
4. CSS/Responsive: "Implement responsive layout"

**Form Test:** Add new feature with charts and real-time updates

### 4.6 🥋 Black Belt: Architecture & Mastery
**Focus:** Application architecture, code organization, advanced concepts

**Concepts from Code:**
- Modular design
- State management
- Performance optimization
- Error handling strategies
- Feature design and implementation

**Example Katas:**
1. Architecture: "Analyze and propose state management improvements"
2. Scaffolding: "Design new dashboard structure"
3. Performance: "Identify and fix bottlenecks"
4. Feature Design: "Plan new application feature"

**Form Test:** Add significant feature or create new application

## 5. Phase 3: Scaffolding the "Kata Runner"

### 5.1 Purpose and Goals
- Provide structured environment for Kata completion
- Enable HTML, CSS, and JavaScript code practice
- Display instructions, hints, and solutions
- Show code output and preview in a secure environment
- Track user progress (future feature)
- AI-powered assistance and personalized feedback (future enhancement)

### 5.2 Core Features
- Kata display area
- Code editor area
- Output/Console display
- Preview area (served via local web server)
- Control buttons
- Progress tracking (future)
- AI-assisted learning features (future)

### 5.3 Technical Approach

#### 5.3.1 Initial Simple Approach (Client-Side)

**Important: Local Development Setup**
The Kata Runner requires a local web server to function correctly. This is because:
1. Browser security restrictions prevent `file:///` protocol from accessing local files
2. Iframe interactions require same-origin policy compliance
3. Local file system access is restricted for security

**Setup Requirements:**
```bash
# Example using Python's built-in server
python -m http.server 8000

# Example using Node.js http-server
npx http-server -p 8000
```

Access the Kata Runner via `http://localhost:8000/kata-runner.html`

**Kata Data Structure:**
```javascript
// Kata Definitions Structure
const KATA_DATA = {
    whiteBelt: [
        {
            id: 'wb_html_1',
            title: 'HTML Tag Identification',
            description: 'Identify 5 HTML tags and explain their purpose',
            starterCode: '',
            solution: '',
            type: 'conceptual_html_comment',
            hints: ['Look for semantic HTML elements', 'Consider form elements'],
            validationRules: [] // Future AI validation rules
        }
        // More katas...
    ]
    // More belts...
};
```

#### 5.3.2 Advanced Features (Future)
- Backend integration with Firebase
- User accounts and progress tracking
- AI-Enhanced Features:
  - Automated code review and feedback
  - Personalized learning paths
  - Natural language explanations of code concepts
  - Dynamic hint generation based on common mistakes
  - Real-time code suggestions
  - Intelligent error detection and correction guidance
- Progress tracking with AI-powered insights
- Automated testing with smart validation
- Secure code sandboxing

### 5.4 Technology Stack
- Frontend:
  - HTML, CSS (Tailwind), JavaScript
  - Local web server for development
  - Code Editor: CodeMirror/Monaco (future enhancement)
- Backend:
  - Firebase (future)
  - AI service integration (future)
- Development Tools:
  - Local web server (required)
  - Version control
  - Testing framework

### 5.5 HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Kata Runner - Financial Planner</title>
    <link rel="stylesheet" href="kata-runner-styles.css">
</head>
<body>
    <div class="kata-runner-container">
        <!-- Header and Navigation -->
        <header class="kata-runner-header">
            <h1>Kata Challenge: <span id="kata-belt-level">White Belt</span></h1>
            <nav id="kata-navigation"></nav>
        </header>

        <!-- Main Content -->
        <main class="kata-main-content">
            <!-- Instructions Panel -->
            <section class="kata-instructions-panel">
                <h2 id="kata-title">Kata Title Will Appear Here</h2>
                <div id="kata-description">Kata description and instructions...</div>
                <div id="kata-hints" class="hidden"></div>
                <div id="ai-suggestions" class="hidden">
                    <!-- Future AI-powered suggestions will appear here -->
                </div>
            </section>

            <!-- Workspace Panel -->
            <section class="kata-workspace-panel">
                <div class="code-editor-area">
                    <label for="user-code-input">Your Code:</label>
                    <textarea id="user-code-input" rows="20" spellcheck="false"></textarea>
                </div>
                <div class="kata-controls-area">
                    <button id="run-code-btn">Run Code</button>
                    <button id="reset-kata-btn">Reset</button>
                    <button id="show-solution-btn">Show Solution</button>
                    <button id="get-hint-btn">Get Hint</button>
                    <button id="ai-help-btn" class="hidden">AI Help</button>
                </div>
                <div class="output-console-area">
                    <label for="kata-output-display">Output / Console:</label>
                    <pre id="kata-output-display"></pre>
                </div>
            </section>

            <!-- Preview Panel -->
            <aside class="kata-preview-panel">
                <h3>Live Preview / Application Context</h3>
                <iframe id="app-preview-iframe" 
                        src="financial-planner.html"
                        title="App Preview"></iframe>
            </aside>
        </main>

        <footer class="kata-runner-footer">
            <p>Financial Planner Kata System</p>
        </footer>
    </div>

    <!-- Scripts with defer to ensure DOM is loaded -->
    <script src="kata-definitions.js" defer></script>
    <script src="kata-runner.js" defer></script>
</body>
</html>
```

### 5.6 JavaScript Implementation
```javascript
// kata-runner.js
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element References
    const elements = {
        beltLevel: document.getElementById('kata-belt-level'),
        kataTitle: document.getElementById('kata-title'),
        kataDescription: document.getElementById('kata-description'),
        userCodeInput: document.getElementById('user-code-input'),
        outputDisplay: document.getElementById('kata-output-display'),
        previewIframe: document.getElementById('app-preview-iframe'),
        runCodeBtn: document.getElementById('run-code-btn'),
        resetKataBtn: document.getElementById('reset-kata-btn'),
        showSolutionBtn: document.getElementById('show-solution-btn'),
        getHintBtn: document.getElementById('get-hint-btn'),
        aiHelpBtn: document.getElementById('ai-help-btn')
    };

    let currentBeltName = 'whiteBelt';
    let currentKataIndex = 0;
    let currentKata = null;

    function checkServerAvailability() {
        if (window.location.protocol === 'file:') {
            alert('Error: Kata Runner must be served through a local web server.\n' +
                  'Please use http://localhost:PORT/ to access this page.');
            disableInteraction();
            return false;
        }
        return true;
    }

    function loadKata(beltName, kataIndex) {
        if (!checkServerAvailability()) return;

        if (!KATA_DATA?.[beltName]?.[kataIndex]) {
            elements.kataTitle.textContent = "Kata not found!";
            elements.kataDescription.textContent = "Please select a valid Kata.";
            disableInteraction();
            return;
        }

        currentKata = KATA_DATA[beltName][kataIndex];
        updateUI();
    }

    function updateUI() {
        elements.beltLevel.textContent = formatBeltName(currentBeltName);
        elements.kataTitle.textContent = currentKata.title;
        elements.kataDescription.innerHTML = currentKata.description;
        elements.userCodeInput.value = currentKata.starterCode || '';
        elements.outputDisplay.textContent = '';
        
        // Enable/disable buttons based on kata state
        elements.runCodeBtn.disabled = !currentKata;
        elements.resetKataBtn.disabled = !currentKata;
        elements.showSolutionBtn.disabled = !currentKata;
        elements.getHintBtn.disabled = !currentKata?.hints?.length;
    }

    async function runUserCode() {
        if (!currentKata) return;

        const userCode = elements.userCodeInput.value;
        elements.outputDisplay.textContent = '';

        try {
            switch (currentKata.type) {
                case 'js_dom_iframe':
                    await runCodeInIframe(userCode);
                    break;
                case 'js_logic_output':
                    await runLogicCode(userCode);
                    break;
                case 'html_preview':
                    await updatePreview(userCode);
                    break;
                default:
                    elements.outputDisplay.textContent = 
                        `Kata type "${currentKata.type}" not implemented.`;
            }
        } catch (error) {
            elements.outputDisplay.textContent = `Error: ${error.message}\n${error.stack}`;
        }
    }

    // Event Listeners
    elements.runCodeBtn.addEventListener('click', runUserCode);
    elements.resetKataBtn.addEventListener('click', resetKata);
    elements.showSolutionBtn.addEventListener('click', showSolution);
    elements.getHintBtn.addEventListener('click', showNextHint);

    // Initial Setup
    if (checkServerAvailability()) {
        loadKata(currentBeltName, currentKataIndex);
    }
});
```

## 6. Development and Iteration Strategy
1. Curriculum Finalization
2. White Belt Kata Development
3. Basic Runner Implementation
4. Core Logic Development
5. Iterative Enhancement
6. Progressive Belt Development
7. UX Refinement
8. Automated Testing Integration

## 7. Potential Challenges and Considerations
- Automated Kata validation complexity
- Maintaining engaging content
- Scope management
- Security considerations
- User motivation
- Code maintenance

## 8. Future Enhancements/Vision
- User accounts and progress tracking
- Gamification features
- Community features
- Advanced code editor
- Additional kata types
- Learning resource integration
- Instructor dashboard 