import React from 'react';
import { Row, Col } from 'reactstrap';
import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineAudit,
} from 'react-icons/ai';

function Contact() {
	return (
		<div>
			<div className="project-list">
				<Row>
					<Col className="mx-5 mt-3">
						<h3>Say Hello</h3>
						<div className="contact-icons">
							<a href="https://www.linkedin.com/in/helloniko/" target="_blank">
								<AiOutlineLinkedin />
							</a>
							<a href="https://github.com/HelloNikoG" target="_blank">
								<AiOutlineGithub />
							</a>
							<a
								href="https://drive.google.com/file/d/1OleKKWLH2bTdlRkF29YaflMKe62pOk04/view?usp=sharing"
								target="_blank"
							>
								<AiOutlineAudit />
							</a>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Contact;
