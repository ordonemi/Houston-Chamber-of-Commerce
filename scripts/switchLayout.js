const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#display");

gridbutton.addEventListener("click",() => {
    if (display.classList['value'] != 'grid')
    {
        display.classList.add("grid");
        display.classList.remove("list");
    }
});

listbutton.addEventListener("click", () => {
    if (display.classList['value'] != 'list')
    {
        display.classList.add("list");
        display.classList.remove("grid");
    }
});
