function createBoxes(numPerRow) {
  const total = numPerRow ** 2;

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    grid.appendChild(div);
  }
  div.style.gridTemplateColumns = `repeat(${input}, minmax(0px, 1fr))`;
  div.style.gridTemplateRows = `repeat(${input}, minmax(0px, 1fr))`;
  const grids = document.querySelectorAll(".grid");
  grids.forEach((gridd) => {
      gridd.addEventListener("mouseover", () => (gridd.className = "hoverGrid"));
  });
}

function colorGrid() {}

function clearGrid() {}

const body = document.querySelector("body");
const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList.add("gridContainer");

container.appendChild(grid);

let input = prompt("Enter number of boxes in one line");

createBoxes(input);
