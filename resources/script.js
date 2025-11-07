// DevPad Pro — Script.js
const notesArea = document.getElementById('notes');
const motivationDiv = document.getElementById('motivation');
const greetingDiv = document.getElementById('greeting');

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "Dream big, code bigger!",
  "One commit at a time — progress!",
  "Every bug is just an opportunity to learn.",
  "Keep coding. Keep growing."
];

// Load saved notes
notesArea.value = localStorage.getItem('devpad-notes') || '';

// Auto-save notes
notesArea.addEventListener('input', () => {
  localStorage.setItem('devpad-notes', notesArea.value);
});

// Greeting message
function updateGreeting() {
  const hour = new Date().getHours();
  let message = "Hey, Developer 👋";
  if (hour < 12) message = "Good Morning ☀️";
  else if (hour < 18) message = "Good Afternoon 🌤️";
  else message = "Good Evening 🌙";
  greetingDiv.textContent = message;
}

// Motivation
function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  motivationDiv.textContent = `"${quote}"`;
  motivationDiv.classList.add('fade-in');
  setTimeout(() => motivationDiv.classList.remove('fade-in'), 600);
}

// Clear notes
document.getElementById('clearNotesBtn').addEventListener('click', () => {
  if (confirm('Clear all notes?')) {
    notesArea.value = '';
    localStorage.removeItem('devpad-notes');
  }
});

// Toggle theme
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Restore theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

// Show random quote
document.getElementById('nextQuoteBtn').addEventListener('click', showRandomQuote);

// Initial load
updateGreeting();
showRandomQuote();