/*import './styles.css';*/


//import functions from external files
import { dataManager } from "./data-manager";

//DOM elements
const searchButton=document.querySelector('.search-button');


searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    //let location=document.querySelector('#location').value;
    let locationData=dataManager.getData();
    console.log(locationData);
});
