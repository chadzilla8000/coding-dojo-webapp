# How to Build Your Dojo App

## Table of Contents

### 🏗️ **Project Foundation**
1. [Stack](#stack)
2. [Core Features](#core-features)
3. [Recommended Next Steps](#recommended-next-steps)
    - [Back-End Setup](#back-end-setup)
    - [Front-End Kata Runner](#front-end-kata-runner)
    - [Data Model](#data-model)
    - [Initial Kata/Quiz Content](#initial-kataquiz-content)
    - [Belt Advancement Logic](#belt-advancement-logic)

### 🎨 **User Interface & Experience**
4. [Enhanced Dojo Animation System](#enhanced-dojo-animation-system)
    - [Overview](#enhanced-animation-overview)
    - [Smart Discipline Selection](#smart-discipline-selection)
    - [Dynamic Training Display](#dynamic-training-display)
    - [Event-Driven Animation System](#event-driven-animation-system)
    - [Enhanced Character Animations](#enhanced-character-animations)
    - [Special Club System](#special-club-system)
    - [Technical Implementation](#enhanced-technical-implementation)
    - [File Structure](#enhanced-file-structure)
    - [Usage Examples](#enhanced-usage-examples)

### 🏯 **Japanese Dojo Environment & Pixel Art System**
5. [Japanese Dojo Environment & Character Animation](#japanese-dojo-environment--character-animation)
    - [Environment Overview](#environment-overview)
    - [Traditional Japanese Elements](#traditional-japanese-elements)
    - [Character Animation System](#character-animation-system)
    - [Pixel Art Drawing Guide](#pixel-art-drawing-guide)
    - [Animation State Management](#animation-state-management)
    - [Visual Effects & Special Elements](#visual-effects--special-elements)
    - [Customization & Prompting Guide](#customization--prompting-guide)
    - [Technical Implementation Details](#technical-implementation-details)
    - [Future Enhancement Roadmap](#future-enhancement-roadmap)

### 🥋 **Belt System & Progression**
6. [Belt Progression & Dojo Logic](#belt-progression--dojo-logic)
    - [Overview](#overview)
    - [Kata Attempt Tracking](#kata-attempt-tracking)
    - [Advancement & Demotion Rules](#advancement--demotion-rules)
    - [Example Rules](#example-rules)
    - [Belt Calculation](#belt-calculation)
    - [Benefits](#benefits)
    - [Belt Progression Thresholds & Rules](#belt-progression-thresholds--rules)
    - [Kata History Data Model](#kata-history-data-model)
    - [Back-End Implementation: Belt Calculation & Data Flow](#back-end-implementation-belt-calculation--data-flow)

### 🔧 **Technical Documentation**
7. [Back-End API Documentation](#back-end-api-documentation)
    - [Overview](#overview-1)
    - [File Structure](#file-structure)
    - [Dependencies](#dependencies)
    - [API Endpoints](#api-endpoints)

8. [Local & Remote Server Setup](#local--remote-server-setup)
    - [Quick Start (Local Development)](#quick-start-local-development)
    - [How Data is Injected in index.html](#how-data-is-injected-in-indexhtml)
    - [Production & Migration Notes](#production--migration-notes)

### 📋 **Project Management**
9. [Session Review & Key Notes](#session-review--key-notes)
    - [Overview](#overview-2)
    - [Belt Progression & Data Flow](#belt-progression--data-flow)
    - [Front-End & Back-End Integration](#front-end--back-end-integration)
    - [Running & Deploying the App](#running--deploying-the-app)
    - [Lessons & Next Steps](#lessons--next-steps)

10. [Technical Deployment & Migration](#technical-deployment--migration)

11. [Development Logs](#development-logs)
    - [December 19, 2024 - Japanese Dojo Environment Documentation](#december-19-2024--japanese-dojo-environment-documentation)
    - [June 1, 2025 - 3:30 AM: Enhanced Animation System with Smart Discipline Selection](#june-1-2025--330-am-enhanced-animation-system-with-smart-discipline-selection)
    - [June 1, 2025 - 2:00 AM: Dojo Animation System Implementation](#june-1-2025--200-am-dojo-animation-system-implementation)
    - [May 31, 2025 - 11:30 PM: Fixed Kata Selection Functionality](#may-31-2025--1130-pm-fixed-kata-selection-functionality)

## Stack
- **Front-End:** HTML/CSS (possibly Tailwind), Vanilla JS or a framework (React/Vue, optional)
- **Back-End:** Node.js + Express (like `finances`)
- **Data:** JSON, local file, or a simple DB (no AI, no Firebase unless you want it)
- **API:** REST endpoints for katas, user progress, belt status, etc.

## Core Features
- **User Progression:** Track which katas/tests are completed, current belt, etc.
- **Kata Runner:** UI to view, attempt, and submit katas/tests.
- **Dojo Animation System:** Interactive pixel-art character with belt progression and training animations.
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

## Enhanced Dojo Animation System

### Enhanced Animation Overview
The Enhanced Dojo Animation System represents a complete evolution of the martial arts coding experience. This intelligent, event-driven system automatically adapts to student choices and creates an immersive training environment that responds dynamically to discipline selection and belt progression.

**Revolutionary Features:**
- **Smart Discipline Selection:** 7 distinct martial arts training disciplines with automatic animation mapping
- **Event-Driven Intelligence:** No manual animation controls - everything responds to student actions
- **Dynamic Character Evolution:** Advanced belt progression with special uniforms and auras
- **Special Club System:** Achievement badges that appear on character for exceptional performance
- **Immersive Training Display:** Real-time status showing exactly what the student is practicing
- **Enhanced Visual Effects:** Particle systems, auras, and special animations for each discipline

### Smart Discipline Selection

**The New Training Philosophy:**
Instead of manual animation selection, students now choose their **training discipline**, which automatically triggers the appropriate character animations and training environment.

**Available Disciplines:**

| Discipline | Icon | Description | Animation Type | Special Effects |
|------------|------|-------------|----------------|-----------------|
| **Kata Forms** | 🥋 | Basic Practice | Classic kata movements | Motion trails |
| **Kata Challenge** | ⚡ | Timed Challenges | Intense, rapid movements | Energy effects, intensity aura |
| **Kata Sparring** | ⚔️ | Competitive Practice | Defensive/offensive poses | Shadow opponent, combat effects |
| **Level Up Test** | 🎯 | Belt Advancement | Focused, precise movements | Concentration aura, steady form |
| **Board Breaking** | 🪵 | Precision Training | Powerful strike sequences | Impact effects, board destruction |
| **Sparring Practice** | 🥊 | Combat Training | Dynamic combat movements | Dual character interaction |
| **Meditation** | 🧘‍♂️ | Mental Training | Subtle breathing, lotus position | Floating particles, zen effects |

**Smart Filtering:**
- Katas are automatically categorized by discipline type
- Available challenges update based on selected discipline
- Character animation changes immediately upon discipline selection

### Dynamic Training Display

**Real-Time Status System:**
```html
<div class="training-status">
    <label>Current Training:</label>
    <div class="training-display">
        <span id="training-mode-text">Kata Challenge - Timed Training</span>
        <span id="training-status-icon" class="status-icon">⚡</span>
    </div>
</div>
```

**Features:**
- **Animated Status Icons:** Pulse animation shows active training
- **Descriptive Text:** Clear indication of current discipline
- **Automatic Updates:** Changes instantly when discipline is selected
- **Visual Feedback:** Color-coded status based on training intensity

### Event-Driven Animation System

**Intelligent Animation Mapping:**
```javascript
const animationMap = {
    'kata-forms': 'kata',
    'kata-challenge': 'kata-challenge',
    'kata-sparring': 'kata-sparring',
    'level-up-test': 'level-up-test',
    'board-breaking': 'board-breaking',
    'sparring-practice': 'sparring',
    'meditation': 'meditation'
};
```

**Event Flow:**
1. **Discipline Selection** → Automatic animation change
2. **Run Kata Button** → Animation based on current discipline
3. **Check Kata Button** → Testing animation (board-breaking or level-up-test)
4. **Belt Advancement** → Character appearance evolution

**No Manual Controls:**
- Removed manual animation selector
- All animations triggered by meaningful user actions
- System intelligently chooses appropriate animation for context

### Enhanced Character Animations

**New Animation States:**

**Kata Challenge:**
- **Movement:** Intense, rapid kata forms with multiple opponent simulation
- **Effects:** Red energy lines radiating from character
- **Timing:** Faster frame rate for urgency
- **Visual:** Sweat effects, intensity aura

**Kata Sparring:**
- **Movement:** Defensive and offensive poses in sequence
- **Effects:** Semi-transparent shadow opponent appears
- **Interaction:** Character responds to "opponent" movements
- **Visual:** Combat stance variations, blocking motions

**Level Up Test:**
- **Movement:** Precise, controlled movements with perfect form
- **Effects:** Blue concentration aura with concentric circles
- **Timing:** Steady, measured pace
- **Visual:** Focused expression, minimal movement variation

**Deep Meditation:**
- **Movement:** Extremely subtle breathing motion
- **Effects:** Green floating particles around character
- **Environment:** Peaceful, zen-like atmosphere
- **Visual:** Lotus position, closed eyes, serene expression

**Celebration:**
- **Movement:** Energetic, joyful movements
- **Effects:** Colorful confetti falling from above
- **Timing:** Fast, celebratory pace
- **Visual:** Arms raised, jumping motions

### Special Club System

**Achievement Badges:**
```javascript
specialBadges: [
    { type: 'speed', color: '#fff176', description: 'Speed Demon' },
    { type: 'perfect', color: '#81c784', description: 'Perfectionist' },
    { type: 'streak', color: '#e57373', description: 'Streak Master' }
]
```

**Badge Types:**
- **⚡ Speed Demon:** Lightning bolt badge for fast completion times
- **⭐ Perfectionist:** Star badge for perfect scores
- **🔥 Streak Master:** Flame badge for consecutive wins

**Visual Integration:**
- Badges appear on character's uniform
- Stack vertically on right side of character
- Animated appearance when earned
- Persistent display during training sessions

**Character Style Evolution:**
```javascript
characterStyle: {
    giColor: 'white',           // 'white' or 'black' for advanced
    hasSpecialEffects: false,   // Auras and special effects
    auraColor: null,           // '#ffd700' for gold, '#ff6b6b' for red
    specialBadges: []          // Array of earned badges
}
```

### Enhanced Technical Implementation

**Enhanced Core Architecture:**
```javascript
class DojoAnimator {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.currentBelt = 'white';
        this.currentAnimation = 'idle';
        this.animationFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 8;
        
        // Enhanced character styling system
        this.characterStyle = {
            giColor: 'white',
            hasSpecialEffects: false,
            auraColor: null,
            specialBadges: []
        };
        
        // Expanded animation library
        this.animations = {
            'idle': { frames: 4, speed: 0.3 },
            'kata': { frames: 8, speed: 0.8 },
            'kata-challenge': { frames: 8, speed: 1.2 },
            'kata-sparring': { frames: 8, speed: 0.9 },
            'level-up-test': { frames: 6, speed: 0.6 },
            'board-breaking': { frames: 6, speed: 1.0 },
            'sparring': { frames: 8, speed: 1.0 },
            'meditation': { frames: 4, speed: 0.2 },
            'celebration': { frames: 8, speed: 2.0 }
        };
    }
}
```

**Enhanced Rendering Pipeline:**
1. **Background Rendering:** Traditional dojo environment with wooden floors and panels
2. **Special Effects (Behind):** Auras, particle systems, environmental effects
3. **Character Rendering:** Multi-layered sprite system with dynamic styling
4. **Animation State Management:** Intelligent frame-based animation with variable timing
5. **Special Effects (Front):** Achievement badges, impact effects, celebration confetti
6. **UI Integration:** Real-time status updates and discipline-based filtering

**Smart Integration Points:**
- **Discipline Selection:** `handleDisciplineSelection()` - Automatic animation mapping
- **Belt Progression:** `setBelt()` with character style evolution
- **Achievement System:** `addSpecialBadge()` - Visual badge integration
- **Event-Driven Triggers:** No manual controls, all animations contextual

### Enhanced Animation States

| Animation State | Discipline Trigger | Description | Frame Count | Special Effects |
|----------------|-------------------|-------------|-------------|-----------------|
| **Idle** | No discipline selected | Peaceful meditation stance | 4 frames | Gentle breathing motion |
| **Kata** | Kata Forms | Classic martial arts forms | 8 frames | Motion trails, stance changes |
| **Kata Challenge** | Kata Challenge | Intense rapid movements | 8 frames | Red energy lines, intensity aura |
| **Kata Sparring** | Kata Sparring | Combat poses with opponent | 8 frames | Shadow opponent, combat effects |
| **Level Up Test** | Level Up Test | Precise, controlled movements | 6 frames | Blue concentration aura, circles |
| **Board Breaking** | Board Breaking | Powerful strike sequences | 6 frames | Impact effects, board destruction |
| **Sparring** | Sparring Practice | Dynamic combat training | 8 frames | Dual character interaction |
| **Meditation** | Meditation | Subtle breathing, lotus position | 4 frames | Green floating particles |
| **Celebration** | Achievement unlock | Energetic victory movements | 8 frames | Colorful confetti effects |

**Enhanced Animation Timing:**
- **Variable Frame Delay:** Adaptive timing based on animation intensity
- **Smart Loop Behavior:** Context-aware cycling and transitions
- **Instant State Transitions:** Discipline-driven animation switching
- **Performance Optimization:** Efficient rendering with effect layering

### Enhanced Belt Integration

**Dynamic Character Evolution:**
```javascript
setBelt(beltLevel) {
    this.currentBelt = beltLevel;
    
    // Update character style based on belt progression
    if (beltLevel === 'black' || beltLevel === 'black-recommended') {
        this.characterStyle.giColor = 'black';
        this.characterStyle.hasSpecialEffects = true;
        this.characterStyle.auraColor = '#ffd700'; // Golden aura
    } else if (beltLevel === 'red') {
        this.characterStyle.hasSpecialEffects = true;
        this.characterStyle.auraColor = '#ff6b6b'; // Red aura
    }
    
    this.updateCharacterAppearance();
}
```

**Progressive Uniform System:**
- **White-Red Belts:** Traditional white gi with colored belt
- **Black Recommended:** Transition to black gi with special effects
- **Black Belt:** Full black gi with golden aura and special badges
- **Achievement Integration:** Badges appear based on performance clubs

**Smart Integration with Progress System:**
```javascript
// Enhanced automatic updates in kata-runner.js
function updateProgressUI() {
    currentBelt = progress.currentBelt || 'white';
    
    // Update dojo animation character with enhanced styling
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        dojoAnimator.setBelt(currentBelt);
        dojoAnimator.updateSpecialClubs(progress.specialClubs || []);
    }
}
```

### Enhanced File Structure

```
martial_arts/
├── dojo-animations.js     # Enhanced animation system (800+ lines)
│   ├── DojoAnimator class with character styling
│   ├── 9 distinct animation states
│   ├── Special effects rendering
│   ├── Achievement badge system
│   └── Dynamic character evolution
├── index.html            # Smart discipline selection interface
│   ├── Discipline selector dropdown
│   ├── Dynamic training status display
│   ├── Canvas container with enhanced styling
│   └── Filtered kata challenge selector
├── dojo-style.css        # Enhanced styling system (100+ lines)
│   ├── Training status animations
│   ├── Discipline selector styling
│   ├── Responsive canvas design
│   └── Achievement badge effects
└── kata-runner.js        # Smart event-driven integration (600+ lines)
    ├── Discipline selection handling
    ├── Automatic kata categorization
    ├── Event-driven animation triggers
    ├── Special club tracking system
    └── Dynamic UI updates
```

**Enhanced File Responsibilities:**
- **`dojo-animations.js`:** Complete animation engine with 9 states, special effects, and character evolution
- **`index.html`:** Smart discipline selection interface with dynamic training status
- **`dojo-style.css`:** Enhanced styling with animations, responsive design, and visual effects
- **`kata-runner.js`:** Intelligent event system with automatic discipline mapping and club tracking

### Enhanced Usage Examples

**Automatic System Initialization:**
```javascript
// Enhanced automatic initialization with character styling
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('dojo-canvas');
    if (canvas) {
        dojoAnimator = new DojoAnimator('dojo-canvas');
        console.log('Enhanced Dojo animation system loaded');
    }
});
```

**Smart Discipline-Driven Animation:**
```javascript
// No manual animation control needed - all automatic!
// Discipline selection triggers appropriate animation

function handleDisciplineSelection(discipline) {
    currentDiscipline = discipline;
    
    // Update training display
    updateTrainingDisplayForDiscipline(discipline);
    
    // Automatic animation mapping
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
```

**Enhanced Belt Progression with Character Evolution:**
```javascript
// Automatic belt updates with character styling
function updateProgressUI() {
    currentBelt = progress.currentBelt || 'white';
    
    // Enhanced character evolution
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        dojoAnimator.setBelt(currentBelt);
        
        // Add special clubs/badges if earned
        if (progress.specialClubs) {
            progress.specialClubs.forEach(club => {
                dojoAnimator.addSpecialBadge(club);
            });
        }
    }
}
```

**Smart Event-Driven Integration:**
```javascript
// Run kata - animation based on current discipline
document.getElementById('run-kata').addEventListener('click', () => {
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
});

// Check kata - smart testing animation
document.getElementById('check-kata').addEventListener('click', () => {
    if (typeof dojoAnimator !== 'undefined' && dojoAnimator) {
        if (currentDiscipline === 'level-up-test') {
            dojoAnimator.setAnimation('level-up-test');
        } else {
            dojoAnimator.setAnimation('board-breaking');
        }
    }
});
```

**Achievement System Integration:**
```javascript
// Automatic celebration when achievements are unlocked
function handleKataCompletion(result, completionTime, accuracy) {
    if (result === 'pass') {
        // Check for special achievements
        if (completionTime < 30) {
            dojoAnimator.addSpecialBadge({ type: 'speed', color: '#fff176' });
        }
        if (accuracy === 100) {
            dojoAnimator.addSpecialBadge({ type: 'perfect', color: '#81c784' });
        }
        
        // Trigger celebration animation
        dojoAnimator.setAnimation('celebration');
        
        // Return to discipline animation after celebration
        setTimeout(() => {
            const currentAnim = animationMap[currentDiscipline] || 'idle';
            dojoAnimator.setAnimation(currentAnim);
        }, 3000);
    }
}
```

**Performance Considerations:**
- **Canvas Optimization:** `imageSmoothingEnabled = false` for crisp pixel art
- **Frame Rate Control:** Configurable `frameDelay` for performance tuning
- **Memory Management:** Efficient rendering without memory leaks
- **Responsive Design:** Canvas scales appropriately on different screen sizes

---

## Japanese Dojo Environment & Character Animation

### Environment Overview

The Japanese Dojo Environment system creates an authentic, immersive martial arts training space using pixel art techniques. This comprehensive system combines traditional Japanese architectural elements with modern animation technology to provide a rich visual experience that responds to student actions and belt progression.

**Core Philosophy:**
- **Authentic Japanese Aesthetics:** Traditional dojo elements including wooden floors, tatami mats, and cultural artifacts
- **Responsive Environment:** Dynamic elements that react to character actions and training states
- **Cultural Immersion:** Authentic Japanese decorative elements that enhance the learning experience
- **Pixel Art Excellence:** Clean, scalable pixel art that maintains visual clarity at all sizes

### Traditional Japanese Elements

The dojo environment incorporates authentic Japanese cultural elements to create an immersive training atmosphere:

#### 🏯 **Architectural Elements**

**Wooden Floor System:**
```javascript
// Traditional wooden dojo floor with authentic grain patterns
drawDojoBackground() {
    // Wooden floor with realistic wood grain
    ctx.fillStyle = '#8d6e63';  // Traditional wood brown
    ctx.fillRect(0, this.canvas.height - 100, this.canvas.width, 100);
    
    // Floor planks with authentic spacing
    ctx.strokeStyle = '#5d4037';  // Darker wood grain
    ctx.lineWidth = 2;
    for (let i = 0; i < this.canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, this.canvas.height - 100);
        ctx.lineTo(i, this.canvas.height);
        ctx.stroke();
    }
}
```

**Wall Panel System:**
```javascript
// Traditional Japanese wall panels (Shoji-inspired)
drawWallPanels() {
    ctx.fillStyle = '#f5f2e9';  // Traditional paper white
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height - 100);
    
    // Vertical wooden supports
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 3;
    for (let i = 0; i < this.canvas.width; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, this.canvas.height - 100);
        ctx.stroke();
    }
}
```

#### ⚔️ **Wall-Mounted Katanas**

**Design Specifications:**
- **Position:** Upper left wall (80, 60, 60x30 pixels)
- **Style:** Crossed katanas on wooden mount
- **Details:** Authentic scabbards, handles, and blade highlights
- **Cultural Significance:** Represents the samurai tradition and weapon mastery

**Implementation Guide:**
```javascript
drawWallMountedKatanas(x, y, width, height) {
    // Wooden mount background with decorative border
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(x, y, width, height);
    
    // First katana (diagonal positioning)
    ctx.strokeStyle = '#424242';  // Scabbard color
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 10);
    ctx.lineTo(x + width - 10, y + height - 10);
    ctx.stroke();
    
    // Authentic handle details
    ctx.fillStyle = '#8B4513';  // Traditional handle wrap
    ctx.fillRect(x + 8, y + 8, 12, 6);
}
```

#### 🌸 **Cherry Blossom Artwork**

**Artistic Elements:**
- **Position:** Center wall (200, 60, 100x80 pixels)
- **Style:** Framed traditional painting with mountain landscape
- **Features:** Cherry blossom tree, mountain silhouette, gradient sky
- **Cultural Meaning:** Represents the beauty and transience of life (mono no aware)

**Detailed Implementation:**
```javascript
drawCherryBlossomArtwork(x, y, width, height) {
    // Traditional frame
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(x, y, width, height);
    
    // Sky gradient (traditional Japanese art style)
    const gradient = ctx.createLinearGradient(x + 5, y + 5, x + 5, y + height - 10);
    gradient.addColorStop(0, '#87CEEB');  // Sky blue
    gradient.addColorStop(1, '#E6E6FA');  // Lavender
    ctx.fillStyle = gradient;
    ctx.fillRect(x + 5, y + 5, width - 10, height - 10);
    
    // Cherry blossom flowers with authentic petal design
    const drawFlower = (cx, cy, size) => {
        // Yellow center
        ctx.fillStyle = '#FFEC8B';
        ctx.beginPath();
        ctx.arc(cx, cy, size/3, 0, Math.PI * 2);
        ctx.fill();
        
        // Pink petals (5-petal design)
        ctx.fillStyle = '#FFB7C5';
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const px = cx + Math.cos(angle) * size;
            const py = cy + Math.sin(angle) * size;
            ctx.beginPath();
            ctx.arc(px, py, size/2, 0, Math.PI * 2);
            ctx.fill();
        }
    };
}
```

#### 📜 **Calligraphy Scroll**

**Cultural Elements:**
- **Position:** Upper right wall (350, 50, 60x90 pixels)
- **Content:** Traditional kanji characters for "Way" (道) and "Martial" (武)
- **Style:** Antique scroll with wooden rollers
- **Significance:** Represents the philosophical foundation of martial arts

**Implementation Details:**
```javascript
drawCalligraphyScroll(x, y, width, height) {
    // Antique scroll background
    ctx.fillStyle = '#FFF8E1';  // Aged paper color
    ctx.fillRect(x, y, width, height);
    
    // Wooden rollers (top and bottom)
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(x - 5, y, width + 10, 5);
    ctx.fillRect(x - 5, y + height - 5, width + 10, 5);
    
    // Traditional calligraphy
    ctx.fillStyle = '#000';
    ctx.font = '30px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('道', x + width/2, y + height/2 - 10);  // "Way"
    ctx.fillText('武', x + width/2, y + height/2 + 20);  // "Martial"
}
```

#### 🥋 **Weapons Rack**

**Traditional Weapons Display:**
- **Position:** Lower left (50, canvas.height - 140, 100x40 pixels)
- **Weapons:** Bo staff, nunchaku, sai (three-pronged dagger)
- **Construction:** Dark wood with horizontal supports
- **Purpose:** Showcases traditional martial arts weapons

#### 🎯 **Wooden Training Dummy (Muk Yan Jong)**

**Training Equipment:**
- **Position:** Lower right (450, canvas.height - 150, 50x90 pixels)
- **Style:** Traditional Wing Chun wooden dummy
- **Features:** Central trunk, three arm pegs, one leg peg
- **Details:** Wood grain texture, authentic proportions

### Character Animation System

#### 🧘‍♂️ **Enhanced Character Design**

**Character Specifications:**
- **Dimensions:** 32x48 pixels base size, 3x scale factor
- **Position:** Dynamically aligned to floor level
- **Style:** Pixel art with authentic martial arts uniform (gi)
- **Customization:** Belt-based uniform changes and special effects

**Ground Alignment System:**
```javascript
alignCharacterToFloor() {
    const characterHeight = this.character.height * this.character.scale;
    // Position so feet touch floor, not floating
    this.character.y = (this.canvas.height - 100) - (characterHeight / 4) - 5;
}
```

#### 🎭 **Animation States & Behaviors**

**Idle Animation (Enhanced):**
```javascript
drawIdleCharacter(x, y, scale) {
    const frame = this.animationFrame;
    
    // Subtle breathing and readiness movements
    const pose = {
        headY: Math.sin(frame * 0.5) * 1,           // Gentle head movement
        armL: Math.sin(frame * 0.3) * 2,            // Subtle arm sway
        armR: Math.sin(frame * 0.3 + 1) * 2,        // Out of phase
        legL: Math.sin(frame * 0.4) * 1.5,          // Slight leg shift
        legR: Math.sin(frame * 0.4 + 1.5) * 1.5,    // Balanced stance
        bodyTilt: Math.sin(frame * 0.2) * 0.5       // Minimal body tilt
    };
    
    this.drawBasicCharacter(x, y, scale, pose);
}
```

**Kata Animation (Traditional Forms):**
```javascript
drawKataCharacter(x, y, scale) {
    // 8-frame kata sequence with authentic martial arts poses
    const poses = [
        { armL: -20, armR: 20, legL: 0, legR: 0 },      // Ready stance
        { armL: -45, armR: 45, legL: -10, legR: 10 },   // Wide stance
        { armL: 90, armR: -30, legL: 0, legR: 20 },     // Block and strike
        { armL: -60, armR: 90, legL: 20, legR: 0 },     // Counter movement
        { armL: 0, armR: 0, legL: -20, legR: 20 },      // Kick preparation
        { armL: -30, armR: 30, legL: -30, legR: 45 },   // High kick
        { armL: 45, armR: -45, legL: 10, legR: -10 },   // Return movement
        { armL: 0, armR: 0, legL: 0, legR: 0 }          // Back to ready
    ];
    
    const currentPose = poses[this.animationFrame];
    this.drawAnimatedLimbs(x, y, scale, currentPose);
}
```

### Pixel Art Drawing Guide

#### 🎨 **Color Palette Standards**

**Character Colors:**
```javascript
const characterPalette = {
    skin: '#fdbcb4',        // Warm skin tone
    hair: '#4a4a4a',        // Dark brown/black hair
    giWhite: '#ffffff',     // Standard white gi
    giBlack: '#2a2a2a',     // Advanced black gi
    feet: '#2a2a2a',        // Black training shoes
    hands: '#fdbcb4'        // Skin tone for hands
};
```

**Environment Colors:**
```javascript
const environmentPalette = {
    woodFloor: '#8d6e63',      // Traditional wood brown
    woodGrain: '#5d4037',      // Darker wood details
    wallPaper: '#f5f2e9',      // Traditional paper white
    woodFrame: '#5d4037',      // Dark wood frames
    metalWeapons: '#424242',   // Steel/iron weapons
    weaponHandles: '#8B4513',  // Leather/wood handles
    scrollPaper: '#FFF8E1',    // Aged paper
    cherryPink: '#FFB7C5',     // Cherry blossom petals
    cherryCenter: '#FFEC8B'    // Flower centers
};
```

**Belt Progression Colors:**
```javascript
const beltColors = {
    'white': '#f5f5f5',
    'yellow': '#fff176',
    'green': '#81c784',
    'blue': '#64b5f6',
    'brown': '#8d6e63',
    'red': '#e57373',
    'black': '#424242',
    'black-recommended': '#424242'
};
```

#### 🖌️ **Drawing Techniques**

**Pixel Art Best Practices:**
1. **Clean Lines:** Use single-pixel lines for clarity
2. **Consistent Scaling:** Maintain 3x scale factor throughout
3. **Limited Palette:** Stick to defined color schemes
4. **Anti-Aliasing:** Avoid anti-aliasing for crisp pixel art
5. **Readable Details:** Ensure elements are visible at target size

**Character Drawing Process:**
```javascript
drawBasicCharacter(x, y, scale) {
    // 1. Head (8x8 pixels)
    ctx.fillStyle = '#fdbcb4';
    ctx.fillRect(x + 12*scale, y + 4*scale, 8*scale, 8*scale);
    
    // 2. Hair (8x4 pixels)
    ctx.fillStyle = '#4a4a4a';
    ctx.fillRect(x + 12*scale, y + 2*scale, 8*scale, 4*scale);
    
    // 3. Body (12x16 pixels)
    ctx.fillStyle = this.getUniformColor();
    ctx.fillRect(x + 10*scale, y + 12*scale, 12*scale, 16*scale);
    
    // 4. Belt (16x3 pixels)
    ctx.fillStyle = this.beltColors[this.currentBelt];
    ctx.fillRect(x + 8*scale, y + 20*scale, 16*scale, 3*scale);
    
    // 5. Arms (6x12 pixels each)
    ctx.fillStyle = this.getUniformColor();
    ctx.fillRect(x + 6*scale, y + 14*scale, 6*scale, 12*scale);
    ctx.fillRect(x + 20*scale, y + 14*scale, 6*scale, 12*scale);
    
    // 6. Legs (4x12 pixels each)
    ctx.fillRect(x + 12*scale, y + 28*scale, 4*scale, 12*scale);
    ctx.fillRect(x + 16*scale, y + 28*scale, 4*scale, 12*scale);
    
    // 7. Feet (6x4 pixels each)
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(x + 10*scale, y + 40*scale, 6*scale, 4*scale);
    ctx.fillRect(x + 16*scale, y + 40*scale, 6*scale, 4*scale);
}
```

### Animation State Management

#### 🔄 **State Transition System**

**Animation Mapping:**
```javascript
const animationMap = {
    'kata-forms': 'kata',
    'kata-challenge': 'kata-challenge',
    'kata-sparring': 'kata-sparring',
    'level-up-test': 'level-up-test',
    'board-breaking': 'board-breaking',
    'sparring-practice': 'sparring',
    'meditation': 'meditation'
};
```

**Frame Management:**
```javascript
update() {
    this.frameCounter++;
    
    const currentAnim = this.animations[this.currentAnimation];
    if (this.frameCounter >= this.frameDelay) {
        this.animationFrame = (this.animationFrame + 1) % currentAnim.frames;
        this.frameCounter = 0;
    }
    
    // Special hover effect for idle state
    if (this.currentAnimation === 'idle') {
        this.character.hoverOffset = Math.sin(this.frameCounter * 0.1) * 3;
    } else {
        this.character.hoverOffset = 0;
    }
}
```

#### 🎯 **Event-Driven Animation Triggers**

**Discipline Selection:**
```javascript
function handleDisciplineSelection(discipline) {
    currentDiscipline = discipline;
    updateTrainingDisplayForDiscipline(discipline);
    dojoAnimator.setAnimation(animationMap[discipline] || 'idle');
}
```

**Belt Advancement:**
```javascript
setBelt(beltColor) {
    const previousBelt = this.currentBelt;
    this.currentBelt = beltColor;
    this.updateCharacterStyle();
    
    if (this.isBeltAdvancement(previousBelt, beltColor)) {
        this.triggerBeltAdvancementCelebration();
    }
}
```

### Visual Effects & Special Elements

#### ✨ **Aura System**

**Belt-Based Auras:**
```javascript
updateCharacterStyle() {
    if (this.currentBelt === 'black-recommended' || this.currentBelt === 'black') {
        this.characterStyle.giColor = 'black';
        this.characterStyle.hasSpecialEffects = true;
        this.characterStyle.auraColor = '#ffd700';  // Golden aura
    } else if (this.currentBelt === 'red') {
        this.characterStyle.hasSpecialEffects = true;
        this.characterStyle.auraColor = '#ff6b6b';  // Red aura
    }
}
```

**Aura Rendering:**
```javascript
drawAura(x, y, scale) {
    const auraSize = 60 * scale;
    const pulseSize = Math.sin(this.frameCounter * 0.1) * 10;
    
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = this.characterStyle.auraColor;
    ctx.beginPath();
    ctx.arc(x + 16*scale, y + 24*scale, auraSize + pulseSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;
}
```

#### 🏆 **Achievement Badge System**

**Badge Types:**
```javascript
const specialBadges = [
    { type: 'speed', color: '#fff176', description: 'Speed Demon' },
    { type: 'perfect', color: '#81c784', description: 'Perfectionist' },
    { type: 'streak', color: '#e57373', description: 'Streak Master' }
];
```

**Badge Rendering:**
```javascript
drawSpecialBadges(x, y, scale) {
    let badgeY = y + 5*scale;
    
    this.characterStyle.specialBadges.forEach((badge, index) => {
        ctx.fillStyle = badge.color;
        
        switch (badge.type) {
            case 'speed':
                // Lightning bolt
                ctx.fillRect(badgeX, badgeY, 3*scale, 8*scale);
                ctx.fillRect(badgeX + 2*scale, badgeY + 2*scale, 3*scale, 4*scale);
                break;
            case 'perfect':
                // Star
                ctx.arc(badgeX + 2*scale, badgeY + 2*scale, 3*scale, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'streak':
                // Flame
                ctx.fillRect(badgeX, badgeY, 2*scale, 6*scale);
                ctx.fillRect(badgeX + 1*scale, badgeY - 1*scale, 2*scale, 4*scale);
                break;
        }
        
        badgeY += 10*scale;
    });
}
```

### Customization & Prompting Guide

#### 🎨 **AI Art Generation Prompts**

**For Character Modifications:**
```
"Create a pixel art martial arts character in traditional white gi with [BELT_COLOR] belt, 
32x48 pixels, 3x scale, clean pixel art style, no anti-aliasing, standing in ready position, 
facing forward, simple but detailed, suitable for animation frames"
```

**For Environment Elements:**
```
"Design a traditional Japanese dojo element: [ELEMENT_TYPE], pixel art style, 
[DIMENSIONS] pixels, traditional colors [COLOR_PALETTE], clean lines, 
no anti-aliasing, suitable for martial arts training environment"
```

**For Weapons and Decorations:**
```
"Create traditional Japanese martial arts [WEAPON/DECORATION], pixel art style, 
authentic design, [SPECIFIC_COLORS], mounted on wooden background, 
clean pixel art with no anti-aliasing, [DIMENSIONS] pixels"
```

#### 🔧 **Customization Parameters**

**Character Customization:**
```javascript
const characterOptions = {
    skinTone: ['#fdbcb4', '#d4a574', '#8b5a3c'],
    hairColor: ['#4a4a4a', '#8b4513', '#2c1810'],
    giStyle: ['traditional', 'modern', 'competition'],
    beltStyle: ['standard', 'embroidered', 'special'],
    accessories: ['none', 'headband', 'gloves', 'protective-gear']
};
```

**Environment Customization:**
```javascript
const environmentOptions = {
    floorType: ['wood', 'tatami', 'modern'],
    wallStyle: ['traditional', 'modern', 'mixed'],
    decorations: ['minimal', 'traditional', 'extensive'],
    lighting: ['natural', 'warm', 'dramatic'],
    seasonalElements: ['none', 'cherry-blossoms', 'autumn-leaves']
};
```

#### 📝 **Modification Guidelines**

**Adding New Decorative Elements:**
1. **Choose Position:** Identify wall space or floor area
2. **Define Dimensions:** Use consistent pixel scaling
3. **Select Colors:** Follow established palette
4. **Create Drawing Function:** Follow naming convention `draw[ElementName](x, y, width, height)`
5. **Integrate:** Add to `drawDojoDecorations()` method

**Creating New Animation States:**
1. **Define Pose Array:** Create frame-by-frame poses
2. **Set Animation Properties:** Frame count and speed
3. **Create Drawing Method:** `draw[AnimationName]Character(x, y, scale)`
4. **Add to Switch Statement:** Include in character rendering
5. **Map to Discipline:** Add to animation mapping system

### Technical Implementation Details

#### 🏗️ **Core Architecture**

**Class Structure:**
```javascript
class DojoAnimator {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.currentBelt = 'white';
        this.currentAnimation = 'idle';
        this.animationFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 8;
        
        this.character = {
            x: 300,
            y: 200,
            width: 32,
            height: 48,
            scale: 3,
            hoverOffset: 0
        };
        
        this.characterStyle = {
            giColor: 'white',
            hasSpecialEffects: false,
            auraColor: null,
            specialBadges: []
        };
    }
}
```

**Rendering Pipeline:**
1. **Clear Canvas:** `ctx.clearRect()`
2. **Draw Background:** Floor, walls, decorations
3. **Draw Special Effects (Behind):** Auras, particles
4. **Draw Character:** Main character with current animation
5. **Draw Special Effects (Front):** Badges, impact effects
6. **Update Animation Frame:** Advance to next frame

#### 🎮 **Performance Optimization**

**Canvas Settings:**
```javascript
init() {
    this.ctx.imageSmoothingEnabled = false;  // Crisp pixel art
    this.alignCharacterToFloor();
    this.animate();
    this.setupEventListeners();
}
```

**Efficient Animation Loop:**
```javascript
animate() {
    this.update();
    this.render();
    requestAnimationFrame(() => this.animate());
}
```

#### 🔗 **Integration Points**

**With Kata Runner:**
```javascript
// Automatic discipline-based animation
function handleDisciplineSelection(discipline) {
    dojoAnimator.setAnimation(animationMap[discipline] || 'idle');
}

// Belt progression integration
function updateBelt(newBelt) {
    dojoAnimator.setBelt(newBelt);
}

// Achievement system integration
function awardAchievement(type, color) {
    dojoAnimator.addSpecialBadge({ type, color });
}
```

### Future Enhancement Roadmap

#### 🚀 **Planned Improvements**

**Phase 1: Enhanced Environments**
- [ ] Seasonal variations (spring cherry blossoms, autumn leaves)
- [ ] Day/night cycle with lighting changes
- [ ] Weather effects (rain, snow, wind)
- [ ] Multiple dojo layouts (traditional, modern, outdoor)

**Phase 2: Advanced Character System**
- [ ] Multiple character models (different martial arts styles)
- [ ] Customizable appearance (hair, skin tone, accessories)
- [ ] Gender options with appropriate animations
- [ ] Age progression system (child to master)

**Phase 3: Interactive Elements**
- [ ] Clickable decorations with information tooltips
- [ ] Interactive training equipment
- [ ] Background students practicing
- [ ] Sensei character for guidance

**Phase 4: Advanced Animation**
- [ ] Smooth interpolation between poses
- [ ] Physics-based cloth simulation for gi
- [ ] Particle systems for special effects
- [ ] 3D depth illusion with parallax scrolling

#### 🎯 **Immediate Next Steps**

1. **Add Tatami Mat Option:**
   ```javascript
   drawTatamiFloor() {
       // Traditional woven mat texture
       // Green color with border patterns
   }
   ```

2. **Implement Seasonal Decorations:**
   ```javascript
   drawSeasonalElements(season) {
       switch(season) {
           case 'spring': this.drawCherryBlossomPetals(); break;
           case 'autumn': this.drawFallingLeaves(); break;
           case 'winter': this.drawSnowEffect(); break;
       }
   }
   ```

3. **Create Master/Sensei Character:**
   ```javascript
   drawSenseiCharacter(x, y, scale) {
       // Older character with black belt
       // Traditional hakama pants
       // Wise expression and posture
   }
   ```

#### 📚 **Documentation Expansion**

**Planned Documentation Additions:**
- [ ] Video tutorials for pixel art creation
- [ ] Step-by-step animation guides
- [ ] Cultural significance explanations
- [ ] Advanced customization examples
- [ ] Performance optimization techniques

**Community Contributions:**
- [ ] User-submitted decorative elements
- [ ] Community animation challenges
- [ ] Cultural accuracy feedback system
- [ ] Accessibility improvements

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

### June 1, 2025 - 3:30 AM: Enhanced Animation System with Smart Discipline Selection

#### Overview
Completely revolutionized the Dojo Animation System by implementing an intelligent, event-driven architecture that eliminates manual animation controls in favor of smart discipline selection. This enhancement transforms the user experience from manual animation selection to an immersive, contextual training environment that automatically adapts to student choices.

#### Revolutionary Features Implemented

**Smart Discipline Selection System:**
- **7 Distinct Training Disciplines:** Kata Forms, Kata Challenge, Kata Sparring, Level Up Test, Board Breaking, Sparring Practice, and Meditation
- **Automatic Animation Mapping:** Each discipline automatically triggers its corresponding character animation
- **Dynamic Kata Filtering:** Available challenges update based on selected discipline
- **Intelligent Categorization:** Existing katas automatically sorted into appropriate disciplines

**Enhanced Character Animation States:**
- **Kata Challenge:** Intense movements with red energy effects and intensity aura
- **Kata Sparring:** Combat poses with semi-transparent shadow opponent
- **Level Up Test:** Precise, controlled movements with blue concentration aura
- **Deep Meditation:** Subtle breathing with floating green particles
- **Celebration:** Energetic victory movements with colorful confetti effects

**Dynamic Training Display:**
- **Real-Time Status:** Shows exactly what discipline the student is practicing
- **Animated Icons:** Pulsing status icons that change based on selected discipline
- **Contextual Feedback:** Training display updates automatically with discipline selection

**Advanced Character Evolution:**
- **Progressive Uniform System:** White gi for lower belts, black gi for advanced practitioners
- **Special Effects Integration:** Auras and particle effects for high-level students
- **Achievement Badge System:** Visual badges appear on character for special accomplishments
- **Dynamic Styling:** Character appearance evolves based on belt progression and achievements

#### Technical Implementation

**Enhanced Architecture:**
```javascript
// Smart discipline mapping system
const animationMap = {
    'kata-forms': 'kata',
    'kata-challenge': 'kata-challenge',
    'kata-sparring': 'kata-sparring',
    'level-up-test': 'level-up-test',
    'board-breaking': 'board-breaking',
    'sparring-practice': 'sparring',
    'meditation': 'meditation'
};

// Character style evolution system
characterStyle: {
    giColor: 'white',           // Dynamic uniform color
    hasSpecialEffects: false,   // Auras and special effects
    auraColor: null,           // '#ffd700' for gold, '#ff6b6b' for red
    specialBadges: []          // Achievement badges array
}
```

**Event-Driven Intelligence:**
- **No Manual Controls:** Removed animation selector dropdown entirely
- **Contextual Triggers:** All animations triggered by meaningful user actions
- **Smart Event Mapping:** Run/Check buttons trigger discipline-appropriate animations
- **Automatic State Management:** System intelligently chooses animations based on context

#### Files Enhanced

**`dojo-animations.js` (800+ lines):**
- Added 5 new animation methods for enhanced disciplines
- Implemented special effects rendering system (auras, particles, badges)
- Created dynamic character styling with belt-based evolution
- Added achievement badge visual integration system

**`index.html`:**
- Replaced manual animation selector with smart discipline dropdown
- Added dynamic training status display with animated icons
- Enhanced UI structure for better discipline-based workflow
- Improved responsive design for training status section

**`dojo-style.css` (100+ lines):**
- Added comprehensive styling for training status display
- Implemented animated status icons with pulse effects
- Enhanced discipline selector with focus states and transitions
- Added responsive design for new UI components

**`kata-runner.js` (600+ lines):**
- Implemented smart discipline selection event handling
- Added automatic kata categorization by discipline type
- Created dynamic training display update system
- Enhanced event-driven animation trigger system
- Added special club tracking infrastructure

#### User Experience Revolution

**Before Enhancement:**
- Manual animation selection via dropdown
- Disconnected kata selection from animation state
- Static training display
- Basic character appearance

**After Enhancement:**
- **Intelligent Discipline Selection:** Choose training type, animation follows automatically
- **Contextual Animation:** Character behavior matches selected discipline
- **Dynamic Status Display:** Real-time feedback on current training activity
- **Progressive Character Evolution:** Visual progression with belt advancement and achievements

#### Smart Integration Features

**Discipline-Based Kata Filtering:**
```javascript
// Automatic kata organization by discipline
availableKatasByDiscipline = {
    'kata-forms': [],      // Basic practice katas
    'kata-challenge': [],  // Timed challenge katas
    'kata-sparring': [],   // Competitive practice katas
    'level-up-test': [],   // Belt advancement tests
    'board-breaking': [],  // Precision training katas
    'sparring-practice': [], // Combat training katas
    'meditation': []       // Mental training katas
};
```

**Event-Driven Animation System:**
- **Discipline Selection** → Automatic animation change + kata filtering
- **Run Kata Button** → Animation based on current discipline
- **Check Kata Button** → Smart testing animation (board-breaking or level-up-test)
- **Achievement Unlock** → Celebration animation + badge display

#### Performance & Architecture Improvements

**Enhanced Rendering Pipeline:**
1. **Background Rendering:** Traditional dojo environment
2. **Special Effects (Behind):** Auras, particle systems, environmental effects
3. **Character Rendering:** Multi-layered sprite system with dynamic styling
4. **Animation State Management:** Intelligent frame-based animation with variable timing
5. **Special Effects (Front):** Achievement badges, impact effects, celebration confetti
6. **UI Integration:** Real-time status updates and discipline-based filtering

**Memory & Performance Optimizations:**
- **Efficient Effect Rendering:** Layered special effects without performance impact
- **Smart State Management:** Reduced unnecessary animation state changes
- **Optimized Event Handling:** Single event listeners with intelligent routing
- **Responsive Design:** Adaptive canvas and UI scaling

#### Development Workflow
- Implemented comprehensive enhancement on active development branch
- Maintained backward compatibility with existing belt progression system
- Successfully integrated with existing API and progress tracking
- All changes tested and verified for cross-browser compatibility

This enhancement represents a fundamental evolution in the Dojo Animation System, transforming it from a manual animation showcase into an intelligent, immersive training environment that responds dynamically to student choices and creates a truly engaging martial arts coding experience.

### June 1, 2025 - 2:00 AM: Dojo Animation System Implementation

#### Overview
Implemented a comprehensive interactive animation system that brings the martial arts coding dojo to life with a pixel-art character that responds to user actions and reflects belt progression in real-time.

#### Features Implemented

**Core Animation Engine:**
- Built a complete `DojoAnimator` class with HTML5 Canvas rendering
- Implemented frame-based animation system with configurable timing
- Created pixel-perfect character rendering (32x48 pixels at 3x scale)
- Added smooth animation state transitions and loop management

**Interactive Training Modes:**
- **Idle Animation:** Peaceful meditation stance with subtle breathing motion
- **Kata Animation:** Dynamic martial arts forms with 8-frame sequence
- **Board-Breaking Animation:** Powerful strike sequence with visual impact effects
- **Sparring Animation:** Training session with opponent character interaction

**Belt Progression Integration:**
- Real-time belt color updates reflecting user progress
- Special uniform changes for advanced belts (black gi for black belts)
- Automatic synchronization with existing belt progression system
- Visual feedback for all belt levels (white through black)

**User Interface Integration:**
- Canvas-based animation area with responsive design
- Training mode selector for manual animation control
- Seamless integration with existing dojo theme and styling
- Animation triggers connected to kata execution and checking buttons

#### Technical Implementation

**Files Created/Modified:**
- **`dojo-animations.js`** (432 lines): Complete animation engine with character rendering, state management, and belt integration
- **`index.html`**: Added canvas element, animation controls, and script integration
- **`dojo-style.css`** (58 new lines): Styling for animation section, canvas, and controls
- **`kata-runner.js`**: Added animation triggers and belt update integration

**Architecture Highlights:**
- Object-oriented design with clean separation of concerns
- Efficient rendering pipeline with background, character, and effects layers
- Event-driven animation state management
- Performance optimized with configurable frame delays
- Memory-efficient canvas operations without leaks

**Integration Points:**
- Belt updates: `dojoAnimator.setBelt(beltColor)` called automatically on progression
- Animation triggers: Connected to "Run Kata" and "Check Kata" button clicks
- Manual control: Training mode dropdown for user-initiated animations
- Progress synchronization: Real-time updates when belt status changes

#### User Experience Enhancements
- **Visual Feedback:** Immediate animation responses to user actions
- **Immersive Experience:** Character brings personality to the coding practice
- **Progress Visualization:** Belt changes are immediately visible on character
- **Interactive Elements:** Users can manually control training animations
- **Responsive Design:** Animation scales appropriately on different screen sizes

#### Development Workflow
- Implemented on `development` branch following established Git workflow
- Comprehensive commit with detailed feature description
- Successfully merged to `feature` branch for staging
- All changes pushed to remote repository for collaboration

This implementation significantly enhances the user experience by adding visual engagement and personality to the coding dojo, making the learning process more immersive and rewarding.

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
