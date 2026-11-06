/* Sagasse: hub da home (acordar + opções), preloader, tutorial e menu do logo nas páginas internas. */
(() => {
  const $ = s => document.querySelector(s);
  const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const lido = (k, s = localStorage) => { try { return s.getItem(k); } catch (e) { return null; } };

  /* ================= HOME ================= */
  const btn = $('#sagasseBtn');
  if (btn) {
    const hub = $('#hub'), opcoes = $('#opcoes');
    const acordar = on => {
      hub.classList.toggle('acordada', on);
      btn.setAttribute('aria-expanded', on);
      btn.setAttribute('aria-label', on ? 'Fechar o menu e colocar a Sagasse para dormir' : 'Acordar a Sagasse e abrir o menu');
      opcoes.inert = !on;
    };
    opcoes.inert = true;
    btn.addEventListener('click', () => acordar(!hub.classList.contains('acordada')));
    addEventListener('keydown', e => { if (e.key === 'Escape') acordar(false); });

    /* ---- Tutorial (1ª visita) ---- */
    const passos = [
      'Olá! Eu sou a Sagasse e vou ser sua guia por aqui.',
      'Sempre que você me vir, é só clicar em mim: eu abro o menu e você pode voltar para a página inicial quando quiser.',
      'Experimente agora: clique em mim para me acordar!'
    ];
    const tutorial = () => {
      const tut = $('#tutorial');
      if (!tut || lido('sagasseTutorial')) return;
      const texto = $('#tutTexto'), prox = $('#tutProx'); let i = 0;
      const mostrar = () => { texto.textContent = passos[i]; prox.textContent = i === passos.length - 1 ? 'Entendi!' : 'Próximo'; };
      const fechar = () => { tut.hidden = true; guardar('sagasseTutorial', '1'); };
      prox.onclick = () => { i < passos.length - 1 ? (i++, mostrar()) : fechar(); };
      $('#tutPular').onclick = fechar;
      mostrar(); tut.hidden = false; prox.focus();
    };

    /* ---- Preloader (só na 1ª visita da sessão) ---- */
    const pre = $('#preloader');
    const terminar = () => {
      if (!pre || pre.dataset.fim) return; pre.dataset.fim = 1;
      try { sessionStorage.setItem('sagassePre', '1'); } catch (e) {}
      pre.classList.add('fim');
      setTimeout(() => { pre.remove(); tutorial(); }, 650);
    };
    if (pre && !document.documentElement.classList.contains('sem-pre')) {
      pre.querySelector('.pre-circulo').addEventListener('animationend', e => { if (e.animationName === 'pre-expandir') terminar(); });
      setTimeout(terminar, 3600);   // segurança
    } else { pre && pre.remove(); tutorial(); }
  }

  /* ================= PÁGINAS INTERNAS: logo → opções embaixo ================= */
  const logo = $('#sgLogo');
  if (logo) {
    const lista = $('#sgOpcoes');
    const abrir = on => {
      document.body.classList.toggle('sg-aberto', on);
      logo.setAttribute('aria-expanded', on);
      lista.inert = !on;
    };
    lista.inert = true;
    logo.addEventListener('click', () => abrir(!document.body.classList.contains('sg-aberto')));
    $('#sgFundo').addEventListener('click', () => abrir(false));
    addEventListener('keydown', e => { if (e.key === 'Escape') abrir(false); });
  }
})();
