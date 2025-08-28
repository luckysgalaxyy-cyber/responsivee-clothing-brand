window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const theme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = theme;
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
});
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
