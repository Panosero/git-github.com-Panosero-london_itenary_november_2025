# 🇬🇧 London Family Adventure Itinerary

A beautiful, modern static webpage showcasing a 6-day London itinerary (November 21-26, 2025) starting from Canary Wharf. Perfect for GitHub Pages!

## ✨ Features

- **📱 Fully Responsive** - Works beautifully on desktop, tablet, and mobile
- **🎨 Modern Design** - Gradient backgrounds, smooth animations, and clean layout
- **📋 Interactive Bookings** - Checkbox tracking with localStorage persistence
- **🔽 Collapsible Sections** - Expand/collapse each day for easy navigation
- **🎯 Sticky Navigation** - Quick jump to any day
- **⚡ Smooth Scrolling** - Elegant navigation experience
- **♿ Accessible** - Keyboard navigation, ARIA labels, focus states
- **🖨️ Print-Friendly** - Auto-expands for clean printing
- **⌨️ Keyboard Shortcuts**:
  - `Ctrl/Cmd + E` - Expand all sections
  - `Ctrl/Cmd + C` - Collapse all sections
  - `Ctrl/Cmd + P` - Print view

## 🚀 Quick Deploy to GitHub Pages

### Method 1: GitHub Web Interface (Easiest)

1. **Create a new repository** on GitHub
   - Name it something like `london-itinerary` or `london-2025`
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop: `index.html`, `styles.css`, `script.js`
   - Commit changes

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Click Save

4. **Access your site** 🎉
   - Your site will be live at: `https://[username].github.io/[repository-name]/`
   - Usually takes 1-2 minutes to deploy

### Method 2: Git Command Line

```bash
# Navigate to this directory
cd /Users/panagiotiserodotou/Documents/local_codebases/ln_itenary_nov

# Initialize git repository
git init

# Add all files
git add index.html styles.css script.js README.md

# Commit
git commit -m "Initial commit - London itinerary website"

# Create repository on GitHub, then link it
git remote add origin https://github.com/[YOUR-USERNAME]/[REPO-NAME].git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings (as described above)
```

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Choose this folder
3. Publish repository to GitHub
4. Go to GitHub.com → Settings → Pages
5. Enable Pages as described above

## 📁 File Structure

```
ln_itenary_nov/
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS with animations
├── script.js           # Interactive features
└── README.md           # This file (deployment instructions)
```

## 🎯 Itinerary Overview

- **Day 1 (Fri)**: Tower of London → South Bank → SEA LIFE → Westminster
- **Day 2 (Sat)**: Natural History Museum → Science Museum → Winter Wonderland
- **Day 3 (Sun)**: Woburn Safari Park (drive-through)
- **Day 4 (Mon)**: Duck & Waffle → Sky Garden (12:30) → Leadenhall → The Shard
- **Day 5 (Tue)**: Westminster Loop → Trafalgar Square → London Eye at Dusk
- **Day 6 (Wed)**: Choose Greenwich & Docklands OR Bicester Village

## 🎨 Customization

### Change Colors

Edit `styles.css` variables at the top:

```css
:root {
    --primary-color: #1a237e;      /* Main blue */
    --accent-color: #ff1744;       /* Accent red */
    /* ... more colors */
}
```

### Modify Content

Edit `index.html` to update:
- Times and locations
- Add/remove attractions
- Change dates
- Customize hero section

### Add Features

Extend `script.js` to add:
- Weather API integration
- Google Maps embedding
- Countdown timer
- Share buttons

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Experience

- Responsive navigation
- Touch-friendly buttons
- Optimized typography
- Collapsible timeline view

## 🌟 Pro Tips

1. **Bookmarks**: Your booking checkboxes are saved in browser localStorage
2. **Print**: Use `Ctrl/Cmd + P` or the browser print function for a clean copy
3. **Share**: Send the GitHub Pages URL to family/friends
4. **Update**: Push changes to GitHub and they'll appear within minutes

## 📝 License

Free to use and modify for personal use. Feel free to fork and customize!

## 🙏 Credits

Built with modern web technologies:
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)

---

**Enjoy your London adventure! 🎡🏰🎄**

*Starting Point: Canary Wharf, E14 0QL*
*November 21-26, 2025*
