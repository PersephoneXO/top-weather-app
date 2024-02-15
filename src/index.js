/*import './styles.css';*/


//import functions from external files
import { dataManager } from "./data-manager";

//DOM elements
const searchBar=document.querySelector('#search-bar');
const mainContainer=document.querySelector('.main-container');

searchBar.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let weatherData=await dataManager.getData();
    //console.log(weatherData);
    mainContainer.innerHTML="";
    let weatherContent=await dataManager.showData(weatherData);
    mainContainer.appendChild(weatherContent);

});
