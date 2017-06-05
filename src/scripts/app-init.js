import {CLASSNAME} from './constants/index.js';

function appInit() {
	document.addEventListener('DOMContentLoaded', function() {
		// TODO - Pull this outo to helper function
		const htmlElem = document.querySelector('html');
		htmlElem.classList.remove(CLASSNAME.noJs);
		htmlElem.removeAttribute('class');
	
	});
}

export default appInit;