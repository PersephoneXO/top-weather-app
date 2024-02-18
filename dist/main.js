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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataManager: () => (/* binding */ dataManager)\n/* harmony export */ });\nfunction createDOM(type,className){\n    let element=document.createElement(type);\n    element.classList.add(className);\n    return element;\n}\n\nconst dataManager=(function(){\n    //function to get whatever the user inputted into the search bar\n    function getLocation(){\n        let location=document.querySelector('#location').value;\n        return location;\n    }\n\n    //function to fetch the data about the location from the weather api\n    async function getData(){\n        try{\n            const location=getLocation();\n\n            //get forcast data\n            let forecastUrl='https://api.weatherapi.com/v1/forecast.json?key=800e3d8069c34e27aaa193928241202&q='+location+'&days=3';\n            const forecastResponse=await fetch(forecastUrl,{mode:'cors'});\n            const weatherData=await forecastResponse.json();\n\n            return weatherData;\n\n        } catch(error){\n            console.log(error);\n        }\n    }\n\n    //function to create the page's contents after retrieving the data\n    function showData(data){\n        let mainContainerContent=createDOM('div','main-container-content');\n        //current container\n        let mainContainerCurrent=createDOM('div','main-container-current');\n        let currentTextDiv=createDOM('div','mc-current-text');\n        //location title\n        let locationTitle=createDOM('p','location-title');\n        locationTitle.textContent=`${data.location.name}`;\n        currentTextDiv.appendChild(locationTitle);\n        //current condition\n        let currentCondition=createDOM('p','current-condition');\n        currentCondition.textContent=`${data.current.condition.text}`;\n        currentTextDiv.appendChild(currentCondition);\n        //current temp\n        let currentTemp=createDOM('p','current-temp');\n        currentTemp.textContent=`${data.current.temp_c}°C`;\n        currentTextDiv.appendChild(currentTemp);\n        mainContainerCurrent.appendChild(currentTextDiv);\n        //current condition image\n        let currentImage=createDOM('img','current-img');\n        currentImage.setAttribute('src',`${data.current.condition.icon}`);\n        mainContainerCurrent.appendChild(currentImage);\n        //div divider\n        let divDividerCurrent=createDOM('hr','dom-divider');\n        mainContainerContent.appendChild(mainContainerCurrent);\n        mainContainerContent.appendChild(divDividerCurrent);\n        //\n        //today's forecast container\n        let mainContainerToday=createDOM('div','main-container-today');\n        //today's forecast title\n        let todayForecast=createDOM('p','mc-today-title');\n        todayForecast.textContent=\"Today's forecast\"\n        mainContainerToday.appendChild(todayForecast);\n        //hours container\n        let todayConditions=createDOM('div','mc-today-hours-container');\n        //6am condition\n        let sixAM=getDataAtSpecificTime(data.forecast.forecastday[0],\"6\");\n        todayConditions.appendChild(createHourContainer('6:00 AM',sixAM.condition.icon,sixAM.temp_c));\n        //12pm condition\n        let twelvePM=getDataAtSpecificTime(data.forecast.forecastday[0],\"12\");\n        todayConditions.appendChild(createHourContainer('12:00 PM', twelvePM.condition.icon, twelvePM.temp_c));\n        //6pm condition\n        let sixPM=getDataAtSpecificTime(data.forecast.forecastday[0],\"18\");\n        todayConditions.appendChild(createHourContainer('6:00 PM', sixPM.condition.icon, sixPM.temp_c));\n        mainContainerToday.appendChild(todayConditions);\n        let divDividerToday=createDOM('hr','dom-divider');\n        mainContainerToday.appendChild(divDividerToday);\n        mainContainerContent.appendChild(mainContainerToday);\n        //\n        //3-day forecast container\n        let mainContainerThree=createDOM('div','main-container-three');\n        //3-day title\n        let threeTitle=createDOM('p','mc-three-title');\n        threeTitle.textContent=\"3-day forecast\";\n        mainContainerThree.appendChild(threeTitle);\n        //days container\n        let threeConditions=createDOM('div','mc-three-days-container');\n        //day 1\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[0],'yes'));\n        let divDividerThree1=createDOM('hr','dom-divider');\n        threeConditions.appendChild(divDividerThree1);\n        //day 2\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[1]));\n        let divDividerThree2=createDOM('hr','dom-divider');\n        threeConditions.appendChild(divDividerThree2);\n        //day 3\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[2]));\n        mainContainerThree.appendChild(threeConditions);\n        mainContainerContent.appendChild(mainContainerThree);\n        return mainContainerContent;\n    }\n\n    //function to create each of the hour containers\n    function createHourContainer(time,icon,temp){\n        let hourContainer=createDOM('div','hour-container');\n        let todayTime=createDOM('p','mc-today-time');\n        todayTime.textContent=`${time}`;\n        hourContainer.appendChild(todayTime);\n        let todayIcon=createDOM('img','mc-today-img');\n        todayIcon.setAttribute('src',icon);\n        hourContainer.appendChild(todayIcon);\n        let todayTemp=createDOM('p','mc-today-temp');\n        todayTemp.textContent=`${temp}°C`;\n        hourContainer.appendChild(todayTemp);\n        return hourContainer;\n    }\n\n    //function to get the specific time at a specific date\n    function getDataAtSpecificTime(date,chosenTime){\n        let hourArray=date.hour;\n        let n;\n        switch(chosenTime){\n            case \"6\":\n                n=\"06:00\";\n                break;\n            case \"12\":\n                n=\"12:00\";\n                break;\n            case \"18\":\n                n=\"18:00\";\n                break;\n        }\n        let timeData;\n        for(let i=0;i<hourArray.length;i++){\n            if(hourArray[i].time.includes(n)){\n                timeData=hourArray[i];\n            }\n        }\n        return timeData;\n    }\n\n    //function to create each of the 3-day forecast containers\n    function createDayContainers(day, today='no'){\n        let date=new Date(day.date);\n        let dayIndex=date.getDay();\n        let dayNames=[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"];\n        let dayOfWeek=dayNames[dayIndex];\n        let dayContainer=createDOM('div','day-container');\n        //weekday\n        let weekday=createDOM('p','three-day-weekday');\n        if(today=='no'){\n            weekday.textContent=`${dayOfWeek}`;\n        }else{\n            weekday.textContent='Today';\n        }\n        dayContainer.appendChild(weekday);\n        //condition container\n        let conditionContainer=createDOM('div','three-day-condition-container');\n        //condition icon\n        let conditionIcon=createDOM('img','three-day-icon');\n        conditionIcon.setAttribute('src',day.day.condition.icon);\n        conditionContainer.appendChild(conditionIcon);\n        //condition text\n        let conditionText=createDOM('p','three-day-condition');\n        conditionText.textContent=`${day.day.condition.text}`;\n        conditionContainer.appendChild(conditionText);\n        dayContainer.appendChild(conditionContainer);\n        //avg temp\n        let avgTemp=createDOM('p','three-day-temp');\n        avgTemp.textContent=`${day.day.avgtemp_c}°C`;\n        dayContainer.appendChild(avgTemp);\n        return dayContainer\n\n    }\n\n    //function to create the landing page screen\n    function createLandingPage(){\n        let container=createDOM('div','landing-page-container');\n        let text=createDOM('h1','landing-page-text');\n        text.textContent=\"Enter your location to get started!\";\n        container.appendChild(text);\n        let img=createDOM('img','landing-page-img');\n        img.setAttribute('src','../src/weather-landing-page-img.svg');\n        container.appendChild(img);\n        let attribution=createDOM('p','img-attr');\n        attribution.innerHTML='<a href=\"https://www.freepik.com/free-vector/earth-moon-concept-illustration_22881458.htm#query=globe&position=40&from_view=search&track=sph&uuid=40530c76-ce83-4458-ab7f-a6bab1e21b68\">Image by storyset</a> on Freepik';\n        container.appendChild(attribution);\n        return container;\n    }\n\n    return{\n        getData,\n        showData,\n        createLandingPage\n    }\n})();\n\n\n//# sourceURL=webpack://setup-template/./src/data-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manager */ \"./src/data-manager.js\");\n/*import './styles.css';*/\n\n\n//import functions from external files\n\n\n//DOM elements\nconst searchBar=document.querySelector('#search-bar');\nconst mainContainer=document.querySelector('.main-container');\n\n\n//run functions to create landing page on page load\ndocument.addEventListener('DOMContentLoaded',()=>{\n    mainContainer.appendChild(_data_manager__WEBPACK_IMPORTED_MODULE_0__.dataManager.createLandingPage());\n});\n\n\nsearchBar.addEventListener('submit', async (e)=>{\n    e.preventDefault();\n    let weatherData=await _data_manager__WEBPACK_IMPORTED_MODULE_0__.dataManager.getData();\n\n    mainContainer.innerHTML=\"\";\n    let weatherContent=await _data_manager__WEBPACK_IMPORTED_MODULE_0__.dataManager.showData(weatherData);\n    mainContainer.appendChild(weatherContent);\n\n});\n\n\n//# sourceURL=webpack://setup-template/./src/index.js?");

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