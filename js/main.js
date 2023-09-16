//NAV


const burgerBtn = document.querySelector('.burger');
const barsIco = document.querySelector('.fa-bars');
const xIco = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const handleNav = () => {
	nav.classList.toggle('active');
	burgerBtn.classList.toggle('active');
	barsIco.classList.toggle('hide');
	xIco.classList.toggle('hide');
};


burgerBtn.addEventListener('click', handleNav);



//INFO

const infoBoxShadow = document.querySelector('.info-box-shadow');

const infoBtn = document.querySelector('.info-btn');

const show = () => {
	infoBoxShadow.style.opacity = '1';
	infoBoxShadow.style.zIndex = '1';
};

const hide = () => {
	infoBoxShadow.style.opacity = '0';
	infoBoxShadow.style.zIndex = '-3';
};

infoBtn.addEventListener('click', show);
infoBoxShadow.addEventListener('click', hide);
