/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _all_reviews_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-reviews.html */ \"./all-reviews.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?bd63\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("// Resize Navbar on Scroll\nwindow.onscroll = function () {\n  var navbar = document.getElementById(\"navbar\");\n\n  if (window.scrollY > 50) {\n    navbar.classList.add(\"small\");\n  } else {\n    navbar.classList.remove(\"small\");\n  }\n}; // Smooth Scrolling for navigation links\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var navLinks = document.querySelectorAll('.nav-link');\n  var offset = 80; // Adjust this value based on your sticky navbar height\n\n  navLinks.forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n      var targetId = this.getAttribute('href').substring(1);\n      var targetSection = document.getElementById(targetId); // Scroll to the section smoothly, accounting for the navbar height\n\n      window.scrollTo({\n        top: targetSection.offsetTop - offset,\n        behavior: 'smooth'\n      });\n    });\n  });\n}); // Highlight the active section in the navbar\n\nvar sections = document.querySelectorAll(\"section\");\nvar navLinks = document.querySelectorAll(\".nav-link\");\nwindow.addEventListener(\"scroll\", function () {\n  var current = \"\";\n  sections.forEach(function (section) {\n    var sectionTop = section.offsetTop;\n    var sectionHeight = section.clientHeight; // Adjust based on the scroll position and section height\n\n    if (pageYOffset >= sectionTop - sectionHeight / 4) {\n      current = section.getAttribute(\"id\");\n    }\n  });\n  navLinks.forEach(function (link) {\n    link.classList.remove(\"active\");\n\n    if (link.getAttribute(\"href\").includes(current)) {\n      link.classList.add(\"active\");\n    }\n  });\n}); // Slider logic for Current Hermanos section\n\nvar currentIndex = 0;\nvar slides = document.querySelectorAll('.slide');\nvar totalSlides = slides.length;\n\nfunction showSlide(index) {\n  var slider = document.querySelector('.slider');\n  slider.style.transform = \"translateX(-\".concat(index * 100, \"%)\");\n} // Auto-slide every 5 seconds (slower than before)\n\n\nvar slideInterval = setInterval(function () {\n  currentIndex = (currentIndex + 1) % totalSlides;\n  showSlide(currentIndex);\n}, 5000); // Add next/previous buttons functionality\n\nvar nextBtn = document.getElementById('next');\nvar prevBtn = document.getElementById('prev');\n\nif (nextBtn && prevBtn) {\n  nextBtn.addEventListener('click', function () {\n    currentIndex = (currentIndex + 1) % totalSlides;\n    showSlide(currentIndex);\n    resetAutoSlide(); // Reset auto-slide timer on manual navigation\n  });\n  prevBtn.addEventListener('click', function () {\n    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;\n    showSlide(currentIndex);\n    resetAutoSlide(); // Reset auto-slide timer on manual navigation\n  });\n} // Reset the auto-slide timer when manually navigating\n\n\nfunction resetAutoSlide() {\n  clearInterval(slideInterval);\n  slideInterval = setInterval(function () {\n    currentIndex = (currentIndex + 1) % totalSlides;\n    showSlide(currentIndex);\n  }, 5000); // Reset the interval to 5 seconds after manual navigation\n} // Open modal when an event column is clicked\n\n\ndocument.querySelectorAll('.event-column').forEach(function (eventColumn) {\n  eventColumn.addEventListener('click', function () {\n    var modalId = this.getAttribute('data-modal');\n    document.getElementById(modalId).style.display = 'block';\n  });\n}); // Close modal when the close button is clicked\n\ndocument.querySelectorAll('.modal .close').forEach(function (closeButton) {\n  closeButton.addEventListener('click', function () {\n    this.closest('.modal').style.display = 'none';\n  });\n}); // Close modal when clicking outside of the modal content\n\nwindow.onclick = function (event) {\n  if (event.target.classList.contains('modal')) {\n    event.target.style.display = 'none';\n  }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var revealElements = document.querySelectorAll(\".reveal-on-scroll\"); // Create the Intersection Observer\n\n  var observer = new IntersectionObserver(function (entries, obs) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        // Add .active class to trigger the animation\n        entry.target.classList.add(\"active\"); // Stop observing once the animation is triggered\n\n        obs.unobserve(entry.target);\n      }\n    });\n  }, {\n    // You can adjust the threshold or rootMargin if you want\n    // to trigger earlier/later. For example:\n    // rootMargin: '0px 0px -100px 0px'\n    threshold: 0.1\n  }); // Observe each \"reveal-on-scroll\" element\n\n  revealElements.forEach(function (el) {\n    return observer.observe(el);\n  });\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Playfair\\\", sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  scroll-behavior: smooth;\\n  text-align: center;\\n  background-color: #fff;\\n  /* White background */\\n  color: #000;\\n  /* Black text */\\n  font-weight: 600;\\n  overflow-x: hidden;\\n}\\n\\n/* Sticky Navbar */\\nnav {\\n  position: sticky;\\n  top: 0;\\n  width: 100%;\\n  background-color: #837956;\\n  /* White background */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px;\\n  z-index: 1000;\\n  transition: all 0.3s ease;\\n}\\n\\nnav.small {\\n  padding: 10px;\\n  background-color: #837956;\\n  /* Remains same color on scroll */\\n}\\n\\nnav ul {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  list-style-type: none;\\n  width: 100%;\\n  max-width: 1200px;\\n}\\n\\nnav ul li {\\n  flex: 1;\\n  text-align: right;\\n}\\n\\nnav ul a {\\n  color: #fff;\\n  text-decoration: none;\\n  padding: 10px;\\n  font-size: 18px;\\n  font-weight: 600;\\n  position: relative;\\n}\\n\\nnav ul a.active {\\n  background-color: transparent;\\n}\\n\\nnav ul a.active:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100%;\\n  height: 2px;\\n  background-color: #fff;\\n  left: 0;\\n  bottom: -5px;\\n}\\n\\nnav ul a:hover {\\n  color: #444;\\n  /* Dark gray on hover */\\n}\\n\\nnav .center-logo {\\n  height: 125px;\\n  transition: height 0.3s ease;\\n}\\n\\nnav.small .center-logo {\\n  height: 100px;\\n}\\n\\n/* Centering sections */\\nsection {\\n  padding: 50px;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  font-weight: 600;\\n}\\n\\nsection h1 {\\n  font-size: 3.5rem;\\n  margin-bottom: 20px;\\n}\\n\\nsection p {\\n  font-size: 2rem;\\n}\\n\\n/* ========== Mission Section ========== */\\n#mission {\\n  background-color: #fff;\\n  color: #000;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: left;\\n  font-weight: 600;\\n  min-height: 80vh;\\n  padding: 30px 30px 100px;\\n  margin: 0;\\n  -moz-column-gap: 150px;\\n       column-gap: 150px;\\n}\\n\\n/* Container for h1 and p */\\n.text-area {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  max-width: 600px;\\n}\\n\\n/* Slide/fade in for the heading */\\n#mission h1 {\\n  font-size: 3.2rem;\\n  margin: 30px 30px 10px 0;\\n  -webkit-animation: slideInLeft 1.2s ease-out forwards;\\n          animation: slideInLeft 1.2s ease-out forwards;\\n}\\n\\n/* Slide/fade in for the paragraph */\\n#mission p {\\n  font-size: 1.8rem;\\n  margin: 10px 30px 30px 0;\\n  -webkit-animation: slideInRight 1.2s ease-out forwards;\\n          animation: slideInRight 1.2s ease-out forwards;\\n}\\n\\n/* Make the introduction picture appear after loading */\\n.introduction-pic {\\n  max-width: 400px;\\n  width: 100%;\\n  height: auto;\\n  opacity: 0;\\n  -webkit-animation: fadeInRight 1.5s ease-out forwards;\\n          animation: fadeInRight 1.5s ease-out forwards;\\n  -webkit-animation-delay: 0.5s;\\n          animation-delay: 0.5s;\\n}\\n\\n/* ------------- MEDIA QUERIES FOR MOBILE ------------- */\\n@media (max-width: 768px) {\\n  /* Stack elements in a column on smaller devices */\\n  #mission {\\n    flex-direction: column;\\n    justify-content: start;\\n    padding-top: 0;\\n    min-height: 70vh;\\n  }\\n\\n  /* Adjust heading font size and margins */\\n  #mission h1 {\\n    font-size: 2.4rem;\\n    margin-top: 0px !important;\\n  }\\n\\n  /* Adjust paragraph font size and margins */\\n  #mission p {\\n    font-size: 1.6rem;\\n    margin: 10px 0 20px;\\n  }\\n\\n  /* Make the image smaller (if needed) */\\n  .introduction-pic {\\n    max-width: 300px;\\n    margin-top: 20px;\\n  }\\n}\\n/* Slide/Fade Animations */\\n@-webkit-keyframes slideInLeft {\\n  from {\\n    opacity: 0;\\n    transform: translateX(-50px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n@keyframes slideInLeft {\\n  from {\\n    opacity: 0;\\n    transform: translateX(-50px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n@-webkit-keyframes slideInRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(50px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n@keyframes slideInRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(50px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n@-webkit-keyframes fadeInRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(20px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n@keyframes fadeInRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(20px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n}\\n/* ========== Services Section ========== */\\n#services {\\n  background-color: #837956;\\n  color: #fff;\\n  padding: 40px 20px;\\n  text-align: center;\\n}\\n\\n#services > h1 {\\n  font-size: 3rem;\\n  margin-bottom: 40px;\\n}\\n\\n/* Grid to display 8 service items in 4 columns and 2 rows */\\n.services-grid {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  /* 4 columns */\\n  grid-gap: 30px;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n/* Each service item */\\n.service-item {\\n  background-color: #837956;\\n  border-radius: 8px;\\n  padding: 20px;\\n  text-align: center;\\n  color: #fff;\\n}\\n\\n.service-item img {\\n  width: 80%;\\n  height: auto;\\n  border-radius: 4px;\\n  margin-bottom: 15px;\\n}\\n\\n.service-item h2 {\\n  font-size: 1.5rem;\\n  /* Increase font size to stand out */\\n  font-weight: 700;\\n  /* Make it bolder */\\n  margin-bottom: 15px;\\n  /* Give a bit more space below the heading */\\n  letter-spacing: 1px;\\n  /* Slight spacing between letters for emphasis */\\n  text-transform: uppercase;\\n  /* Optional, adds a bold, \\\"headline\\\" style */\\n  color: #fff;\\n  /* Ensure good contrast on your background */\\n  text-decoration: underline;\\n  /* Underline the heading */\\n}\\n\\n.service-item p {\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  color: #fff;\\n}\\n\\n/* Carousel/Slider for Current Hermanos */\\n#current-hermanos {\\n  background-color: #fff;\\n  color: #000;\\n}\\n\\n.carousel {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.slider {\\n  display: flex;\\n  transition: transform 0.8s ease-in-out;\\n}\\n\\n.slide {\\n  min-width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.slide img {\\n  width: 500px;\\n  height: auto;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n/* Navigation arrows */\\nbutton.prev, button.next {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  background-color: rgba(0, 0, 0, 0.1);\\n  border: none;\\n  color: #000;\\n  padding: 15px;\\n  font-size: 18px;\\n  cursor: pointer;\\n  z-index: 2;\\n}\\n\\nbutton.prev {\\n  left: 0;\\n}\\n\\nbutton.next {\\n  right: 0;\\n}\\n\\nbutton.prev:hover, button.next:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n\\n/* ===== About Me Section ===== */\\n#about-me {\\n  background-color: #837956;\\n  color: #fff;\\n  padding: 60px 20px;\\n}\\n\\n.about-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  gap: 40px;\\n}\\n\\n.owner-photo {\\n  flex: 1;\\n  max-width: 350px;\\n}\\n\\n.owner-photo img {\\n  width: 100%;\\n  height: auto;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\\n}\\n\\n.owner-description {\\n  flex: 1;\\n  text-align: left;\\n}\\n\\n.owner-description h1 {\\n  font-size: 2.5rem;\\n  margin-bottom: 20px;\\n}\\n\\n.owner-description p {\\n  font-size: 1.1rem;\\n  line-height: 1.6;\\n  margin-bottom: 15px;\\n  color: #fff;\\n}\\n\\n/* ============================== REVIEWS SECTION ============================== */\\n#reviews {\\n  font-family: \\\"Playfair\\\", sans-serif;\\n  background-color: #fdfdfd;\\n  /* Light background for contrast */\\n  padding: 60px 10px;\\n  max-height: -webkit-fit-content;\\n  max-height: -moz-fit-content;\\n  max-height: fit-content;\\n  text-align: center;\\n}\\n\\n#reviews h2 {\\n  font-size: 2.5rem;\\n  margin-bottom: 40px;\\n  color: #333;\\n}\\n\\n/* 3 columns for reviews */\\n.reviews-container {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 30px;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.review-item {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 6px;\\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\\n  text-align: left;\\n}\\n\\n.review-item blockquote {\\n  font-style: italic;\\n  margin-bottom: 10px;\\n  color: #555;\\n}\\n\\n.review-item p {\\n  color: #837956;\\n  /* Optional highlight color for the name */\\n  font-weight: bold;\\n}\\n\\n.more-reviews {\\n  margin-top: 20px;\\n}\\n\\n.more-reviews a {\\n  color: #837956;\\n  /* or your brand color */\\n  font-weight: bold;\\n  text-decoration: underline;\\n}\\n\\n#all-reviews {\\n  font-style: \\\"Playfair\\\", \\\"sans-sarrif\\\";\\n  padding: 30px 20px;\\n  max-width: 800px;\\n  margin: 0 auto;\\n}\\n\\n.review {\\n  background-color: #fff;\\n  margin-bottom: 20px;\\n  padding: 20px;\\n  border-radius: 6px;\\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\\n}\\n\\n.review h2 {\\n  font-size: 1.4rem;\\n  margin-bottom: 10px;\\n}\\n\\n.review p {\\n  font-size: 1rem;\\n  line-height: 1.6;\\n}\\n\\n/* ========================= MOBILE-FRIENDLY TWEAKS ========================= */\\n/* 1) Reviews Section Responsive Columns */\\n@media (max-width: 992px) {\\n  /* On tablets and mid-sized screens, use 2 columns */\\n  .reviews-container {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n@media (max-width: 576px) {\\n  /* On small phones, just 1 column */\\n  .reviews-container {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n/* 2) Services Section: Smaller text & images for phones */\\n/* -- For tablets and slightly larger phones -- */\\n@media (max-width: 768px) {\\n  /* Services grid from 4 columns to 2 columns */\\n  .services-grid {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  /* Shrink text sizes a bit */\\n  .service-item h2 {\\n    font-size: 1.4rem;\\n  }\\n\\n  .service-item p {\\n    font-size: 1rem;\\n  }\\n\\n  /* Scale down images slightly */\\n  .service-item img {\\n    width: 70%;\\n    margin: 0 auto;\\n    /* Center the image */\\n  }\\n}\\n/* -- For extra-small phones -- */\\n@media (max-width: 480px) {\\n  /* 1 column on very narrow screens */\\n  .services-grid {\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .service-item h2 {\\n    font-size: 1.2rem;\\n  }\\n\\n  .service-item p {\\n    font-size: 0.8rem !important;\\n  }\\n\\n  /* Images even smaller */\\n  .service-item img {\\n    width: 60%;\\n  }\\n}\\n/* ============================== FOOTER SECTION ============================== */\\n#main-footer {\\n  background-color: #837956;\\n  color: #fff;\\n  padding: 40px 20px;\\n  text-align: center;\\n}\\n\\n.footer-content {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.footer-content p {\\n  margin-bottom: 20px;\\n  line-height: 1.4;\\n}\\n\\n.footer-content a {\\n  color: #fff;\\n  text-decoration: underline;\\n}\\n\\n.footer-content a:hover {\\n  color: #ddd;\\n  text-decoration: none;\\n}\\n\\n.footer-content .address,\\n.footer-content .hours,\\n.footer-content .social {\\n  margin-bottom: 20px;\\n}\\n\\n/* Larger screens: display flex side by side */\\n@media (min-width: 768px) {\\n  .footer-content {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: flex-start;\\n    text-align: left;\\n  }\\n\\n  .footer-content p {\\n    margin-bottom: 10px;\\n  }\\n\\n  .footer-content .address,\\n.footer-content .hours,\\n.footer-content .social {\\n    margin-bottom: 0;\\n  }\\n\\n  .instagram-logo {\\n    width: 36px;\\n    margin-top: 5px;\\n    display: block;\\n    /* Make the image a block element */\\n    margin-left: auto;\\n    /* Push it to the center horizontally */\\n    margin-right: auto;\\n  }\\n}\\n/* Smaller screens: stack everything vertically */\\n@media (max-width: 767px) {\\n  .footer-content {\\n    display: flex;\\n    flex-direction: column;\\n    /* vertical stacking */\\n    align-items: center;\\n    /* center horizontally */\\n  }\\n\\n  .footer-content p {\\n    text-align: center;\\n    /* ensure text is centered */\\n    margin-bottom: 20px;\\n  }\\n\\n  .instagram-logo {\\n    width: 36px;\\n    margin-top: 5px;\\n    display: block;\\n    /* Make the image a block element */\\n    margin-left: auto;\\n    /* Push it to the center horizontally */\\n    margin-right: auto;\\n  }\\n}\\n/* =========================== Additional Mobile-Friendly Tweaks =========================== */\\n/* =========================== For smaller screens (max-width: 1000px) =========================== */\\n@media (max-width: 1000px) {\\n  #navbar {\\n    /* Slightly reduce navbar padding at 1000px wide */\\n    padding: 10px;\\n  }\\n\\n  /* When scrolled, shrink a bit more */\\n  #navbar.small {\\n    padding: 5px;\\n  }\\n\\n  /* Make nav text smaller */\\n  #navbar ul li a.nav-link {\\n    font-size: 10px;\\n  }\\n\\n  #navbar.small ul li a.nav-link {\\n    font-size: 8px;\\n  }\\n\\n  /* Shrink logo height */\\n  #navbar .center-logo {\\n    height: 100px;\\n  }\\n\\n  #navbar.small .center-logo {\\n    height: 40px;\\n  }\\n\\n  /* Adjust heading and paragraph sizes in sections */\\n  section h1 {\\n    font-size: 2.5rem;\\n  }\\n\\n  section p {\\n    font-size: 1.5rem;\\n  }\\n\\n  /* Services grid: go to 2 columns on mid-sized devices */\\n  .services-grid {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  /* Mission Section: stack text/image in one column */\\n  #mission {\\n    flex-direction: column;\\n    padding: 30px 20px;\\n    -moz-column-gap: 0;\\n         column-gap: 0;\\n  }\\n\\n  #mission h1,\\n#mission p {\\n    margin: 20px 0;\\n    text-align: center;\\n  }\\n\\n  .introduction-pic {\\n    margin-top: 20px;\\n    max-width: 300px;\\n  }\\n\\n  /* Current Hermanos images smaller */\\n  .slide img {\\n    width: 300px;\\n  }\\n\\n  /* About Me section stacks content */\\n  .about-container {\\n    flex-direction: column;\\n    text-align: center;\\n  }\\n\\n  .owner-photo,\\n.owner-description {\\n    max-width: 100%;\\n  }\\n\\n  .owner-description h1 {\\n    margin-top: 20px;\\n  }\\n}\\n/* =========================== For extra small screens (max-width: 480px) =========================== */\\n@media (max-width: 480px) {\\n  /* Center text in typical sections */\\n  /* Further reduce navbar padding and text/logo sizes */\\n  #navbar {\\n    padding: 12px;\\n    text-align: center;\\n    margin-bottom: 0px;\\n  }\\n\\n  #navbar.small {\\n    padding: 10px;\\n  }\\n\\n  #navbar ul li a.nav-link {\\n    text-align: left;\\n    font-size: 9px;\\n  }\\n\\n  #navbar.small ul li a.nav-link {\\n    text-align: left;\\n    font-size: 9px;\\n  }\\n\\n  #navbar .center-logo {\\n    height: 45px;\\n  }\\n\\n  #navbar.small .center-logo {\\n    height: 40px;\\n  }\\n\\n  /* Headings in Services Section smaller */\\n  #services > h1 {\\n    font-size: 1.8rem;\\n  }\\n\\n  /* Services grid: 1 column on very small devices */\\n  .services-grid {\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .service-item h2 {\\n    font-size: 1.3rem;\\n  }\\n\\n  .service-item p {\\n    font-size: 0.9rem;\\n  }\\n\\n  .slide img {\\n    width: 250px;\\n  }\\n}\\n/* The #latest-designs section shouldn’t overflow */\\n#latest-designs {\\n  position: relative;\\n  overflow-x: hidden;\\n  /* So no white column from horizontal scroll */\\n  max-width: 100%;\\n  /* Ensure the section never exceeds the viewport */\\n  margin: 0 auto;\\n  /* Center it, if you’d like */\\n  padding: 20px;\\n  /* Some padding to look nice on mobile */\\n}\\n\\n/* Target the Elfsight container specifically */\\n.elfsight-app-72cab3bc-d9c1-4987-a05d-c3085fca8064 {\\n  max-width: 100%;\\n  width: 100%;\\n  overflow-x: hidden;\\n  /* Prevent horizontal scroll within the widget */\\n  display: block;\\n  margin: 0 auto;\\n}\\n\\n/* If an iframe or image gets injected, force it to scale down */\\n.elfsight-app-72cab3bc-d9c1-4987-a05d-c3085fca8064 iframe,\\n.elfsight-app-72cab3bc-d9c1-4987-a05d-c3085fca8064 img {\\n  max-width: 100% !important;\\n  /* override inline widths */\\n  width: 100% !important;\\n  height: auto !important;\\n  display: block;\\n  margin: 0 auto;\\n}\\n\\n/* Adjust heading or text for mobile, if needed */\\n#latest-designs h1 {\\n  font-size: 2rem;\\n  margin-bottom: 20px;\\n  text-align: center;\\n}\\n\\n/* Example smaller font and spacing on very narrow screens */\\n@media (max-width: 480px) {\\n  #latest-designs h1 {\\n    font-size: 1.5rem;\\n  }\\n\\n  #latest-designs {\\n    padding: 10px;\\n  }\\n}\\n/* ====================== SCROLL-TRIGGERED ANIMATIONS ====================== */\\n/* \\n   .reveal-on-scroll:\\n   - Start off hidden/translated\\n   - Transition to visible & translated back to original position \\n*/\\n.reveal-on-scroll {\\n  opacity: 0;\\n  /* Initially invisible */\\n  transform: translateY(50px);\\n  /* or X, etc. to “slide in” */\\n  transition: opacity 1s ease, transform 1s ease;\\n}\\n\\n/* \\n   When Intersection Observer adds the .active class,\\n   the element becomes visible and moves to its original position \\n*/\\n.reveal-on-scroll.active {\\n  opacity: 1;\\n  transform: translateY(0);\\n}\\n\\n.social a {\\n  margin-right: 10px;\\n  /* space between icons */\\n  color: #fff;\\n  /* white icons, or your brand color */\\n  font-size: 1.5rem;\\n  /* adjust icon size */\\n  text-decoration: none;\\n}\\n\\n.social a:hover {\\n  color: #eee;\\n  /* hover color, etc. */\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./all-reviews.html":
/*!**************************!*\
  !*** ./all-reviews.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?122f\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\" />\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\n  <title>All Reviews - Thee Raymond Lee</title>\\n\\n  <!-- Link to the same main stylesheet as your index.html -->\\n  <!-- If you're using Webpack/Babel, ensure main.css or main.scss is correctly output/served -->\\n  <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap\\\" rel=\\\"stylesheet\\\">\\n</head>\\n<body>\\n\\n  <!-- ===== All Reviews Section ===== -->\\n  <section id=\\\"reviews\\\" class=\\\"reveal-on-scroll\\\">\\n    <h1>All Customer Reviews</h1>\\n\\n    <!-- Return link to your main page -->\\n    <p class=\\\"more-reviews\\\">\\n      <a href=\\\"./index.html\\\">&larr; Return to Main Page</a>\\n    </p>\\n\\n    <!-- Use the same .reviews-container and .review-item structure as your short reviews -->\\n    <div class=\\\"reviews-container\\\">\\n        \\n\\n      <!-- Review: Sergio Simental -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          Show stopping quality and dedication to perfection.\\n\\n          I worked with Ray over a few months for my engagement ring.   \\n          I vetted over 8 different jewelers across the nation and I am so happy\\n          to have chosen Ray with Thee Raymond Lee. I brought a very detailed and unique ring design.\\n          Ray offered great pointers and recommendations but at the end of the day respected\\n          my drive to want to see my vision through and even gave me more freedom by assuring\\n          that we always had options should I need to make changes.\\n          I am so happy with the end result and I cannot wait to be able to post a pic of the ring,\\n          but in the meantime I can strongly recommend Thee Raymond Lee. \\n          My ring arrived today and I am in awe.\\n        </blockquote>\\n        <p>- Sergio Simental</p>\\n      </div>\\n\\n      <!-- Review: Chadi Abouassi -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          We heard of T.R.L. from a friend. Setting an appointment was a breeze; their website\\n          was very easy to navigate, and when we met Raymond, we were met with enthusiasm, care,\\n          and the beautiful Mexican culture. Raymond went above and beyond each appointment. \\n          He worked with our budget and gave us the opportunity to create our dream engagement ring.\\n          We know our ring was made with care and love. We are beyond thankful T.R.L. was a part\\n          of this big moment for us.\\n        </blockquote>\\n        <p>- Chadi Abouassi</p>\\n      </div>\\n\\n      <!-- Review: Nora Kunz -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          Thee Raymond Lee team is absolutely wonderful! I’ve been working with them for the last 5 years\\n          on designing my current wedding bands. For my 5 year anniversary I wanted the exact same\\n          wedding band that my husband gave me on our wedding day so I can stack them up against\\n          each other. Thee Raymond Lee did such an amazing job when I got the band it was so difficult\\n          for me to tell my original from my new wedding band that I had to get the number “5”\\n          laser engraved so I knew the difference. Fast forward another 5 years, I got another\\n          wedding band because I love the set so much! And this one I had them laser engrave “10”\\n          so I knew which was which. Everything from the quality to the customer service matched\\n          on both of my experiences. Definitely recommend these guys for any custom work, or\\n          just to bring your vision to life.\\n        </blockquote>\\n        <p>- Nora Kunz</p>\\n      </div>\\n\\n      <!-- Review: Justin Isenthal -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          I have worked with Ray and the Thee Raymond Lee team for several years now\\n          and without question are my go-to jewelers in the city! I not only bought my wife's\\n          custom engagement ring and our wedding bands with the team but went back after a few\\n          years to upgrade her engagement ring as well.\\n\\n          Ray is an absolute professional and treats his customers with respect\\n          and is truly genuine in his interactions and wanting only the best for his clients.\\n\\n          In all categories, Thee Raymond Lee delivers:\\n          - Customer Engagement\\n          - Sales Cycle\\n          - Post Sales\\n          - Customer Service\\n          - Attention to Detail\\n          - Value\\n          - Quality\\n          - The list goes on and on…\\n        </blockquote>\\n        <p>- Justin Isenthal</p>\\n      </div>\\n\\n      <!-- Review: Ariel Wehling -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          My fiancé worked with Ray on picking out my engagement ring. It is absolutely perfect\\n          and they have been so great to work with. Ray helped my fiancé’s vision for the ring\\n          come to life and walked him through every step of the way while going through the\\n          diamond selection process. Since I have had the ring, their customer service has been over the top.\\n          They make you feel so comfortable, like you are dealing with friends you've had for a long time.\\n          I recommend Thee Raymond Lee to anyone who needs fine jewelry!\\n        </blockquote>\\n        <p>- Ariel Wehling</p>\\n      </div>\\n\\n      <!-- Review: Misael Perez -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          Class-act from start to finish! Raymond 100% recommendation to anybody and everyone!\\n          Professionalism, attention to detail, follow-up, across the board awesome!\\n          He assisted me from start to finish with my engagement ring.\\n          He definitely made my life easy. Thank you so much Ray and the whole Team @ Thee Raymond Lee!\\n        </blockquote>\\n        <p>- Misael Perez</p>\\n      </div>\\n\\n      <!-- Review: Jose Ramos -->\\n      <div class=\\\"review-item\\\">\\n        <blockquote>\\n          I have been going to Thee Raymond Lee since they opened and I have had nothing but GREAT service.\\n          From family heirlooms to birthday presents, they can handle all of your jewelry needs\\n          in a professional and thoughtful way. Their creative minds get you to think outside of the normal\\n          while maintaining a classic look and feel with all of their pieces.\\n          If I need anything remotely related to jewelry, there’s no other place that I would go.\\n          Thee Raymond Lee is highly recommended.\\n        </blockquote>\\n        <p>- Jose Ramos</p>\\n      </div>\\n    </div>\\n  </section>\\n\\n  <!-- ===== Footer (Same as on your main page) ===== -->\\n  <footer id=\\\"main-footer\\\">\\n    <div class=\\\"footer-content\\\">\\n      <!-- Address / Contact Info -->\\n      <p class=\\\"address\\\">\\n        <strong>Thee Raymond Lee, Inc.</strong><br>\\n        Raymond L Costello Jr<br>\\n        5 S Wabash Ave<br>\\n        Chicago, IL 60603<br>\\n        773.793.0958<br>\\n        <a href=\\\"mailto:info@theeraymondlee.com\\\">info@theeraymondlee.com</a>\\n      </p>\\n  \\n      <!-- Hours of Service -->\\n      <p class=\\\"hours\\\">\\n        <strong>Hours of Service (Appointment Only):</strong><br>\\n        Tuesday - Friday: 10:00am - 5:00pm<br>\\n        Saturday: 11:00am - 2:00pm<br>\\n        Sunday & Monday: Closed \\n      </p>\\n  \\n      <!-- Instagram Link & Icon -->\\n      <p class=\\\"social\\\">\\n        <strong>Follow Us on Our Socials:</strong><br>\\n      \\n        <!-- Instagram -->\\n        <a href=\\\"https://www.instagram.com/theeraymondlee/\\\" target=\\\"_blank\\\">\\n          <i class=\\\"fab fa-instagram\\\"></i>\\n        </a>\\n      \\n        <!-- TikTok -->\\n        <a href=\\\"https://www.tiktok.com/@theeraymondlee\\\" target=\\\"_blank\\\">\\n          <i class=\\\"fab fa-tiktok\\\"></i>\\n        </a>\\n      \\n        <!-- X (formerly Twitter) -->\\n        <a href=\\\"https://twitter.com/theeraymondlee\\\" target=\\\"_blank\\\">\\n          <i class=\\\"fab fa-x\\\"></i>\\n        </a>\\n      \\n        <!-- Facebook -->\\n        <a href=\\\"https://www.facebook.com/share/1B2gp4GrVw/?mibextid=wwXIfr\\\" target=\\\"_blank\\\">\\n          <i class=\\\"fab fa-facebook-f\\\"></i>\\n        </a>\\n      </p>\\n    </div>\\n  </footer>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./all-reviews.html?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon-32x32.png */ \"./assets/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon-16x16.png */ \"./assets/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/TRL_Horizontal-Alt_White.png */ \"./assets/TRL_Horizontal-Alt_White.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Screenshot 2025-01-14 131813.png */ \"./assets/Screenshot 2025-01-14 131813.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/diamond_and_education.PNG */ \"./assets/diamond_and_education.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/custom_engagement_ring.PNG */ \"./assets/custom_engagement_ring.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/exclusive_bridal.PNG */ \"./assets/exclusive_bridal.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bespoke.PNG */ \"./assets/bespoke.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/luxury_timepieces.PNG */ \"./assets/luxury_timepieces.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/jewelry_and_watch_repair.PNG */ \"./assets/jewelry_and_watch_repair.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/jewelry_appraisal.PNG */ \"./assets/jewelry_appraisal.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/jewelry_insurance.PNG */ \"./assets/jewelry_insurance.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/FaceOff-Image.jpg */ \"./assets/FaceOff-Image.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>The Raymond Lee</title>\\n    <link rel=\\\"icon\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/png\\\">\\n    <link rel=\\\"icon\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"image/png\\\">\\n    <link rel=\\\"icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"image/png\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap\\\" rel=\\\"stylesheet\\\">\\n</head>\\n\\n<body>\\n    <!-- Sticky Navbar -->\\n    <nav id=\\\"navbar\\\">\\n        <ul>\\n            <li>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"LUL Logo\\\" class=\\\"center-logo\\\">\\n            </li>\\n            <li><a href=\\\"#mission\\\" class=\\\"nav-link\\\">Home</a></li>\\n            <li><a href=\\\"#services\\\" class=\\\"nav-link\\\">Services</a></li>\\n            <li><a href=\\\"#about-me\\\" class=\\\"nav-link\\\">About Me</a></li>\\n            <li><a href=\\\"#reviews\\\" class=\\\"nav-link\\\">Reviews</a></li>\\n        </ul>\\n    </nav>\\n\\n    <!-- Mission Section -->\\n    <section id=\\\"mission\\\" class=\\\"reveal-on-scroll\\\">\\n        <div class=\\\"text-area\\\">\\n          <h1>For Everyone / Everywhere</h1>\\n          \\n        </div>\\n        \\n        <!-- Make sure the <img> is placed AFTER the text-area in the HTML -->\\n        <img\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n          alt=\\\"Diamond Cross Pendant\\\"\\n          class=\\\"introduction-pic\\\"\\n        />\\n    </section>\\n      \\n\\n    <section id=\\\"services\\\" class=\\\"reveal-on-scroll\\\">\\n        <h1>What I Can Do For You</h1>\\n        \\n        <div class=\\\"services-grid\\\">\\n      <!-- 1. Diamond Sourcing and Education -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Diamond Sourcing and Education\\\">\\n        <h2>Diamond Sourcing and Education</h2>\\n        <p>Find your perfect diamond with the help of our expertise. We’ll educate you on cut, clarity, carat, and color, ensuring you feel confident in every choice you make. From ethical sourcing to handpicking the best, we make diamond shopping an experience to remember.</p>\\n      </div>\\n    \\n      <!-- 2. Custom Engagement Rings -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Custom Engagement Rings\\\">\\n        <h2>Custom Engagement Rings</h2>\\n        <p>Create a love story that’s entirely your own with our custom engagement ring design service. From selecting the perfect diamond to choosing a setting that complements your style, we’ll guide you every step of the way.</p>\\n      </div>\\n    \\n      <!-- 3. Exclusive Bridal Jewelry Collection -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Exclusive Bridal Jewelry Collection\\\">\\n        <h2>Exclusive Bridal Jewelry Collection</h2>\\n        <p>Explore our curated bridal collection designed for modern romantics. From wedding bands to stunning day-of accessories, each piece is crafted with elegance and sophistication.</p>\\n      </div>\\n    \\n      <!-- 4. Bespoke Fine Jewelry -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Bespoke Fine Jewelry\\\">\\n        <h2>Bespoke Fine Jewelry</h2>\\n        <p>Celebrate life’s milestones with one-of-a-kind creations tailored just for you. Every detail reflects your story, style, and personality—timeless pieces that are as unique as you are.</p>\\n      </div>\\n      \\n      <!-- 5. Exclusive Timepieces -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"Exclusive Timepieces\\\">\\n        <h2>Exclusive Timepieces</h2>\\n        <p>Discover timeless sophistication with our curated collection of luxury watches. Each piece is a statement of style and precision—find the perfect gift or addition to your collection.</p>\\n      </div>\\n      \\n      <!-- 6. Jewelry and Watch Repair - Restoration -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"Jewelry and Watch Repair\\\">\\n        <h2>Jewelry and Watch Repair - Restoration</h2>\\n        <p>Breathe new life into your beloved pieces with our meticulous repair and restoration services. From resizing rings to replacing stones, we handle your jewelry with care and precision.</p>\\n      </div>\\n      \\n      <!-- 7. Jewelry Appraisal Services -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Jewelry Appraisal Services\\\">\\n        <h2>Jewelry Appraisal Services</h2>\\n        <p>Get peace of mind with our certified jewelry appraisal service. Perfect for insurance purposes or personal records, we provide detailed and accurate valuations of your items.</p>\\n      </div>\\n      \\n      <!-- 8. Jewelry Insurance Assistance -->\\n      <div class=\\\"service-item\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Jewelry Insurance Assistance\\\">\\n        <h2>Jewelry Insurance Assistance</h2>\\n        <p>Protect your most valuable pieces with our insurance guidance. From appraisals to paperwork, we’ll connect you with trusted providers and ensure you have the right coverage.</p>\\n      </div>\\n    </div>\\n    </section>\\n      \\n\\n    <!-- Current Hermanos Section -->\\n    <section id=\\\"latest-designs\\\" class=\\\"reveal-on-scroll\\\">\\n        <h1>My Latest Designs</h1>\\n        <script src=\\\"https://static.elfsight.com/platform/platform.js\\\" async></script>\\n        <div class=\\\"elfsight-app-72cab3bc-d9c1-4987-a05d-c3085fca8064\\\" data-elfsight-app-lazy></div>\\n    </section>\\n\\n\\n    \\n\\n    <!-- Contact Section -->\\n    <section id=\\\"about-me\\\" class=\\\"reveal-on-scroll\\\">\\n        <div class=\\\"about-container\\\">\\n          \\n          <!-- Owner Photo -->\\n          <div class=\\\"owner-photo\\\">\\n            <!-- Replace with an actual image of the jewelry owner -->\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Jewelry Owner Photo\\\">\\n          </div>\\n          \\n          <!-- About Me Text -->\\n          <div class=\\\"owner-description\\\">\\n            <h1>About Me</h1>\\n            <p>\\n              Raymond L Costello Jr grew up on the south side of Chicago in the vibrant neighborhood of Pilsen, where the hustle and creativity are as real as the deep-dish pizza debates. He fell into the jewelry world in April 2011 and hasn’t looked back since, proudly “Putting Rings on Tings\\\" for over a decade. After five years of working for someone else, he decided to take a shot at going solo, opening his first store in 2016 and his second company not too long afterwards in 2022.\\n            </p>\\n            <p>\\n              As a first-generation business owner in a field often run by multi-generational families, Raymond Lee carved out his niche in engagement rings and bridal jewelry while mastering the art of creating timeless pieces For Everyone / Everywhere. He’s proof that you don’t need a family legacy to create magic—you just need a vision, a good sense of humor, and maybe a little coffee. His laid-back, one-on-one approach has made him the go-to jeweler for clients who want more than just sparkle—they want a story.\\n            </p>\\n          </div>\\n          \\n        </div>\\n    </section>\\n      \\n\\n    <section id=\\\"reviews\\\" class=\\\"reveal-on-scroll\\\">\\n      <h2>What Our Customers Say</h2>\\n      <div class=\\\"reviews-container\\\">\\n        <!-- Short Review 1 -->\\n        <div class=\\\"review-item\\\">\\n          <blockquote>\\n            \\\"I worked with Ray over a few months for my engagement ring.   I vetted over 8 different jewelers across the nation and I am so happy to have chosen Ray with Thee Raymond Lee.  I brought a very detailed and unique ring design.\\\"\\n          </blockquote>\\n          <p>- Sergio Simental</p>\\n        </div>\\n    \\n        <!-- Short Review 2 -->\\n        <div class=\\\"review-item\\\">\\n          <blockquote>\\n            \\\"Everything from the quality to the customer service matched on both of my experiences. Definitely recommend these guys for any custom work, or just to bring your vision to life.\\\"\\\"\\n          </blockquote>\\n          <p>- Nora Kunz</p>\\n        </div>\\n    \\n        <!-- Short Review 3 -->\\n        <div class=\\\"review-item\\\">\\n          <blockquote>\\n            \\\"I have been going to Thee Raymond Lee since they opened and I have had nothing but GREAT service. From family heirlooms to birthday presents, they can handle all of your jewelry needs in a professional and thoughtful way. Their creative minds get you to think outside of the normal while maintaining a classic look and feel with all of their pieces.\\\"\\n          </blockquote>\\n          <p>- Jose Ramos</p>\\n        </div>\\n      </div>\\n    \\n      <!-- \\\"View All\\\" Link -->\\n      <p class=\\\"more-reviews\\\">\\n        <a href=\\\"./all-reviews.html\\\">View All Reviews</a>\\n      </p>\\n    </section>\\n    \\n      \\n      <!-- ============================== FOOTER SECTION ============================== -->\\n      <footer id=\\\"main-footer\\\">\\n        <div class=\\\"footer-content\\\">\\n          <!-- Address / Contact Info -->\\n          <p class=\\\"address\\\">\\n            <strong>Thee Raymond Lee, Inc.</strong><br>\\n            Raymond L Costello Jr<br>\\n            5 S Wabash Ave<br>\\n            Chicago, IL 60603<br>\\n            773.793.0958<br>\\n            <a href=\\\"mailto:info@theeraymondlee.com\\\">info@theeraymondlee.com</a>\\n          </p>\\n      \\n          <!-- Hours of Service -->\\n          <p class=\\\"hours\\\">\\n            <strong>Hours of Service (Appointment Only):</strong><br>\\n            Tuesday - Friday: 10:00am - 5:00pm<br>\\n            Saturday: 11:00am - 2:00pm<br>\\n            Sunday & Monday: Closed \\n          </p>\\n      \\n          <!-- Instagram Link & Icon -->\\n          <p class=\\\"social\\\">\\n            <strong>Follow Us on Our Socials:</strong><br>\\n          \\n            <!-- Instagram -->\\n            <a href=\\\"https://www.instagram.com/theeraymondlee/\\\" target=\\\"_blank\\\">\\n              <i class=\\\"fab fa-instagram\\\"></i>\\n            </a>\\n          \\n            <!-- TikTok -->\\n            <a href=\\\"https://www.tiktok.com/@theeraymondlee\\\" target=\\\"_blank\\\">\\n              <i class=\\\"fab fa-tiktok\\\"></i>\\n            </a>\\n          \\n            <!-- X (formerly Twitter) -->\\n            <a href=\\\"https://twitter.com/theeraymondlee\\\" target=\\\"_blank\\\">\\n              <i class=\\\"fab fa-x\\\"></i>\\n            </a>\\n          \\n            <!-- Facebook -->\\n            <a href=\\\"https://www.facebook.com/share/1B2gp4GrVw/?mibextid=wwXIfr\\\" target=\\\"_blank\\\">\\n              <i class=\\\"fab fa-facebook-f\\\"></i>\\n            </a>\\n          </p>\\n        </div>\\n      </footer>\\n      \\n      \\n\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\"></script>\\n</body>\\n\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss?bd63":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"48dd020de65430538025.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./css/main.scss?122f":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b1676ce0380ca5fc369.scss\";\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./assets/FaceOff-Image.jpg":
