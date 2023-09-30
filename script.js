/* let container = document.getElementById('container');
for (let step = 0; step < 256; step++){
    const div = document.createElement("div");
    div.className = "grid";
    container.appendChild(div)
} */

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);