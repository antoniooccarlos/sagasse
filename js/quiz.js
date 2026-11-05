/* =====================================================================
   ROTEIRO — cada cena segue a mesma estrutura:
   v  = visual do cenário (vira descrição acessível e guia do fundo)
   n  = narração (caixa de diálogo, etiqueta "Narração")
   f  = fala da personagem (caixa de diálogo, etiqueta com o nome do sprite)
   e  = expressão do sprite  -> assets/sprites/<id>-<expressão>.png
   q  = quiz { p: pergunta, o: opções, c: índice da correta,
               ok: reação ao acertar, er: pista ao errar, x: explicação }
   As falas em 1ª pessoa são dramatizações, não citações históricas.
   ===================================================================== */
const EP = {
  ada: {
    nome:'Ada Lovelace', n:1, pre:'Ada', home:'AdapgHome', prox:'quizGrace.html', perfil:'../pagesDelas/Adapage.html',
    ok:'feliz', er:'neutra', res:['triste','neutra','feliz','encantada'],
    titulo: 'Imaginar antes de existir',
    ctx: 'Imaginação guiada: você acompanha Ada em um arquivo histórico. Londres, século XIX. As falas dela são dramatizações contemporâneas, não citações documentadas.',
    cenas: [
      { v:'Londres, século XIX. Mesa com cadernos, diagramas e o desenho de uma máquina mecânica.',
        n:'Ada Lovelace viveu em uma época em que as oportunidades de educação científica para mulheres eram limitadas. Sua mãe incentivou seu estudo de matemática e lógica. Em 1833, Ada conheceu o matemático e inventor Charles Babbage, que projetava máquinas capazes de automatizar cálculos.',
        f:'Uma máquina pode fazer mais do que repetir contas? Para responder, precisamos entender que instruções ela poderia seguir.', e:'encantada',
        q:{ p:'O que Ada estudou e que ajudou a formar seu olhar sobre a máquina?',
            o:['Matemática e lógica.','Apenas desenho mecânico, sem estudar matemática.','Programação em computadores modernos.'], c:0,
            ok:'Isso mesmo. A formação matemática e o incentivo ao estudo foram parte importante da trajetória dela.',
            er:'Vamos olhar outra vez: estamos no século XIX. Computadores modernos ainda não existiam. Que conhecimentos poderiam ajudar alguém a descrever operações passo a passo?',
            x:'Ada recebeu formação em matemática e lógica, com incentivo de sua mãe e orientação de estudiosos.' } },
      { v:'Close nas anotações de Ada; símbolos e passos numerados aparecem na tela.',
        n:'A Máquina Analítica de Babbage foi projetada, mas não chegou a ser construída integralmente durante a vida dele. Em suas notas sobre a máquina, Ada descreveu uma sequência de operações para calcular números de Bernoulli.',
        f:'Se organizarmos as instruções com cuidado, podemos descrever um procedimento que a máquina executaria.', e:'determinada',
        q:{ p:'O que Ada registrou em suas notas sobre a Máquina Analítica?',
            o:['Um algoritmo para calcular números de Bernoulli.','O primeiro computador eletrônico que funcionou na Inglaterra.','O código-fonte de um computador pessoal moderno.'], c:0,
            ok:'Exatamente. A importância está no raciocínio computacional descrito, embora a máquina não tenha executado o algoritmo naquela época.',
            er:'Pense no que podia ser feito com papel, símbolos e um projeto mecânico ainda inacabado. A resposta está nas instruções que ela descreveu.',
            x:'O algoritmo é frequentemente considerado o primeiro programa de computador publicado. Não foi executado em um computador funcional de sua época porque a Máquina Analítica não foi concluída.' } },
      { v:'Os números do papel se transformam em notas musicais, letras e padrões abstratos.',
        n:'Ada refletiu que, se outros símbolos pudessem ser representados por regras, uma máquina poderia manipular mais do que números. Ao mesmo tempo, reconheceu um limite: a máquina seguiria operações previstas por seus criadores; não produziria ideias por conta própria.', e:'surpresa',
        q:{ p:'Qual ideia de Ada ampliou a forma de pensar sobre máquinas?',
            o:['Uma máquina poderia manipular símbolos seguindo regras, não apenas realizar cálculos numéricos.','Uma máquina sempre teria imaginação e vontade próprias.','Toda máquina seria capaz de pensar sem instruções.'], c:0,
            ok:'Sim. Imaginar novos usos para uma tecnologia também é parte da inovação.',
            er:'A proposta dela era ousada, mas não dizia que a máquina teria vontade própria. Qual opção fala de símbolos e regras?',
            x:'Ada antecipou possibilidades conceituais da computação, sem afirmar que máquinas criariam ideias espontaneamente.' } }
    ],
    fim: { t:'O que ainda não existe', v:'O esquema da máquina se transforma em uma tela atual com linhas de código; Ada observa com interesse.',
      n:'O legado de Ada está em explorar possibilidades antes que os instrumentos para concretizá-las existissem. O reconhecimento de sua contribuição cresceu especialmente no século XX. Historiadores ainda discutem o alcance de sua influência na computação prática posterior.',
      f:'Uma pergunta pode abrir caminhos antes que alguém saiba construir a resposta.', e:'feliz',
      r:'Que problema do seu cotidiano você gostaria de ensinar uma máquina a resolver? O que precisaria ser explicado a ela, passo a passo?',
      m:'Criar tecnologia também começa ao imaginar o que poderia ser diferente.' }
  },
  grace: {
    nome:'Grace Hopper', n:2, pre:'Grace', home:'GraceHome', prox:'quizMargaret.html', perfil:'../pagesDelas/Gracepage.html',
    ok:'feliz', er:'pensativa', res:['triste','neutra','feliz','feliz'],
    titulo: 'Tornar a programação mais acessível',
    ctx: 'Imaginação guiada: você acompanha Grace em um arquivo histórico. As falas dela são dramatizações contemporâneas, não citações documentadas.',
    cenas: [
      { v:'Quadro com fórmulas matemáticas. O cenário muda para uma sala de trabalho com um computador eletromecânico.',
        n:'Grace Hopper formou-se em matemática e física, obteve mestrado e doutorado em matemática e trabalhou como professora. Durante a Segunda Guerra Mundial, em 1943, decidiu ingressar na Reserva Naval dos Estados Unidos. Sua candidatura enfrentou barreiras de idade e restrições administrativas; ela foi aceita após conseguir uma dispensa.',
        f:'Conhecer matemática ajuda. Mas também precisamos encontrar maneiras de fazer as máquinas seguirem instruções com clareza.', e:'neutra',
        q:{ p:'Qual era a formação acadêmica de Grace Hopper?',
            o:['Matemática e física, além de pós-graduação em matemática.','Engenharia aeroespacial e medicina.','Somente treinamento militar, sem estudos universitários.'], c:0,
            ok:'Certo. A base matemática acompanhou seu trabalho como professora e, depois, na computação.',
            er:'Antes de trabalhar com computadores, Grace já tinha uma trajetória acadêmica. Qual opção combina com o que vimos?',
            x:'Hopper estudou matemática e física no Vassar College e fez mestrado e doutorado em matemática na Universidade Yale.' } },
      { v:'Harvard Mark I em funcionamento; números aparecem em cartões ou folhas, sem simular tecnologia moderna.',
        n:'Em 1944, Grace trabalhou com o computador eletromecânico Harvard Mark I, participando de cálculos e atividades de programação. Mais tarde, defendeu o uso de compiladores, que ajudam a traduzir instruções de nível mais alto em operações que o computador consegue executar.',
        f:'E se quem programa pudesse escrever instruções de modo mais compreensível, sem precisar organizar tudo diretamente em códigos difíceis de manejar?', e:'pensativa',
        q:{ p:'Para que serve um compilador, em termos simples?',
            o:['Ajudar a traduzir instruções de mais alto nível para operações executáveis pelo computador.','Consertar fisicamente qualquer peça quebrada do computador.','Dar opiniões próprias à máquina, sem instruções humanas.'], c:0,
            ok:'Isso! A ideia era aproximar a programação da forma como as pessoas descrevem problemas.',
            er:'Pense em tradução: não de um idioma falado para outro, mas de instruções para operações que a máquina consiga executar.',
            x:'Em 1952, Hopper apresentou um trabalho pioneiro sobre compiladores e desenvolveu o sistema A-0, contribuindo para esse tipo de tradução.' } },
      { v:'Instruções simbólicas se transformam em palavras legíveis; surge o nome FLOW-MATIC.',
        n:'Grace liderou o desenvolvimento da FLOW-MATIC, uma linguagem voltada a aplicações comerciais e com instruções próximas ao inglês. Seu trabalho influenciou a evolução do COBOL, que foi desenvolvido por um esforço coletivo de padronização iniciado em 1959.', e:'feliz',
        q:{ p:'Qual afirmação sobre Grace Hopper e o COBOL é historicamente mais precisa?',
            o:['Hopper criou sozinha o COBOL.','O trabalho dela com a FLOW-MATIC influenciou o COBOL, que foi desenvolvido coletivamente.','Hopper não teve relação com linguagens de programação.'], c:1,
            ok:'Bem observado. A inovação também acontece em equipes; reconhecer isso não diminui a contribuição de ninguém.',
            er:'Vamos separar influência de autoria individual. Qual opção reconhece o trabalho dela e também o esforço coletivo?',
            x:'Hopper teve papel importante na evolução e defesa do COBOL, mas o COBOL não foi uma criação individual sua.' } }
    ],
    fim: { t:'Abrir portas de uso', v:'Uma equipe diversa conversa diante de um computador; Grace aparece ao lado do nome FLOW-MATIC.',
      n:'Grace combinou conhecimento matemático, experimentação e comunicação para defender ferramentas que tornassem o desenvolvimento de software mais acessível. Em 1986, aposentou-se da Marinha como contra-almirante. Recebeu a Medalha Nacional de Tecnologia em 1991.',
      f:'Uma ferramenta fica mais poderosa quando mais pessoas conseguem usá-la para resolver problemas.', e:'feliz',
      r:'Que tarefa ou ideia você gostaria de conseguir explicar a um computador com palavras mais simples?',
      m:'Acessibilidade também é inovação: uma tecnologia pode ganhar força quando mais pessoas conseguem participar.' }
  },
  margaret: {
    nome:'Margaret Hamilton', n:3, pre:'Margaret', home:'MargaretHome', prox:'quizFinal.html',
    ok:'feliz', er:'pensativa', res:['triste','neutra','feliz','feliz'],
    titulo: 'Software confiável para uma missão crítica',
    ctx: 'Imaginação guiada: você acompanha Margaret em um arquivo histórico. As falas dela são dramatizações contemporâneas, não citações documentadas.',
    cenas: [
      { v:'Quadro com cálculos, anotações e uma sala de programação no MIT.',
        n:'Margaret Hamilton estudou matemática e filosofia no Earlham College. No final da década de 1950, trabalhou no MIT em projetos ligados à meteorologia e à programação científica. Em 1961, começou a atuar em projetos relacionados ao programa espacial norte-americano.',
        f:'Em um sistema complexo, cada parte precisa funcionar junto com as outras. E precisamos pensar também no que pode dar errado.', e:'neutra',
        q:{ p:'Em que área Margaret Hamilton ficou especialmente conhecida?',
            o:['Liderança no desenvolvimento do software de voo das missões Apollo.','Construção individual de todos os foguetes Apollo.','Criação da Máquina Analítica no século XIX.'], c:0,
            ok:'Isso. O trabalho dela e de sua equipe ajudou a tornar o software parte essencial da missão.',
            er:'Margaret não construiu sozinha a nave. Que parte fundamental da missão exigia programação e controle?',
            x:'Hamilton liderou a equipe de desenvolvimento de software de voo no Laboratório de Instrumentação do MIT, que trabalhava sob contrato da NASA.' } },
      { v:'Painel de controle estilizado; alertas aparecem sem excesso de dramatização. Em paralelo, a equipe de solo acompanha os dados.',
        n:'Durante a Apollo 11, em 20 de julho de 1969, solicitações relacionadas ao radar ameaçavam sobrecarregar os recursos do computador. O software priorizou tarefas essenciais. A equipe de controle em solo avaliou os alarmes e autorizou a continuidade do pouso.',
        f:'O sistema precisa reconhecer o que é prioritário e continuar com as tarefas essenciais. Mas decisões críticas também dependem das pessoas e dos procedimentos.', e:'pensativa',
        q:{ p:'O que aconteceu quando as solicitações do radar ameaçaram sobrecarregar o computador?',
            o:['O software priorizou tarefas essenciais, e a equipe em solo avaliou os alarmes e autorizou a continuidade.','O computador decidiu sozinho ignorar todas as pessoas e pousar.','Não houve qualquer alerta ou situação de sobrecarga.'], c:0,
            ok:'Exatamente. Foi uma combinação de software preparado para lidar com a situação, procedimentos e julgamento humano.',
            er:'A história não foi uma decisão mágica do computador. Quem analisou os alarmes junto com o comportamento do software?',
            x:'O episódio mostra a interação entre arquitetura do software, operação e decisão humana. O software não tomou sozinho a decisão de continuar o pouso.' } },
      { v:'Fluxograma com caminhos alternativos, testes e verificações; uma equipe revisa o sistema.',
        n:'O trabalho de Hamilton ajudou a fortalecer a ideia de que software precisa ser projetado, verificado e mantido com rigor. Em uma missão espacial, confiabilidade não é um detalhe: pode ser essencial para a segurança.', e:'neutra',
        q:{ p:'O que significa projetar software confiável para uma missão crítica?',
            o:['Planejar, testar e verificar o sistema, incluindo como ele responde a falhas e prioridades.','Escrever o código uma vez e presumir que nunca haverá problemas.','Deixar todas as decisões importantes para o computador, sem supervisão humana.'], c:0,
            ok:'Sim. Pensar nos casos difíceis faz parte do trabalho de engenharia.',
            er:'Em sistemas importantes, não basta esperar que tudo corra perfeitamente. Qual opção inclui preparação e verificação?',
            x:'Hamilton ajudou a promover métodos rigorosos de concepção, desenvolvimento, verificação e manutenção de software.' } }
    ],
    fim: { t:'Tornar visível o trabalho invisível', v:'A tela mostra uma equipe trabalhando no software; ao fundo, a Lua. Margaret aparece em primeiro plano.',
      n:'Em ambientes que davam grande visibilidade às naves e ao hardware, o trabalho com software podia receber menos reconhecimento. Hamilton ajudou a demonstrar que software é uma infraestrutura essencial. Em 2016, recebeu a Medalha Presidencial da Liberdade.',
      f:'Uma missão é feita por muitas pessoas e por sistemas que precisam funcionar juntos. O trabalho de cada parte importa.', e:'feliz',
      r:'Em uma tecnologia que você usa todos os dias, que partes precisam funcionar bem para ela ser segura e confiável?',
      m:'Cuidar de como a tecnologia falha é tão importante quanto imaginar o que ela pode fazer.' }
  }
};

