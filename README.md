# 🤖 Mohammad Shadat | ML Engineer Portfolio

[![React](https://img.shields.io/badge/React-19-blue?logo=react&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Rapid-purple?logo=vite&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38bdf8?logo=tailwindcss&style=for-the-badge)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Visuals-black?logo=three.js&style=for-the-badge)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-green?logo=greensock&style=for-the-badge)](https://greensock.com/)

> **A futuristic, immersive, and high-performance portfolio website showcasing Machine Learning expertise through modern web technologies.**

---

## ✨ Overview

This project is a cutting-edge portfolio specifically designed for a Machine Learning Engineer. It moves beyond static resumes, offering a **cinematic and interactive experience**. 

Built with **React 19** and the **Vite** ecosystem, it leverages **Three.js (@react-three/fiber)** for stunning 3D visual storytelling and **GSAP** for award-winning smooth animations. The design is fully responsive, powered by the latest **Tailwind CSS v4**.

---

## 🚀 Key Features

*   **🌌 Immersive 3D Hero**: A fully interactive 3D background that reacts to user input, built with `react-three/fiber` and `maath`.
*   **🎬 Cinematic Animations**: Silky smooth entrance and scroll animations powered by `GSAP` (GreenSock).
*   **⚡ Blazing Fast**: Powered by **Vite**, ensuring instant HMR (Hot Module Replacement) and optimized production builds.
*   **📱 Fully Responsive**: A seamless experience across all devices (Mobile, Tablet, Desktop) using **Tailwind CSS**.
*   **🎨 Modern Dark Aesthetic**: A sleek, professional dark-themed UI focused on readability and visual impact.
*   **🧩 Component-Based**: Clean, modular architecture using React best practices.

---

## 🛠️ Tech Stack

This project uses the most modern tools available in the web development ecosystem:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core** | **React 19** | The latest version of the library for web and native user interfaces. |
| **Build Tool** | **Vite** | Next Generation Frontend Tooling. |
| **Styling** | **Tailwind CSS v4** | A utility-first CSS framework for rapid UI development. |
| **Animation** | **GSAP** | Professional-grade animation for the modern web. |
| **3D Graphics** | **Three.js / Fiber** | 3D rendering engine and its React renderer. |
| **Icons** | **Lucide React** | Beautifully simple, pixel-perfect icons. |
| **Routing** | **React Router DOM** | Client-side routing for seamless navigation. |

---

## 📦 Installation & Setup

Follow these steps to get the project running locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 18+ recommended)
*   npm or yarn

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-v2.git
    cd portfolio-v2
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    Start the local development server with HMR.
    ```bash
    npm run dev
    ```
    > The app will run at `http://localhost:5173/` (usually).

4.  **Build for Production**
    To create an optimized production build:
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

```bash
portfolio-v2/
├──  public/              # Static assets (favicons, images)
├── src/
│   ├── components/      # Reusable React components (Hero, Navbar, etc.)
│   ├── assets/          # Imported assets (images, fonts)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # You are here!
```

---

## 🎨 Customization

### Changing the 3D Model
Modify the `Hero.jsx` component to swap out the 3D mesh or effect. We use `@react-three/drei` for helpers.

### Updating Colors
The project uses Tailwind CSS. You can customize the look instantly by changing Tailwind utility classes or updating the theme configuration in the CSS.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements:

1.  Fork the repo.
2.  Create a fresh branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ by **Mohammad Shadat**
