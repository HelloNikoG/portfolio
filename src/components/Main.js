import React from 'react';
import About from './About';
import Hello from './Hello';
import ProjectList from './ProjectList';

import { Nav, Container, Row, Col } from 'reactstrap';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';

function Main() {
	const navStyle = {
		color: '#fff',
		textDecoration: 'none',
	};
	return (
		<>
			<Row>
				<Col className="pic border px-0">
					<img className="img-fluid" src="assets/asimo-face.jpg" />
				</Col>
				<Col className=" blank border px-0" />
				<Col className=" blank border px-0" />
				<Col className=" blank border px-0" />
			</Row>
			<Row>
				<Col className="column border px-0">
					<div className="main-content">
						<Routes>
							<Route path="/" element={<Hello />} />
							<Route path="/projects" element={<ProjectList />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="border px-0">
					<img className="img-fluid" src="assets/asimo-hands.jpg" />
				</Col>
				<Col className="blank border px-0" />
				<Col className="blank border px-0" />
				<Col className="blank border px-0"></Col>
			</Row>
		</>
	);
}

export default Main;