/*!**********************************!*\
  !*** ./assets/FaceOff-Image.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ccb645d4301b89f53f72.jpg\";\n\n//# sourceURL=webpack:///./assets/FaceOff-Image.jpg?");

/***/ }),

/***/ "./assets/Screenshot 2025-01-14 131813.png":
/*!*************************************************!*\
  !*** ./assets/Screenshot 2025-01-14 131813.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ef168d9f241e928656cd.png\";\n\n//# sourceURL=webpack:///./assets/Screenshot_2025-01-14_131813.png?");

/***/ }),

/***/ "./assets/TRL_Horizontal-Alt_White.png":
/*!*********************************************!*\
  !*** ./assets/TRL_Horizontal-Alt_White.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"269f408acce1bbe6d88f.png\";\n\n//# sourceURL=webpack:///./assets/TRL_Horizontal-Alt_White.png?");

/***/ }),

/***/ "./assets/bespoke.PNG":
/*!****************************!*\
  !*** ./assets/bespoke.PNG ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ec8af70871e4d0b73ba8.PNG\";\n\n//# sourceURL=webpack:///./assets/bespoke.PNG?");

/***/ }),

/***/ "./assets/custom_engagement_ring.PNG":
/*!*******************************************!*\
  !*** ./assets/custom_engagement_ring.PNG ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b5eee05c72c1871b5bfe.PNG\";\n\n//# sourceURL=webpack:///./assets/custom_engagement_ring.PNG?");

/***/ }),

