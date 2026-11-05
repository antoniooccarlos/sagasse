/* Filtro + busca da página Cursos (cursos.html). Lê os data-* de cada card. */
(() => {
  const grid = document.getElementById('cursosGrid');
  if (!grid) return;
  const cards = [...grid.children];
  const busca = document.getElementById('buscaCurso');
  const areas = [...document.querySelectorAll('input[name="area"]')];
  const niveis = [...document.querySelectorAll('input[name="nivel"]')];
  const tempo = document.getElementById('tempo');
  const tempoVal = document.getElementById('tempoVal');
  const vazio = document.getElementById('vazioCursos');
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const marcados = l => l.filter(i => i.checked).map(i => i.value);

  const aplicar = () => {
    const q = norm(busca.value.trim()), a = marcados(areas), n = marcados(niveis), h = +tempo.value;
    tempoVal.textContent = h >= +tempo.max ? 'qualquer duração' : 'até ' + h + ' h';
    let total = 0;
    cards.forEach(c => {
      const ok = (!a.length || a.includes(c.dataset.area)) && (!n.length || n.includes(c.dataset.nivel))
        && +c.dataset.horas <= h && norm(c.dataset.nome + ' ' + c.dataset.area).includes(q);
      c.hidden = !ok; if (ok) total++;
    });
    vazio.hidden = total > 0;
  };

  [busca, tempo, ...areas, ...niveis].forEach(el => el.addEventListener('input', aplicar));
  document.getElementById('limpar').addEventListener('click', () => {
    [...areas, ...niveis].forEach(i => i.checked = false);
    tempo.value = tempo.max; busca.value = ''; aplicar();
  });
  aplicar();
})();
