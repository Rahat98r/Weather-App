const text = document.querySelector(".input");
const search = document.querySelector(".search");
const temp = document.querySelector(".temp");
const weatherCondition = document.querySelector(".weatherCondition");
async function defTemp(city) {
    const apikey = "24c5ac0536c34381676ba0004aba6162";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const DataEl = await fetch(`${url}`).then(response => response.json());
    weatherCondition.textContent = `${DataEl.weather[0].description}`;
    temp.textContent = `${Math.round(DataEl.main.temp - 273.15)}°C`;

}
defTemp("Bangladesh")

async function getWeather(city) {
    const apikey = "24c5ac0536c34381676ba0004aba6162";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const getData = await fetch(`${url}`).then(response => response.json());
    temp.textContent = `${Math.round(getData.main.temp - 273.15)}°C`;
    weatherCondition.textContent = `${getData.weather[0].description}`
    console.log(getData);
}
search.addEventListener('click', () => {
    getWeather(text.value);

})