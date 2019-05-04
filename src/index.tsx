import React from 'react';
import { render } from 'react-dom';
// import App from './App';

// const me = 2;

function App() {
	return (
		<div>
			<p>test</p>
		</div>
	);
}

render(
	<App />,
	document.getElementById('app') as HTMLElement,
);
