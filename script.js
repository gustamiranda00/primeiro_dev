document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleTheme");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Alternar Tema" : "🌙 Alternar Tema";
  });
});