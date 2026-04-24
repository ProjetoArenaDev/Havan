export function initRecomendados() {
    const section = document.querySelector('.recomendados');
    if (!section) return;

    const carrossel = section.querySelector('.carrossel');
    const setaEsquerda = section.querySelector('.seta-esquerda');
    const setaDireita = section.querySelector('.seta-direita');
    const carrosselArea = section.querySelector('.carrossel-area');

    if (!carrossel || !setaEsquerda || !setaDireita || !carrosselArea) return;

    // Barra de progresso
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 30px;
        height: 6px;
        background: #5689ed;
        border-radius: 10px;
        width: 100px;
        transition: left 0.3s ease;
        z-index: 1;
    `;
    carrosselArea.appendChild(progressBar);

    function updateProgressBar() {
        const scrollLeft = carrossel.scrollLeft;
        const scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;

        if (scrollWidth <= 0) return;

        const trackWidth = carrosselArea.offsetWidth - 60;
        const barWidth = 100;
        const maxLeft = trackWidth - barWidth;

        const progress = (scrollLeft / scrollWidth) * maxLeft;
        progressBar.style.left = (30 + progress) + 'px';
    }

    // Scroll amount (corrigido e estável)
    const firstCard = carrossel.querySelector('.card');
    if (!firstCard) return;

    const scrollAmount = firstCard.offsetWidth + 15;

    // Eventos das setas
    setaDireita.addEventListener('click', () => {
        carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    setaEsquerda.addEventListener('click', () => {
        carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    carrossel.addEventListener('scroll', updateProgressBar);
    updateProgressBar();

    // Modal (escopado corretamente)
    const modal = document.createElement('div');
    modal.className = 'modal-imagem';
    modal.innerHTML = '<span class="modal-fechar">&times;</span><img src="" alt="">';
    section.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const fechar = modal.querySelector('.modal-fechar');

    section.querySelectorAll('.card img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modal.classList.add('ativo');
            modalImg.src = img.src;
        });
    });

    fechar.addEventListener('click', () => modal.classList.remove('ativo'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('ativo');
    });
}