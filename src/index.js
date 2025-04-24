import "./gsap.js";
import "./swiper.js";

gsap.registerPlugin(ScrollTrigger);

// 위로 올라가기
let topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 해당 구역 커서 커스텀
const area = document.querySelector(".custom-cursor-area");
const text = document.querySelector(".custom-cursor");

area.addEventListener("mouseenter", () => {
  text.style.display = "flex";
});

area.addEventListener("mouseleave", () => {
  text.style.display = "none";
});

area.addEventListener("mousemove", (e) => {
  const rect = area.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  text.style.left = `${x}px`;
  text.style.top = `${y}px`;
});

// 스크롤 다운
const scrollDownBtn = document.querySelector(".btn-scrolldown");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    scrollDownBtn.classList.remove("hidden");
  } else {
    scrollDownBtn.classList.add("hidden");
  }
});

//타이핑
const typingText = "성장하는 웹퍼블리셔";
let textElement = document.querySelector(".intro-section__typing");
let index = 0;

function typing() {
  if (index < typingText.length) {
    textElement.textContent += typingText.charAt(index);
    textElement.style.width = textElement.scrollWidth + 4 + "px";

    index++;
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      textElement.style.width = "0px";

      index = 0;
    }, 300);
  }
}
setInterval(typing, 300);

const slides = document.querySelectorAll(".swiper-slide");
const imgElement = document.createElement("img");
const inner = document.querySelector(".projects-section__inner");

inner.appendChild(imgElement);
imgElement.classList.add("hover-img");

if (window.innerWidth >= 768) {
  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      const imgSrc = slide.dataset.img;
      imgElement.setAttribute("src", imgSrc);
      imgElement.classList.add("active");
    });

    slide.addEventListener("mousemove", (e) => {
      const rect = inner.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      imgElement.style.top = `${offsetY + 100}px`;
      imgElement.style.left = `${offsetX + 30}px`;
    });

    slide.addEventListener("mouseleave", () => {
      imgElement.classList.remove("active");
    });
  });
}
