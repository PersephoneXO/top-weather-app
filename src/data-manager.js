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

    return{
        getData,
        showData
    }
})();
