const states = ['Inhala', 'Mantén', 'Exhala', 'Mantén'];
const stateColors = [
	'rgba(7, 3, 140, 0.4)',
	'rgba(0, 169, 128, 0.4)',
	'rgba(31, 105, 215, 0.5)',
	'rgba(64, 191, 194, 0.4)'
];
let stateIndex = 0;
let intervalTime = 4000;
let intervalId;
let stateStart = false
const breathingText = document.getElementById('breathing-text');
const breathingContainer = document.getElementById('breathing-container');
const timeSlider = document.getElementById('time-slider');
const timeValue = document.getElementById('time-value');
const timeBar = document.getElementById('time-bar');
const startButton = document.getElementById('start-button');
/**
 * @description Actualiza el estado de la respiración.
 */
function updateBreathing() {
	breathingText.textContent = states[stateIndex];
	timeBar.style.backgroundColor = stateColors[stateIndex];
	stateIndex = (stateIndex + 1) % states.length;
	//breathingContainer.style.backgroundColor = stateColors[stateIndex];
	resetTimeBar();
}
/**
 * Inicia el ciclo de respiración.
 */
function startBreathing() {
	clearInterval(intervalId);
	intervalId = setInterval(updateBreathing, intervalTime);
	resetTimeBar();
}
/**
 * Resetea la barra de tiempo.
 */
function resetTimeBar() {
	timeBar.style.transition = 'none';
	timeBar.style.width = '0%';
	setTimeout(() => {
		timeBar.style.transition = `width ${intervalTime}ms linear`;
		timeBar.style.width = '100%';
	}, 50);
}
timeSlider.addEventListener('input', (event) => {
	const newTime = event.target.value;
	timeValue.textContent = newTime;
	intervalTime = newTime * 1000;
	//startBreathing();
});
startButton.addEventListener('click', () => {
	if (!stateStart ) {
		stateStart = true
		timeSlider.disabled = true;
		startButton.textContent = 'Reiniciar';
		stateIndex = 0;
		startBreathing();
	} else {
		stateStart = false
		timeSlider.disabled = false;
		startButton.textContent = 'Iniciar';
		clearInterval(intervalId);
		breathingText.textContent = 'Va de nuevo';
		timeBar.style.transition = 'none';
		timeBar.style.width = '100%';
		setTimeout(() => {
			timeBar.style.transition = `width 0ms linear`;
			timeBar.style.width = '0%';
		}, 50);
	}
});
//startBreathing();
