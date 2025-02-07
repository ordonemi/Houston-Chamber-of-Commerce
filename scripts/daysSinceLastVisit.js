const message = document.querySelector("#lastVisit");
const msToDays = 84600000;
const todayDate = new Date();

if (localStorage.getItem("lastVisit"))
{
    let lastVisit = Number(localStorage.getItem("lastVisit"));
    let daysBetweenVisits = (todayDate.getTime() - lastVisit) / msToDays;

    if (daysBetweenVisits < 1)
    {
        message.textContent = "Back so soon! Awesome!";
    }
    else if (daysBetweenVisits.toFixed(0) == 1)
    {
        message.textContent = "You last visited 1 day ago.";
    }
    else
    {
        message.textContent = "You last visited " + daysBetweenVisits.toFixed(0) + " days ago.";
    }
}
else
{
    message.textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem("lastVisit",todayDate.getTime());
}
