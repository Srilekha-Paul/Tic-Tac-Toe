let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");

let turn0 = true;
const Winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
    
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
    })
    
})
