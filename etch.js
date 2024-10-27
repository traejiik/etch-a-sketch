function createBoxes(numPerRow) {
  const total = numPerRow ** 2;

  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    grid.append(div);
  }
  grid.style.gridTemplateColumns = `repeat(${numPerRow}, minmax(0px, 1fr))`;
  grid.style.gridTemplateRows = `repeat(${numPerRow}, minmax(0px, 1fr))`;
  const grids = document.querySelectorAll(".grid");
  grids.forEach((gridd) => {
      gridd.addEventListener("mouseover", () => (gridd.className = "hoverGrid"));
  });
}

function colorGrid() {}

function resetGrid() {
    input = prompt("Enter number of grid cells in a row")
    createBoxes();
}

const body = document.querySelector("body");
const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList.add("gridContainer");

container.appendChild(grid);

let input = prompt("Enter number of grid cells in a row");

createBoxes(input);
