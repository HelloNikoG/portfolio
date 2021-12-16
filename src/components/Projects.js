import React from 'react';
import {
	Col,
	Container,
	Row,
	Card,
	CardBody,
	CardImg,
	CardImgOverlay,
	CardGroup,
} from 'reactstrap';
import { AiOutlineGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';

function Projects({ project }) {
	return (
		// <Col className="ml-5">
		// 	<Card>
		// 		<CardBody>
		// 			{project.name}
		// 			{project.description}
		// 			<hr />
		// 			<div className="project-links">
		// 				<a href={project.preview} target="_blank">
		// 					<AiOutlineArrowUp />
		// 				</a>
		// 				<a href={project.github} target="_blank">
		// 					<AiOutlineGithub />
		// 				</a>
		// 			</div>
		// 		</CardBody>
		// 	</Card>
		// </Col>
		<div className="projects">
			<strong>{project.name}</strong>

			<a href={project.preview} target="_blank">
				<GoLinkExternal />
			</a>
			<a href={project.github} target="_blank">
				<AiOutlineGithub />
			</a>

			<br />
			{project.description}
			<br />
			{project.technology}
			<hr />
		</div>
	);
}

export default Projects;
