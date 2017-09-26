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
