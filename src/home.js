import Noodle_pic from "./noodle.jpg"

function createHome() {
  const home = document.createElement("div")
  const ads = document.createElement("div")
  home.classList.add("mid")
  ads.classList.add("ads")
  ads.appendChild(createPara("We know you are"));
  ads.appendChild(createPara("too lazy..."));
  ads.appendChild(createBtn("Order foods"));
  ads.appendChild(createPara("Save the trouble!"));
  home.appendChild(ads)
  home.appendChild(createImg(Noodle_pic,"noodle-pic"));
  return home
}

function createPara(text) {
  const para = document.createElement("p")
  para.textContent = text
  return para
}

function createBtn(text) {
  const btn = document.createElement("button")
  btn.textContent = text
  return btn
}

function createImg(image,id) {
  const img = new Image();
  img.src = image;
  img.setAttribute("id", id);
  return img;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
