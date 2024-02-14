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
        locationTitle.textContents=`${data.location.name}`;
        currentTextDiv.appendChild(locationTitle);
        //current condition
        let currentCondition=createDOM('p','current-condition');
        currentCondition.textContents=`${data.current.condition.text}`;
        currentTextDiv.appendChild(currentCondition);
        //current temp
        let currentTemp=createDOM('p','current-temp');
        currentTemp.textContents=`${data.current.temp_c}°C`;
        currentTextDiv.appendChild(currentTemp);
        mainContainerCurrent.appendChild(currentTextDiv);
        //current condition image
        let currentImage=createDOM('img','current-img');
        currentImage.setAttribute('src',`${data.current.condition.icon}`);
        mainContainerCurrent.appendChild(currentImage);
        //div divider
        let divDivider=createDOM('hr','dom-divider');
        mainContainerCurrent.appendChild(divDivider);
        mainContainerContent.appendChild(mainContainerCurrent);
        //
        //today's forecast container
        let mainContainerToday=createDOM('div','main-container-today');
        //today's forecast title
        let todayForecast=createDOM('p','mc-today-title');
        todayForecast.textContents="Today's Forecast"
        mainContainerToday.appendChild(todayForecast);
        //hours container
        let todayConditions=createDOM('div','mc-today-hours-container');
        //6am condition
        let sixAM=getDataAtSpecificTime(data.forecast.forecastday[0],"6");
        todayConditions.appendChild(createHourContainer('6:00 AM',sixAM.condition.icon,sixAM.temp_c));
        //12pm condition
        let twelvePM=getDataAtSpecificTime(data.forecast.forecastday[1],"12");
        todayConditions.appendChild('12:00 PM', twelvePM.condition.icon, twelvePM.temp_c);
        //6pm condition
        let sixPM=getDataAtSpecificTime(data.forecast.forecastday[2],"18");
        todayConditions.appendChild(createHourContainer('6:00 PM', sixPM.condition.icon, sixPM.temp_c));
        mainContainerToday.appendChild(todayConditions);
        mainContainerToday.appendChild(divDivider);
        mainContainerContent.appendChild(mainContainerToday);
        //
        //3-day forecast container
    }

    //function to create each of the hour containers
    function createHourContainer(time,icon,temp){
        let hourContainer=createDOM('div','hour-container');
        let time=createDOM('p','mc-today-time');
        time.textContents=`${time}`;
        hourContainer.appendChild(time);
        let icon=createDOM('img','mc-today-img');
        icon.setAttribute('src',icon);
        hourContainer.appendChild(icon);
        let temp=createDOM('p','mc-today-temp');
        temp.textContents=`${temp}°C`;
        hourContainer.appendChild(temp);
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


    return{
        getData,
        showData
    }
})();
