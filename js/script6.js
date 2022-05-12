console.log("hola, es module 6");

const myTextEl = document.querySelector(".myText");
// console.log(myTextEl);
// console.log(myTextEl.textContent);

const btnEL = document.querySelector(".btn");

const heroTitleEl = document.querySelector(".hero-title");
// console.log("heroTitle", heroTitleEl);
// console.log(heroTitleEl.textContent);

const myImgEl = document.querySelector(".myImg");
// console.log(myImgEl);

btnEL.addEventListener("click", () => {
  ///// image
  myImgEl.src =
    "https://aussiedlerbote.de/wp-content/uploads/2021/09/shutterstock_1811642401-scaled-e1633007654444.jpg";
  ////// title
  heroTitleEl.textContent = "Dangerous twister";

  ///// input
  const inEL = document.querySelector(".js-input");
  //   console.log(inEL.value);
  //   inEL.value = "aoaoaoaoooao";
});

// console.log(myImgEl.getAttribute("src"));
// console.log(myImgEl.src);
// console.log(myImgEl.hasAttribute("src"));
// myImgEl.removeAttribute("src");

const actions = document.querySelectorAll(".js-action button");
// console.log(actions);
// console.log(actions[0]);
// console.log(actions[0].dataset);
// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);
// console.log(actions[2].dataset.action);
