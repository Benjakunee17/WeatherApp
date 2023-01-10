let city = "Tokyo";
const apikey = "7c7a5028d5df11d630c20283a616536b";

const form=document.getElementById('form');
const search=document.getElementById('search');

function setData(){
    showWeather();
}

async function showWeather(){
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);
        const data=await response.json();
        showDataToUI(data);
    }   catch (error){
            console.log(error)
    }
}
function showDataToUI(data){
    console.log(data);
    const city=document.getElementById('city');
    const state=document.getElementById('state');
    const weather=document.getElementById('weather');
    const status=document.getElementById('status');
    const humidity=document.getElementById('humidity');
    const wind=document.getElementById('wind');

    city.innerText=data.name;
    state.innerText=data.sys.country;
    weather.children[0].innerHTML=calculate(parseInt(data.main.temp))+ " c&deg";
    weather.children[1].innerHTML="min:"+calculate(parseInt(data.main.temp_min )) + " c&deg" +"max:"+calculate(parseInt(data.main.temp_max))+ " c&deg";

    //status
    status.innerText=data.weather[0].main;
    humidity.innerText="Humidity:"+data.main.humidity;
    wind.innerText="Wind:"+data.wind.speed;
}

function calculate(k){
    return k-273
}
    

setData();