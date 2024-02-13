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
        currentTemp.textContents=`${data.current.temp_c}°C`
        currentTextDiv.appendChild(currentTemp);
        mainContainerCurrent.appendChild(currentTextDiv);
        //current condition image
        let currentImage=createDOM('img','current-img');
        currentImage.setAttribute('src',`${data.current.condition.icon}`);
        mainContainerCurrent.appendChild(currentImage);
        //div divider
        let divDivider=createDOM('hr','dom-divider');
        mainContainerCurrent.appendChild(divDivider);
    }



    return{
        getData,
        showData
    }
})();
