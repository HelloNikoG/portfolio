import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Row, Nav, NavbarBrand } from 'reactstrap';

function Navigation() {
	return (
		<Row>
			<Nav>
				<div className="nav-links">
					<Link to="/">About|</Link>
					<Link to="/projects"> Projects|</Link>
					<Link to="/contact"> Contact</Link>
				</div>
			</Nav>
		</Row>
	);
}

export default Navigation;
