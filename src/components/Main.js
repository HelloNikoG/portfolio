import React from 'react';
import { Nav } from 'reactstrap';
import About from './About';
import NavComponent from './NavComponent';
import Projects from './Projects';

function Main() {
	return (
		<>
			<NavComponent />
			<About />
			<Projects />
		</>
	);
}

export default Main;
