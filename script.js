const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const regexList = [];

class PhoneNumberValidator {
  constructor(rawInput) {
    this.rawInput = rawInput;
  }

  parseInput() {
    let input = this.rawInput.replace(/ /g, "");

    if (!input) {
        userInput.value = "";
        throw "No value";
    }
    console.log(input);
  }
}

const check = () => {
  const validator = new PhoneNumberValidator(userInput.value.trim());

  try {
    validator.parseInput();
  } catch (error) {
    switch (error) {
      case "No value":
        alert("Please provide a phone number");
        break;
      default:
        alert(`Unexpected error: ${error}`);
    }
    return;
  }
};

const clear = () => {};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check();
});
checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
