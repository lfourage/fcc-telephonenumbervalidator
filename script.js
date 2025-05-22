const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const regex =
  /^(00|\+)?1? ?(\(\d{3}\)|\d{3})([ .-])?\d{3}([ .-])?\d{4}( ext\.?\d+| x\d+)?$/;

class PhoneNumberValidator {
  constructor(input) {
    this.input = input;
  }

  parseInput() {
    if (!this.input) {
      userInput.value = "";
      throw "No value";
    }
  }

  displayResult() {
    if (regex.test(this.input)) {
      resultsDiv.innerHTML += `<p class="valid">
        Valid US number: ${this.input}
        </p>`;
    } else {
      resultsDiv.innerHTML += `<p class="invalid">
        Invalid US number: ${this.input}
        </p>`;
    }
    userInput.value = "";
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

  validator.displayResult();
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check();
});
checkBtn.addEventListener("click", check);

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.innerHTML = "";
});
