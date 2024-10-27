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

function randomColour() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

function colourGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((gridd) => {
    gridd.addEventListener("mouseover", () => {
      gridd.style.backgroundColor = randomColour();
    });
  });
}

function resetGrid() {
  input = prompt("Enter number of grid cells in a row");
  document.querySelectorAll(".grid").forEach((e) => e.remove());
  document.querySelectorAll(".hoverGrid").forEach((e) => e.remove());
  createBoxes(input);
}

function clearGrid() {
  document.querySelectorAll(".grid").forEach((e) => e.remove());
  document.querySelectorAll(".hoverGrid").forEach((e) => e.remove());
  createBoxes(input);
}

const body = document.querySelector("body");
const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList.add("gridContainer");

container.appendChild(grid);

let input = prompt("Enter number of grid cells in a row");

createBoxes(input);

const buttonss = document.createElement("div");
buttonss.id = "buttonContainer";

body.appendChild(buttonss);

buttonss.style.cssText = "display: flex; justify-content: space-around; margin: 20px";

const color = document.createElement("button");
color.textContent = "Random Color Fill";
const reset = document.createElement("button");
reset.textContent = "Reset Grid";
const clear = document.createElement("button");
clear.textContent = "Clear Grid";

buttonss.appendChild(color);
buttonss.appendChild(reset);
buttonss.appendChild(clear);

buttns = document.querySelectorAll("button");
buttns.forEach(btn => {
    btn.style.cssText = "border-radius: 8px; height: 50px; width: 200px";
});