//      MENU
var homeSection = document.querySelector('.home--container');
var skillsSection = document.querySelector('.skills--container');
var contactSection = document.querySelector('.contact--container');
var menuLinks = document.querySelectorAll('.menu--item a');
//  !!!Default animations time is 200 not 400!!!

var fadeIn = function (element) {
  var delta = 0;
  var animation = setInterval(function () {
    delta >= 1 ? clearInterval(animation) : delta += 0.10;
    element.style.opacity = delta
  }, 20)
};
var fadeOut = function (element) {

  var delta = 1;
  var animation = setInterval(function () {
    delta <= 0 ? clearInterval(animation) : delta -= 0.10;
    element.style.opacity = delta
  }, 20)
};

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
        homeSection.style.transform = "translate3d(0px,calc(" + (currentTranslation + delta * steps  ) + "vh - 70px), 0px)";
        skillsSection.style.transform = "translate3d(0px, calc(" + (currentTranslation + delta * steps  ) + "vh - 70px), 0px)";
        contactSection.style.transform = "translate3d(0px, calc(" + (currentTranslation + delta * steps  ) + "vh - 70px), 0px)";
      }
      else {
        delta = 0;
        clearInterval(sectionSliding);
        lastId = parseInt(id, 10);
        currentTranslation = parseInt(checkTranslation(contactSection), 10);
      }
    }, 20)
  }
};

menuLinks.forEach(function (item) {
  item.addEventListener("click", function (event) {
    document.querySelector('.active').classList.remove('active');
    event.target.parentElement.classList.add('active');
    if (window.innerWidth >= 500) {
      event.preventDefault();
      slide(event.target.getAttribute('data-id'))
    }
    else {
      slide(0)
    }
  })
});

//     SKILLS
var smartPhoneScreen = document.querySelector('.smart-phone--screen');
var smartPhoneButton = document.querySelector('.smart-phone--home-btn');

skills = [
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
    url: "./img/icons/jira.png",
    rating: 3
  }, {
    icon: document.querySelector('.jira'),
    url: "./img/icons/scrum.png",
    rating: 2
  }
];

var putOnScreen = function (skill) {
  fadeOut(smartPhoneScreen);
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
    smartPhoneButton.classList.add('fix');
    fadeIn(smartPhoneScreen);
  }, 200);

};

skills.map(function (skill) {
  skill.icon.addEventListener('click', function () {
    putOnScreen(skill)
  })
});

smartPhoneButton.addEventListener('click', function () {
  fadeOut(smartPhoneScreen);
  setTimeout(function () {
    fadeIn(smartPhoneScreen);
    smartPhoneButton.classList.remove('fix');
    smartPhoneScreen.style.background = "url('./img/page-smart-phone.png') ";
    smartPhoneScreen.style.backgroundSize = 'contain';
    smartPhoneScreen.style.backgroundRepeat = 'no-repeat';
    smartPhoneScreen.style.paddingTop = '0';
    smartPhoneScreen.innerHTML = "";
  }, 200)
});
