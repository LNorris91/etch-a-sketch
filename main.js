const container = document.querySelector("#container");

let j = 10;

for (i = 0; i < j; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
        for (g = 0; g < j; g++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
}