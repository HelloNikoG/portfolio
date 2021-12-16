import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';

function Projects({ project }) {
	return (
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
