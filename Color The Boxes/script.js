let color = {
    "0": "green",
    "1": "red",
    "2": "yellow",
    "3": "pink",
    "4": "black",}
let number1 = Math.floor(Math.random() * 5);
let number2 = Math.floor(Math.random() * 5);


let box = document.getElementsByClassName("box");
box[number1].style.backgroundColor = `${color[number1]}`;
box[number1].style.color = `${color[number2]}`;

