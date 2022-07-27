const display = document.querySelector(".screen");
let toggleContainer = document.querySelector(".toggle-container");
let toggle = document.querySelectorAll(".toggle");
let buttons = Array.from(document.getElementsByClassName("calc-btn"));
let calculator = document.querySelector(".calculator");
let light = document.getElementById("light");





buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;

      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        if (display.innerText) {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.style.textAlign = "center";
            display.innerText = "Error";
          }
          break;
        } else {
          display.style.textAlign = "center";
          display.style.fontSize = "1.5rem"
          display.innerText = "Please enter equation";
        }
        break;
      case "+/-":
        if (display.innerText.includes("-")) {
          display.innerText = display.innerText.slice(1);
        } else {
          display.innerText = "-" + display.innerText;
        }
        break;
      default:
        display.innerHTML += e.target.innerText;
    }
  });
});

function toggleDark() {
  const toggleButton = toggle[1];
  toggleButton.addEventListener("click", () => {
    for(let tog of toggle){
      if(tog.classList.contains("dark")){
        tog.classList.remove("dark");
        document.body.classList.remove("dark");
        calculator.classList.remove("dark");
        display.classList.remove("dark");
        light.scr = './img/lighton.png';
      } else {
        tog.classList.add("dark");
        document.body.classList.add("dark");
        calculator.classList.add("dark");
        display.classList.add("dark");
        light.src = './img/lightoff.png';
        for(let num of buttons){
          num.classList.add("dark");
        }
      }
    }
  })
}