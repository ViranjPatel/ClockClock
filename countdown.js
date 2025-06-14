import {Settings} from "./scripts/settings.js";
import {ClockDrawer} from "./scripts/clock.js";
import * as WallpaperEngine from "./scripts/wallpaper_engine.js";

const parent = document.getElementById("parent");
const proto = document.getElementById("proto");
const canvas = document.getElementById("canvas");

const settings = new Settings();
const clockDrawer = new ClockDrawer(parent, proto, canvas, settings);

// Event launch date - June 29, 2025 at 10:00 AM
const EVENT_DATE = new Date('2025-06-29T10:00:00');

// Countdown mode state
let isCountdownMode = true;
let currentThemeIndex = 0;
const themes = ['dark-gold', 'light', 'dark', 'neon'];

// DOM elements
const countdownDisplay = document.getElementById('countdownDisplay');
const modeToggle = document.getElementById('modeToggle');
const themeToggle = document.getElementById('themeToggle');
const launchModal = document.getElementById('launchModal');
const closeModal = document.getElementById('closeModal');

window.global = clockDrawer;

// Initialize
if (WallpaperEngine.IS_WALLPAPER_ENGINE) {
    WallpaperEngine.registerHandlers(settings);
}

// Set initial theme
applyTheme(themes[currentThemeIndex]);

// Event listeners
modeToggle.addEventListener('click', toggleMode);
themeToggle.addEventListener('click', changeTheme);
closeModal.addEventListener('click', () => {
    launchModal.classList.add('hidden');
});

function applyTheme(theme) {
    // Remove all theme classes
    themes.forEach(t => {
        document.body.classList.remove(`${t}-theme`);
    });
    
    // Add new theme
    document.body.classList.add(`${theme}-theme`);
    
    // Update settings
    settings.THEME = {key: theme};
}

function changeTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
}

function toggleMode() {
    isCountdownMode = !isCountdownMode;
    modeToggle.textContent = isCountdownMode ? 'Switch to Clock Mode' : 'Switch to Countdown Mode';
    
    if (isCountdownMode) {
        countdownDisplay.style.display = 'flex';
    } else {
        countdownDisplay.style.display = 'none';
    }
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = EVENT_DATE - now;
    
    if (timeLeft <= 0) {
        // Event has started!
        showLaunchModal();
        isCountdownMode = false;
        modeToggle.textContent = 'Countdown Complete!';
        modeToggle.disabled = true;
        
        // Switch to normal clock mode
        displayCurrentTime();
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update countdown display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Display time on clocks based on mode
    if (isCountdownMode) {
        displayCountdownOnClocks(days, hours, minutes, seconds);
    } else {
        displayCurrentTime();
    }
}

function displayCountdownOnClocks(days, hours, minutes, seconds) {
    // Display countdown on the clocks
    // For days > 0, show DD:HH format
    // For days = 0, show HH:MM format
    // For hours = 0, show MM:SS format
    
    if (days > 0) {
        clockDrawer.mode = ClockDrawer.Mode.target;
        clockDrawer.setTime(Math.min(days, 99), hours);
    } else if (hours > 0) {
        clockDrawer.mode = ClockDrawer.Mode.target;
        clockDrawer.setTime(hours, minutes);
    } else {
        clockDrawer.mode = ClockDrawer.Mode.target;
        clockDrawer.setTime(minutes, seconds);
    }
}

function displayCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    if (settings.TIME_FORMAT === 12) {
        hours = hours % 12 || 12;
    }
    const minutes = now.getMinutes();
    
    clockDrawer.mode = ClockDrawer.Mode.target;
    clockDrawer.setTime(hours, minutes);
}

function showLaunchModal() {
    launchModal.classList.remove('hidden');
    
    // Add some celebration effects
    document.body.classList.add('celebration');
    
    // Play a simple animation
    setTimeout(() => {
        document.body.classList.remove('celebration');
    }, 3000);
}

// Start the countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Start the render loop
setInterval(() => clockDrawer.render(), 1000 / settings.TARGET_FPS);