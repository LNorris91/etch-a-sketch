const container = document.querySelector("#container");
const btn = document.querySelector("button")

btn.addEventListener('click', resetGrid);

createGrid(16);

function createGrid(size) {
for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
        for (g = 0; g < size; g++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);}}

    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.style.cssText = "background-color: black;";
    })})}

function resetGrid() {
    let rows = document.querySelectorAll(".row")
    rows.forEach ((row) => {
        row.remove()})
        
    let num;
    do {num = prompt("Enter a number greater than 100?");
    } while (num > 100);

    createGrid(num);
}