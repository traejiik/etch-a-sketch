function createBoxes(numPerRow) {
  const container = document.querySelector(".container");
  const total = numPerRow * numPerRow + numPerRow;
  const mod = numPerRow + 1;

  for (let i = 1; i < total; i++) {
    const div = document.createElement("div");

    if (i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      div.style.cssText = "border: 0.5px solid black; height: 25px; width: 25px";
    }

    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black"; // Temporary hover color
      });
      
      div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "black"; // Keeps the color after hover
      });

    container.appendChild(div);
  }
}

createBoxes(16);
