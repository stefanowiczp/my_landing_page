"use strict";
(function () {
//     SKILLS
  var smartPhoneScreen = document.querySelector('.smart-phone--screen');
  var smartPhoneButton = document.querySelector('.smart-phone__home-btn');

  var skills = [
    {
      icon: document.querySelector('.html'),
      url: "./img/icons/html.png",
      rating: 3
    }, {
      icon: document.querySelector('.css'),
      url: "./img/icons/css.png",
      rating: 4
    }, {
      icon: document.querySelector('.rwd'),
      url: "./img/icons/rwd.png",
      rating: 4
    }, {
      icon: document.querySelector('.bootstrap'),
      url: "./img/icons/bootstrap.png",
      rating: 2
    }, {
      icon: document.querySelector('.wordpress'),
      url: "./img/icons/wordpress-white.png",
      rating: 1
    }, {
      icon: document.querySelector('.javascript'),
      url: "./img/icons/js.png",
      rating: 3
    }, {
      icon: document.querySelector('.jquery'),
      url: "./img/icons/jquery.png",
      rating: 3
    }, {
      icon: document.querySelector('.react'),
      url: "./img/icons/react.png",
      rating: 3
    }, {
      icon: document.querySelector('.git'),
      url: "./img/icons/git.png",
      rating: 2
    }, {
      icon: document.querySelector('.photoshop'),
      url: "./img/icons/photoshop.png",
      rating: 3
    }, {
      icon: document.querySelector('.scrum'),
      url: "./img/icons/scrum.png",
      rating: 3
    }, {
      icon: document.querySelector('.jira'),
      url: "./img/icons/jira.png",
      rating: 2
    }
  ];

  var putOnScreen = function (skill) {
    if (smartPhoneScreen.classList.contains('fade-out-in')) {
    }
    else {
      smartPhoneScreen.classList.add('fade-out-in');
      smartPhoneButton.classList.add('fix');

      setTimeout(function () {
        smartPhoneScreen.style.background = 'url(' + skill.url + ')';
        smartPhoneScreen.style.backgroundSize = 'contain';
        smartPhoneScreen.style.backgroundRepeat = 'no-repeat';
        smartPhoneScreen.style.paddingTop = '200px';
        smartPhoneScreen.innerHTML = "";
        for (var i = 1; i <= skill.rating; i++) {
          var currentState = smartPhoneScreen.innerHTML;
          currentState = currentState + "<img src='./img/icons/star.png' alt='star'/>";
          smartPhoneScreen.innerHTML = currentState;
        }
      }, 200);
      setTimeout(function () {
        smartPhoneScreen.classList.remove('fade-out-in')
      }, 400)
    }
  };

  skills.map(function (skill) {
    skill.icon.addEventListener('click', function () {
      putOnScreen(skill)
    })
  });

  smartPhoneButton.addEventListener('click', function () {
    smartPhoneScreen.classList.add('fade-out-in');
    setTimeout(function () {
      smartPhoneButton.classList.remove('fix');
      smartPhoneScreen.style.background = "url('./img/page-smart-phone.png') ";
      smartPhoneScreen.style.backgroundSize = 'contain';
      smartPhoneScreen.style.backgroundRepeat = 'no-repeat';
      smartPhoneScreen.style.paddingTop = '0';
      smartPhoneScreen.innerHTML = "";
    }, 200);
    setTimeout(function () {
      smartPhoneScreen.classList.remove('fade-out-in')
    }, 400)
  });
})();
