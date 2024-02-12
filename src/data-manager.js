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
            let url='https://api.weatherapi.com/v1/current.json?key=800e3d8069c34e27aaa193928241202&q='+location;
            const response=await fetch(url,{mode: 'cors'});
            const locationData=await response.json();
            return locationData;

        } catch(error){
            console.log(error);
        }
    }



    return{
        getData
    }
})();
