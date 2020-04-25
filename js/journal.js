const switchToggle = () => {
  const toggle = document.getElementById("toggle").classList;
  if (toggle.contains("fa-sun")) {
    toggle.remove("fa-sun");
    toggle.add("fa-moon");
  } else {
    toggle.remove("fa-moon");
    toggle.add("fa-sun");
  }
};

const switchMode = () => {
  const body = document.body.classList;

  if (body.contains("dark")) {
    localStorage.setItem("mode", "light");
    body.remove("dark");
    switchToggle();
  } else {
    localStorage.setItem("mode", "dark");
    body.add("dark");
    switchToggle();
  }
};

window.addEventListener("DOMContentLoaded", event => {
  const body = document.body.classList;
  const toggle = document.getElementById("toggle").classList;

  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (localStorage.getItem("mode") === null && darkMode)
    localStorage.setItem("mode", "dark");

  if (localStorage.getItem("mode") == "light") {
    body.remove("dark");
    toggle.remove("fa-sun");
    toggle.add("fa-moon");
  } else {
    body.add("dark");
    toggle.remove("fa-moon");
    toggle.add("fa-sun");
  }
});

window.onload = () => {
  document.getElementById("toggle").onclick = () => {
    switchMode();
    console.log("Mode: ", localStorage.getItem("mode"));
  };
};
