import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profilePic from './profile-pic.jpg';

function About() {
	return (
		<div>
			<h1>About Niko</h1>
			<Col>
				<img src={profilePic} />
			</Col>
			<p>Web and App Developer</p>
		</div>
	);
}

export default About;
