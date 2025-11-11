# London Itinerary Webpage

A static webpage that presents a 6-day travel itinerary for London. The project is built with HTML, CSS, and vanilla JavaScript, and is optimized for deployment on static hosting platforms like GitHub Pages.

## Features

- **Responsive Design**: Adapts to various screen sizes including desktop, tablet, and mobile.
- **Interactive Itinerary**: Daily schedules are presented in collapsible sections for clarity.
- **Booking Checklist**: An interactive checklist to track required bookings, with progress saved to browser localStorage.
- **Sticky Navigation**: A navigation bar remains fixed at the top for easy access to different sections.
- **Smooth Scrolling**: Provides a seamless user experience when navigating between sections.
- **Print-Friendly**: A dedicated print stylesheet ensures a clean, readable output.
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + E`: Expand all sections.
  - `Ctrl/Cmd + C`: Collapse all sections.
  - `Ctrl/Cmd + P`: Open print dialog.

## Project Structure

```
/
├── index.html          # Main HTML document
├── styles.css          # CSS for styling
├── script.js           # JavaScript for interactivity
└── README.md           # Project documentation
```

## Deployment

This project is designed for static hosting services.

### GitHub Pages Deployment Guide

1.  **Create a new public repository** on GitHub.
2.  **Upload the project files** (`index.html`, `styles.css`, `script.js`) to the repository.
3.  Navigate to the repository's **Settings** tab.
4.  In the "Code and automation" section of the sidebar, select **Pages**.
5.  Under "Build and deployment", set the **Source** to "Deploy from a branch".
6.  Set the **Branch** to `main` with the `/(root)` folder.
7.  Click **Save**. The site will be available at `https://<username>.github.io/<repository-name>/`.

## Customization

### 1. Styling
Colors and other style properties can be modified by editing the CSS variables in the `:root` selector at the top of `styles.css`:

```css
:root {
    --primary-color: #8e44ad;
    --primary-light: #9b59b6;
    --accent-color: #3498db;
    --bg-dark: #1c1e26;
    --text-primary: #f0f2f5;
    /* ... etc. */
}
```

### 2. Content
The itinerary details, including dates, times, and locations, can be modified by editing the `index.html` file.

### 3. Functionality
Interactive features are controlled by `script.js`. This file can be extended to add new functionality, such as API integrations or additional user interactions.

## Browser Compatibility

The application is compatible with the latest versions of modern web browsers:
- Chrome / Edge
- Firefox
- Safari

## License

This project is open-source and available for personal use.
