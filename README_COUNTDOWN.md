# 🚀 ClockClock Event Countdown

A beautiful countdown timer built on the elegant ClockClock experience, designed specifically for event launches and special occasions.

## ✨ Features

### 🎯 Event Countdown
- **Real-time countdown** to your event (currently set for **June 29, 2025 at 10:00 AM**)
- **Dual display**: Traditional digital countdown + ClockClock analog visualization
- **Smart time display**: 
  - Days > 0: Shows DD:HH on clocks
  - Days = 0: Shows HH:MM on clocks  
  - Hours = 0: Shows MM:SS on clocks
- **Launch celebration** with modal and animations when countdown reaches zero

### 🎨 Customization
- **4 Beautiful themes**: Dark Gold, Light, Dark, Neon
- **Mode switching**: Toggle between countdown and regular clock mode
- **Responsive design**: Works perfectly on desktop, tablet, and mobile
- **Smooth animations**: Elegant transitions and effects

### 🔧 Built on ClockClock
- Based on the acclaimed [DrA1ex/ClockClock](https://github.com/DrA1ex/ClockClock) project
- Maintains all the beautiful analog clock mechanics
- Enhanced with modern countdown functionality

## 🚀 Quick Start

### Option 1: Use GitHub Pages (Recommended)
1. Visit: `https://viranjpatel.github.io/ClockClock/countdown.html`
2. Enjoy your countdown!

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/ViranjPatel/ClockClock.git
cd ClockClock

# Switch to countdown branch
git checkout countdown-feature

# Serve locally (you can use any static server)
python -m http.server 8000
# or
npx serve .

# Visit http://localhost:8000/countdown.html
```

## ⚙️ Customization

### Change Event Date & Time
Edit `countdown.js` line 9:
```javascript
const EVENT_DATE = new Date('2025-06-29T10:00:00');
```

### Customize Event Details
Edit `countdown.html` lines 12-13:
```html
<h1 class="event-title">🚀 Your Event Name</h1>
<p class="event-date">Your Date and Time</p>
```

### Add Your Own Themes
1. Create new theme in `style/themes.css`
2. Add theme name to `themes` array in `countdown.js`
3. Add corresponding countdown styles in `style/countdown.css`

## 📱 Usage

### Controls
- **Switch Mode**: Toggle between countdown and regular clock display
- **Change Theme**: Cycle through available themes
- **Launch Modal**: Automatically appears when countdown reaches zero

### Countdown Display Modes
1. **Days remaining**: Shows days and hours on analog clocks
2. **Hours remaining**: Shows hours and minutes on analog clocks  
3. **Final countdown**: Shows minutes and seconds on analog clocks

## 🎨 Themes

| Theme | Description |
|-------|-------------|
| **Dark Gold** | Elegant dark theme with golden accents |
| **Light** | Clean, minimalist light theme |
| **Dark** | Classic dark theme |
| **Neon** | Futuristic cyberpunk-inspired theme |

## 📦 Project Structure

```
/
├── countdown.html          # Main countdown page
├── countdown.js           # Countdown logic and controls
├── style/
│   ├── countdown.css      # Countdown-specific styles
│   ├── style.css         # Base ClockClock styles
│   └── themes.css        # Theme definitions
├── scripts/              # Original ClockClock modules
│   ├── clock.js
│   ├── digits.js
│   ├── settings.js
│   └── utils.js
└── README.md
```

## 🌟 Use Cases

- **Product launches**
- **Event announcements**  
- **Conference countdowns**
- **Wedding countdowns**
- **Holiday celebrations**
- **Project deadlines**
- **Birthday parties**
- **Any special occasion!**

## 🔧 Technical Details

- **Pure JavaScript** (ES6 modules)
- **CSS3** with modern features (gradients, backdrop-filter, animations)
- **Responsive design** using CSS Grid and Flexbox
- **No external dependencies**
- **60 FPS smooth animations**

## 🎯 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+  
- ✅ Safari 12+
- ✅ Edge 79+

## 📄 License

This project is based on DrA1ex/ClockClock and maintains the same open-source spirit. Feel free to use, modify, and distribute according to the original project's license terms.

## 🙏 Credits

- **Original ClockClock**: [DrA1ex/ClockClock](https://github.com/DrA1ex/ClockClock)
- **ClockClock 24 Inspiration**: [Humans Since 1982](https://clockclock.com/)
- **Countdown Enhancement**: ViranjPatel

## 🐛 Issues & Contributions

Found a bug or want to contribute? 
1. Open an issue on [GitHub](https://github.com/ViranjPatel/ClockClock/issues)
2. Submit a pull request with improvements
3. Star the repository if you find it useful!

---

**Happy Counting Down! 🎉**