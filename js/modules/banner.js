export function initBanner() {
  const section = document.querySelector('.section-banner');
  if (!section) return;

  const banners = section.querySelectorAll(".content-banner");
  const btnNext = section.querySelector(".arrow-right");
  const btnPrev = section.querySelector(".arrow-left");
  const dots = section.querySelectorAll(".dot");

  if (!banners.length) return;

  let indice = 0;
  let duracaoBanner;

  banners.forEach((banner, index) => {
    banner.classList.toggle("active", index === 0);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === 0);
  });

  function updateDots(indice) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[indice]?.classList.add("active");
  }

  function nextSlide() {
    banners[indice].classList.remove("active");
    indice = (indice + 1) % banners.length;
    banners[indice].classList.add("active");
    updateDots(indice);
  }

  function prevSlide() {
    banners[indice].classList.remove("active");
    indice = (indice - 1 + banners.length) % banners.length;
    banners[indice].classList.add("active");
    updateDots(indice);
  }

  function startAuto() {
    duracaoBanner = setInterval(nextSlide, 3000);
  }

  function resetInterval() {
    clearInterval(duracaoBanner);
    startAuto();
  }

  btnNext?.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  btnPrev?.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  startAuto();
}