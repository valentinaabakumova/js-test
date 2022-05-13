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

const refs = {
  list: document.querySelector(".list"),
  text: document.querySelector(".myText"),
};

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  refs.list.append(li);
};

// createListItem("Hello");
// createListItem("Hello2");
// createListItem("Hello3");

const technologies = ["HTML", "CSS", "JS", "React", "Node"];
technologies.forEach((technology) => createListItem(technology));

refs.text.addEventListener("click", () => {
  refs.text.textContent =
    "Dangerous twister is the mos dangerous type of nature angry";
  refs.text.style.fontSize = "30px";
  refs.text.style.color = "tomato";
});

//////////////  create site ////////////

const wrapper = document.querySelector(".wrapper");

const createHeader = () => {
  return `
  <header class='header'>

  <h1>ZAGOLOVOK</h1>
  <button>BUTT On</button>
<button>BUTT Off</button>
<button>BUTT Set</button>
  </header>
  `;
};

wrapper.insertAdjacentHTML("afterbegin", createHeader());

//////////////   new site, my crash vova melnick   //////////

class SiteConstructor {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");
  }

  createHeader = () => {
    return `
    <header class='header'>
        <h1>Trainerz</h1>
        <div class='actions'>
            <button>Google</button>
            <button>App Store</button>
        </div>
    </header>
    `;
  };

  createHeroSection = () => {
    return `
      <section class="hero">
        <h2 class="hero__title">Start to
workout</h2>
        <p class="hero__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <button class="cta">CcccccccTA</button>
        <img src="./images/hero.jpg" alt="training" class="hero__workout">
    </section>
    `;
  };

  render = () => {
    this.wrapper.insertAdjacentHTML("afterbegin", this.createHeader());
    this.wrapper.insertAdjacentHTML("beforeend", this.createHeroSection());
  };
  ////// my test
  change = () => {
    const heroT = document.querySelector(".hero__text");
    heroT.style.color = "tomato";
    const heroB = document.querySelector(".cta");
    heroB.style.backgroundColor = "tomato";

    heroT.addEventListener("click", () => {
      // heroT.textContent =
      //   "Dangerous twister is the mos dangerous type of nature angry";
      heroT.style.fontSize = "30px";
      heroT.style.color = "blue";
    });

    heroB.addEventListener("click", () => {
      // heroT.textContent =
      //   "Dangerous twister is the mos dangerous type of nature angry";
      heroB.style.fontSize = "30px";
      heroB.style.color = "blue";
      heroB.style.backgroundColor = "cyan";
      heroB.style.marginBottom = "20px";

      // <img src="./images/hero.jpg" alt="training" class="hero__workout">
      const heroI = document.querySelector(".hero__workout");
      heroI.src = "./images/hero_2.jpg";
    });
  };

  addNewStyle = () => {
    const heroTitle = document.querySelector(".hero__title");
    heroTitle.addEventListener("click", () => {
      heroTitle.classList.add("new-class");
    });
  };

  // addNewStyleAgain = () => {
  //   const heroTitle2 = document.querySelector(".hero__title");

  //   heroTitle2.classList.add("new-class-again");
  // };
}

const site = new SiteConstructor();

site.render();
site.change();

// site.addNewStyleAgain();
site.addNewStyle();
// const refs = {
//   list: document.querySelector(".list"),
//   text: document.querySelector(".myText"),
// };

// const createListItem = (text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   refs.list.append(li);
// };

// // createListItem("Hello");
// // createListItem("Hello2");
// // createListItem("Hello3");

// const technologies = ["HTML", "CSS", "JS", "React", "Node"];
// technologies.forEach((technology) => createListItem(technology));

// refs.text.addEventListener("click", () => {
//   refs.text.textContent =
//     "Dangerous twister is the mos dangerous type of nature angry";
//   refs.text.style.fontSize = "30px";
//   refs.text.style.color = "tomato";
// });
