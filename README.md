# React Navbar Layout Kit

A React + Vite starter project with Bootstrap 5 that includes:

- ✅ Offcanvas navigation with dark/light mode toggle (saved to `localStorage`)
- ✅ Theme management via React Context
- ✅ Ready-to-copy layout patterns (grid, cards, forms)
- ✅ Built-in Bootstrap 5 styles and utilities

---

## 🚀 Getting Started

Clone and install dependencies:

```bash
git clone git@github.com:TomCani/react-navbar-layout-kit.git
cd react-navbar-layout-kit
npm install
Run the development server:

npm run dev
Build for production:

npm run build
Preview the production build locally:

npm run preview
📂 Project Structure

react-navbar-layout-kit/
├── index.html              # Root HTML file (mount point for React)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component (wraps ThemeProvider, NavBar, LayoutExamples)
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light theme context provider
│   ├── hooks/
│   │   └── useLocalStorage.jsx # Custom hook for persistent state
│   └── components/
│       ├── NavBar.jsx      # Bootstrap offcanvas navigation
│       └── LayoutExamples.jsx # Demo layout patterns
├── package.json
└── vite.config.js
🌓 Theme Switching
This project uses Bootstrap 5.3’s data-bs-theme attribute for instant light/dark mode support.
The theme preference is persisted in localStorage so your choice survives page reloads.

🛠 Tech Stack
React 18 — UI library

Vite — fast dev server + bundler

Bootstrap 5 — responsive grid + components