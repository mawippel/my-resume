import React from "react";
import Grid from "@material-ui/core/Grid";

const RightContainer = () => {
	return (
		<Grid item xs={8} className="right-container">
			<div className="right-content-container">
				<div>
					<h1>Marcelo Wippel</h1>
					<hr />
				</div>
				<div>
					<p>
						I'm Marcelo, a Brazilian Software Engineer, passionate about
						Software Development and best practices.
					</p>
					<p>
						A Experienced Full Stack Engineer with a demonstrated history of
						working in the information technology and services industry. Skilled
						in Java, Spring MVC, Spring Boot, JavaEE, Maven, Hibernate, SOLID
						Principles, and Front End technologies such as React, React Native,
						Javascript, JQuery, HTML and CSS.
					</p>
					<p>
						Student of Information Systems at the Regional University of
						Blumenau (FURB).
					</p>
					<p>Enthusiast and lover of technology.</p>
				</div>

				<h2>Experience</h2>
				<div>
					<hr />
					<h3>Full Stack Developer</h3>
					<div className="job-period">
						<a href="https://www.teclogica.com.br/">
							<h4 className="job-period-h4">Teclógica</h4>
						</a>
						<h4 className="job-period-h4">10/2018 - Now</h4>
					</div>
					<p>
						Working as a FullStack developer, developing projects in different
						business areas.
					</p>
					<p>
						<b>Backend Stack:</b> Java, Oracle, PostgreSQL, Java EE, Hibernate,
						Maven, ActiveMQ, Oracle AQ, JBoss, Wildfly, WebLogic and the CI
						maintenance (Jenkins).
					</p>
					<p>
						<b>Frontend Stack:</b> React, HTML5, JQuery, CSS, Javascript (ES6+)
						and NodeJS.
					</p>
				</div>

				<div>
					<hr />
					<h3>Backend Developer</h3>
					<div className="job-period">
						<h4 className="job-period-h4">Pública Tecnologia</h4>
						<h4 className="job-period-h4">08/2016 - 10/2018</h4>
					</div>

					<p>
						Worked as a BackEnd developer implementing new features and bug
						fixes on e-Publica, an ERP system developed to government entities
						management used by more than 100 cities in Brazil.
					</p>
					<p>
						<b>Backend Stack:</b> Java, Spring Framework, Hibernate, Maven and
						Wildfly.
					</p>
					<p>
						<b>Frontend Stack:</b> AngularJS, Angular 2+, HTML5 and CSS3.
					</p>
				</div>

				<div>
					<hr />
					<h3>Trainee - Software Developer</h3>
					<div className="job-period">
						<h4 className="job-period-h4">Pública Tecnologia</h4>
						<h4 className="job-period-h4">03/2016 - 08/2016</h4>
					</div>

					<p>
						Worked customizing and implementing new features on Senior Sistemas'
						ERP.
					</p>
					<p>
						<b>Main Stack:</b> SQL Server and LSP (Linguagem Senior de
						Programação).
					</p>
				</div>

				<div>
					<h2>Qualifications and Professional Activies</h2>
					<hr />
					<p>Programming Languages/Frameworks:</p>
					<ul>
						<li>
							Java, JavaScript (ES6+), React, React Native, AngularJS, Angular2+
							(TypeScript), Python and NodeJS;
						</li>
					</ul>

					<p>EE Frameworks:</p>
					<ul>
						<li>Spring Boot, JavaEE and Spring Framework;</li>
					</ul>

					<p>Application Servers:</p>
					<ul>
						<li>Jboss, Wildfly, WebLogic e WebSphere Liberty;</li>
					</ul>

					<p>Databases:</p>
					<ul>
						<li>MySQL, SQLServer, PostgreSQL e Oracle;</li>
					</ul>
				</div>

				<div>
					<h2>Certifications and Courses</h2>
					<hr />
					<ul>
						<li>Oracle Certified Associate, Java SE 8 Programmer I</li>
						<li>Oracle Certified Professional, Java SE 8 Programmer II</li>
						<li>
							React - The Complete Guide (
							<a
								className="whiteLink"
								href="https://www.udemy.com/certificate/UC-MGGEOZH6/"
							>
								Certificate
							</a>
							)
						</li>
					</ul>
				</div>

				<div>
					<h2>Languages</h2>
					<hr />
					<ul>
						<li>Portuguese - Native</li>
						<li>(01/2013 - 12/2018) English - Yázigi - CEFR Level 2</li>
					</ul>
				</div>
			</div>
		</Grid>
	);
};

export default RightContainer;
