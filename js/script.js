(() => {
  const body = document.body;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Menu lateral recolhível (home e Histórias delas) ---- */
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (toggle && sidebar && overlay) {
    const setMenu = open => {
      body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      sidebar.inert = !open;
    };
    toggle.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
    overlay.addEventListener('click', () => setMenu(false));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
    });
  }

  /* ---- Efeito "puxar e contrair" nos botões (.anim); links navegam após a animação ---- */
  document.querySelectorAll('.anim').forEach(el => {
    el.addEventListener('click', e => {
      el.classList.remove('is-pulled'); void el.offsetWidth; el.classList.add('is-pulled');
      setTimeout(() => el.classList.remove('is-pulled'), 520);
      const href = el.getAttribute('href');
      const plain = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && el.target !== '_blank';
      if (href && !href.startsWith('#') && plain && !reduce) {   // âncoras (#) rolam direto
        e.preventDefault();
        setTimeout(() => { location.href = el.href; }, 420);
      }
    });
  });

  /* ---- Voltar ao topo (páginas dedicadas) ---- */
  const topo = document.querySelector('.topo-btn');
  if (topo) {
    addEventListener('scroll', () => topo.classList.toggle('visivel', scrollY > 400), { passive: true });
    topo.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Destaca na barra lateral a seção que está na tela ---- */
  const secs = document.querySelectorAll('.sec');
  const links = [...document.querySelectorAll('.lateral nav a')];
  if (secs.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('ativo', a.hash === '#' + e.target.id));
    }), { rootMargin: '-40% 0px -55% 0px' });
    secs.forEach(s => io.observe(s));
  }

  /* ---- Busca + filtros (Histórias delas) ---- */
  const grid = document.querySelector('.hist-grid');
  if (grid) {
    const cards = [...grid.children], input = document.getElementById('busca'), vazio = document.querySelector('.vazio');
    const chips = document.querySelectorAll('.chip');
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let filtro = 'todas';
    const aplicar = () => {
      const q = norm(input.value.trim()); let n = 0;
      cards.forEach(c => {
        const t = norm(c.dataset.nome + ' ' + c.dataset.tags);
        const ok = (filtro === 'todas' || t.includes(filtro)) && t.includes(q);
        c.hidden = !ok; if (ok) n++;
      });
      vazio.hidden = n > 0;
    };
    chips.forEach(ch => ch.addEventListener('click', () => {
      chips.forEach(x => { x.classList.toggle('ativo', x === ch); x.setAttribute('aria-pressed', x === ch); });
      filtro = norm(ch.dataset.filtro); aplicar();
    }));
    input.addEventListener('input', aplicar);
  }
})();