/***/ "./assets/diamond_and_education.PNG":
/*!******************************************!*\
  !*** ./assets/diamond_and_education.PNG ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3895144a6ab40600936b.PNG\";\n\n//# sourceURL=webpack:///./assets/diamond_and_education.PNG?");

/***/ }),

/***/ "./assets/exclusive_bridal.PNG":
/*!*************************************!*\
  !*** ./assets/exclusive_bridal.PNG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4d32fa1739fd31d3bb5c.PNG\";\n\n//# sourceURL=webpack:///./assets/exclusive_bridal.PNG?");

/***/ }),

/***/ "./assets/favicon-16x16.png":
/*!**********************************!*\
  !*** ./assets/favicon-16x16.png ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAaZJREFUOE+lkjFPwkAUx/9XkkKCmBo3rtaGRNz0IwirI4ZB+Bpq/Agm+jl0xcVJFxY2tS4YFgi9YyChdKCGBOmZq7RpJWXxtrv3/r/33v8ewT8P2aQ3TVODCwzcgZuWtwaglO4qglwTggaA4krIhcCDT8QN53wShyUAlNLjDMiTFOZyOeTzeYAQeLMZ5vO51I2WEKeccyuERABZOQPyEVZVFAWlUglqNovPbhe+74caCTkKO4kAe0X9lhBchFknlQocx4GqqphMJhj0+1HnQuDOHrFL+RABDKrz2MyondVgWR/IqiqM/X202218eV4I4UPO9Agg3fYX39O4OUmAgZfnFywWiyhF8WY7A9d1gw5MzdT8fBLQaDbR6XRQ2NoCURRY7++Jn0wAZMSgOgNAw6x6vY7Xt7dghINyGY+tVhyQHEFG/ppYqVZh23YAWC6XGI/HmE5XUwrcDkfsKmHi32+UwfLhIbYLBfR6vQDi/ZrIfYIjxpiTAMhLfJFSVleKTxljcl+Cs2mVz2OecAjc+wpuwsqpgHhlU9M0eZffldLRegdpiWnvP6pArxGnw/VrAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack:///./assets/favicon-16x16.png?");

/***/ }),

