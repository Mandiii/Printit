const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slidesLength = slides.length - 1
const image = document.getElementById("banner-img")
const tagLine = document.getElementById("tagline")

// create a dot element for each slide
for (let dot of slides){
	dot = document.createElement("span")
	dot.className = "dot"
	document.getElementById("dots").appendChild(dot)
}

let activeSlide = 0
const dotsList = document.getElementsByClassName("dot")
let activeDot = dotsList[activeSlide]

activeDot.classList.add("dot_selected")

// change image and text on click and loop infinitely
function changeSlide(clickIterator) {		
	
	activeSlide += clickIterator

	if(activeSlide > slidesLength) {
		activeSlide = 0
	} else if (activeSlide < 0) {
		activeSlide = slidesLength
	}
	image.src = "./assets/images/slideshow/" + slides[activeSlide].image
	tagLine.innerHTML = slides[activeSlide].tagLine
	
	// Reset all dots to non-selected style and add selected style to the active dot
	for (dot of dotsList) {
		dot.classList = "dot"
	}
	activeDot = dotsList[activeSlide]
	
	activeDot.classList.add("dot_selected")
}
