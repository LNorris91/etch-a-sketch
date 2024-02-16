const container = document.querySelector("#container");
const btn = document.querySelector("button")

btn.addEventListener('click', resetGrid);

createGrid(16);

//this function creates the grid of pixels based on the input size
function createGrid(size) {
for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
        for (g = 0; g < size; g++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);}}
    
//creates variables for each pixel and allows for hovering color change
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
    e.target.style.cssText = "background-color: black;";
    })})
}

//reset function that erases current board and creates new one with new input
function resetGrid() {
    let rows = document.querySelectorAll(".row")
    rows.forEach ((row) => {
        row.remove()})
        
    let num;
    do {num = prompt("Let's keep it under 100");
    } while (num > 100);

    createGrid(num);
}