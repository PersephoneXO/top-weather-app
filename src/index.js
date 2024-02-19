/*import './styles.css';*/


//import functions from external files
import { dataManager } from "./data-manager";

//DOM elements
const searchBar=document.querySelector('#search-bar');
const mainContainer=document.querySelector('.main-container');


//run functions to create landing page on page load
document.addEventListener('DOMContentLoaded',()=>{
    mainContainer.appendChild(dataManager.createLandingPage());
});

//show data on page load
searchBar.addEventListener('submit', async (e)=>{
    e.preventDefault();

    try{
    let weatherData=await dataManager.getData();
    mainContainer.innerHTML="";
    let weatherContent=await dataManager.showData(weatherData);
    mainContainer.appendChild(weatherContent);
    }catch(error){
        mainContainer.innerHTML="";
        mainContainer.appendChild(dataManager.createErrorPage());
    }finally{

    }
});
