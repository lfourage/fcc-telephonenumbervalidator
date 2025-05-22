const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

userInput.addEventListener('keydown', (e) => { if (e.key === "Enter") check(); });
checkBtn.addEventListener('click', check);
clearBtn.addEventListener('click', clear);