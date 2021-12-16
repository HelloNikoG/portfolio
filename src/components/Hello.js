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
									I absolutely love the whole process of app creation and find
									it so empowering by having the skills to build your idea out
									and have it be functional.
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
