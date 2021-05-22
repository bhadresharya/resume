let themeMode = localStorage.getItem("themeMode");

if (themeMode == "dark") {
  document.getElementById("dark-mode-switch").checked = true;
  document.body.classList.add("dark-mode");
} else if (themeMode == "light") {
  document.body.classList.remove("dark-mode");
}
document.querySelector("input").addEventListener("input", ({ target }) => {
  if (target.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("themeMode", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("themeMode", "light");
  }
});