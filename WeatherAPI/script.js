let city = "Bangkok";
const apikey = "7c7a5028d5df11d630c20283a616536b";

function setData(){
    showWeather();
}

async function showWeather(){
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);
        const data=await response.json();
        console.log(data);
    }   catch (error){
            console.log(error)
    }
}
function showWeather(data){

}

setData();