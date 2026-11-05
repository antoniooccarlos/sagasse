/* Página de chat (chat.html): troca de telas, busca, envio de mensagens e botões do vídeo. */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const vistas = { lista: $('#vistaLista'), privado: $('#vistaPrivado'), grupo: $('#vistaGrupo') };
  if (!vistas.lista) return;

  /* Telas: #privado e #grupo na URL; qualquer outra coisa mostra a lista */
  const rota = () => {
    const h = location.hash.slice(1), v = vistas[h] ? h : 'lista';
    Object.entries(vistas).forEach(([k, el]) => el.hidden = k !== v);
    scrollTo(0, 0);
    $$('.msgs').forEach(m => m.scrollTop = m.scrollHeight);
  };
  addEventListener('hashchange', rota);
  rota();

  /* Clique numa conversa → abre o chat privado ou o chat em grupo */
  $$('.conv').forEach(b => b.addEventListener('click', () => {
    const { tipo, nome } = b.dataset;
    $(tipo === 'privado' ? '#privNome' : '#grupoNome').textContent = nome;
    location.hash = tipo;
  }));

  /* Busca da lista (filtra por nome) */
  $('#buscaChat').addEventListener('input', e => {
    const q = norm(e.target.value.trim()); let total = 0;
    $$('.conv').forEach(c => { const ok = norm(c.dataset.nome).includes(q); c.hidden = !ok; if (ok) total++; });
    $$('.bloco').forEach(b => b.hidden = !$$('.conv', b).some(c => !c.hidden));
    $('#vazioChat').hidden = total > 0;
  });

  /* Busca dentro da sala de chat do grupo */
  $('#buscaGrupo').addEventListener('input', e => {
    const q = norm(e.target.value.trim());
    $$('#msgsGrupo .linha').forEach(l => l.hidden = !norm(l.textContent).includes(q));
  });

  /* Enviar mensagem (botão Enviar ou Enter) */
  $$('form.compor').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('input', f), texto = input.value.trim();
    if (!texto) return;
    const box = $(f.dataset.alvo);
    const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const linha = document.createElement('div'); linha.className = 'linha minha';
    if (f.dataset.avatar) linha.innerHTML = '<span class="avatar sm"><svg class="ic"><use href="#i-user"/></svg></span>';
    const bolha = document.createElement('div'); bolha.className = 'bolha';
    const t = document.createElement('time'); t.textContent = hora;
    bolha.append(document.createTextNode(texto), t); linha.append(bolha);
    const dig = $('.digitando', box);
    dig ? box.insertBefore(linha, dig) : box.append(linha);
    input.value = ''; box.scrollTop = box.scrollHeight;
  }));

  /* Botões do vídeo: Live, mic, câmera, gravar, recolher/expandir */
  $$('[data-alternar]').forEach(b => b.addEventListener('click', () => {
    (b.dataset.alvo ? $(b.dataset.alvo) : b).classList.toggle(b.dataset.alternar);
  }));
})();
