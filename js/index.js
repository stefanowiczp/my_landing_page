//      MENU
var homeButton = document.getElementById('home');
var skillsButton = document.getElementById('skills');
var contactButton = document.getElementById('contact');
var homeSection = document.getElementsByClassName('home--container')[0];
var skillsSection = document.getElementsByClassName('skills--container')[0];
var contactSection = document.getElementsByClassName('contact--container')[0];

var show = function (element, section) {
  homeSection.style.transform = 'translateX(0)';
  skillsSection.style.display = "none";
  contactSection.style.display = "none";
  section.style.display = "flex";
  document.getElementsByClassName('active')[0].classList.remove('active');
  element.classList.add('active');
};

homeButton.addEventListener("click", function () {
  show(homeButton, homeSection)
});
skillsButton.addEventListener("click", function () {
  show(skillsButton, skillsSection)
});
contactButton.addEventListener("click", function () {
  show(contactButton, contactSection);
  slide(1)
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
    rating: 4
  }, {
    icon: document.getElementsByClassName('git')[0],
    url: "./img/icons/git.png",
    rating: 1
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
  var activeSkill = document.getElementsByClassName('skills-item__active')[0];
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
  activeSkill !== undefined ? activeSkill.classList.remove('skills-item__active') : null;
  skill.icon.classList.add('skills-item__active');
  smartPhoneButton.classList.add('fix')
};

skills.map(function (skill) {
  skill.icon.addEventListener('click', function () {
    putOnScreen(skill)
  })
});

smartPhoneButton.addEventListener('click', function () {
  var activeSkill = document.getElementsByClassName('skills-item__active')[0];
  activeSkill !== undefined ? activeSkill.classList.remove('skills-item__active') : null;
  smartPhoneButton.classList.remove('fix');
  smartPhoneScreen.style.background = "url('./img/page-smart-phone.png') ";
  smartPhoneScreen.style.backgroundSize = 'contain';
  smartPhoneScreen.style.backgroundRepeat = 'no-repeat';
  smartPhoneScreen.style.paddingTop = '0';
  smartPhoneScreen.innerHTML = "";
});

var slide = function (direction) {
  var windowWidth = window.innerWidth;
  var elementPosition = 0;
  var slidingInterval = setInterval(function () {
    windowWidth <= Math.abs(elementPosition) ? slideFinish() : elementPosition += 100 * direction;
    homeSection.style.transform = 'translateX(' + elementPosition + 'px)'
  }, 30);
  var slideFinish = function () {
    clearInterval(slidingInterval);
    homeSection.style.display = "none";
  }
};
