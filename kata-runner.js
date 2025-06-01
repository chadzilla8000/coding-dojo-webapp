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
const disciplineSelectEl = document.getElementById('discipline-select');
const currentBeltEl = document.getElementById('current-belt');
const trainingModeTextEl = document.getElementById('training-mode-text');
const trainingStatusIconEl = document.getElementById('training-status-icon');

// Current discipline and training state
let currentDiscipline = null;
let availableKatasByDiscipline = {};

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
    
    // Organize katas by discipline for the new system
    organizeKatasByDiscipline();
}

// Organize katas into discipline categories
function organizeKatasByDiscipline() {
    availableKatasByDiscipline = {
        'kata-forms': [],
        'kata-challenge': [],
        'kata-sparring': [],
        'level-up-test': [],
        'board-breaking': [],
        'sparring-practice': [],
        'meditation': []
    };
    
    // Categorize existing katas based on their properties
    katas.forEach(kata => {
        // Default to kata-forms for basic katas
        let discipline = 'kata-forms';
        
        // Categorize based on kata properties
        if (kata.difficulty === 'challenge' || kata.type === 'challenge') {
            discipline = 'kata-challenge';
        } else if (kata.type === 'sparring' || kata.category === 'sparring') {
            discipline = 'kata-sparring';
        } else if (kata.isLevelUpTest || kata.category === 'test') {
            discipline = 'level-up-test';
        } else if (kata.type === 'precision' || kata.category === 'breaking') {
            discipline = 'board-breaking';
        } else if (kata.type === 'combat' || kata.category === 'combat') {
            discipline = 'sparring-practice';
        } else if (kata.type === 'quiz' || kata.category === 'mental') {
            discipline = 'meditation';
        }
        
        availableKatasByDiscipline[discipline].push(kata);
    });
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
    
    // Update dojo animation character belt
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        dojoAnimator.setBelt(currentBelt);
    }
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
    // Set up discipline selector event listener
    if (disciplineSelectEl && !disciplineSelectEl.onchange) {
        disciplineSelectEl.onchange = function() {
            const selectedDiscipline = this.value;
            handleDisciplineSelection(selectedDiscipline);
        };
    }
    
    // Set up kata selector event listener
    if (kataSelectEl && !kataSelectEl.onchange) {
        kataSelectEl.onchange = function() {
            const selectedKataId = this.value;
            if (selectedKataId) {
                const selectedKata = katas.find(k => k.id === selectedKataId);
                if (selectedKata) loadKata(selectedKata);
            } else {
                // Reset if default option is selected
                resetKataDisplay();
            }
        };
    }
    
    // Initially populate with all katas (until discipline is selected)
    populateKataSelector(katas);
}

function handleDisciplineSelection(discipline) {
    currentDiscipline = discipline;
    
    if (!discipline) {
        // Reset to default state
        updateTrainingDisplay('Awaiting Discipline Selection...', '🧘');
        populateKataSelector(katas);
        resetKataDisplay();
        
        // Set animation to idle
        if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
            dojoAnimator.setAnimation('idle');
        }
        return;
    }
    
    // Update training display based on discipline
    updateTrainingDisplayForDiscipline(discipline);
    
    // Filter and populate katas for this discipline
    const disciplineKatas = availableKatasByDiscipline[discipline] || [];
    populateKataSelector(disciplineKatas);
    
    // Set appropriate animation
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        const animationMap = {
            'kata-forms': 'kata',
            'kata-challenge': 'kata-challenge',
            'kata-sparring': 'kata-sparring',
            'level-up-test': 'level-up-test',
            'board-breaking': 'board-breaking',
            'sparring-practice': 'sparring',
            'meditation': 'meditation'
        };
        dojoAnimator.setAnimation(animationMap[discipline] || 'idle');
    }
}

function updateTrainingDisplayForDiscipline(discipline) {
    const disciplineInfo = {
        'kata-forms': { text: 'Kata Forms - Basic Practice', icon: '🥋' },
        'kata-challenge': { text: 'Kata Challenge - Timed Training', icon: '⚡' },
        'kata-sparring': { text: 'Kata Sparring - Competitive Practice', icon: '⚔️' },
        'level-up-test': { text: 'Level Up Test - Belt Advancement', icon: '🎯' },
        'board-breaking': { text: 'Board Breaking - Precision Training', icon: '🪵' },
        'sparring-practice': { text: 'Sparring Practice - Combat Training', icon: '🥊' },
        'meditation': { text: 'Meditation - Mental Training', icon: '🧘‍♂️' }
    };
    
    const info = disciplineInfo[discipline] || { text: 'Unknown Discipline', icon: '❓' };
    updateTrainingDisplay(info.text, info.icon);
}

function updateTrainingDisplay(text, icon) {
    if (trainingModeTextEl) trainingModeTextEl.textContent = text;
    if (trainingStatusIconEl) trainingStatusIconEl.textContent = icon;
}

function populateKataSelector(kataList) {
    if (!kataSelectEl) return;
    
    // Clear all options except the first default one
    while (kataSelectEl.options.length > 1) {
        kataSelectEl.remove(1);
    }
    
    // Add kata options to the select dropdown
    kataList.forEach(kata => {
        const option = document.createElement('option');
        option.value = kata.id;
        option.textContent = kata.title + (progress.completedKatas && progress.completedKatas.includes(kata.id) ? ' ✅' : '');
        kataSelectEl.appendChild(option);
    });
    
    // Update the label based on available katas
    const label = kataSelectEl.previousElementSibling;
    if (label && kataList.length === 0) {
        label.textContent = 'No challenges available for this discipline';
    } else if (label) {
        label.textContent = 'Available Challenges:';
    }
}

function resetKataDisplay() {
    instructionTitleEl.textContent = 'Kata Title:';
    instructionDescEl.textContent = currentDiscipline ? 
        'Select a challenge from the available options...' : 
        'Select a discipline to begin your training...';
    userCodeEl.value = '';
    outputEl.textContent = '';
    currentKata = null;
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
    
    // Smart animation based on current discipline
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator && currentDiscipline) {
        const animationMap = {
            'kata-forms': 'kata',
            'kata-challenge': 'kata-challenge',
            'kata-sparring': 'kata-sparring',
            'level-up-test': 'level-up-test',
            'board-breaking': 'board-breaking',
            'sparring-practice': 'sparring',
            'meditation': 'meditation'
        };
        dojoAnimator.setAnimation(animationMap[currentDiscipline] || 'kata');
    }
    
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
    
    // Smart animation based on current discipline and result
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        if (currentDiscipline === 'level-up-test') {
            dojoAnimator.setAnimation('level-up-test');
        } else if (currentDiscipline === 'board-breaking') {
            dojoAnimator.setAnimation('board-breaking');
        } else {
            // Default to board-breaking for testing/checking
            dojoAnimator.setAnimation('board-breaking');
        }
    }
    
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