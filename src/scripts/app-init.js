// TODO - Make this import
const CLASSNAME = {
	noJs: 'no-js'
};

function appInit() {
	document.addEventListener('DOMContentLoaded', function(event) {
		// TODO - Pull this outo to helper function
		const htmlElem = document.querySelector('html');
		htmlElem.classList.remove(CLASSNAME.noJs);
		htmlElem.removeAttribute('class');
	
	});
}

export default appInit;