import noodle1 from "./n1.jpg"
import noodle2 from "./n2.jpeg"
import noodle3 from "./n3.jpeg"
import noodle4 from "./n4.jpeg"

function createFood() {
  const foods = document.createElement("div");
  foods.classList.add("foods");

  const details = document.createElement("div");
  details.classList.add("details");
  details.appendChild(createPara("Are your hungry?"));
  details.appendChild(createPara("Take a look at our menu..."));

  foods.appendChild(details);

  const foodCards = document.createElement("div");
  foodCards.classList.add("food-cards");

  foods.appendChild(foodCards);

  let foodData = [[noodle1,"NongShim Chapagetti","10$"],
                  [noodle2,"Paldo Jjajangmen","13.2$"],
                  [noodle4,"NongShim Zha Wang","13.2$"],
                  [noodle1,"NongShim Chapagetti","14.5$"],
                  [noodle2,"Paldo Jjajangmen","13.2$"],
                  [noodle2,"Paldo Jjajangmen","15.9$"],
                  [noodle4,"NongShim Zha Wang","13.2$"],
                  [noodle1,"NongShim Chapagetti","17$"],
                  [noodle2,"Paldo Jjajangmen","13.2$"]]

  foodData.forEach((food) => {
    let img = createImg(food[0]);
    let name = food[1];
    let price = food[2];
    foodCards.appendChild(createFoodCard(img,name,price));
  });

  return foods;
}

function createFoodCard(image,name,price) {
  const card = document.createElement("div");
  card.classList.add("food-card");
  card.appendChild(image);
  const food_des = document.createElement("div");
  food_des.classList.add("food-description");
  food_des.appendChild(createPara(name));
  food_des.appendChild(createPara(price));
  card.appendChild(food_des);
  return card;
}

function createPara(text) {
  const para = document.createElement("p")
  para.textContent = text
  return para
}

function createImg(image) {
  const img = new Image();
  img.src = image;
  return img;
}

function loadFood() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createFood());
}

export default loadFood;
