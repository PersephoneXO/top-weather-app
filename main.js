/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-manager.js":
/*!*****************************!*\
  !*** ./src/data-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataManager: () => (/* binding */ dataManager)\n/* harmony export */ });\nfunction createDOM(type,className){\n    let element=document.createElement(type);\n    element.classList.add(className);\n    return element;\n}\n\nconst dataManager=(function(){\n    //function to get whatever the user inputted into the search bar\n    function getLocation(){\n        let location=document.querySelector('#location').value;\n        return location;\n    }\n\n    //function to fetch the data about the location from the weather api\n    async function getData(){\n        try{\n            const location=getLocation();\n\n            //get forcast data\n            let forecastUrl='https://api.weatherapi.com/v1/forecast.json?key=800e3d8069c34e27aaa193928241202&q='+location+'&days=3';\n            const forecastResponse=await fetch(forecastUrl,{mode:'cors'});\n            const weatherData=await forecastResponse.json();\n\n            return weatherData;\n\n        } catch(error){\n            console.log(error);\n        }\n    }\n\n    //function to create the page's contents after retrieving the data\n    function showData(data){\n        let mainContainerContent=createDOM('div','main-container-content');\n        //current container\n        let mainContainerCurrent=createDOM('div','main-container-current');\n        let currentTextDiv=createDOM('div','mc-current-text');\n        //location title\n        let locationTitle=createDOM('p','location-title');\n        locationTitle.textContents=`${data.location.name}`;\n        currentTextDiv.appendChild(locationTitle);\n        //current condition\n        let currentCondition=createDOM('p','current-condition');\n        currentCondition.textContents=`${data.current.condition.text}`;\n        currentTextDiv.appendChild(currentCondition);\n        //current temp\n        let currentTemp=createDOM('p','current-temp');\n        currentTemp.textContents=`${data.current.temp_c}°C`\n        currentTextDiv.appendChild(currentTemp);\n        mainContainerCurrent.appendChild(currentTextDiv);\n        //current condition image\n        let currentImage=createDOM('img','current-img');\n        currentImage.setAttribute('src',`${data.current.condition.icon}`);\n        mainContainerCurrent.appendChild(currentImage);\n        //div divider\n        let divDivider=createDOM('hr','dom-divider');\n        mainContainerCurrent.appendChild(divDivider);\n    }\n\n\n\n    return{\n        getData,\n        showData\n    }\n})();\n\n\n//# sourceURL=webpack://setup-template/./src/data-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manager */ \"./src/data-manager.js\");\n/*import './styles.css';*/\n\n\n//import functions from external files\n\n\n//DOM elements\n//const searchButton=document.querySelector('.search-button');\nconst searchBar=document.querySelector('#search-bar');\n\nsearchBar.addEventListener('submit', async (e)=>{\n    e.preventDefault();\n    let weatherData=await _data_manager__WEBPACK_IMPORTED_MODULE_0__.dataManager.getData();\n    console.log(weatherData);\n\n});\n\n\n//# sourceURL=webpack://setup-template/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;