"use strict";
(function () {
  var sectionElement = document.querySelector('.section');
  var menuLinks = document.querySelectorAll('.menu--item a');
  var lastId = 0;
  var currentTranslation = 0;
  var delta = 0;

  //EVENT LISTENERS
  document.addEventListener('mousewheel', scrollHandler);
  menuLinks.forEach(function (item) {
    item.addEventListener("click", handleDependingOnDevice)
  });

  function scrollHandler(event) {
    event.preventDefault();
    var dataId = parseInt(document.querySelector('.active a').getAttribute('data-id'));
    var amountOfSections = document.querySelectorAll('.section').length;
    var sectionDelta = event.wheelDelta > 0 ? dataId - 1 : dataId + 1;
    sectionDelta >= 0 && sectionDelta < amountOfSections ? slide(sectionDelta) : null;
  }

  function handleDependingOnDevice(event) {
    if (window.innerWidth >= 500) {
      event.preventDefault();
      slide(event.target.getAttribute('data-id'))
    }
    else {
      document.querySelectorAll('.section').forEach(function (section) {
        section.style.transform = "translate3d(0,0,0)"
      });
    }
  }

  function checkTranslation(section) {
    return section.style.transform.slice(22, 26)
  }

  function slide(id) {
    var steps = lastId - parseInt(id, 10);

    if (steps !== 0 && delta === 0) {
      var sectionSliding = setInterval(function () {
        if (delta < 100) {
          delta += 4;
          document.querySelectorAll('.section').forEach(function (section) {
            section.style.transform = "translate3d(0px,calc(" + (currentTranslation + delta * steps  ) + "vh - 70px), 0px)";
          });
          document.querySelector('.active').classList.remove('active');
          document.querySelectorAll('.menu--item')[id].classList.add('active')
        }
        else {
          delta = 0;
          clearInterval(sectionSliding);
          lastId = parseInt(id, 10);
          currentTranslation = parseInt(checkTranslation(sectionElement), 10);
        }
      }, 10)
    }
  }
})();
