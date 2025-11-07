const notesEl = document.getElementById('notes');
const motivationEl = document.getElementById('motivation');
const greetingEl = document.getElementById('greeting');

// Restore notes
notesEl.value = localStorage.getItem('myNotes') || '';
notesEl.addEventListener('input', () => localStorage.setItem('myNotes', notesEl.value));

// Greeting
function getGreeting(name) {
  const h = new Date().getHours();
  if (h < 12) return `🌅 Good morning, ${name}! Time to make something awesome.`;
  else if (h < 18) return `☀️ Afternoon grind, ${name}! Keep shipping greatness.`;
  else return `🌙 Good evening, ${name}!`;
}

// Load Quotes
let quotes = [];
async function loadQuotes() {
  try {
    const res = await fetch('quotes.json');
    if (!res.ok) throw new Error('No quotes.json found');
    quotes = await res.json();
  } catch {
    quotes = [
      "Write code that makes your future self proud. 💻",
      "Real devs ship before they sleep. 🚀",
      "Log once, learn forever. 📜",
      "You are one refactor away from brilliance. ✨",
      "Push positivity with your commits. 🌈"
    ];
  }
  showRandomQuote();
}

// Show random quote
function showRandomQuote() {
  if (!quotes.length) return;
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  motivationEl.textContent = q;
  motivationEl.classList.remove('fade-in');
  void motivationEl.offsetWidth;
  motivationEl.classList.add('fade-in');
}

// Buttons
document.getElementById('nextQuoteBtn').addEventListener('click', showRandomQuote);
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
document.getElementById('clearNotesBtn').addEventListener('click', () => {
  if (confirm('Clear all your notes?')) {
    localStorage.removeItem('myNotes');
    notesEl.value = '';
  }
});

// Remember theme, default dark
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');

// Init
const name = "Simhadri"; // <- Update your name here!
greetingEl.textContent = getGreeting(name);
loadQuotes();
