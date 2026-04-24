export function initDescontos() {
  const track = document.querySelector('.carousel-track');
  const nextBtn = document.querySelector('.arrow.right');
  const prevBtn = document.querySelector('.arrow.left');
  const progressBar = document.getElementById('carouselProgress');

  if (!track) return;

  let currentIndex = 0;

  function getCardWidth() {
    const card = track.querySelector('.produto');
    return card ? card.offsetWidth + 16 : 0; // 16 = gap
  }

  function updateCarousel() {
    const width = getCardWidth();
    track.style.transform = `translateX(-${currentIndex * width}px)`;
    updateProgress();
  }

  function updateProgress() {
    const total = track.children.length;
    const visible = Math.floor(track.parentElement.offsetWidth / getCardWidth());
    const maxIndex = total - visible;

    const progress = (currentIndex / maxIndex) * 100;
    progressBar.style.width = `${progress}%`;
  }

  nextBtn?.addEventListener('click', () => {
    const total = track.children.length;
    const visible = Math.floor(track.parentElement.offsetWidth / getCardWidth());

    if (currentIndex < total - visible) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
  });

  updateCarousel();
}