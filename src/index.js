/*import './styles.css';*/


//import functions from external files
import { dataManager } from "./data-manager";

//DOM elements
//const searchButton=document.querySelector('.search-button');
const searchBar=document.querySelector('#search-bar');

searchBar.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let weatherData=await dataManager.getData();
    console.log(weatherData);

});
