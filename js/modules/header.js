function toggleMenu() {
  document.body.classList.toggle("abrir-menu");
}

export function initHeader() {
  const btnOpen = document.querySelector('.menu-hamburguer');
  const overlay = document.querySelector('.efeito');
  const btnClose = document.querySelector('.lado-superior-menu button');

  if (!btnOpen || !overlay || !btnClose) return;

  btnOpen.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  btnClose.addEventListener('click', toggleMenu);

  // fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('abrir-menu')) {
      document.body.classList.remove('abrir-menu');
    }
  });
}