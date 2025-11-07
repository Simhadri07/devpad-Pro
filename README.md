# 💻 DevPad Pro

**DevPad Pro** is a sleek, in-browser notepad designed for developers, QA engineers, DevOps, and IT professionals. It combines a clean, modern interface with features tailored for programmers:

- **Programmer-friendly editor**: Monospaced font, syntax-friendly indentation, and color schemes suitable for coding.  
- **Dark mode by default**: Gentle on the eyes for long coding sessions, with optional light mode toggle.  
- **Auto-saving notes**: Stores your notes locally in the browser — 100% private, no cloud required.  
- **Motivation & humor**: Random developer quotes, DevOps tips, and programming jokes to keep you inspired.  
- **Interactive UI**: Small floating buttons with icons for quick actions: next quote, toggle theme, clear notes.  
- **Responsive design**: Works beautifully on desktops, laptops, and tablets.  
- **Customizable**: Add your own quotes, change greetings, or tweak styles easily.  

**Use Cases:**
- Personal coding notes  
- Quick ideas and snippets  
- Daily motivation for developers  
- QA automation reminders  
- DevOps tips & tricks  

**🔗 Live Demo:** [DevPad Pro on GitHub Pages](https://simhadri07.github.io/devpad-Pro/)

---

## Getting Started

You can use DevPad Pro directly via GitHub Pages or run locally:

### **Option 1: Live Demo**
Simply open the [GitHub Pages link](https://simhadri07.github.io/devpad-Pro/) in your browser.

### **Option 2: Run Locally**
1. Clone the repository:

```bash
git clone https://github.com/Simhadri07/DevPad-Pro.git
cd DevPad-Pro
````

2. Open `index.html` in your browser (quick, no server needed)
   **OR** serve with a local HTTP server (recommended):

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

3. From a devcontainer or terminal, you can also open in the default browser:

```bash
"$BROWSER" http://localhost:8080
```

---

## Configuration

* **Change greeting name:**
  Open `index.html` and update the `name` variable in the script section:

```javascript
const name = "Simhadri"; // Change this to your name
```

* **Add your own quotes:**
  Update `quotes.json` with your favorite quotes, jokes, or motivational messages.

---

## Features

* Dark/light theme toggle
* Auto-save notes in browser localStorage
* Random developer quotes with animations
* Programmer-friendly font & color theme
* Small floating buttons for quick actions (Next Quote, Toggle Theme, Clear Notes)
* Responsive layout

---

## AI Assistance

Some parts of **DevPad Pro** — including UI design suggestions, motivational quotes, and README content — were assisted by AI. This helped streamline development, improve UX, and craft meaningful documentation.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**Enjoy with DevPad Pro!** 🚀
