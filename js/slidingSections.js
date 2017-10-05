"use strict";
(function () {
  //      MENU
  var sectionElement = document.querySelector('.section');
  var menuLinks = document.querySelectorAll('.menu--item a');

  var checkTranslation = function (section) {
    return section.style.transform.slice(22, 26)
  };
  var lastId = 0;
  var currentTranslation = 0;
  var delta = 0;

  var slide = function (id) {
    var steps = lastId - parseInt(id, 10);
    if (steps !== 0 && delta === 0) {
      var sectionSliding = setInterval(function () {
        if (delta < 100) {
          delta += 5;
          document.querySelectorAll('.section').forEach(function (section) {
            section.style.transform = "translate3d(0px,calc(" + (currentTranslation + delta * steps  ) + "vh - 70px), 0px)";
          });
        }
        else {
          delta = 0;
          clearInterval(sectionSliding);
          lastId = parseInt(id, 10);
          currentTranslation = parseInt(checkTranslation(sectionElement), 10);
        }
      }, 20)
    }
  };

  menuLinks.forEach(function (item) {
    item.addEventListener("click", function (event) {
      document.querySelector('.active').classList.remove('active');
      event.target.parentElement.classList.add('active');
      if (window.innerWidth >= 500) {
        document.querySelectorAll('.section').forEach(function (section) {
          section.style.display = "flex";
        });
        event.preventDefault();
        slide(event.target.getAttribute('data-id'))
      }
      else {
        document.querySelectorAll('.section').forEach(function (section) {
          section.style.transform = "translate3d(0,0,0)"
        });
      }
    })
  });
})();
