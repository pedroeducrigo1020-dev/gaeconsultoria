/* Ethos e Terra: comportamentos básicos do site */
(function () {
  'use strict';

  // Menu do celular: fecha ao clicar fora, ao escolher um link ou ao apertar Esc
  var menu = document.querySelector('.menu');
  if (menu) {
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
    });
  }

  // Ano atual no rodapé
  var ano = document.querySelector('[data-ano]');
  if (ano) ano.textContent = new Date().getFullYear();

  // Se alguma imagem não carregar, avisa em vez de deixar um espaço vazio
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      var aviso = document.createElement('span');
      aviso.textContent = 'Imagem indisponível: ' + (img.getAttribute('alt') || img.getAttribute('src'));
      aviso.style.cssText = 'display:block;padding:12px;color:#555;font-size:.9rem';
      if (img.parentNode) img.parentNode.replaceChild(aviso, img);
      if (window.console) console.warn('Imagem não carregou:', img.getAttribute('src'));
    });
  });
})();
