export function initOfertas() {
  const section = document.querySelector('.section-ofertas');
  if (!section) return;

  const botao = section.querySelector('#oferta-botao');
  const modal = document.getElementById('modal-ofertas');
  const container = section.querySelector('.oferta-home');

  if (!botao || !modal) return;

  // ===== MODAL =====
  function abrirModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  botao.addEventListener("click", abrirModal);

  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal-ofertas") {
      fecharModal();
    }
  });

  // botão X (caso exista no HTML)
  const btnClose = modal.querySelector('.modal-close');
  btnClose?.addEventListener('click', fecharModal);

  // ===== RESPONSIVO (CARDS) =====
  function ajustarCardsHome() {
    if (!container) return;

    const cards = container.children;
    const largura = window.innerWidth;

    let maxVisiveis;

    if (largura <= 600) {
      maxVisiveis = 4;
    } else if (largura <= 900) {
      maxVisiveis = 3;
    } else if (largura <= 1200) {
      maxVisiveis = 5;
    } else {
      maxVisiveis = cards.length;
    }

    Array.from(cards).forEach((card, index) => {
      card.style.display = index < maxVisiveis ? "block" : "none";
    });
  }

  // executa imediatamente (IMPORTANTE no load dinâmico)
  ajustarCardsHome();

  // eventos
  window.addEventListener("resize", ajustarCardsHome);
}