/* Frases do resultado (falas dramatizadas da personagem, por nota) */
const RESULT = [
  'Tudo bem: investigar também é errar e tentar de novo. Que tal rever o episódio?',
  'Um bom começo! Algumas pistas ajudaram. Vale rever para acertar de primeira.',
  'Muito bem! Você quase chegou lá sem ajuda.',
  'Excelente! Você acertou tudo de primeira.'
];

/* Caminhos: este arquivo é usado por pagesQuiz/*.html e pagesHome/quiz.html */
/* ===================== Lógica ===================== */
const $ = s => document.querySelector(s);
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(p => p[1]);
const ep = document.body.dataset.ep;

if (ep) {
  const E = EP[ep], stage = $('#stage');
  let steps = [{ t:'intro' }], i = 0, score = 0;
  E.cenas.forEach(c => { steps.push({ t:'nar', c }); if (c.f) steps.push({ t:'fala', c }); steps.push({ t:'quiz', c }); });
  steps.push({ t:'nar', c:E.fim, fim:1 }, { t:'fala', c:E.fim }, { t:'refl' }, { t:'res' });

  const sprite = f => {
    const box = $('#sprite'); box.innerHTML = '';
    const img = new Image(); img.alt = E.nome; img.src = `../imgsquiz/${f}.png`;
    img.onerror = () => { box.innerHTML = `<div class="ph">${E.nome}<br><em>imgsquiz/${f}.png</em></div>`; };
    box.appendChild(img);
  };
  const mascote = f => { const m = $('#mascote'); m.hidden = !f; if (f) m.src = `../imgsquiz/sagasse${f}.png`; };
  const say = (tag, html, btn) => {
    $('#tag').textContent = tag; $('#texto').innerHTML = html;
    const a = $('#acoes'); a.innerHTML = '';
    if (btn) a.appendChild(btn);
  };
  const mk = (txt, fn, cls = 'btn primario') => { const b = document.createElement('button'); b.className = cls + ' anim'; b.textContent = txt; b.onclick = fn; return b; };
  const link = (txt, href, cls = 'btn') => { const a = document.createElement('a'); a.className = cls + ' anim'; a.href = href; a.innerHTML = txt; return a; };
  const next = (t = 'Continuar ›') => mk(t, () => { i++; render(); });

  function render() {
    const s = steps[i], c = s.c;
    mascote(null); $('#opcoes').innerHTML = ''; $('#titulo').innerHTML = ''; stage.classList.toggle('res', s.t === 'res');
    $('#prog').textContent = `Episódio ${E.n} · ${i + 1}/${steps.length}`;
    stage.setAttribute('aria-label', c ? c.v : E.titulo);
    sprite(c ? E.pre + c.e : (s.t === 'refl' ? E.pre + E.fim.e : E.home));

    if (s.t === 'intro') {
      $('#titulo').innerHTML = `${E.nome}<small>${E.titulo}</small>`;
      mascote('Curiosaa'); say('Arquivo histórico', E.ctx + ' <small>Duração estimada: 4–6 minutos.</small>', next('Começar ›'));
    } else if (s.t === 'nar') {
      if (s.fim) $('#titulo').textContent = E.fim.t;
      say('Narração', c.n, next());
    } else if (s.t === 'fala') {
      say(E.nome, c.f, next());
    } else if (s.t === 'quiz') {
      const q = c.q, ord = shuffle(q.o.map((txt, k) => ({ txt, k })));
      let tries = 0, done = false;
      say(E.nome, q.p); mascote('Duvida');
      ord.forEach(o => {
        const b = document.createElement('button'); b.className = 'opt anim'; b.textContent = o.txt;
        b.onclick = () => {
          if (done) return; tries++;
          if (o.k === q.c) {
            done = true; if (tries === 1) score++;
            b.classList.add('certa'); sprite(E.pre + E.ok); mascote('Acerto'); document.querySelectorAll('.opt').forEach(x => x.disabled = true);
            say(E.nome, `${q.ok}<small>${q.x}</small>`, next());
          } else {
            b.classList.add('errada'); b.disabled = true; sprite(E.pre + E.er); mascote('Erro');
            say(E.nome, q.er); // errar não encerra: mostra pista e permite tentar de novo
          }
        };
        $('#opcoes').appendChild(b);
      });
    } else if (s.t === 'refl') {
      $('#titulo').innerHTML = 'Para refletir'; mascote('Pensativa');
      say(E.nome, E.fim.r + `<small>${E.fim.m}</small>`, next('Ver resultado ›'));
    } else if (s.t === 'res') {
      $('#titulo').innerHTML = `RESULTADO<br>${score}/3`;
      say(E.nome, RESULT[score]); sprite(E.pre + E.res[score]); mascote(['Erro','Pensativa','Curiosaa','Radiante'][score]);
      const a = $('#acoes');
      a.append(...[
        mk('Rever episódio', () => location.reload(), 'btn'),
        E.perfil && link('Conhecer a história', E.perfil),
        link('Menu do quiz', '../pagesHome/quiz.html'),
        link(E.prox === 'quizFinal.html' ? 'Tela final' : 'Próximo episódio', E.prox, 'btn primario'),
        link('<img src="../imgs/iconssagasselogo.png" alt=""> HOMEPAGE', '../index.html', 'coruja')
      ].filter(Boolean));
    }
  }
  render();
}

/* Hover + "puxa e contrai" no clique (igual à Home). Links navegam logo após a animação. */
document.addEventListener('click', e => {
  const el = e.target.closest('.anim');
  if (!el || el.disabled) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.classList.remove('is-pulled'); void el.offsetWidth; el.classList.add('is-pulled');
  setTimeout(() => el.classList.remove('is-pulled'), 520);
  const plain = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && el.target !== '_blank';
  if (el.tagName === 'A' && el.href && plain && !reduce) { e.preventDefault(); setTimeout(() => { location.href = el.href; }, 420); }
});

/* Botão "Compartilhar o que aprendi" (tela final) */
document.querySelectorAll('[data-share]').forEach(b => b.onclick = async () => {
  const d = { title: 'Mulheres na programação', text: 'Aprendi sobre Ada Lovelace, Grace Hopper e Margaret Hamilton!', url: new URL('../index.html', location.href).href };
  try { navigator.share ? await navigator.share(d) : (await navigator.clipboard.writeText(d.text + ' ' + d.url), b.textContent = 'Link copiado ✓'); } catch (e) {}
});
