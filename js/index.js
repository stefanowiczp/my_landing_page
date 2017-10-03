//      MENU
var homeSection = document.getElementsByClassName('home--container')[0];
var skillsSection = document.getElementsByClassName('skills--container')[0];
var contactSection = document.getElementsByClassName('contact--container')[0];
var menu = document.getElementsByClassName('menu')[0];

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

function slide(id) {
  homeSection.style.transform = "translate3d(0px, -" + id + "00vh, 0px)";
  skillsSection.style.transform = "translate3d(0px, calc(-" + id + "00vh + 70px), 0px)";
  contactSection.style.transform = "translate3d(0px, calc(-" + id + "00vh + 140px), 0px)";
}

menu.addEventListener("click", function (event) {
  slide(event.target.getAttribute('data-id'))
});

//     SKILLS
var smartPhoneScreen = document.getElementsByClassName('smart-phone--screen')[0];
var smartPhoneButton = document.getElementsByClassName('smart-phone--home-btn')[0];

skills = [
  {
    icon: document.getElementsByClassName('html')[0],
    url: "./img/icons/html.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('css')[0],
    url: "./img/icons/css.png",
    rating: 4
  }, {
    icon: document.getElementsByClassName('rwd')[0],
    url: "./img/icons/rwd.png",
    rating: 4
  }, {
    icon: document.getElementsByClassName('bootstrap')[0],
    url: "./img/icons/bootstrap.png",
    rating: 2
  }, {
    icon: document.getElementsByClassName('wordpress')[0],
    url: "./img/icons/wordpress-white.png",
    rating: 1
  }, {
    icon: document.getElementsByClassName('javascript')[0],
    url: "./img/icons/js.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('jquery')[0],
    url: "./img/icons/jquery.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('react')[0],
    url: "./img/icons/react.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('git')[0],
    url: "./img/icons/git.png",
    rating: 2
  }, {
    icon: document.getElementsByClassName('photoshop')[0],
    url: "./img/icons/photoshop.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('scrum')[0],
    url: "./img/icons/jira.png",
    rating: 3
  }, {
    icon: document.getElementsByClassName('jira')[0],
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
