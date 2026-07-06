# Customer Success & Automation Portfolio — Abdel Arbaoui

Welcome to my technical demo portfolio. This repository brings together interactive tools designed to optimize Customer Success operations and automate business workflows.

## 📸 Visual Overview

![Portfolio overview](assets/vue_d_ensemble.png)

<p align="center">
  <img src="assets/money_tracker.png" width="49%" alt="Money Tracker dashboard" />
  <img src="assets/cs_analytics.png" width="49%" alt="CS Analytics dashboard" />
</p>

<p align="center">
  <i>Left: Money Tracker (personal project). Right: CS Analytics (reporting engine).</i>
</p>

> 🎥 **Demo animation:** [Watch the interactive portfolio recording (WebP)](assets/demo_recording.webp)

## 📂 Repository Structure

The portfolio uses a modular structure. Each project remains independent while being accessible from the main portal:

```text
portfolio-portal/
├── index.html               # Main navigation portal using iframes
├── README.md                # Project documentation
├── assets/                  # Screenshots and demo media
└── apps/
    ├── money-tracker/
    │   └── index.html       # Money Tracker interactive application
    ├── CS-Analytics/
    │   └── index.html       # CS Analytics interactive application
    └── SAP-Dashboards/
        └── index.html       # SAP Dashboards interactive case study
```

---

## 🚀 Running the Portfolio

1. Open the `portfolio-portal` directory.
2. Open or double-click [index.html](index.html).
3. Explore the three project experiences from the main portal.
4. Use the `FR/EN` button to change the language across the portal and all project pages.

---

## 📊 Featured Projects

### 1. Money Tracker — Personal Wealth Management

A personal finance and investment portfolio tracker designed to run entirely offline.

- **Core features:** Multiple-account tracking, asset management for stocks and cryptocurrencies, recurring subscription calendar, and 30-year compound-interest simulations.
- **Technologies:** HTML/JavaScript, Tailwind CSS, Chart.js CDN, persistent LocalStorage, and local FastAPI simulations.

### 2. CS Analytics — Customer Success Operations & Automation

A business analytics dashboard that consolidates log exports and transforms them into client activity reports in PowerPoint format.

- **Core features:** SecureDrive and TeamChat usage analytics, a Postman-style request console with secure mTLS authentication, a dual-screen presentation mode, a collaborative Kanban task board, a shared team calendar, Notion-style CRM views, and a global command palette (`Ctrl+K`).
- **Technologies:** pandas, python-pptx, WebView2 through PyWebView, vanilla CSS, and decentralized JSON synchronization.

### 3. SAP Dashboards — Financial Reporting Automation

A standalone Excel workbook that turns SAP General Ledger exports into a structured, multi-period Magnitude balance sheet.

- **Core features:** Side-by-side period imports, hierarchical account mapping, absolute and percentage variance analysis, balance controls, period management, and one-click PDF export.
- **Technologies:** Excel, VBA, native workbook modules, and a dependency-free TreeView.
- **Privacy:** The public portfolio uses fictional figures only. The operational workbook and financial data are not included in this repository.

---

## 🛡️ Engineering Principles

- **100% client-side and offline:** All analytics and financial data remain local. No data is transmitted to third-party public cloud services.
- **Quality and reliability:** More than 210 Python unit tests cover calculation algorithms, data merging, decentralized syncing, and concurrent timestamp resolution.
- **Modern user experience:** A consistent dark theme, micro-interactions, responsive interfaces, global search shortcuts, and seamless iframe integration for presentations.

---

## ✉️ Contact

- **LinkedIn:** [Abdelkader Arbaoui](https://www.linkedin.com/in/abdelkader-arbaoui-423852197/)
- **GitHub:** [AbdelArbaoui](https://github.com/AbdelArbaoui)
- **Email:** [abdelarbb@gmail.com](mailto:abdelarbb@gmail.com)
