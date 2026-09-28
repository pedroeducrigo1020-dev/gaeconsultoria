/* ============================================================
   assets/app.js
   Comportamentos globais do site: reveal-on-scroll, acordeão de
   FAQ e contadores animados.

   NOTA IMPORTANTE (organização):
   O arquivo original vinha com o comentário "Adicione dentro do
   IIFE, no lugar dos blocos existentes", indicando que este trecho
   deveria ser colado dentro de um app.js maior — que também cuida
   de coisas como carregar o header/footer (#site-header /
   #site-footer) e o menu mobile. Esse app.js "base" não foi
   enviado, então essas funções continuam ausentes aqui. Ver
   README.md para a lista completa de pendências.

   BUGS CORRIGIDOS nesta versão:
   1. Todo o código agora vive dentro de uma IIFE própria (como o
      comentário original pedia), em vez de declarar funções no
      escopo global.
   2. initFAQ() e initReveal()/initCounters() agora marcam os
      elementos já inicializados (data-bound / classes de estado)
      antes de religar listeners ou observers. Isso evita
      vazamento de memória e handlers duplicados caso
      window.EthosInit / o evento 'ethos:subpage-rendered' disparem
      mais de uma vez no ciclo de vida da página.
   ============================================================ */
(function () {
  'use strict';

  /* ------------------------------------------------------------
     Header e footer
     Todas as páginas têm <div id="site-header"> e <div id="site-footer">
     vazios; é aqui que eles são preenchidos.
     ------------------------------------------------------------ */
  const PILARES = [
    { href: 'seguranca-trabalho.html', nome: 'Segurança do Trabalho',
      filhos: ['nr-01.html', 'nr-35.html', 'pgr-pcmso.html'] },
    { href: 'marketing.html', nome: 'Marketing',
      filhos: ['branding-esg.html', 'marketing-digital.html', 'comunicacao-interna.html'] },
    { href: 'qualidade.html', nome: 'Qualidade',
      filhos: ['iso-9001.html', 'iso-14001.html', 'auditorias.html'] },
    { href: 'filosofia-empresa.html', nome: 'Filosofia de Empresa',
      filhos: ['missao-visao-valores.html', 'codigo-conduta.html', 'governanca.html'] },
    { href: 'rh.html', nome: 'Recursos Humanos',
      filhos: ['recrutamento.html', 'clima-psicossocial.html', 'treinamento-lideranca.html'] },
    { href: 'ti.html', nome: 'Tecnologia da Informação',
      filhos: ['infraestrutura.html', 'seguranca-informacao.html', 'lgpd-dados.html'] }
  ];

  const ICO_LOGO = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<circle cx="16" cy="16" r="11.5" stroke="currentColor" stroke-width="1.5" opacity=".5"/>' +
    '<circle cx="16" cy="16" r="5" fill="currentColor"/>' +
    '<circle cx="26.2" cy="11.6" r="2.6" fill="#5C7034"/></svg>';
  const ICO_SETA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const ICO_MENU = '<svg class="ico-abrir" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
    '<svg class="ico-fechar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  const ICO_TEMA = '<svg class="ico-lua" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>' +
    '<svg class="ico-sol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  /* ------------------------------------------------------------
     Tema claro/escuro
     O <html data-theme> inicial é definido por um script inline no
     <head> (evita flash). Aqui ficam a alternância e a persistência.
     Sem escolha salva, o site acompanha o tema do sistema.
     ------------------------------------------------------------ */
  const CHAVE_TEMA = 'ethos-tema';
  const mqEscuro = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function temaAtual() {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  }
  function aplicarTema(tema) {
    document.documentElement.dataset.theme = tema;
    const ehEscuro = tema === 'dark';
    document.querySelectorAll('.tema-toggle').forEach(b => {
      b.setAttribute('aria-pressed', String(ehEscuro));
      b.setAttribute('aria-label', ehEscuro ? 'Ativar modo claro' : 'Ativar modo escuro');
      b.title = ehEscuro ? 'Modo claro' : 'Modo escuro';
    });
  }
  function salvarTema(tema) {
    try { localStorage.setItem(CHAVE_TEMA, tema); } catch (e) { /* modo privado */ }
  }
  function temaSalvo() {
    try { return localStorage.getItem(CHAVE_TEMA); } catch (e) { return null; }
  }
  if (mqEscuro && mqEscuro.addEventListener) {
    mqEscuro.addEventListener('change', e => {
      if (!temaSalvo()) aplicarTema(e.matches ? 'dark' : 'light');
    });
  }

  function paginaAtual() {
    const arq = location.pathname.split('/').pop();
    return arq || 'index.html';
  }

  function renderHeader() {
    const alvo = document.getElementById('site-header');
    if (!alvo || alvo.dataset.rendered) return;

    const atual = paginaAtual();
    const noPilar = PILARES.some(p => p.href === atual || p.filhos.includes(atual));
    const cur = href => (href === atual ? ' aria-current="page"' : '');

    alvo.innerHTML =
      '<header class="site-header">' +
        '<div class="site-header__inner">' +
          '<a class="logo" href="index.html" aria-label="Ethos e Terra — início">' + ICO_LOGO + '<span>Ethos e Terra</span></a>' +
          '<nav class="nav" id="nav-principal" aria-label="Principal">' +
            '<a class="nav__link" href="index.html"' + cur('index.html') + '>Início</a>' +
            '<a class="nav__link" href="gestao-ambiental.html"' + cur('gestao-ambiental.html') + '>Gestão Ambiental</a>' +
            '<div class="nav__drop">' +
              '<a class="nav__link" href="gestao-ambiental.html#pilares"' + (noPilar ? ' aria-current="page"' : '') + '>Pilares ' + ICO_SETA + '</a>' +
              '<ul class="nav__menu">' +
                PILARES.map(p => '<li><a href="' + p.href + '"' +
                  ((p.href === atual || p.filhos.includes(atual)) ? ' aria-current="page"' : '') + '>' + p.nome + '</a></li>').join('') +
              '</ul>' +
            '</div>' +
            '<a class="nav__link" href="metodo.html"' + cur('metodo.html') + '>Método</a>' +
            '<a class="btn btn--primario" href="contato.html">Solicitar diagnóstico</a>' +
          '</nav>' +
          '<div class="site-header__acoes">' +
            '<button class="tema-toggle" type="button" aria-pressed="false" aria-label="Ativar modo escuro">' + ICO_TEMA + '</button>' +
            '<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-principal" aria-label="Abrir menu">' + ICO_MENU + '</button>' +
          '</div>' +
        '</div>' +
      '</header>';
    alvo.dataset.rendered = '1';

    const header = alvo.querySelector('.site-header');
    const toggle = alvo.querySelector('.nav__toggle');
    const setAberto = aberto => {
      header.classList.toggle('nav-aberto', aberto);
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    };
    toggle.addEventListener('click', () => setAberto(!header.classList.contains('nav-aberto')));
    const btnTema = alvo.querySelector('.tema-toggle');
    aplicarTema(temaAtual());
    btnTema.addEventListener('click', () => {
      const novo = temaAtual() === 'dark' ? 'light' : 'dark';
      aplicarTema(novo);
      salvarTema(novo);
    });
    header.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => setAberto(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setAberto(false); });
  }

  function renderFooter() {
    const alvo = document.getElementById('site-footer');
    if (!alvo || alvo.dataset.rendered) return;

    alvo.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="site-footer__grid">' +
            '<div>' +
              '<a class="logo" href="index.html">' + ICO_LOGO + '<span>Ethos e Terra</span></a>' +
              '<p class="site-footer__sobre">Consultoria integrada que parte da gestão ambiental e conecta seis pilares em um único sistema.</p>' +
            '</div>' +
            '<div>' +
              '<h4>Núcleo e pilares</h4>' +
              '<ul>' +
                '<li><a href="gestao-ambiental.html">Gestão Ambiental</a></li>' +
                PILARES.map(p => '<li><a href="' + p.href + '">' + p.nome + '</a></li>').join('') +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4>Empresa</h4>' +
              '<ul>' +
                '<li><a href="metodo.html">Método</a></li>' +
                '<li><a href="contato.html">Contato</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="site-footer__base">© ' + new Date().getFullYear() + ' Ethos e Terra. Todos os direitos reservados.</div>' +
        '</div>' +
      '</footer>';
    alvo.dataset.rendered = '1';
  }

  function initChrome() {
    renderHeader();
    renderFooter();
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'conteudo';
    if (!document.querySelector('.skip-link')) {
      const a = document.createElement('a');
      a.className = 'skip-link';
      a.href = '#conteudo';
      a.textContent = 'Pular para o conteúdo';
      document.body.insertBefore(a, document.body.firstChild);
    }
  }

  function initReveal() {
    const alvos = document.querySelectorAll('.revelar:not([data-reveal-bound]), .revelar-stagger:not([data-reveal-bound])');
    if (!alvos.length) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entradas => {
        entradas.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visivel');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: .1, rootMargin: '0px 0px -60px 0px' });

      alvos.forEach(el => {
        el.dataset.revealBound = '1';
        obs.observe(el);
      });
    } else {
      alvos.forEach(el => {
        el.dataset.revealBound = '1';
        el.classList.add('visivel');
      });
    }
  }

  function initFAQ() {
    document.querySelectorAll('.faq__pergunta:not([data-faq-bound])').forEach(btn => {
      btn.dataset.faqBound = '1';
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const aberto = item.classList.contains('aberto');

        document.querySelectorAll('.faq__item').forEach(i => {
          i.classList.remove('aberto');
          const b = i.querySelector('.faq__pergunta');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        if (!aberto) {
          item.classList.add('aberto');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function initCounters() {
    const nums = document.querySelectorAll('[data-contar]:not([data-counter-bound])');
    if (!('IntersectionObserver' in window) || !nums.length) return;

    const obsN = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const fim = parseInt(el.dataset.contar, 10);
        const sufixo = el.dataset.sufixo || '';
        if (Number.isNaN(fim)) { obsN.unobserve(el); return; }

        const dur = 1500, ini = performance.now();
        (function passo(a) {
          const p = Math.min((a - ini) / dur, 1);
          el.textContent = Math.round(fim * (1 - Math.pow(1 - p, 3))) + sufixo;
          if (p < 1) requestAnimationFrame(passo);
        })(ini);

        obsN.unobserve(el);
      });
    }, { threshold: .5 });

    nums.forEach(n => {
      n.dataset.counterBound = '1';
      obsN.observe(n);
    });
  }

  function initAll() {
    initChrome();
    initReveal();
    initFAQ();
    initCounters();
  }

  window.EthosInit = initAll;
  document.addEventListener('ethos:subpage-rendered', initAll);

  // Primeira rodada (funciona tanto em páginas normais quanto,
  // após o render do subpages.js, no restante do conteúdo).
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
