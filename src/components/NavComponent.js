import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

function NavComponent() {
	return (
		<>
			<Navbar color="dark">
				<NavbarBrand>Niko Garalde</NavbarBrand>
				<Nav>
					<NavItem>About me</NavItem>
					<NavItem>Projects</NavItem>
					<NavItem>Contact</NavItem>
				</Nav>
			</Navbar>
			<div className="jumbotron">hello</div>
		</>
	);
}

export default NavComponent;
