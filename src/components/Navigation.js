import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Nav } from 'reactstrap';

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
