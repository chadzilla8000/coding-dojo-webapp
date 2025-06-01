// Dojo Animation System
// Pixel-style character animations for the martial arts coding dojo

class DojoAnimator {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.currentBelt = 'white';
        this.currentAnimation = 'idle';
        this.animationFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 8; // Frames to wait before advancing animation
        
        // Character properties
        this.character = {
            x: 300, // Center of canvas
            y: 200,
            width: 32,
            height: 48,
            scale: 3
        };
        
        // Belt colors mapping
        this.beltColors = {
            'white': '#f5f5f5',
            'yellow': '#fff176',
            'green': '#81c784',
            'blue': '#64b5f6',
            'brown': '#8d6e63',
            'red': '#e57373',
            'black': '#424242',
            'black-recommended': '#424242'
        };
        
        // Special clubs and achievements
        this.specialClubs = new Set();
        this.achievements = new Set();
        
        // Character customization based on progression
        this.characterStyle = {
            giColor: 'white',
            hasSpecialEffects: false,
            auraColor: null,
            specialBadges: []
        };
        
        // Enhanced Animation states for different challenge types
        this.animations = {
            idle: { frames: 4, speed: 12 },
            kata: { frames: 8, speed: 6 },
            'kata-challenge': { frames: 10, speed: 5 },
            'kata-sparring': { frames: 12, speed: 4 },
            'level-up-test': { frames: 6, speed: 3 },
            'board-breaking': { frames: 6, speed: 4 },
            sparring: { frames: 8, speed: 5 },
            meditation: { frames: 6, speed: 15 },
            celebration: { frames: 8, speed: 8 }
        };
        
