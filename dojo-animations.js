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
        
        // Animation states
        this.animations = {
            idle: { frames: 4, speed: 12 },
            kata: { frames: 8, speed: 6 },
            'board-breaking': { frames: 6, speed: 4 },
            sparring: { frames: 8, speed: 5 }
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
        const trainingModeSelect = document.getElementById('training-mode');
        if (trainingModeSelect) {
            trainingModeSelect.addEventListener('change', (e) => {
                this.setAnimation(e.target.value);
            });
        }
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
        this.currentBelt = beltColor;
        console.log(`Belt changed to: ${beltColor}`);
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
        
        // Draw character based on current animation
        switch (this.currentAnimation) {
            case 'idle':
                this.drawIdleCharacter(x, y, scale);
                break;
            case 'kata':
                this.drawKataCharacter(x, y, scale);
                break;
            case 'board-breaking':
                this.drawBoardBreakingCharacter(x, y, scale);
                break;
            case 'sparring':
                this.drawSparringCharacter(x, y, scale);
                break;
        }
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
        // Special uniforms for advanced belts
        if (this.currentBelt === 'black-recommended' || this.currentBelt === 'black') {
            return '#2a2a2a'; // Black gi
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