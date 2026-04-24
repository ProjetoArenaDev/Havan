import { loadComponent, loadSection } from './loader.js';
import { initHeader } from './modules/header.js';
import { initBanner } from './modules/banner.js';
import { initOfertas } from './modules/ofertas.js';
import { initDescontos } from './modules/descontos.js';
import { initRecomendados } from './recomendados.js';
import { initChatbot } from './modules/chatbot.js';


async function init() {
  // COMPONENTS
  await loadComponent('header', 'header.html');
  await loadComponent('footer', 'footer.html');
  await loadComponent('chatbot-container', 'chatbot.html');
  await loadComponent('modal', 'modal.html');

  // SECTIONS
  await loadSection('banner', 'banner.html');
  await loadSection('filtros', 'filtros.html');
  await loadSection('ofertas-imperdiveis', 'oferta-imperdiveis.html');
  await loadSection('banner-oferta', 'banner-oferta.html');
  await loadSection('descontos', 'descontos.html');
  await loadSection('recomendados', 'recomendados.html');
  await loadSection('nao-perca', 'nao-perca.html');

  initScripts();
}

function initScripts() {
  initHeader();
  initBanner();
  initOfertas();
  initDescontos();
  initRecomendados();
  initChatbot();
  
  console.log('Site carregado 🚀');
}


init();