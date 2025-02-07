const URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=29.8167688&lon=-95.730938&appid=d1b070fe2f96f702ee25c897fbb773f5&units=imperial'
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const firstDay = document.querySelector("#today");
const secondDay = document.querySelector("#tomorrow");
const thirdDay = document.querySelector("#thirdDay");

const firstDate = document.querySelector("#first-date");
const secondDate = document.querySelector("#second-date");
const thirdDate = document.querySelector("#third-date");

const firstIcon = document.querySelector("#first-icon");
const secondIcon = document.querySelector("#second-icon");
const thirdIcon = document.querySelector("#third-icon");


async function apiFetch()
{
    try
    {
        const response = await fetch(URL);
        if (response.ok)
        {
            const data = await response.json();
            displayData(data);
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

function displayData(data)
{
    let firstDateConversion = new Date(data.list[2].dt*1000);
    firstDate.innerHTML = `${dayNames[firstDateConversion.getDay()]}`;
    const firstSrc = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
    firstIcon.setAttribute('src',firstSrc);
    firstDay.innerHTML = `${data.list[2].main.temp.toFixed(0)}&deg;F`;

    let secondDateConversion = new Date(data.list[10].dt * 1000);
    secondDate.innerHTML = `${dayNames[secondDateConversion.getDay()]}`;
    let secondSrc = `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`
    secondIcon.setAttribute('src',secondSrc);
    secondDay.innerHTML = `${data.list[10].main.temp.toFixed(0)}&deg;F`;

    let thirdDateConversion = new Date(data.list[18].dt*1000);
    thirdDate.innerHTML = `${dayNames[thirdDateConversion.getDay()]}`;
    let thirdSrc = `https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`
    thirdIcon.setAttribute('src',thirdSrc);
    thirdDay.innerHTML = `${data.list[18].main.temp.toFixed(0)}&deg;F`;
}

apiFetch();