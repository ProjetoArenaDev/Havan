export async function loadComponent(id, file, path = 'components') {
  try {
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Elemento #${id} não encontrado`);
      return;
    }

    const res = await fetch(`./${path}/${file}`);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.error(`Erro ao carregar ${file}:`, err);
  }
}

export async function loadSection(id, file) {
  try {
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Elemento #${id} não encontrado`);
      return;
    }

    const res = await fetch(`./sections/${file}`);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.error(`Erro ao carregar ${file}:`, err);
  }
}