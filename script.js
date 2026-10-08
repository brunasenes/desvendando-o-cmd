// Mostra a barra superior com o botão de compra depois que o hero sai da tela.
(function () {
  var bar = document.getElementById('topbar');
  var hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  function update() {
    bar.classList.toggle('show', hero.getBoundingClientRect().bottom < 0);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
