function createDOM(type,className){
    let element=document.createElement(type);
    element.classList.add(className);
    return element;
}

export const dataManager=(function(){
    //function to get whatever the user inputted into the search bar
    function getLocation(){
        let location=document.querySelector('#location').value;
        return location;
    }

    //function to fetch the data about the location from the weather api
    async function getData(){
        try{
            const location=getLocation();

            //get forcast data
            let forecastUrl='https://api.weatherapi.com/v1/forecast.json?key=800e3d8069c34e27aaa193928241202&q='+location+'&days=3';
            const forecastResponse=await fetch(forecastUrl,{mode:'cors'});
            const weatherData=await forecastResponse.json();

            return weatherData;

        } catch(error){
            console.log(error);
        }
    }

    //function to create the page's contents after retrieving the data
    function showData(data){
        let mainContainerContent=createDOM('div','main-container-content');
        //current container
        let mainContainerCurrent=createDOM('div','main-container-current');
        let currentTextDiv=createDOM('div','mc-current-text');
        //location title
        let locationTitle=createDOM('p','location-title');
        locationTitle.textContent=`${data.location.name}`;
        currentTextDiv.appendChild(locationTitle);
        //current condition
        let currentCondition=createDOM('p','current-condition');
        currentCondition.textContent=`${data.current.condition.text}`;
        currentTextDiv.appendChild(currentCondition);
        //current temp
        let currentTemp=createDOM('p','current-temp');
        currentTemp.textContent=`${data.current.temp_c}°C`;
        currentTextDiv.appendChild(currentTemp);
        mainContainerCurrent.appendChild(currentTextDiv);
        //current condition image
        let currentImage=createDOM('img','current-img');
        currentImage.setAttribute('src',`${data.current.condition.icon}`);
        mainContainerCurrent.appendChild(currentImage);
        //div divider
        let divDividerCurrent=createDOM('hr','dom-divider');
        mainContainerContent.appendChild(mainContainerCurrent);
        mainContainerContent.appendChild(divDividerCurrent);
        //
        //today's forecast container
        let mainContainerToday=createDOM('div','main-container-today');
        //today's forecast title
        let todayForecast=createDOM('p','mc-today-title');
        todayForecast.textContent="Today's forecast"
        mainContainerToday.appendChild(todayForecast);
        //hours container
        let todayConditions=createDOM('div','mc-today-hours-container');
        //6am condition
        let sixAM=getDataAtSpecificTime(data.forecast.forecastday[0],"6");
        todayConditions.appendChild(createHourContainer('6:00 AM',sixAM.condition.icon,sixAM.temp_c));
        //12pm condition
        let twelvePM=getDataAtSpecificTime(data.forecast.forecastday[0],"12");
        todayConditions.appendChild(createHourContainer('12:00 PM', twelvePM.condition.icon, twelvePM.temp_c));
        //6pm condition
        let sixPM=getDataAtSpecificTime(data.forecast.forecastday[0],"18");
        todayConditions.appendChild(createHourContainer('6:00 PM', sixPM.condition.icon, sixPM.temp_c));
        mainContainerToday.appendChild(todayConditions);
        let divDividerToday=createDOM('hr','dom-divider');
        mainContainerToday.appendChild(divDividerToday);
        mainContainerContent.appendChild(mainContainerToday);
        //
        //3-day forecast container
        let mainContainerThree=createDOM('div','main-container-three');
        //3-day title
        let threeTitle=createDOM('p','mc-three-title');
        threeTitle.textContent="3-day forecast";
        mainContainerThree.appendChild(threeTitle);
        //days container
        let threeConditions=createDOM('div','mc-three-days-container');
        //day 1
        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[0],'yes'));
        let divDividerThree1=createDOM('hr','dom-divider');
        threeConditions.appendChild(divDividerThree1);
        //day 2
        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[1]));
        let divDividerThree2=createDOM('hr','dom-divider');
        threeConditions.appendChild(divDividerThree2);
        //day 3
        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[2]));
        mainContainerThree.appendChild(threeConditions);
        mainContainerContent.appendChild(mainContainerThree);
        return mainContainerContent;
    }

    //function to create each of the hour containers
    function createHourContainer(time,icon,temp){
        let hourContainer=createDOM('div','hour-container');
        let todayTime=createDOM('p','mc-today-time');
        todayTime.textContent=`${time}`;
        hourContainer.appendChild(todayTime);
        let todayIcon=createDOM('img','mc-today-img');
        todayIcon.setAttribute('src',icon);
        hourContainer.appendChild(todayIcon);
        let todayTemp=createDOM('p','mc-today-temp');
        todayTemp.textContent=`${temp}°C`;
        hourContainer.appendChild(todayTemp);
        return hourContainer;
    }

    //function to get the specific time at a specific date
    function getDataAtSpecificTime(date,chosenTime){
        let hourArray=date.hour;
        let n;
        switch(chosenTime){
            case "6":
                n="06:00";
                break;
            case "12":
                n="12:00";
                break;
            case "18":
                n="18:00";
                break;
        }
        let timeData;
        for(let i=0;i<hourArray.length;i++){
            if(hourArray[i].time.includes(n)){
                timeData=hourArray[i];
            }
        }
        return timeData;
    }

    //function to create each of the 3-day forecast containers
    function createDayContainers(day, today='no'){
        let date=new Date(day.date);
        let dayIndex=date.getDay();
        let dayNames=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
        let dayOfWeek=dayNames[dayIndex];
        let dayContainer=createDOM('div','day-container');
        //weekday
        let weekday=createDOM('p','three-day-weekday');
        if(today=='no'){
            weekday.textContent=`${dayOfWeek}`;
        }else{
            weekday.textContent='Today';
        }
        dayContainer.appendChild(weekday);
        //condition container
        let conditionContainer=createDOM('div','three-day-condition-container');
        //condition icon
        let conditionIcon=createDOM('img','three-day-icon');
        conditionIcon.setAttribute('src',day.day.condition.icon);
        conditionContainer.appendChild(conditionIcon);
        //condition text
        let conditionText=createDOM('p','three-day-condition');
        conditionText.textContent=`${day.day.condition.text}`;
        conditionContainer.appendChild(conditionText);
        dayContainer.appendChild(conditionContainer);
        //avg temp
        let avgTemp=createDOM('p','three-day-temp');
        avgTemp.textContent=`${day.day.avgtemp_c}°C`;
        dayContainer.appendChild(avgTemp);
        return dayContainer

    }

    //function to create the landing page screen
    function createLandingPage(){
        let container=createDOM('div','landing-page-container');
        let text=createDOM('h1','landing-page-text');
        text.textContent="Enter your location to get started!";
        container.appendChild(text);
        let img=createDOM('img','landing-page-img');
        img.setAttribute('src','../src/weather-landing-page-img.svg');
        container.appendChild(img);
        let attribution=createDOM('p','img-attr');
        attribution.innerHTML='<a href="https://www.freepik.com/free-vector/earth-moon-concept-illustration_22881458.htm#query=globe&position=40&from_view=search&track=sph&uuid=40530c76-ce83-4458-ab7f-a6bab1e21b68">Image by storyset</a> on Freepik';
        container.appendChild(attribution);
        return container;
    }

    //function to create error page if the location cannot be found
    function createErrorPage(){
        let container=createDOM('div','error-page-container');
        let text=createDOM('h1','error-page-text');
        text.innerHTML=`Your location could not be found!<br>Please check the spelling or try a different location.`;
        container.appendChild(text);
        let img=createDOM('div','error-page-img-container');
        img.innerHTML='<svg id="error-page-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker-question-outline</title><path d="M12,1C7.59,1 4,4.59 4,9C4,14.57 10.96,22.34 11.26,22.67L12,23.5L12.74,22.67C13.04,22.34 20,14.57 20,9C20,4.59 16.41,1 12,1M12,20.47C9.82,17.86 6,12.54 6,9A6,6 0 0,1 12,3A6,6 0 0,1 18,9C18,12.83 13.75,18.36 12,20.47M11.13,14H12.88V15.75H11.13M12,5A3.5,3.5 0 0,0 8.5,8.5H10.25A1.75,1.75 0 0,1 12,6.75A1.75,1.75 0 0,1 13.75,8.5C13.75,10.26 11.13,10.04 11.13,12.88H12.88C12.88,10.91 15.5,10.69 15.5,8.5A3.5,3.5 0 0,0 12,5Z" /></svg>';
        container.appendChild(img);
        return container;
    }

    //function to show loader
    function showLoader(loader){
        loader.style.display='block';
    }

    //function to hide loader
    function hideLoader(loader){
        loader.style.display='none';
    }


    return{
        getData,
        showData,
        createLandingPage,
        createErrorPage,
        showLoader,
        hideLoader
    }
})();
