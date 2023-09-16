
//NAV

const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')


const handleNav = () =>{
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)

//BMI

const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const result = document.querySelector('.result');
const resultMore = document.querySelector('.result-more');
const calcBtn = document.querySelector('.calc');
const changeBtn = document.querySelector('.change');
const border = document.querySelector('.result-border');
const animation = document.querySelector('.rotate-scale-up-hor')
let bmi;

const calc = () => {
	bmi = weight.value / ((height.value * height.value) / 10000);
	if (bmi >= 40) {
		resultMore.textContent =
			'Grade lll obesity - This score indicates very significant overweight, which can lead to serious health problems and requires immediate medical intervention.';
	} else if (bmi < 39.99 && bmi > 35) {
		resultMore.textContent =
			'Degree ll obesity - This is moderately significant overweight that also carries health risks, so it is advisable to consult a doctor to develop a weight loss plan.';
	} else if (bmi < 34.99 && bmi > 30) {
		resultMore.textContent =
			'Obesity of l degree - This condition indicates being slightly overweight, which can be controlled by lifestyle changes such as diet and regular physical activity.';
	} else if (bmi < 29.99 && bmi > 25) {
		resultMore.textContent =
			'Overweight - This means that you have slightly more body fat than what is considered healthy. You should consider modifying your eating habits and physical activity.';
	} else if (bmi < 24.99 && bmi > 18.5) {
		resultMore.textContent =
			'Normal weight - Your BMI score is within the normal range, suggesting that you are maintaining a healthy weight. It is still important to maintain a healthy lifestyle.';
	} else if (bmi < 18.5 && bmi > 17) {
		resultMore.textContent =
			'Underweight - This means that your weight is lower than the norm, which can be unhealthy. It is a good idea to consult a doctor to determine the causes and take appropriate measures.';
	} else if (bmi < 16 && bmi > 16.99) {
		resultMore.textContent =
			'Emaciation - This condition indicates very low body weight, which is dangerous to health. It requires immediate medical care and monitoring.';
	} else if (bmi >= 15.99) {
		resultMore.textContent =
			'Starvation - This is a critical condition resulting from extreme malnutrition that can be life-threatening. Immediate medical intervention is needed to restore health.';
	}
	result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
	
};

const calcBmi = () => {
	if (weight.value !== '' && height.value !== '') {
		calc();
	} else {
		result.textContent = 'No value entered';
		resultMore.textContent = ''
	}
	border.style.opacity = '1';
};

const changeBmi = () => {
	height.value = '';
	weight.value = '';
	result.textContent = '';
	border.style.opacity = '0';
};

calcBtn.addEventListener('click', calcBmi);
changeBtn.addEventListener('click', changeBmi);
