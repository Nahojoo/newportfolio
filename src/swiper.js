const swiper = new Swiper(".swiper", {
  mousewheel: {
    EventTarget: ".project-section",
    releaseOnEdges: true,
    sensitivity: 0.5,
  },
  spaceBetween: 20,
  // 스크롤
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // prev, next
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 높이 맞추기
  on: {
    init: function () {
      const cards = document.querySelectorAll(".swiper-slide .project");
      let maxHeight = 0;

      // 높이 초기화 (resize 대응)
      cards.forEach((card) => {
        card.style.height = "auto";
      });

      // 최대 높이 찾기
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });

      // 모두 같은 높이로 설정
      cards.forEach((card) => {
        card.style.height = maxHeight + "px";
      });
    },
    resize: function () {
      const cards = document.querySelectorAll(".swiper-slide .project");
      let maxHeight = 0;

      // 높이 초기화 (resize 대응)
      cards.forEach((card) => {
        card.style.height = "auto";
      });

      // 최대 높이 찾기
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });

      // 모두 같은 높이로 설정
      cards.forEach((card) => {
        card.style.height = maxHeight + "px";
      });
    },
  },
  // 반응형
  breakpoints: {
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
