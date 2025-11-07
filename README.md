# 💻 DevPad Pro

DevPad Pro is a lightweight, developer-friendly in-browser notepad for developers, QA engineers, DevOps, and IT professionals. It combines notes, motivational quotes, programming jokes, and automation tips in a clean dark/light UI. All data is saved locally in the browser (no cloud).

---

## 🖥 Features

- Auto-save notes to localStorage (no cloud)
- Dark mode by default; optional light mode
- Random motivational quotes & programming jokes
- MacOS-inspired UI with glassy panels
- Floating controls:
  - Next Motivation 💡
  - Toggle Theme 🌗
  - Clear Notes 🧹
- Developer-friendly text area (JetBrains Mono font)

---

## 🛠 Personalization

To set your name in the app:

1. Open `index.html`
2. Find:
   ```javascript
   const name = "Simhadri";
   ```
3. Replace with your name:
   ```javascript
   const name = "Your Name";
   ```
4. Save and refresh — your personalized greeting will appear.

(You can also update the greeting directly in the UI if the app exposes that control.)

---

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/simhadri07/devpad-pro.git
   cd devpad-pro
   ```
2. Open `index.html` in your browser, or serve the folder and open the served page:
   - Quick (no server):
     - Open the file directly in your browser (file://).
   - Recommended (local HTTP server):
     ```bash
     # Python 3
     python3 -m http.server 8080
     # then open http://localhost:8080 in your browser
     ```
     Or, from the devcontainer host:
     ```bash
     "$BROWSER" http://localhost:8080
     ```
3. DevPad Pro will load `quotes.json` and any saved notes automatically.

---

## 📝 Files

- `index.html` — main app
- `quotes.json` — motivational quotes, jokes, QA & DevOps tips
- `screenshots/` — UI previews

---

## ⚡ Tips

- Press **Next Motivation** to get a new quote.
- Use **Theme toggle** for lighting conditions.
- Notes are stored in localStorage; clearing browser data deletes them.
- Customize `quotes.json` to add your own messages.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE) © 2025 Simhadri
