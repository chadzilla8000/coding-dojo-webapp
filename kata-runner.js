let katas = [];
let progress = {};
let currentKata = null;
let currentBelt = 'white';

// API base URL - adjust this based on your server setup
const API_BASE_URL = 'http://localhost:4000';

const instructionTitleEl = document.getElementById('kata-title');
const instructionDescEl = document.getElementById('kata-description');
const userCodeEl = document.getElementById('user-code');
const outputEl = document.getElementById('kata-output');
const appIframe = document.getElementById('app-iframe');
const kataSelectEl = document.getElementById('kata-select');
const currentBeltEl = document.getElementById('current-belt');

async function fetchKatas() {
    try {
        console.log('Fetching kata data...');
        // Use a timeout to prevent hanging on slow connections
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        try {
            const res = await fetch(`${API_BASE_URL}/api/katas`, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            // Check if the response is ok before trying to parse JSON
            if (res.ok) {
                try {
                    const text = await res.text(); // Get response as text first
                    if (text.trim() === '') {
                        // Empty response
                        console.log('Empty response from API');
                        useMockKataData();
                    } else {
                        // Parse the text as JSON
                        katas = JSON.parse(text);
                        console.log('Kata data loaded from API');
                    }
                } catch (jsonError) {
                    console.error('Error parsing katas JSON:', jsonError);
                    useMockKataData();
                }
            } else {
                console.log('API returned error status:', res.status);
                useMockKataData();
            }
        } catch (fetchError) {
            clearTimeout(timeoutId);
            console.error('Fetch operation failed:', fetchError);
            useMockKataData();
        }
    } catch (error) {
        console.error('Error in fetchKatas:', error);
        useMockKataData();
    }
    
    // Render the kata list with whatever data we have
    renderKataList();
}

function useMockKataData() {
    console.log('Using mock kata data');
    katas = [
        {
            "id": "wb-js-1",
            "title": "Variables in JavaScript",
            "description": "What is the correct way to declare a variable in JavaScript?",
            "type": "quiz",
            "options": ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
            "solution": "All of the above",
            "belt": "white"
        },
        {
            "id": "wb-html-1",
            "title": "Basic HTML Structure",
            "description": "Write the HTML code for a heading that says 'Welcome to the Dojo!'",
            "type": "code",
            "solution": "<h1>Welcome to the Dojo!</h1>",
            "belt": "white"
        },
        {
            "id": "wb-css-1",
            "title": "CSS Color Challenge",
            "description": "What CSS rule would you use to make text red?",
            "type": "quiz",
            "options": ["color: blue;", "font-color: red;", "color: red;", "text-color: red;"],
            "solution": "color: red;",
            "belt": "white"
        }
    ];
}

async function fetchProgress() {
    try {
        console.log('Fetching progress data...');
        // Use a timeout to prevent hanging on slow connections
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        try {
            const res = await fetch(`${API_BASE_URL}/api/progress`, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            // Check if the response is ok before trying to parse JSON
            if (res.ok) {
                try {
                    const text = await res.text(); // Get response as text first
                    if (text.trim() === '') {
                        // Empty response
                        console.log('Empty response from API');
                        useMockProgressData();
                    } else {
                        // Parse the text as JSON
                        progress = JSON.parse(text);
                        console.log('Progress data loaded from API');
                    }
                } catch (jsonError) {
                    console.error('Error parsing progress JSON:', jsonError);
                    useMockProgressData();
                }
            } else {
                console.log('API returned error status:', res.status);
                useMockProgressData();
            }
        } catch (fetchError) {
            clearTimeout(timeoutId);
            console.error('Fetch operation failed:', fetchError);
            useMockProgressData();
        }
    } catch (error) {
        console.error('Error in fetchProgress:', error);
        useMockProgressData();
    }
    
    // Update UI with progress data
    updateProgressUI();
}

function useMockProgressData() {
    console.log('Using mock progress data');
    progress = {
        "username": "sample_user",
        "dateStarted": "2025-05-31T22:34:46-04:00",
        "currentBelt": "white",
        "completedKatas": [],
        "kataHistory": []
    };
}

function updateProgressUI() {
    currentBelt = progress.currentBelt || 'white';
    currentBeltEl.textContent = capitalize(currentBelt) + ' Belt';
    updateBeltIcon(currentBelt);
    renderBeltProgress();
    renderBeltWarning();
    renderKataHistory();
}

function renderBeltProgress() {
    // Use belt-progress-ladder instead of belt-progress to match the HTML
    const beltProgressEl = document.querySelector('.belt-progress-ladder');
    if (!beltProgressEl) {
        console.warn('Belt progress element not found in the DOM');
        return; // Exit the function if the element doesn't exist
    }
    
    const BELTS = [
        'white', 'yellow', 'green', 'blue', 'brown', 'red', 'black-recommended', 'black'
    ];
    const beltLabels = {
        'white': 'White', 'yellow': 'Yellow', 'green': 'Green', 'blue': 'Blue',
        'brown': 'Brown', 'red': 'Red', 'black-recommended': 'Black Rec.', 'black': 'Black'
    };
    
    // Clear existing content and rebuild
    beltProgressEl.innerHTML = '';
    
    BELTS.forEach((belt, index) => {
        const active = (belt === currentBelt) ? 'active-belt' : '';
        const beltDiv = document.createElement('div');
        beltDiv.className = `belt ${belt.replace('-recommended', '')} ${active}`;
        beltDiv.title = `${beltLabels[belt]} Belt`;
        beltDiv.textContent = beltLabels[belt];
        beltProgressEl.appendChild(beltDiv);
        
        // Add arrow between belts (except after the last one)
        if (index < BELTS.length - 1) {
            const arrow = document.createElement('span');
            arrow.style.fontWeight = 'bold';
            arrow.textContent = ' → ';
            beltProgressEl.appendChild(arrow);
        }
    });
}

function renderBeltWarning() {
    const warningEl = document.getElementById('belt-warnings');
    if (!warningEl) {
        console.warn('Belt warnings element not found in the DOM');
        return;
    }
    warningEl.innerHTML = ''; // Clear existing warnings
    if (progress && progress.warnings && progress.warnings.length > 0) {
        warningEl.innerHTML = `<div class="belt-warning-msg">⚠️ ${progress.warnings.join('<br>')}</div>`;
    } else {
        warningEl.innerHTML = '';
    }
}

function renderKataHistory() {
    const historyListEl = document.getElementById('kata-history-list');
    if (!historyListEl) {
        console.warn('Kata history list element not found in the DOM');
        return;
    }
    historyListEl.innerHTML = ''; // Clear existing history
    if (!progress || !progress.kataHistory || progress.kataHistory.length === 0) {
        historyListEl.innerHTML = '<li>No kata attempts yet.</li>';
        return;
    }
    historyListEl.innerHTML = progress.kataHistory.slice().reverse().map(attempt => {
        const date = new Date(attempt.timestamp).toLocaleString();
        const resultIcon = attempt.result === 'pass' ? '✅' : '❌';
        return `<li>${date}: <strong>${attempt.kataId}</strong> [${attempt.belt || ''}] - <span style="color:${attempt.result==='pass'?'green':'red'}">${attempt.result.toUpperCase()}</span> ${resultIcon}</li>`;
    }).join('');
}

function updateBeltIcon(belt) {
    const beltIconEl = document.getElementById('belt-icon');
    if (!beltIconEl) {
        console.warn('Belt icon element not found in the DOM');
        return;
    }
    const beltMap = {
        white: 'white',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
        brown: 'brown',
        red: 'red',
        black: 'black',
        'black-recommended': 'black'
    };
    const file = beltMap[belt.toLowerCase()] || 'white';
    beltIconEl.src = `belts/${file}.svg`;
    beltIconEl.alt = capitalize(belt) + ' Belt';
}

function renderKataList() {
    const kataSelectEl = document.getElementById('kata-select');
    if (!kataSelectEl) {
        console.warn('Kata select element not found in the DOM');
        return;
    }
    // Clear all options except the first default one
    while (kataSelectEl.options.length > 1) {
        kataSelectEl.remove(1);
    }
    
    // Add kata options to the select dropdown
    katas.forEach(kata => {
        const option = document.createElement('option');
        option.value = kata.id;
        option.textContent = kata.title + (progress.completedKatas && progress.completedKatas.includes(kata.id) ? ' ✅' : '');
        kataSelectEl.appendChild(option);
    });
    
    // Add change event listener to the select dropdown
    kataSelectEl.onchange = function() {
        const selectedKataId = this.value;
        if (selectedKataId) {
            const selectedKata = katas.find(k => k.id === selectedKataId);
            if (selectedKata) loadKata(selectedKata);
        } else {
            // Reset if default option is selected
            instructionTitleEl.textContent = 'Kata Title:';
            instructionDescEl.textContent = 'Select a kata to begin your training...';
            userCodeEl.value = '';
            outputEl.textContent = '';
            currentKata = null;
        }
    };
}

function loadKata(kata) {
    currentKata = kata;
    instructionTitleEl.textContent = kata.title;
    instructionDescEl.textContent = kata.description;
    userCodeEl.value = kata.starterCode || '';
    outputEl.textContent = '';
}

document.getElementById('run-kata').addEventListener('click', () => {
    const code = userCodeEl.value;
    outputEl.textContent = '';
    if (!currentKata) return;
    if (currentKata.type === 'js_dom_iframe') {
        try {
            const iframeWindow = appIframe.contentWindow;
            iframeWindow.eval(code);
            outputEl.textContent = 'Code executed in iframe.';
        } catch (e) {
            outputEl.textContent = `Error: ${e.message}`;
        }
    } else if (currentKata.type === 'js_logic') {
        try {
            outputEl.textContent = `Simulating run for JS logic. Output would appear here.`;
        } catch (e) {
            outputEl.textContent = `Error: ${e.message}`;
        }
    } else {
        outputEl.textContent = "Run functionality for this Kata type not implemented yet. Please check instructions for manual steps.";
    }
});

document.getElementById('check-kata').addEventListener('click', async () => {
    if (!currentKata) return;
    const userAnswer = userCodeEl.value;
    // For now, let the server decide pass/fail; here, demo: pass if answer matches solution
    const isPass = (currentKata.solution && userAnswer.trim() === currentKata.solution.trim());
    const result = isPass ? 'pass' : 'fail';
    
    try {
        console.log('Submitting kata solution...');
        // Use a timeout to prevent hanging on slow connections
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        try {
            const res = await fetch(`${API_BASE_URL}/api/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ kataId: currentKata.id, answer: userAnswer, result, belt: currentKata.belt }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            if (res.ok) {
                try {
                    const text = await res.text();
                    if (text.trim() === '') {
                        handleOfflineSubmission(isPass, result);
                    } else {
                        const data = JSON.parse(text);
                        outputEl.textContent = JSON.stringify(data, null, 2);
                        console.log('Kata submission processed by API');
                    }
                } catch (jsonError) {
                    console.error('Error parsing submission response:', jsonError);
                    handleOfflineSubmission(isPass, result);
                }
            } else {
                console.log('API returned error status:', res.status);
                handleOfflineSubmission(isPass, result);
            }
        } catch (fetchError) {
            clearTimeout(timeoutId);
            console.error('Fetch operation failed:', fetchError);
            handleOfflineSubmission(isPass, result);
        }
    } catch (error) {
        console.error('Error in kata submission:', error);
        handleOfflineSubmission(isPass, result);
    }
    
    await fetchProgress(); // Refresh UI with updated belt, warnings, and history
});

function handleOfflineSubmission(isPass, result) {
    console.log('Using offline submission handling');
    const message = isPass ? 'Correct! Your solution matches the expected output.' : 'Incorrect. Try again.';
    outputEl.textContent = message;
    
    // Update local progress data
    if (isPass && currentKata && !progress.completedKatas.includes(currentKata.id)) {
        progress.completedKatas.push(currentKata.id);
        progress.kataHistory = progress.kataHistory || [];
        progress.kataHistory.push({
            kataId: currentKata.id,
            timestamp: new Date().toISOString(),
            result: result,
            belt: currentKata.belt
        });
    }
}

document.getElementById('reset-kata').addEventListener('click', () => {
    if (currentKata) userCodeEl.value = currentKata.starterCode || '';
    outputEl.textContent = '';
});

document.getElementById('show-solution').addEventListener('click', () => {
    if (currentKata) outputEl.textContent = currentKata.solution;
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initial load
(async function() {
    await fetchProgress();
    await fetchKatas();
    if (katas.length > 0) loadKata(katas[0]);
})();

document.getElementById('run-kata').addEventListener('click', () => {
    const code = userCodeEl.value;
    outputEl.textContent = ''; // Clear previous output

    if (currentKata.type === 'js_dom_iframe') {
        try {
            // Example: trying to run JS that affects the iframe
            // This is tricky due to cross-origin issues if iframe src is different domain
            // If same origin, you can access contentWindow
            const iframeWindow = appIframe.contentWindow;
            iframeWindow.eval(code); // Simplified, use with caution
            outputEl.textContent = 'Code executed in iframe.';
        } catch (e) {
            outputEl.textContent = `Error: ${e.message}`;
        }
    } else if (currentKata.type === 'js_logic') {
        // For Katas that are pure JS logic, not DOM related
        try {
            // May need to provide some context or helper functions
            // const result = new Function(code)(); // or eval(code)
            // outputEl.textContent = `Result: ${result}`;
             outputEl.textContent = `Simulating run for JS logic. Output would appear here.`;
        } catch (e) {
             outputEl.textContent = `Error: ${e.message}`;
        }
    } else {
        outputEl.textContent = "Run functionality for this Kata type not implemented yet. Please check instructions for manual steps.";
    }
});

// TODO: Implement nextKata, prevKata, checkKata (manual first), showSolution

// Initial load (example)
// currentKata = katas.whiteBelt[0]; // Or load first incomplete kata
// loadKata(currentBelt, currentKata.id);