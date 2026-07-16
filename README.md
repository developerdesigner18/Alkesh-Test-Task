# Alkesh Gupta — Personal Portfolio & Brand Soul Showcase

An interactive, premium single-page web portfolio built with **React**, **Vite**, and **Tailwind CSS v4** featuring custom typography and motion animations.

## 🚀 Tech Stack
* **Frontend Library:** React 19
* **Styling Framework:** Tailwind CSS v4 (with `@theme` variables)
* **Build Tool:** Vite 8
* **Animations:** Framer Motion 12
* **Sliders:** React Slick & Slick Carousel

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd ag
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the Vite development server locally:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build
To generate the optimized production build:
```bash
npm run build
```
The output assets will be created in the `dist` directory. You can preview the production bundle using:
```bash
npm run preview
```

---

## 📂 Project Structure
```text
src/
├── assets/          # Static assets (fonts, images)
├── components/      # UI and section-level components
│   ├── Brands/      # Brand case study section with expand transitions
│   ├── Manifesto/   # Brand Soul Manifesto section with sweep highlights
│   ├── SoulBehind/  # Movie credit crawl scroll section
│   └── ui/          # Reusable structural components (e.g. RevealText)
├── constants/       # Text copies and configuration data
├── hooks/           # Custom React hooks
├── index.css        # Base Tailwind imports and font declarations
├── main.jsx         # Application entry point
└── App.jsx          # Main root layout router
```
