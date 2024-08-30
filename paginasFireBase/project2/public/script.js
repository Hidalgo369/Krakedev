const numKeyOutputMap = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "zero": "0",
};

const operators = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/"
};

let previousOperand = document.querySelector("[data-previous]");
let operator = null;
let inputBuffer = "";
let displayText = "0";
let decimalAdded = false;

function calculateResult() {
  try {
    displayText = displayText.replace(/\*-\+/g, '+').replace(/\*--/g, '-').replace(/-\+/g, '-').replace(/--/g, '+').replace(/\++/g, '+');
    const result = eval(displayText);
    displayText = result.toString();
  } catch (error) {
    displayText = "Error";
  }
}

function updateDisplay() {
  if (displayText.length > 1 && displayText.startsWith("0")) {
    displayText = displayText.slice(1);
  }
  document.querySelector("#display").innerHTML = displayText;
  if (operator !== null) {
    previousOperand.innerText = `${displayText}`;
  }
}

function press(key) {
  if (key in numKeyOutputMap || key === "decimal") {
    if (key === "decimal") {
      if (!decimalAdded) {
        inputBuffer += ".";
        displayText += ".";
        decimalAdded = true;
      }
    } else {
      inputBuffer += numKeyOutputMap[key];
      displayText += numKeyOutputMap[key];
    }
  } else if (key in operators) {
    if (inputBuffer && operator && operator !== "negative") {
      calculateResult();
    }
    operator = key;
    displayText += operators[key];
    inputBuffer = "";
    decimalAdded = false;
  } else {
    switch (key) {
      case "ac":
        displayText = "0";
        inputBuffer = "";
        operator = null;
        decimalAdded = false;
        break;
      case "delete":
        displayText = displayText.slice(0, -1);
        inputBuffer = inputBuffer.slice(0, -1);
        if (displayText === "") {
          displayText = "0";
        }
        break;
      case "equals":
        calculateResult();
        break;
    }
  }
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
  const numBtns = document.querySelectorAll("[data-number]");
  const deleteBtn = document.querySelector("[data-delete]");
  const acBtn = document.querySelector("[data-AC]");
  const equalsBtn = document.querySelector("[data-equals]");
  const operationBtns = document.querySelectorAll("[data-operation]");
  Array.from(numBtns).forEach((button) => {
    button.addEventListener("click", function () {
      press(button.getAttribute("data-action"));
    });
  });

  deleteBtn.addEventListener("click", function () {
    press("delete");
  });

  acBtn.addEventListener("click", function () {
    press("ac");
  });

  equalsBtn.addEventListener("click", function () {
    press("equals");
  });

  operationBtns.forEach((button) => {
    button.addEventListener("click", function () {
      press(button.getAttribute("data-operation"));
    });
  });

  updateDisplay();
});