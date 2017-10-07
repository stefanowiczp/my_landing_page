"use strict";
(function () {
  var sectionElement = document.querySelector('.section');
  var menuLinks = document.querySelectorAll('.menu--item a');
  var amountOfSections = document.querySelectorAll('.section').length;
  var lastId = 0;
  var currentTranslation = 0;
  var delta = 0;

  //EVENT LISTENERS
  document.addEventListener('mousewheel', scrollHandler);
  document.addEventListener('DOMMouseScroll', scrollHandler);
  document.addEventListener('keyup', arrowsHandler);
  menuLinks.forEach(function (item) {
    item.addEventListener("click", handleDependingOnDevice)
  });

  function arrowsHandler(event) {
    var dataId = parseInt(document.querySelector('.active a').getAttribute('data-id'))
    if (dataId > 0 && event.keyCode === 38) {
      slide(dataId - 1)
    }
    else if (dataId < amountOfSections - 1 && event.keyCode === 40) {
      slide(dataId + 1)
    }
  }

  function scrollHandler(event) {
    event.preventDefault();
    var scrollDelta = event.wheelDelta || -event.detail;
    var dataId = parseInt(document.querySelector('.active a').getAttribute('data-id'));
    var sectionDelta = scrollDelta > 0 ? dataId - 1 : dataId + 1;
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
