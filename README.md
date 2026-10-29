# ⚡ Smart Compiler (PRO) - Online Multi-Language Cloud IDE

> Engineered & Created by **[Archit Bishnoi](https://github.com/Archit0029)**
>
> Inspired by [Programiz](https://www.programiz.com/online-compiler), Smart Compiler is a high-performance, zero-installation online code editor and compiler supporting 16+ programming languages, interactive standard input (stdin), real-time web development preview, and VS Code-grade Monaco editing.

[![Smart Compiler](https://img.shields.io/badge/Smart%20Compiler-v2.0%20Pro-3b82f6?style=for-the-badge&logo=visualstudiocode)](https://smartcompiler-swart.vercel.app/)
[![Created By Archit Bishnoi](https://img.shields.io/badge/Created%20By-Archit%20Bishnoi-10b981?style=for-the-badge&logo=github)](https://github.com/Archit0029)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Website-blueviolet?style=for-the-badge&logo=vercel)](https://architbishnoi-portfolio.vercel.app/)
[![Languages](https://img.shields.io/badge/Languages-16%2B%20Supported-purple?style=for-the-badge)](#-supported-languages)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?style=for-the-badge&logo=vercel)](#-deploying-to-vercel)

---

## 👨‍💻 About the Creator: Archit Bishnoi

**Archit Bishnoi** is a passionate software engineer and full-stack web developer dedicated to building intuitive, high-performance developer tools, compilers, and cloud systems.

- **🌐 Portfolio Website**: [architbishnoi-portfolio.vercel.app](https://architbishnoi-portfolio.vercel.app/)
- **🐙 GitHub Profile**: [github.com/Archit0029](https://github.com/Archit0029)
- **Role**: Software Engineer & Full Stack Developer
- **Project**: Creator & Lead Architect of **Smart Compiler**

---

## 🌟 Key Features

- **🚀 16+ Programming Languages & Runtimes**:
  - **Python 3** (Python 3.12)
  - **C++** (GCC 14.1 with modern C++20/C++23)
  - **C** (GCC 14.1 with stdio & pointers)
  - **Java** (OpenJDK / JDK 17)
  - **JavaScript** (Node.js 22 + Sandboxed In-Browser VM)
  - **Web Development Lab** (Live HTML5, CSS3, JavaScript preview)
  - **TypeScript** (5.6 strict typing)
  - **C#** (.NET / Mono)
  - **Go** (Golang 1.23)
  - **Rust** (Rust 1.85 memory-safe concurrency)
  - **SQL** (SQLite 3 relational database)
  - **PHP** (8.3)
  - **Ruby** (2.7)
  - **Kotlin** (2.1)
  - **Swift** (5.2)
  - **Bash** (Linux Shell 5.0)

- **⚡ Dual-Mode Workspace**:
  - **Compiler Mode**: Monaco Editor (VS Code engine) with terminal output, execution metrics, and standard input.
  - **Web Lab Mode**: 3-tab editor (HTML/CSS/JS) with live sandbox `<iframe>` preview, responsive viewport switcher (Desktop, Tablet, Mobile), and auto-preview.

- **⌨️ Interactive Standard Input (STDIN)**:
  - Supports user input for `cin`, `scanf`, `input()`, `Scanner`, etc. via the collapsible input drawer.

- **📊 Execution Diagnostics & Metrics**:
  - Displays real-time execution duration (in seconds/milliseconds) and memory usage.
  - Syntax error highlighting, compilation errors, and runtime traceback displays.

- **🎨 Modern Developer Tools**:
  - **Themes**: VS Code Dark, VS Light, High Contrast.
  - **Code Formatter**: One-click code beautification.
  - **Pre-built Templates**: Hello World, User Input / Math, Fibonacci, Arrays, OOP examples.
  - **Local Persistence**: Code is automatically preserved in `localStorage` across page reloads per language.
  - **File Operations**: Download code file (`.py`, `.cpp`, `.java`, etc.) or upload local files.
  - **Keyboard Shortcuts**:
    - `Ctrl + Enter` / `Cmd + Enter` : Run Code
    - `Ctrl + S` : Download File
    - `Ctrl + L` : Clear Terminal
    - `Esc` : Close open modals

---

## 🔍 SEO & Google Search Console Integration

Smart Compiler is fully SEO-optimized out of the box to rank for both **"Archit Bishnoi"** and **"online compiler"** queries:

1. **Structured Data (JSON-LD)**:
   - Includes Google-recommended `WebApplication` schema and `Person` schema associating **Archit Bishnoi** with Smart Compiler in the Google Knowledge Graph.
2. **Metadata & OpenGraph**:
   - Comprehensive `title`, `description`, `keywords`, `robots`, and social sharing cards (`og:*`, `twitter:*`).
3. **Sitemap & Robots**:
   - Includes standard [`sitemap.xml`](file:///c:/Users/bishnoi/OneDrive/Desktop/Smart_compilor/sitemap.xml) and [`robots.txt`](file:///c:/Users/bishnoi/OneDrive/Desktop/Smart_compilor/robots.txt).
4. **Google Search Console Verification Tag**:
   - In `index.html` line 26:
     ```html
     <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN">
     ```

---

## 🚀 How to Deploy on Vercel (Step-by-Step)

Deploying Smart Compiler to Vercel takes less than 2 minutes:

### Method 1: Deploy with Git (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Launch Smart Compiler by Archit Bishnoi"
   git branch -M main
   git remote add origin https://github.com/Archit0029/Smart-Compiler.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** > **Project**.
   - Select your `Smart-Compiler` repository and click **Import**.
   - Leave Framework Preset as **Other** (Static Site).
   - Click **Deploy**.
3. **Live URL**:
   - Vercel will instantly generate a live URL: `https://smartcompiler-swart.vercel.app`.

### Method 2: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```
Follow the simple CLI prompts, and your site is live!

---

## 📈 Connecting to Google Search Console (GSC)

Once your website is deployed on Vercel:

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and select **URL prefix** (e.g. `https://smartcompiler-swart.vercel.app/`).
3. Under **HTML tag** verification method, copy the verification code string (the value inside `content="..."`).
4. Paste your verification string into `index.html` on line 26:
   ```html
   <meta name="google-site-verification" content="YOUR_COPIED_TOKEN_HERE">
   ```
5. Commit and push the change to GitHub (Vercel will auto-redeploy in seconds).
6. Return to Google Search Console and click **Verify**.
7. In the left sidebar of Google Search Console, go to **Sitemaps** and submit `sitemap.xml` (e.g. `https://smartcompiler-swart.vercel.app/sitemap.xml`).
8. Googlebot will begin indexing your site for **Archit Bishnoi**, **Smart Compiler**, and all language compiler queries!

---

## 📂 Project Structure

```text
Smart-Compiler/
├── index.html                  # Main production application & SEO entrypoint
├── style.css                   # Custom styling, terminal themes, responsive layouts
├── app.js                      # Core compiler engine, Monaco integration & Judge0 API
├── vercel.json                 # Vercel deployment configuration & caching headers
├── robots.txt                  # Search engine crawling rules & sitemap pointer
├── sitemap.xml                 # XML sitemap for Google Search Console
└── README.md                   # Project documentation & deployment guide
```

---

## 🛡️ License
Open source under the [MIT License](LICENSE). Engineered and maintained by [Archit Bishnoi](https://github.com/Archit0029).
