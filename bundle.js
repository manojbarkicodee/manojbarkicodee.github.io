/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/scroll.js
var scrollUp = function scrollUp() {
  var btnScrollUp = document.querySelector('.scroll-up');

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnScrollUp.style.display = 'block';
    btnScrollUp.addEventListener("click", function () {
      document.documentElement.scrollTop = "0px";
    });
  } else {
    btnScrollUp.style.display = 'none';
  }
};

/* harmony default export */ const modules_scroll = ({
  scrollUp: scrollUp
});
;// CONCATENATED MODULE: ./src/modules/toggleTheme.js
var btnTheme = document.querySelector('.fa-moon');

var addThemeClass = function addThemeClass(bodyClass, btnClass) {
  document.body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

var isDark = function isDark() {
  return document.body.classList.contains('body-dark');
}; // let nav_bar = document.getElementById(top);


var setTheme = function setTheme(bodyClass, btnClass) {
  document.body.classList.remove(localStorage.getItem('class-body-theme'));
  btnTheme.classList.remove(localStorage.getItem('class-btn-theme'));
  addThemeClass(bodyClass, btnClass);
  localStorage.setItem('class-body-theme', bodyClass);
  localStorage.setItem('class-btn-theme', btnClass);
};

var toggleTheme = function toggleTheme() {
  return isDark() ? setTheme('body-light', 'fa-moon') : setTheme('body-dark', 'fa-sun');
};

 // isDark() ? `nav_bar.style.backgroundColor="#f5f6f7"`: `nav_bar.style.backgroundColor="red"`;
// if(isDark()){
// 	nav_bar.style.backgroundColor="#f5f6f7"
// } else{
// 	nav_bar.style.backgroundColor="red"
// }
// i have to change nav_bar
;// CONCATENATED MODULE: ./src/modules/displayList.js
var btnHamburger = document.querySelector('.fa-bars');

var displayList = function displayList() {
  var navUl = document.querySelector('nav ul');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

/* harmony default export */ const modules_displayList = (displayList);
;// CONCATENATED MODULE: ./src/index.js


 // import {github} from './modules/github'


var src_btnHamburger = document.querySelector('.fa-bars');
var src_btnTheme = document.querySelector('.fa-moon');
var github1 = document.querySelector("#github"); // github1.innerHTML

src_btnHamburger.addEventListener('click', modules_displayList);
src_btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', modules_scroll.scrollUp);
var getBodyClass = localStorage.getItem('class-body-theme');
var getBtnClass = localStorage.getItem('class-btn-theme');
addThemeClass(getBodyClass, getBtnClass);
/******/ })()
;
//# sourceMappingURL=bundle.js.map