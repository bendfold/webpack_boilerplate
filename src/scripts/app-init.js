import React from 'react';
import ReactDOM from 'react-dom';

// TODO - Make this import
const CLASSNAME = {
	noJs: 'no-js'
};

function appInit() {
	document.addEventListener('DOMContentLoaded', function() {
		// TODO - Pull this outo to helper function
		const htmlElem = document.querySelector('html');
		htmlElem.classList.remove(CLASSNAME.noJs);
		htmlElem.removeAttribute('class');
		
		ReactDOM.render(
			<span>basic <a href="https://github.com/reactjs">React</a> Component</span>,
			document.getElementById('root')
		);

	});
}

export default appInit;