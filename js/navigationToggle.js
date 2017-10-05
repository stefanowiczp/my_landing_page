"use strict";
(function () {
  var menu = document.querySelector('.menu');
  var menuCollapsed = document.querySelector('.menu__collapsed');
  menuCollapsed.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.contains('menu-mobile') ? menu.classList.remove('menu-mobile') : menu.classList.add('menu-mobile')
  }
})();