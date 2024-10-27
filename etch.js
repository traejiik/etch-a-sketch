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

const head = document.querySelector(".head");
const hcont = document.createElement("div");
hcont.classList.add("hcontainer");

head.appendChild(hcont);
container.appendChild(grid);

const th1 = document.createElement("h2");
th1.textContent = "ETCH";
const th2 = document.createElement("h3");
th2.textContent = "- A -";
const th3 = document.createElement("h2");
th3.textContent = "SKETCH";

hcont.appendChild(th1);
hcont.appendChild(th2);
hcont.appendChild(th3);

let input = prompt("Enter number of grid cells in a row");

createBoxes(input);

const buttonss = document.createElement("div");
buttonss.id = "buttonContainer";

body.appendChild(buttonss);

buttonss.style.cssText = "display: flex; justify-content: space-around; margin: 30px";

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
    btn.style.cssText = "border: 0.2px solid black; border-radius: 10px; height: 50px; width: 200px";
});

color.addEventListener("click", colourGrid);
reset.addEventListener("click", resetGrid);
clear.addEventListener("click", clearGrid);