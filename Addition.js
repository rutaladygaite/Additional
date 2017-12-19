var pElement = document.getElementById('change-size');
var fTitle = document.getElementById('body');
var sTitle = document.getElementById('body');
var bgElement = document.getElementById('body');
var stylesJSON = localStorage.getItem('styles');
var stylesObj = JSON.parse(stylesJSON);

if (stylesObj === null) {
	var bgcolor = window.getComputedStyle(bgElement, null).getPropertyValue('background-color');
	var textsize = window.getComputedStyle(pElement, null).getPropertyValue('font-size');
	stylesObj = {
		"bgcolor": bgcolor,
		"textsize": textsize 
	}
}

window.addEventListener ("load", setStyles(stylesObj))

function setStyles (stylesObj){
	pElement.style.fontSize = stylesObj.textsize;
	fTitle.style.backgroundColor = stylesObj.bgcolor;
	sTitle.style.backgroundColor = stylesObj.bgcolor;
}

function makeLarger(){
	var style = window.getComputedStyle(pElement,null).getPropertyValue('font-size'); //galima paimti konkretaus css stiliu, nurodome koki stiliu mums reikia (i value) gauti - dydi
	var currentSize = parseInt(style); //gauna dydi kaip string element, gauname dydi
	currentSize += 10; //prie currentsize pridedame dydi
	pElement.style.fontSize = currentSize + 'px'; //
	var size = currentSize + "px";
	stylesObj.textsize = size;
	saveStyles(stylesObj);
}

function makeSmaller(){
	var style = window.getComputedStyle(pElement,null).getPropertyValue('font-size'); 
	var currentSize = parseInt(style);
	currentSize -= 10; 
	pElement.style.fontSize = currentSize + 'px';
	var size = currentSize + "px";
	stylesObj.textsize = size;
	saveStyles(stylesObj);
}

function changeFirst() {
	if (fTitle.style.backgroundColor == 'tomato') {
		fTitle.style.backgroundColor = 'white';
		stylesObj.bgcolor = 'white';
		saveStyles(stylesObj);
	}
	else {
		fTitle.style.backgroundColor = 'tomato';
		stylesObj.bgcolor = 'tomato';
		saveStyles(stylesObj);
	}
}

function changeSecond() {
	if (fTitle.style.backgroundColor == 'steelblue') {
		fTitle.style.backgroundColor = 'white';
		stylesObj.bgcolor = 'white';
		saveStyles(stylesObj);
	}
	else {
		fTitle.style.backgroundColor = 'steelblue';
		stylesObj.bgcolor = 'steelblue';
		saveStyles(stylesObj);
	}
}

function saveStyles (stylesObj){
	localStorage.setItem("styles", JSON.stringify(stylesObj)) ;
}