/***/ "./assets/favicon-32x32.png":
/*!**********************************!*\
  !*** ./assets/favicon-32x32.png ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4lJREFUWEftl8lPE1Ecx7+vFCSkTWoCneLrFCLqofTg8g/oRRTXAsaNk/tyMKInjQuCih6MREUPbgeVWMAILjdFLxqMnnAJesFOp3Tjwom0ZZ6ZuqSlM2+GamJMfMfO7/d7n/fbS/CXD/nL9+PfBRAEwVlSUuJEEkgiGYtGo7FCvDkTDxS5K93rLBa2iQHLCEh59oUMLE6AF4pCukNjoQEAU2aATAF4KF3NQC4QYL4Zowz4YgE7+FWWnxjJGwEUe6h4CWC7jQxpfWdgVyVZPgAgpafPAyj2UNoLkLXTlaurq5FOp+F0OgFCEItGYbVaMTo6qnEPGwjKcpMehC6Ah4rX9F5eWlqKyclJrKyvh81mQ08ggJ+/cTyxT+ubJoAac4A8MnJ73YoVsNvt6O3pMRIFAVutlRNaAEUidX/SS7iq6ioIgguRsTEsXrIkAzA4OIhEPJ7xit5hwGdJDnmnV0cegLvS3WCxoE/PUK3PB3+DH+2n2pDtgeV1dRgfH8e7t2/1IRjxS2HpYbZAHoCH0gBANuhZ8Xq9WN/gx5n20zkAqvz1mzewZ9fuTIJqHxYIyvJGLoBIaXx6k8lW4AGc6ejA7Vu38HlkROd+FguGZUEXQG2vs6zFUV5G8QAud13ByeMnkEgkdE0kp9LOSCQS/ymQEwJRFH1EYcMzAbDZbejr6UV5eTl27NyJjrNn+RUxla4NRiIftQEE0Ues5gDOd5zDwkWLkE6lUFZWBoUxvBkagqIohQOYDUHL4cNoa22FY7YDgiDg5YuX2LZ9G/r7BxCWZS4ANwSqpkhpjIBU8Kpga3Mzjh45klMFNrsdradacehgiz4AM0hCVfN3yvDOvbto3rKV4wF2PyjLm7hl6K50+y0WPOA2Ir8f7W25jUiVv9jZiePHjmFiYkJTnTGyXgpL/VwAANxWPLemJhP3169e5TUitS3XzJuHD+/fI5XKm8AjQTlUa9iKVboqSlcxkMf8dEYeAE+eEKz6Ggo9nS6jO45FSrsIyF6e0campsw4fv7s2S8xh8OB4eHcVsIY65LC8n4tWwUtJEaeyf2eWUgaAWgOCMOVTKS008gTekA/Xq6uZHrTydz/AjUnlO9L6QKTrx8hBC1aMTedAxoXFYlzxDWEKJvBsBSEOHNkGIuBYJAxS7cUltQE/nNrudarXS5XRQmQ6ZhJIJ494Ux6KSNmlAMzsVWQ7H+Ab7wJdDB48DIgAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack:///./assets/favicon-32x32.png?");

/***/ }),

/***/ "./assets/jewelry_and_watch_repair.PNG":
/*!*********************************************!*\
  !*** ./assets/jewelry_and_watch_repair.PNG ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6dff23b811b9734b65d9.PNG\";\n\n//# sourceURL=webpack:///./assets/jewelry_and_watch_repair.PNG?");

/***/ }),

/***/ "./assets/jewelry_appraisal.PNG":
/*!**************************************!*\
  !*** ./assets/jewelry_appraisal.PNG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d3dfcaa8389a62915476.PNG\";\n\n//# sourceURL=webpack:///./assets/jewelry_appraisal.PNG?");

/***/ }),

/***/ "./assets/jewelry_insurance.PNG":
/*!**************************************!*\
  !*** ./assets/jewelry_insurance.PNG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"71255bbf221e99f7499e.PNG\";\n\n//# sourceURL=webpack:///./assets/jewelry_insurance.PNG?");

/***/ }),

/***/ "./assets/luxury_timepieces.PNG":
/*!**************************************!*\
  !*** ./assets/luxury_timepieces.PNG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"841b62b730e84f6cbeca.PNG\";\n\n//# sourceURL=webpack:///./assets/luxury_timepieces.PNG?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;