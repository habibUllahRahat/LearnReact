
console.log(document);


let number = 0
let number1 = 0

const display = document.getElementById("displayNumber")
const btn = document.getElementById("incrementButton")
btn.addEventListener("click", () => {
    number++
    display.innerText = number;
})
const display1 = document.getElementById("displayNumber1")
const btn1 = document.getElementById("incrementButton1")
btn1.addEventListener("click", () => {
    number1++
    display1.innerText = number;
})


const domContainer = document.getElementById("root")

const myCounter = React.createElement("div", null, [React.createElement("h2", { style: { color: "red" } }, "0"), React.createElement("button", { id: "btn" }, "Click")])
