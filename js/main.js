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
			'Otyłość lll stopnia - Wynik ten wskazuje na bardzo znaczną nadwagę, co może prowadzić do poważnych problemów zdrowotnych i wymaga natychmiastowej interwencji medycznej.';
	} else if (bmi < 39.99 && bmi > 35) {
		resultMore.textContent =
			'Otyłość ll stopnia - To umiarkowanie znacząca nadwaga, która również niesie ze sobą ryzyko zdrowotne, więc zaleca się konsultację z lekarzem w celu opracowania planu odchudzania.';
	} else if (bmi < 34.99 && bmi > 30) {
		resultMore.textContent =
			'Otyłość l stopnia - Stan ten wskazuje na niewielką nadwagę, która może być kontrolowana przez zmianę stylu życia, takie jak dieta i regularna aktywność fizyczna.';
	} else if (bmi < 29.99 && bmi > 25) {
		resultMore.textContent =
			'Nadwaga - Oznacza to, że masz nieco więcej tkanki tłuszczowej niż to, co jest uważane za zdrowe. Warto rozważyć modyfikację nawyków żywieniowych i aktywności fizycznej.';
	} else if (bmi < 24.99 && bmi > 18.5) {
		resultMore.textContent =
			'Waga prawidłowa - Twój wynik BMI jest w zakresie normy, co sugeruje, że utrzymujesz zdrową wagę. Nadal ważne jest utrzymywanie zdrowego stylu życia.';
	} else if (bmi < 18.5 && bmi > 17) {
		resultMore.textContent =
			'Niedowaga - Oznacza to, że Twoja waga jest niższa niż norma, co może być niezdrowe. Warto skonsultować się z lekarzem, aby ustalić przyczyny i podjąć odpowiednie kroki.';
	} else if (bmi < 16 && bmi > 16.99) {
		resultMore.textContent =
			'Wychudzenie -  Stan ten wskazuje na bardzo niską masę ciała, co jest niebezpieczne dla zdrowia. Wymaga natychmiastowej opieki medycznej i monitorowania.';
	} else if (bmi >= 15.99) {
		resultMore.textContent =
			'Wygłodzenie - To krytyczny stan wynikający z skrajnego niedożywienia, który może zagrażać życiu. Konieczna jest natychmiastowa interwencja medyczna w celu przywrócenia zdrowia.';
	}
	result.textContent = `Twoje BMI to ${bmi}`;
	
};

const calcBmi = () => {
	if (weight.value !== '' && height.value !== '') {
		calc();
	} else {
		result.textContent = 'Brak wpisanej wartości';
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
