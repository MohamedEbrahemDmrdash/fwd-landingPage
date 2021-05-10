/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections=document.getElementsByTagName('section');
const selectUl=document.getElementById('navbar__list');
const fragment=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// creating navbar list items
function createNav(){
	// looping for all 4 sections
	for (const section of sections) {
		let createdLi=document.createElement('li');
		createdLi.classList.add('menu__link');
		createdLi.innerHTML=`${section.getAttribute('data-nav')}`;
		// another way to go to direct location on window
		// createdLi.innerHTML=`<a class="menu__link" href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}`;
		fragment.appendChild(createdLi);
	}
	selectUl.appendChild(fragment);
}

// checking if element in viewport or not
function onViewPort(elem){
	const rect = elem.getBoundingClientRect();
	return (rect.top >= 0 && rect.top<=rect.height);
}

// going to direct location on window using id
function navClicked(e){
	for (const section of sections) {

		// if(section.getAttribute('data-nav')==e.target.innerText){
		// 	location.hash = "#" + section.getAttribute('id');
		// }

		if(section.getAttribute('data-nav')==e.target.innerText){
			// Scroll to anchor ID using scrollTO event
			section.scrollIntoView({
				behavior: 'smooth'
			});

			// section.scrollTo({
			// 	behavior: 'smooth'
			// });
		}
	}
}

// adding active class to element using class list
function setSectionActive(){
	for(const section of sections){
		if(onViewPort(section)){
	    	if(!section.classList.contains('your-active-class')){
	    		 section.classList.add('your-active-class');
	    	}
	    }else {
	    	section.classList.remove('your-active-class');
	    }
	}
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

window.addEventListener('DOMContentLoaded', function(){

	// build the nav
	createNav();
	// Scroll to section on link click
	selectUl.addEventListener('click',navClicked);
	// Add class 'active' to section when near top of viewport
	document.addEventListener('scroll',setSectionActive);
})












/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu


// Set sections as active
