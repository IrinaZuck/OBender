const contentItem1 = document.querySelector('.transformation__content-item_1');
const contentItem2 = document.querySelector('.transformation__content-item_2');
const contentItem4 = document.querySelector('.transformation__content-item_4');
const contentItem5 = document.querySelector('.transformation__content-item_5');
const container2 = document.querySelector('.container2');
const container5 = document.querySelector('.container5');


const parent_original = document.querySelector('.support__header-content1');
const parent = document.querySelector('.support__header-content2');
const supportItem = document.querySelector('.support__item');
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('resize',dynamics2);
		dynamics2();

function dynamics2(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
      	parent.insertBefore(supportItem, parent.children[2]);
    }
	else {
		parent_original.insertBefore(supportItem, parent_original.children[2]);
	}
}

/*----------Блок transformation----------*/


window.addEventListener('resize', dynamics22);
	


function dynamics22(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 700) {
			contentItem1.insertBefore(container2, contentItem1.children[2]);
			contentItem2.classList.add('none');
			contentItem4.insertBefore(container5, contentItem4.children[2]);
			contentItem5.classList.add('none');
	} else {
			contentItem2.classList.remove('none');
			contentItem2.insertBefore(container2, contentItem2.children[2]);
			contentItem5.classList.remove('none');
			contentItem5.insertBefore(container5, contentItem5.children[2]);
			}}


dynamics22();

/*-----------Слайдер1----------*/
const sliderItem = document.querySelectorAll('.transformation__content-item');
const sliderLine = document.querySelector('.transformation__content');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.arrow-right');
const sliderBtnPrev = document.querySelector('.arrow-left');
let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
function showSlide() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if(viewport_width <= 700){
    sliderWidth = document.querySelector('.transformation__wrapper').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderItem.length + 'px';
    sliderItem.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
else if(viewport_width > 700){
	sliderLine.style.width = 100 + '%';
	sliderItem.forEach(item => item.style.width =  'auto');
}
}
showSlide();
function nextSlide() {

	if(sliderCount < 4){
    sliderCount++;
    rollSlider();
    thisSlide(sliderCount);
    }
     if(sliderCount == 4){
     	 sliderBtnNext.classList.add('passive');
    }
    if (sliderCount > 0){
	sliderBtnPrev.classList.remove('passive');
    }
}
function prevSlide() {
	if (sliderCount > 0){
    sliderCount--;
     rollSlider();
    thisSlide(sliderCount);

} if (sliderCount < 4){
	sliderBtnNext.classList.remove('passive');}
   if (sliderCount == 0) {
    sliderBtnPrev.classList.add('passive');
}

}
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    });
});

/*----------Слайдер-2--------------*/
const sliderItem2 = document.querySelectorAll('.participants__slider-item');
const sliderLine2 = document.querySelector('.participants__slider-content');
const sliderBtnNext2 = document.querySelector('.participants__arrow_left');
const sliderBtnPrev2 = document.querySelector('.participants__arrow_right');
const arrowText = document.querySelector('.participants__arrow-text');
let sliderCount2 = 0;
sliderBtnNext2.addEventListener('click', nextSlide2);
sliderBtnPrev2.addEventListener('click', prevSlide2);
function nextSlide2() {
    sliderCount2++;
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width > 1280){
    if (sliderCount2 >= sliderItem2.length - 2){ sliderCount2 = 0};
   }
     if (viewport_width < 1280 && viewport_width > 500){
    if (sliderCount2 >= sliderItem2.length - 1){ sliderCount2 = 0};
   }
      if (viewport_width < 500){
    if (sliderCount2 >= sliderItem2.length){ sliderCount2 = 0};
   }
    rollSlider2();
    itemNumber();
    
}
function prevSlide2() {
    sliderCount2--;
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width > 1280){
    if (sliderCount2 < 0){ sliderCount2 = sliderItem2.length -3;}
}
if(viewport_width < 1280 && viewport_width > 500){
	if (sliderCount2 < 0){ sliderCount2 = sliderItem2.length -2;}
    
}
if(viewport_width < 500){
	if (sliderCount2 < 0){ sliderCount2 = sliderItem2.length -1;}
    
}
   rollSlider2();
   itemNumber();
}
function rollSlider2() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width > 400){
    sliderWidth = 394;

	} else
    if (viewport_width <= 400){
    	sliderWidth = 335;
  
    }
     sliderLine2.style.transform = `translateX(${-sliderCount2 * sliderWidth}px)`;
  
}

/*setInterval(() => {
     nextSlide2()}, 2000);*/

function itemNumber(){
    arrowText.textContent = `${sliderCount2 + 1} / ${sliderItem2.length}` ;
}
