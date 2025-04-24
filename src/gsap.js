document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // 위로 가기
  gsap.fromTo(
    ".top-btn",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.2,
      scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: "+=200",
        scrub: 1,
      },
    }
  );

  // 헤더 애니메이션
  ScrollTrigger.create({
    start: "top -80",
    end: () => {
      return document.body.scrollHeight;
    },
    toggleClass: {
      className: "scrolled",
      targets: "header",
    },
  });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 500px)", () => {
    // profile-section 스크롤이벤트
    const allTitles = gsap.utils.toArray(".profile-section__block");
    const sideItems = gsap.utils.toArray(".side-item");
    const inner = document.querySelector(".profile-section__inner");
    const side = document.querySelector(".side-list");

    ScrollTrigger.create({
      trigger: inner,
      start: "top top",
      end: () => {
        return inner.offsetHeight - side.offsetHeight + "px";
      },
      pin: side,
      pinSpacing: false,
    });

    allTitles.forEach((title, index) => {
      ScrollTrigger.create({
        trigger: title,
        start: "top 20%",
        end: () => "+=" + title.offsetHeight / 2,
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
        //markers: true,
      });
    });

    function setActive(index) {
      sideItems.forEach((elm, i) => {
        elm.classList.toggle("active", i === index);
      });
    }
  });
});
