const temperature = parseInt(document.querySelector("#temperature"));
const windspeed = parseInt(document.querySelector("#windspeed"));

function getWindChill(temp, speed){
    const windchill = document.querySelector("#windchill");
    let message = "N/A";

    if (temp <= 50 && speed > 3)
    {
        let chillFactor = Math.pow(speed,0.16);
        let chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor));

        message = `${chill} &deg;F`;
        windchill.innerHTML = message;
    }
    else {
        windchill.innerHTML = message;    
    }
}

getWindChill(temperature,windspeed);

document.querySelector('#join-today').addEventListener('click', () => {
    location.href = "join.html";
});