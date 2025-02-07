const temp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const windSpeed = document.querySelector("#windspeed");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.8167688&lon=-95.730938&appid=d1b070fe2f96f702ee25c897fbb773f5&units=imperial';
async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayResults(data)
{
    let desc = data.weather[0].description;
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F - ${desc}`;
    windSpeed.innerHTML = ` ${data.wind.speed.toFixed(0)}`;    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
}

apiFetch();