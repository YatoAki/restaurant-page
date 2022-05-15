import loadHome from "./home";

function createHeader() {
  const header = document.createElement("div")
  header.classList.add("header")

  const logo = document.createElement("div")
  logo.classList.add("logo")
  logo.textContent = "RAMAN FOR YOU"

  const nav = document.createElement("nav")
  nav.classList.add("nav-links")

  const homeBtn = document.createElement("a")
  homeBtn.textContent = "Home"
  homeBtn.classList.add("button-nav")
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(homeBtn);
    loadHome();
  })

  const foodBtn = document.createElement("a")
  foodBtn.textContent = "Food"
  foodBtn.classList.add("button-nav")
  foodBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(foodBtn);
  })

  const aboutBtn = document.createElement("a")
  aboutBtn.textContent = "About"
  aboutBtn.classList.add("button-nav")
  aboutBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(aboutBtn);
  })

  nav.appendChild(homeBtn);
  nav.appendChild(foodBtn);
  nav.appendChild(aboutBtn);

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  loadHome();

  setActiveButton(document.querySelector(".button-nav"));
}

export default initializeWebsite;
