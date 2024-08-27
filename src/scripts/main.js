

const breathingText = document.getElementById('breathing-text');
const breathingContainer = document.getElementById('breathing-container');
const timeSlider = document.getElementById('time-slider');
const timeValue = document.getElementById('time-value');
const states = ['Inhala', 'Mantén', 'Exhala', 'Mantén'];
const statecolors = ['red', 'blue', 'green', 'yellow'];
let stateIndex = 0;
let intervalTime = 4000;
let intervalId;


/**
 * @description
 */
function updateBreathing() {
	breathingText.textContent = states[stateIndex];
	stateIndex = (stateIndex + 1) % states.length;
	breathingContainer.style.backgroundColor = statecolors[stateIndex];

}

function startBreathing() {
	clearInterval(intervalId);
	intervalId = setInterval(updateBreathing, intervalTime);
}


timeSlider.addEventListener('input', (event) => {
	const newTime = event.target.value;
	timeValue.textContent = newTime;
	intervalTime = newTime * 1000;
	startBreathing();
});

startBreathing();
