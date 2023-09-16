//CALORIES

const heightCalorie = document.querySelector('#calorie-height');
const weightCalorie = document.querySelector('#calorie-weight');
const age = document.querySelector('#age');
const gender = document.getElementById('gender');
const genderGender = document.querySelector('.gender');
const genderMale = document.querySelector('.male');
const genderFemale = document.querySelector('.female');
const calcCalBtn = document.querySelector('.calc-calorie');
const changeCalBtn = document.querySelector('.change-calorie');
const resultCalorie = document.querySelector('.result-calorie');
const borderCal = document.querySelector('.result-border-calorie');
let bmrM;
let bmrK;

const calcCaloriesMale = () => {
	bmrM =
		66.47 +
		13.7 * weightCalorie.value +
		5.0 * heightCalorie.value -
		6.76 * age.value;
	resultCalorie.textContent = `Your BMR is ${bmrM.toFixed(2)} kcal`;
	borderCal.style.opacity = '1';
};
const calcCaloriesFemale = () => {
	bmrK =
		655.1 +
		9.567 * weightCalorie.value +
		1.85 * heightCalorie.value -
		4.68 * age.value;
	resultCalorie.textContent = `Your BMR is ${bmrK.toFixed(2)} kcal`;
	borderCal.style.opacity = '1';
};

// const calcBmr = () => {
// 	gender.addEventListener('input', function () {
// 		const genderSelected = gender.value;
// 		if (genderSelected === 'male') {
// 			changeCalBtn.addEventListener('click', calcCaloriesMale);
// 		} else if (genderSelected === 'female') {
// 			calcCaloriesFemale();
// 		} else if (genderSelected === 'gender') {
// 			resultCalorie.textContent = 'Missing value 🤨';
// 		}
// 	});
// };

const calcBmr = () => {
    if(heightCalorie.value !== '' && weightCalorie.value !== '' && age.value !== ''){

    
	const optionMale = document.querySelector('input[value="male"]:checked');
	const optionFemale = document.querySelector('input[value="female"]:checked');
	if (optionMale) {
		calcCaloriesMale();
	} else if (optionFemale) {
		calcCaloriesFemale();
	}else{
        resultCalorie.textContent = 'Missing value 🤨';
        borderCal.style.opacity = '1';
    }
}else{
    resultCalorie.textContent = 'Missing value 🤨';
    borderCal.style.opacity = '1';
}}

const changeBmr = () => {
	heightCalorie.value = '';
	weightCalorie.value = '';
	age.value = '';
	resultCalorie.textContent = '';
	borderCal.style.opacity = '0';
};

calcCalBtn.addEventListener('click', calcBmr);
changeCalBtn.addEventListener('click', changeBmr);
