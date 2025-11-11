/**
 * London Family Adventure - Interactive Features
 * Collapsible sections, persistent bookings, smooth scrolling
 */

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeCollapsibleSections();
    loadBookingState();
    initializeSmoothScrolling();
    initializeBookingCheckboxes();
    initializeHeroButtons();

    // Attach theme toggle
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Show first day by default
    const firstDay = document.querySelector('.day-content');
    if (firstDay) {
        firstDay.classList.add('active');
    }
});

// =====================================================
// COLLAPSIBLE DAY SECTIONS
// =====================================================
function initializeCollapsibleSections() {
    const dayHeaders = document.querySelectorAll('.day-header');

    dayHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            toggleDay(header.closest('.day-section').id);
        });

        // Keyboard accessibility
        header.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDay(header.closest('.day-section').id);
            }
        });

        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
    });
}

function toggleDay(dayId) {
    const section = document.getElementById(dayId);
    if (!section) return;

    const header = section.querySelector('.day-header');
    const content = section.querySelector('.day-content');

    if (!content) return;

    const isActive = content.classList.contains('active');

    // Toggle active state
    if (isActive) {
        content.classList.remove('active');
        header.classList.add('collapsed');
        header.setAttribute('aria-expanded', 'false');
    } else {
        content.classList.add('active');
        header.classList.remove('collapsed');
        header.setAttribute('aria-expanded', 'true');
    }

    // Smooth scroll to section if opening
    if (!isActive) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// =====================================================
// BOOKING CHECKLIST PERSISTENCE
// =====================================================
function initializeBookingCheckboxes() {
    const checkboxes = document.querySelectorAll('.booking-item input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            saveBookingState();
            updateBookingProgress();

            // Animate the parent item
            const item = e.target.closest('.booking-item');
            if (e.target.checked) {
                item.style.opacity = '0.7';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 300);
            }
        });
    });

    updateBookingProgress();
}

function saveBookingState() {
    const checkboxes = document.querySelectorAll('.booking-item input[type="checkbox"]');
    const state = {};

    checkboxes.forEach(checkbox => {
        state[checkbox.id] = checkbox.checked;
    });

    try {
        localStorage.setItem('londonItineraryBookings', JSON.stringify(state));
    } catch (e) {
        console.warn('Could not save booking state to localStorage:', e);
    }
}

function loadBookingState() {
    try {
        const savedState = localStorage.getItem('londonItineraryBookings');
        if (!savedState) return;

        const state = JSON.parse(savedState);

        Object.keys(state).forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = state[checkboxId];
            }
        });

        updateBookingProgress();
    } catch (e) {
        console.warn('Could not load booking state from localStorage:', e);
    }
}

function updateBookingProgress() {
    const checkboxes = document.querySelectorAll('.booking-item input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

    // Could add a progress indicator here if desired
    console.log(`Bookings: ${checked}/${total} completed`);
}

function resetBookings() {
    if (confirm('Reset all booking checkboxes? This will clear your progress.')) {
        const checkboxes = document.querySelectorAll('.booking-item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            // Don't reset the confirmed Sky Garden booking
            if (checkbox.id !== 'booking4') {
                checkbox.checked = false;
            }
        });

        saveBookingState();
        updateBookingProgress();

        // Animate reset
        document.querySelectorAll('.booking-item').forEach(item => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 200);
        });
    }
}

// =====================================================
// SMOOTH SCROLLING
// =====================================================
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Open the section if it's a day section
                const content = targetSection.querySelector('.day-content');
                if (content && !content.classList.contains('active')) {
                    content.classList.add('active');
                    const header = targetSection.querySelector('.day-header');
                    if (header) {
                        header.classList.remove('collapsed');
                        header.setAttribute('aria-expanded', 'true');
                    }
                }

                // Smooth scroll
                const offset = 80; // Account for sticky nav
                const targetPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                navLinks.forEach(l => l.parentElement.classList.remove('active'));
                link.parentElement.classList.add('active');
            }
        });
    });
}

// =====================================================
// INTERSECTION OBSERVER FOR NAV HIGHLIGHTING
// =====================================================
const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (navLink) {
                document.querySelectorAll('.nav-links li').forEach(li => {
                    li.classList.remove('active');
                });
                navLink.parentElement.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all day sections
document.querySelectorAll('.day-section, .bookings-section').forEach(section => {
    observer.observe(section);
});

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Expand all sections (useful for printing or full view)
function expandAll() {
    document.querySelectorAll('.day-content').forEach(content => {
        content.classList.add('active');
        const header = content.closest('.day-section')?.querySelector('.day-header');
        if (header) {
            header.classList.remove('collapsed');
            header.setAttribute('aria-expanded', 'true');
        }
    });
}

// Collapse all sections
function collapseAll() {
    document.querySelectorAll('.day-content').forEach(content => {
        content.classList.remove('active');
        const header = content.closest('.day-section')?.querySelector('.day-header');
        if (header) {
            header.classList.add('collapsed');
            header.setAttribute('aria-expanded', 'false');
        }
    });
}

// Print-friendly view
function printItinerary() {
    expandAll();
    setTimeout(() => {
        window.print();
    }, 500);
}

// Initialize hero action buttons
function initializeHeroButtons() {
    const expandBtn = document.querySelector('.hero-actions .btn.primary');
    const collapseBtn = document.querySelectorAll('.hero-actions .btn')[1];
    const printBtn = document.querySelector('.hero-actions .btn.outline');

    if (expandBtn) {
        expandBtn.addEventListener('click', expandAll);
    }
    if (collapseBtn) {
        collapseBtn.addEventListener('click', collapseAll);
    }
    if (printBtn) {
        printBtn.addEventListener('click', printItinerary);
    }
}

// Export functions to global scope for HTML onclick handlers
window.toggleDay = toggleDay;
window.resetBookings = resetBookings;
window.expandAll = expandAll;
window.collapseAll = collapseAll;
window.printItinerary = printItinerary;

// =====================================================
// THEME HANDLING
// =====================================================
function initializeTheme() {
    try {
        const saved = localStorage.getItem('londonTheme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved || (prefersDark ? 'dark' : 'light');
        setTheme(theme);
    } catch (_) {
        setTheme('dark');
    }
}

function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('londonTheme', theme); } catch (_) { }

    const btn = document.querySelector('.theme-toggle');
    if (btn) {
        btn.textContent = theme === 'dark' ? '☀' : '☾';
        btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
        btn.title = btn.getAttribute('aria-label');
    }

    // Update theme-color meta for mobile browsers
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
        meta.setAttribute('content', theme === 'dark' ? '#1c1e26' : '#ffffff');
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

// =====================================================
// SERVICE WORKER REGISTRATION (Optional PWA support)
// =====================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable offline support
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// =====================================================
// KEYBOARD SHORTCUTS
// =====================================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + E: Expand all
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        expandAll();
    }

    // Ctrl/Cmd + C: Collapse all
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        collapseAll();
    }

    // Ctrl/Cmd + P: Print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printItinerary();
    }
});

// =====================================================
// SCROLL TO TOP BUTTON (Optional enhancement)
// =====================================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
}

createScrollToTopButton();
