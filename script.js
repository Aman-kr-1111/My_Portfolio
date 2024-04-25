// <!----------- Sticky Navbar (Header-Section) ------------>
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// <!----------- Toggle Navbar (Header-Section) ------------>
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// <!----------- Auto Typing Section (Home-Section)------------>

const wordList = ["Frontend_Developer", "Web_Developer"];
const span = document.querySelector(".word");
autoTyping(span, wordList);

function autoTyping(targetElement, wordList) {
  let wordIndex = 0;
  let charIndex = 0;
  let isReverse = false;
  let skip = 0;

  setInterval(() => {
    if (skip) {
      skip--;
      return;
    }

    if (charIndex === wordList[wordIndex].length) {
      isReverse = true;
    }

    if (isReverse) {
      targetElement.innerText = targetElement.innerText.slice(
        0,
        targetElement.innerText.length - 1
      );
    } else {
      targetElement.innerText += wordList[wordIndex][charIndex++];
      skip = 2;
    }

    if (isReverse && targetElement.innerText.length === 0) {
      charIndex = 0;
      wordIndex++;
      isReverse = false;
    }

    if (wordIndex === wordList.length) {
      wordIndex = 0;
    }
  }, 100);
}

// <!----------- Resume function (About-Section) ------------>
function resume() {
  var filePath = "assets/Aman_Resume.pdf";
  var link = document.createElement("a");
  link.href = filePath;
  link.download = "Aman_Resume.pdf";
  link.click();
}

// <!----------- Videos Filter (Projects-Section) ------------>
const videoContainer = document.querySelector("#video-container");
const filterButtons = document.querySelectorAll(".filter-btn");

const videos = {
  all: [
    "assets/Css_Projects/Modern_Buttons.mp4",
    "assets/Css_Projects/Linear_Progress_Bar.mp4",
    "assets/Js_Projects/Auto_Typing.mp4",
    "assets/Js_Projects/Color_Generator.mp4",
    "assets/React_Projects/Bg_Changer.mp4",
    "assets/React_Projects/Top_Courses.mp4",
  ],
  css: [
    "assets/Css_Projects/Frontend_Roadmap.mp4",
    "assets/Css_Projects/Linear_Progress_Bar.mp4",
    "assets/Css_Projects/Modern_Buttons.mp4",
  ],
  js: [
    "assets/Js_Projects/Auto_Typing.mp4",
    "assets/Js_Projects/Color_Generator.mp4",
    "assets/Js_Projects/Counter_App.mp4",
    "assets/Js_Projects/Dark_Mode.mp4",
    "assets/Js_Projects/Dice_Roll.mp4",
  ],
  react: [
    "assets/React_Projects/Bg_Changer.mp4",
    "assets/React_Projects/Password_Generator.mp4",
    "assets/React_Projects/Top_Courses.mp4",
  ],
};

function showVideos(category) {
  videoContainer.innerHTML = "";
  const filteredVideos = videos[category];
  const maxVideos = Math.min(filteredVideos.length, 6);
  for (let i = 0; i < maxVideos; i++) {
    const video = document.createElement("video");
    video.setAttribute("controls", true);
    const source = document.createElement("source");
    source.setAttribute("src", filteredVideos[i]);
    video.appendChild(source);
    videoContainer.appendChild(video);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const category = this.getAttribute("data-filter");
    showVideos(category);
  });
});

// Show all videos initially
showVideos("all");

// <!----------- Connect with Gmail (Projects-Section) ------------>