        this.init();
    }
    
    init() {
        // Set up canvas
        this.ctx.imageSmoothingEnabled = false; // For pixel art
        
        // Start animation loop
        this.animate();
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('Dojo Animator initialized');
    }
    
    setupEventListeners() {
        // Event listeners are now handled by the kata-runner.js discipline system
        // This method is kept for potential future manual animation controls
        console.log('Dojo animation event listeners ready');
    }
    
    setAnimation(animationType) {
        if (this.animations[animationType]) {
            this.currentAnimation = animationType;
            this.animationFrame = 0;
            this.frameCounter = 0;
            console.log(`Animation changed to: ${animationType}`);
        }
    }
    
    setBelt(beltColor) {
        const previousBelt = this.currentBelt;
        this.currentBelt = beltColor;
        
        // Update character style based on belt progression
        this.updateCharacterStyle();
        
        // Trigger celebration animation for belt advancement
        if (this.isBeltAdvancement(previousBelt, beltColor)) {
            this.triggerBeltAdvancementCelebration();
        }
        
        console.log(`Belt changed from ${previousBelt} to: ${beltColor}`);
    }
    
    // Smart event system for character customization
    updateCharacterStyle() {
        // Update gi color based on belt level
        if (this.currentBelt === 'black-recommended' || this.currentBelt === 'black') {
            this.characterStyle.giColor = 'black';
            this.characterStyle.hasSpecialEffects = true;
            this.characterStyle.auraColor = '#ffd700'; // Golden aura for black belts
        } else if (this.currentBelt === 'red') {
            this.characterStyle.giColor = 'white';
            this.characterStyle.hasSpecialEffects = true;
            this.characterStyle.auraColor = '#ff6b6b'; // Red aura for red belt
        } else {
            this.characterStyle.giColor = 'white';
            this.characterStyle.hasSpecialEffects = false;
            this.characterStyle.auraColor = null;
        }
    }
    
    // Check if this is a belt advancement (not demotion)
    isBeltAdvancement(previousBelt, newBelt) {
        const beltOrder = ['white', 'yellow', 'green', 'blue', 'brown', 'red', 'black-recommended', 'black'];
        const prevIndex = beltOrder.indexOf(previousBelt);
        const newIndex = beltOrder.indexOf(newBelt);
        return newIndex > prevIndex;
    }
    
    // Trigger celebration animation for belt advancement
    triggerBeltAdvancementCelebration() {
        const originalAnimation = this.currentAnimation;
        this.setAnimation('celebration');
        
        // Return to original animation after celebration
        setTimeout(() => {
            this.setAnimation(originalAnimation);
        }, 3000);
    }
    
    // Add special club membership
    addToSpecialClub(clubName) {
        this.specialClubs.add(clubName);
        this.updateSpecialBadges();
        console.log(`Added to special club: ${clubName}`);
    }
    
    // Remove from special club
    removeFromSpecialClub(clubName) {
        this.specialClubs.delete(clubName);
        this.updateSpecialBadges();
        console.log(`Removed from special club: ${clubName}`);
    }
    
    // Update special badges based on clubs and achievements
    updateSpecialBadges() {
        this.characterStyle.specialBadges = [];
        
        // Add badges for special clubs
        if (this.specialClubs.has('speed-demon')) {
            this.characterStyle.specialBadges.push({ type: 'speed', color: '#00ff00' });
        }
        if (this.specialClubs.has('perfectionist')) {
            this.characterStyle.specialBadges.push({ type: 'perfect', color: '#ffd700' });
        }
        if (this.specialClubs.has('streak-master')) {
            this.characterStyle.specialBadges.push({ type: 'streak', color: '#ff4500' });
        }
    }
    
    // Set animation based on kata type automatically
    setAnimationForKataType(kataType, challengeType = null) {
        let animationType = 'idle';
        
        switch (challengeType) {
            case 'kata-challenge':
                animationType = 'kata-challenge';
                break;
            case 'kata-sparring':
                animationType = 'kata-sparring';
                break;
            case 'level-up-test':
                animationType = 'level-up-test';
                break;
            default:
                // Default based on kata type
                if (kataType === 'code') {
                    animationType = 'kata';
                } else if (kataType === 'quiz') {
                    animationType = 'meditation';
                } else {
                    animationType = 'idle';
                }
        }
        
        this.setAnimation(animationType);
    }
    
    animate() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.animate());
    }
    
    update() {
        this.frameCounter++;
        
        const currentAnim = this.animations[this.currentAnimation];
        if (this.frameCounter >= this.frameDelay) {
            this.animationFrame = (this.animationFrame + 1) % currentAnim.frames;
            this.frameCounter = 0;
        }
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw dojo background
        this.drawDojoBackground();
        
        // Draw character
        this.drawCharacter();
        
        // Draw additional elements based on animation
        this.drawAnimationElements();
    }
    
    drawDojoBackground() {
        const ctx = this.ctx;
        
        // Draw wooden floor
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(0, this.canvas.height - 100, this.canvas.width, 100);
        
        // Draw floor lines
        ctx.strokeStyle = '#5d4037';
        ctx.lineWidth = 2;
        for (let i = 0; i < this.canvas.width; i += 40) {
            ctx.beginPath();
            ctx.moveTo(i, this.canvas.height - 100);
            ctx.lineTo(i, this.canvas.height);
            ctx.stroke();
        }
        
        // Draw back wall
        ctx.fillStyle = '#f5f2e9';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height - 100);
        
        // Draw wall panels
        ctx.strokeStyle = '#8d6e63';
        ctx.lineWidth = 3;
        for (let i = 0; i < this.canvas.width; i += 80) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.canvas.height - 100);
            ctx.stroke();
        }
    }
    
    drawCharacter() {
        const ctx = this.ctx;
        const char = this.character;
        const scale = char.scale;
        
        // Calculate position
        const x = char.x - (char.width * scale) / 2;
        const y = char.y - (char.height * scale) / 2;
        
        // Draw special effects (aura) behind character
        if (this.characterStyle.hasSpecialEffects && this.characterStyle.auraColor) {
            this.drawAura(x, y, scale);
        }
        
        // Draw character based on current animation
        switch (this.currentAnimation) {
            case 'idle':
                this.drawIdleCharacter(x, y, scale);
                break;
            case 'kata':
                this.drawKataCharacter(x, y, scale);
                break;
            case 'kata-challenge':
                this.drawKataChallengeCharacter(x, y, scale);
                break;
            case 'kata-sparring':
                this.drawKataSparringCharacter(x, y, scale);
                break;
            case 'level-up-test':
                this.drawLevelUpTestCharacter(x, y, scale);
                break;
            case 'board-breaking':
                this.drawBoardBreakingCharacter(x, y, scale);
                break;
            case 'sparring':
                this.drawSparringCharacter(x, y, scale);
                break;
            case 'meditation':
                this.drawMeditationCharacter(x, y, scale);
                break;
            case 'celebration':
                this.drawCelebrationCharacter(x, y, scale);
                break;
            default:
                this.drawIdleCharacter(x, y, scale);
        }
        
        // Draw special badges on top of character
        this.drawSpecialBadges(x, y, scale);
    }
    
    drawIdleCharacter(x, y, scale) {
        const ctx = this.ctx;
        
        // Simple breathing animation
        const breathOffset = Math.sin(this.animationFrame * 0.5) * 2;
        
        // Head
        ctx.fillStyle = '#fdbcb4'; // Skin color
        ctx.fillRect(x + 12*scale, y + 4*scale + breathOffset, 8*scale, 8*scale);
        
        // Hair
        ctx.fillStyle = '#4a4a4a';
        ctx.fillRect(x + 12*scale, y + 2*scale + breathOffset, 8*scale, 4*scale);
        
        // Gi (uniform) top
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 10*scale, y + 12*scale + breathOffset, 12*scale, 16*scale);
        
        // Belt
        ctx.fillStyle = this.beltColors[this.currentBelt];
        ctx.fillRect(x + 8*scale, y + 20*scale + breathOffset, 16*scale, 3*scale);
        
        // Arms
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 6*scale, y + 14*scale + breathOffset, 6*scale, 12*scale);
        ctx.fillRect(x + 20*scale, y + 14*scale + breathOffset, 6*scale, 12*scale);
        
        // Hands
        ctx.fillStyle = '#fdbcb4';
        ctx.fillRect(x + 6*scale, y + 24*scale + breathOffset, 4*scale, 4*scale);
        ctx.fillRect(x + 22*scale, y + 24*scale + breathOffset, 4*scale, 4*scale);
        
        // Legs
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 12*scale, y + 28*scale + breathOffset, 4*scale, 12*scale);
        ctx.fillRect(x + 16*scale, y + 28*scale + breathOffset, 4*scale, 12*scale);
        
        // Feet
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(x + 10*scale, y + 40*scale + breathOffset, 6*scale, 4*scale);
        ctx.fillRect(x + 16*scale, y + 40*scale + breathOffset, 6*scale, 4*scale);
    }
    
    drawKataCharacter(x, y, scale) {
        const ctx = this.ctx;
        
        // Kata form poses - cycle through different positions
        const poses = [
            { armL: -20, armR: 20, legL: 0, legR: 0 }, // Ready stance
            { armL: -45, armR: 45, legL: -10, legR: 10 }, // Wide stance, arms out
            { armL: 90, armR: -30, legL: 0, legR: 20 }, // Block and strike
            { armL: -60, armR: 90, legL: 20, legR: 0 }, // Reverse
            { armL: 0, armR: 0, legL: -20, legR: 20 }, // Kick preparation
            { armL: -30, armR: 30, legL: -30, legR: 45 }, // High kick
            { armL: 45, armR: -45, legL: 10, legR: -10 }, // Return
            { armL: 0, armR: 0, legL: 0, legR: 0 } // Back to ready
        ];
        
        const currentPose = poses[this.animationFrame];
        
        // Head
        ctx.fillStyle = '#fdbcb4';
        ctx.fillRect(x + 12*scale, y + 4*scale, 8*scale, 8*scale);
        
        // Hair
        ctx.fillStyle = '#4a4a4a';
        ctx.fillRect(x + 12*scale, y + 2*scale, 8*scale, 4*scale);
        
        // Body
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 10*scale, y + 12*scale, 12*scale, 16*scale);
        
        // Belt
        ctx.fillStyle = this.beltColors[this.currentBelt];
        ctx.fillRect(x + 8*scale, y + 20*scale, 16*scale, 3*scale);
        
        // Animated arms and legs based on pose
        this.drawAnimatedLimbs(x, y, scale, currentPose);
    }
    
    drawBoardBreakingCharacter(x, y, scale) {
        const ctx = this.ctx;
        
        // Board breaking sequence
        const breakFrames = [
            { phase: 'prepare', armAngle: -45 },
            { phase: 'prepare', armAngle: -60 },
            { phase: 'strike', armAngle: 0 },
            { phase: 'impact', armAngle: 15 },
            { phase: 'follow', armAngle: 30 },
            { phase: 'return', armAngle: 0 }
        ];
        
        const currentFrame = breakFrames[this.animationFrame % breakFrames.length];
        
        // Draw character
        this.drawBasicCharacter(x, y, scale);
        
        // Draw board
        if (currentFrame.phase !== 'impact') {
            ctx.fillStyle = '#8d6e63';
            ctx.fillRect(x + 30*scale, y + 18*scale, 8*scale, 2*scale);
        } else {
            // Broken board pieces
            ctx.fillStyle = '#8d6e63';
            ctx.fillRect(x + 32*scale, y + 16*scale, 3*scale, 2*scale);
            ctx.fillRect(x + 36*scale, y + 22*scale, 3*scale, 2*scale);
            
            // Impact effect
            ctx.fillStyle = '#fff176';
            ctx.fillRect(x + 28*scale, y + 16*scale, 4*scale, 4*scale);
        }
    }
    
    drawSparringCharacter(x, y, scale) {
        const ctx = this.ctx;
        
        // Draw main character
        this.drawBasicCharacter(x - 20*scale, y, scale);
        
        // Draw opponent (simplified)
        ctx.fillStyle = '#fdbcb4';
        ctx.fillRect(x + 30*scale, y + 4*scale, 8*scale, 8*scale);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + 28*scale, y + 12*scale, 12*scale, 16*scale);
        ctx.fillStyle = this.beltColors['white'];
        ctx.fillRect(x + 26*scale, y + 20*scale, 16*scale, 3*scale);
        
        // Sparring movements
        const offset = Math.sin(this.animationFrame * 0.8) * 5;
        ctx.translate(offset, 0);
        ctx.translate(-offset, 0);
    }
    
    drawBasicCharacter(x, y, scale) {
        const ctx = this.ctx;
        
        // Head
        ctx.fillStyle = '#fdbcb4';
        ctx.fillRect(x + 12*scale, y + 4*scale, 8*scale, 8*scale);
        
        // Hair
        ctx.fillStyle = '#4a4a4a';
        ctx.fillRect(x + 12*scale, y + 2*scale, 8*scale, 4*scale);
        
        // Body
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 10*scale, y + 12*scale, 12*scale, 16*scale);
        
        // Belt
        ctx.fillStyle = this.beltColors[this.currentBelt];
        ctx.fillRect(x + 8*scale, y + 20*scale, 16*scale, 3*scale);
        
        // Arms
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 6*scale, y + 14*scale, 6*scale, 12*scale);
        ctx.fillRect(x + 20*scale, y + 14*scale, 6*scale, 12*scale);
        
        // Legs
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + 12*scale, y + 28*scale, 4*scale, 12*scale);
        ctx.fillRect(x + 16*scale, y + 28*scale, 4*scale, 12*scale);
        
        // Feet
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(x + 10*scale, y + 40*scale, 6*scale, 4*scale);
        ctx.fillRect(x + 16*scale, y + 40*scale, 6*scale, 4*scale);
    }
    
    drawAnimatedLimbs(x, y, scale, pose) {
        const ctx = this.ctx;
        
        // This is a simplified version - in a full implementation,
        // you'd use proper rotation matrices for the limb positions
        
        // Arms with basic position offsets
        ctx.fillStyle = this.getUniformColor();
        ctx.fillRect(x + (6 + pose.armL/10)*scale, y + 14*scale, 6*scale, 12*scale);
        ctx.fillRect(x + (20 + pose.armR/10)*scale, y + 14*scale, 6*scale, 12*scale);
        
        // Legs with basic position offsets
        ctx.fillRect(x + (12 + pose.legL/10)*scale, y + 28*scale, 4*scale, 12*scale);
        ctx.fillRect(x + (16 + pose.legR/10)*scale, y + 28*scale, 4*scale, 12*scale);
        
        // Hands
        ctx.fillStyle = '#fdbcb4';
        ctx.fillRect(x + (6 + pose.armL/10)*scale, y + 24*scale, 4*scale, 4*scale);
        ctx.fillRect(x + (22 + pose.armR/10)*scale, y + 24*scale, 4*scale, 4*scale);
        
        // Feet
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(x + (10 + pose.legL/10)*scale, y + 40*scale, 6*scale, 4*scale);
        ctx.fillRect(x + (16 + pose.legR/10)*scale, y + 40*scale, 6*scale, 4*scale);
    }
    
    getUniformColor() {
        // Dynamic uniform color based on character style
        if (this.characterStyle.giColor === 'black') {
            return '#2a2a2a'; // Black gi for advanced practitioners
        }
        return '#ffffff'; // Standard white gi
    }
    
    drawAnimationElements() {
        // Additional elements like effects, particles, etc.
        if (this.currentAnimation === 'kata') {
            this.drawKataTrails();
        } else if (this.currentAnimation === 'board-breaking') {
            this.drawImpactEffects();
        }
    }
    
    drawKataTrails() {
        // Draw motion trails for kata movements
        const ctx = this.ctx;
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = '#fff176';
        ctx.lineWidth = 2;
        
        // Simple trail effect
        const trailX = this.character.x + Math.sin(this.animationFrame * 0.5) * 20;
        const trailY = this.character.y + Math.cos(this.animationFrame * 0.5) * 10;
        
        ctx.beginPath();
        ctx.arc(trailX, trailY, 5, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.globalAlpha = 1.0;
    }
    
    drawImpactEffects() {
        // Draw impact effects for board breaking
        if (this.animationFrame === 3) { // Impact frame
            const ctx = this.ctx;
            ctx.fillStyle = '#fff176';
            
            // Star burst effect
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const x = this.character.x + 60 + Math.cos(angle) * 15;
                const y = this.character.y + Math.sin(angle) * 15;
                ctx.fillRect(x, y, 3, 3);
            }
        }
    }
    
    // New enhanced animation methods
    drawKataChallengeCharacter(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // More intense kata movements with multiple opponents
        const pose = {
            headY: Math.sin(frame * 0.8) * 2,
            armL: Math.sin(frame * 1.2) * 15,
            armR: Math.cos(frame * 1.2) * 15,
            legL: Math.sin(frame * 0.9) * 8,
            legR: Math.cos(frame * 0.9) * 8,
            bodyTilt: Math.sin(frame * 0.6) * 3
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        
        // Add challenge intensity effects
        if (frame % 3 === 0) {
            this.drawIntensityEffects(x, y, scale);
        }
    }
    
    drawKataSparringCharacter(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // Sparring movements with defensive and offensive poses
        const pose = {
            headY: Math.sin(frame * 0.5) * 1,
            armL: Math.sin(frame * 1.5) * 20,
            armR: Math.cos(frame * 1.8) * 18,
            legL: Math.sin(frame * 1.1) * 12,
            legR: Math.cos(frame * 1.3) * 10,
            bodyTilt: Math.sin(frame * 0.7) * 5
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        
        // Draw sparring partner shadow
        this.drawSparringPartner(x + 100, y, scale, frame);
    }
    
    drawLevelUpTestCharacter(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // Focused, precise movements for testing
        const pose = {
            headY: 0, // Steady head
            armL: Math.sin(frame * 0.8) * 10,
            armR: Math.cos(frame * 0.8) * 10,
            legL: Math.sin(frame * 0.6) * 5,
            legR: Math.cos(frame * 0.6) * 5,
            bodyTilt: 0 // Steady body
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        
        // Add concentration aura
        this.drawConcentrationAura(x, y, scale);
    }
    
    drawMeditationCharacter(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // Very subtle breathing motion
        const pose = {
            headY: Math.sin(frame * 0.3) * 0.5,
            armL: 0, // Arms at rest
            armR: 0,
            legL: 0, // Legs in lotus position
            legR: 0,
            bodyTilt: Math.sin(frame * 0.2) * 0.5
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        
        // Add meditation effects
        this.drawMeditationEffects(x, y, scale);
    }
    
    drawCelebrationCharacter(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // Energetic celebration movements
        const pose = {
            headY: Math.sin(frame * 2) * 3,
            armL: Math.sin(frame * 2.5) * 25,
            armR: Math.cos(frame * 2.5) * 25,
            legL: Math.sin(frame * 2.2) * 15,
            legR: Math.cos(frame * 2.2) * 15,
            bodyTilt: Math.sin(frame * 1.8) * 8
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        
        // Add celebration effects
        this.drawCelebrationEffects(x, y, scale);
    }
    
    // Special effects methods
    drawAura(x, y, scale) {
        const ctx = this.ctx;
        const auraSize = 60 * scale;
        const pulseSize = Math.sin(this.frameCounter * 0.1) * 10;
        
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = this.characterStyle.auraColor;
        ctx.beginPath();
        ctx.arc(x + 16*scale, y + 24*scale, auraSize + pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
    
    drawSpecialBadges(x, y, scale) {
        const ctx = this.ctx;
        let badgeX = x + 25*scale;
        let badgeY = y + 5*scale;
        
        this.characterStyle.specialBadges.forEach((badge, index) => {
            ctx.fillStyle = badge.color;
            ctx.beginPath();
            
            switch (badge.type) {
                case 'speed':
                    // Lightning bolt shape
                    ctx.fillRect(badgeX, badgeY, 3*scale, 8*scale);
                    ctx.fillRect(badgeX + 2*scale, badgeY + 2*scale, 3*scale, 4*scale);
                    break;
                case 'perfect':
                    // Star shape
                    ctx.arc(badgeX + 2*scale, badgeY + 2*scale, 3*scale, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'streak':
                    // Flame shape
                    ctx.fillRect(badgeX, badgeY, 2*scale, 6*scale);
                    ctx.fillRect(badgeX + 1*scale, badgeY - 1*scale, 2*scale, 4*scale);
                    break;
            }
            
            badgeY += 10*scale; // Stack badges vertically
        });
    }
    
    drawIntensityEffects(x, y, scale) {
        const ctx = this.ctx;
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 2;
        
        // Energy lines around character
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const startX = x + 16*scale + Math.cos(angle) * 20*scale;
            const startY = y + 24*scale + Math.sin(angle) * 20*scale;
            const endX = startX + Math.cos(angle) * 10*scale;
            const endY = startY + Math.sin(angle) * 10*scale;
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1.0;
    }
    
    drawSparringPartner(x, y, scale, frame) {
        const ctx = this.ctx;
        ctx.globalAlpha = 0.4;
        
        // Simple shadow opponent
        const pose = {
            headY: Math.sin(frame * -0.5) * 1,
            armL: Math.cos(frame * -1.5) * 15,
            armR: Math.sin(frame * -1.8) * 15,
            legL: Math.cos(frame * -1.1) * 8,
            legR: Math.sin(frame * -1.3) * 8,
            bodyTilt: Math.cos(frame * -0.7) * 3
        };
        
        this.drawBasicCharacter(x, y, scale, pose);
        ctx.globalAlpha = 1.0;
    }
    
    drawConcentrationAura(x, y, scale) {
        const ctx = this.ctx;
        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = '#64b5f6';
        ctx.lineWidth = 1;
        
        // Concentric circles for focus
        for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(x + 16*scale, y + 24*scale, i * 15*scale, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1.0;
    }
    
    drawMeditationEffects(x, y, scale) {
        const ctx = this.ctx;
        const time = this.frameCounter * 0.05;
        
        // Floating particles
        for (let i = 0; i < 5; i++) {
            const particleX = x + 16*scale + Math.sin(time + i) * 30*scale;
            const particleY = y + 10*scale + Math.cos(time + i * 0.7) * 20*scale;
            
            ctx.globalAlpha = 0.3 + Math.sin(time + i) * 0.2;
            ctx.fillStyle = '#81c784';
            ctx.beginPath();
            ctx.arc(particleX, particleY, 2*scale, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.globalAlpha = 1.0;
    }
    
    drawCelebrationEffects(x, y, scale) {
        const ctx = this.ctx;
        const frame = this.animationFrame;
        
        // Confetti effect
        for (let i = 0; i < 10; i++) {
            const confettiX = x + (i * 8 + frame * 3) % (40*scale);
            const confettiY = y - 10*scale + Math.sin(frame * 0.5 + i) * 20*scale;
            
            ctx.fillStyle = ['#fff176', '#81c784', '#64b5f6', '#e57373'][i % 4];
            ctx.fillRect(confettiX, confettiY, 2*scale, 2*scale);
        }
    }
}

// Global animator instance
let dojoAnimator = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('dojo-canvas');
    if (canvas) {
        dojoAnimator = new DojoAnimator('dojo-canvas');
        console.log('Dojo animation system loaded');
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DojoAnimator;
}