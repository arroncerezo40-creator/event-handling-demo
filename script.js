const input = document.getElementById('userInput');
const btn = document.getElementById('clickBtn');
const form = document.getElementById('myForm');
const output = document.getElementById('output');
const keyDisplay = document.getElementById('keyDisplay');

// Click Event
btn.addEventListener('click', () => output.innerText = "Button Clicked!");

// Input & Change Events
input.addEventListener('input', () => console.log("User is typing: " + input.value));

// Submit Event (Prevent Default)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    output.innerText = "Form Submitted: " + input.value;
});

// Keyup Event
input.addEventListener('keyup', (e) => keyDisplay.innerText = e.key);

// Mouseover/Mouseout
btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'yellow');
btn.addEventListener('mouseout', () => btn.style.backgroundColor = '');

// Focus & Blur Events
input.addEventListener('focus', () => input.classList.add('focused'));
input.addEventListener('blur', () => input.classList.remove('focused'));
