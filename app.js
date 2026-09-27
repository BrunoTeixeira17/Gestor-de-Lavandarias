const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("gl-theme") || "light";
if (saved === "dark") root.dataset.theme = "dark";

themeToggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  if (dark) {
    delete root.dataset.theme;
    localStorage.setItem("gl-theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("gl-theme", "dark");
  }
});

const nav = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

function openPage(id) {
  pages.forEach(p => p.classList.toggle("active", p.id === id));
  nav.forEach(n => n.classList.toggle("active", n.dataset.page === id));
  window.scrollTo({top:0, behavior:"smooth"});
}

nav.forEach(n => n.addEventListener("click", () => openPage(n.dataset.page)));
document.querySelectorAll("[data-page-link]").forEach(b => b.addEventListener("click", () => openPage(b.dataset.pageLink)));
