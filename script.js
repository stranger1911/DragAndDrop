const lists = document.querySelectorAll(".list");
const rightBox = document.querySelector(".right");
const leftBox = document.querySelector(".left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });
  });
}
