import React from 'react';
import Projects from './Projects';
import { Container, Row, Col } from 'reactstrap';

const projectData = [
	{
		id: 1,
		name: 'Boba Mix',
		description: 'Implemented responsive UI design in React using reactstrap',
		preview: 'https://niko-boba-mix.netlify.app/',
		github: 'https://github.com/HelloNikoG/boba-mix',
		technology: 'React, Reactstrap',
	},
	{
		id: 2,
		name: 'Waves Music',
		description:
			'Responsive UI design in React using React hooks and styling with Saas',
		preview: 'https://niko-wave-music.netlify.app/',
		github: 'https://github.com/HelloNikoG/wave-music-app',
		technology: 'React',
	},
];

function ProjectList() {
	return (
		<div className="project-list">
			<Row>
				<Row>
					<Col className="mx-5 mt-3">
						<h3>Projects</h3>
						more coming soon...
					</Col>
				</Row>
				<Row>
					<Col className="mx-5 mt-2">
						{projectData.map((project) => {
							return <Projects project={project} />;
						})}
					</Col>
				</Row>
			</Row>
		</div>
	);
}

export default ProjectList;
