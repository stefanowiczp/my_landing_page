//      MENU
var homeButton = document.getElementById('home');
var skillsButton = document.getElementById('skills');
var contactButton = document.getElementById('contact');
var homeSection = document.getElementsByClassName('home--container')[0];
var skillsSection = document.getElementsByClassName('skills--container')[0];
var contactSection = document.getElementsByClassName('contact--container')[0];

var show = function (element, section) {
  homeSection.style.display = "none";
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
  show(contactButton, contactSection)
});

//     SKILLS
var smartPhoneScreen = document.getElementsByClassName('smart-phone--screen')[0];
var htmlIcon = document.getElementsByClassName('html')[0];
var cssIcon = document.getElementsByClassName('css')[0];
var rwdIcon = document.getElementsByClassName('rwd')[0];
var bootstrapIcon = document.getElementsByClassName('bootstrap')[0];
var wordpressIcon = document.getElementsByClassName('wordpress')[0];
var javascriptIcon = document.getElementsByClassName('javascript')[0];
var jqueryIcon = document.getElementsByClassName('jquery')[0];
var reactIcon = document.getElementsByClassName('react')[0];
var gitIcon = document.getElementsByClassName('git')[0];
var photoshopIcon = document.getElementsByClassName('photoshop')[0];
var scrumIcon = document.getElementsByClassName('scrum')[0];
var jiraIcon = document.getElementsByClassName('jira')[0];
var smartPhoneButton = document.getElementsByClassName('smart-phone--home-btn')[0];

skills = [
  {
    icon: htmlIcon,
    url: "./img/icons/html.png",
    rating: 4
  }, {
    icon: cssIcon,
    url: "./img/icons/css.png",
    rating: 4
  }, {
    icon: rwdIcon,
    url: "./img/icons/rwd.png",
    rating: 4
  }, {
    icon: bootstrapIcon,
    url: "./img/icons/bootstrap.png",
    rating: 2
  }, {
    icon: wordpressIcon,
    url: "./img/icons/wordpress-white.png",
    rating: 1
  }, {
    icon: javascriptIcon,
    url: "./img/icons/js.png",
    rating: 3
  }, {
    icon: jqueryIcon,
    url: "./img/icons/jquery.png",
    rating: 3
  }, {
    icon: reactIcon,
    url: "./img/icons/react.png",
    rating: 4
  }, {
    icon: gitIcon,
    url: "./img/icons/git.png",
    rating: 1
  }, {
    icon: photoshopIcon,
    url: "./img/icons/photoshop.png",
    rating: 3
  }, {
    icon: jiraIcon,
    url: "./img/icons/jira.png",
    rating: 3
  }, {
    icon: scrumIcon,
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
  smartPhoneScreen.innerHTML = skill.rating + '/5';
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
