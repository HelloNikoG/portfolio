import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';

import { Row, Col } from 'reactstrap';

function Hello() {
	return (
		<>
			<Row>
				<Col className="mx-5 mt-3">
					<div className="name">
						<h1>Niko Garalde</h1>
						<div className="tag">
							<h5>I design and develop websites & apps.</h5>
							<p>
								<h5>
									NuCamp FullStack Web Development Bootcamp Graduate. Coffee
									Aficionado.
								</h5>
							</p>
							<p>
								<h5>
									I am passionate about the whole process of web development and
									find it so empowering to have the skills to build out your
									idea.
								</h5>
							</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col className="mx-5">
					<div className="dev-icons">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
						<DiReact />
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Hello;
