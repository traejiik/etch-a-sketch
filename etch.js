function createBoxes(numPerRow) {
  const total = numPerRow ** 2;

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    grid.appendChild(div);
  }
}

function colorGrid () {

}

function clearGrid () {
    
}

const body = document.querySelector("body");
const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList.add("gridContainer");

container.appendChild(grid);

let input = prompt("Enter number of boxes in one line");

createBoxes(input);
