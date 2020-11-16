import React from 'react';
import Project from './Project';
import Company from './Company.js';
import ListOfProjects from './projects.json';

const Home = () => {
	return (
		<div>
			<div className="bg-gray-100 py-8">
				<nav className="flex flex-wrap w-full px-8 sm:w-2/3 sm:px-0 lg:w-1/2 mx-auto">
					<h6>
						Nathan Lu	
					</h6>
					<div className="inline-block ml-auto">
						<a href="#projects" className="link">Projects</a>
						<a href="#work" className="ml-16 link">Work</a>
					</div>
				</nav>
			</div>
			<header className="bg-gray-100 py-64">
				<div className="w-full px-8 sm:w-2/3 sm:px-0 lg:w-1/2 mx-auto">
					<h1>
						Hi I'm  Nathan.
					</h1>
					<p>
						I have a passion to use design as a gateway to translate complex problems into engaging experiences! Previous designing at a healthcare startup. I am looking for internships opportunities that can challenge myself to tackle pain-points at a larger scale.
					</p>
				</div>
			</header>
			<main>
				<div id="projects">
					{ListOfProjects.map(project => (
						<Project 
							title={project.title} 
							subtitle={project.subtitle}
							description={project.description} 
							link={project.link}
						/>
					))}
				</div>

				<div id="work" className="bg-gray-100 py-48">
					<div className="w-full px-8 sm:w-2/3 sm:px-0 lg:w-1/2 mx-auto mb-16">
						<h2 className="mb-4">
							Experience.
						</h2>
						<p>
							Working with great teams to make the world a better place.
						</p>
					</div>
					<div className="w-full px-8 sm:w-2/3 sm:px-0 lg:w-1/2 lg:flex lg:flex-wrap lg:space-x-8 mx-auto">
						<Company
							link="https://www.castlelab.ca/"
							logo="/castle_logo.svg"
							name="Castle Labs"
							backgroundColor="#6768f6"
						/>
						<Company
							link="https://www.hostgenius.ca/"
							logo="/hg_logo.svg"
							name="Hostgenius"
							backgroundColor="#002B3D"
						/>
						<Company
							link="https://www.block-space.info/"
							logo="/blockspace_logo.svg"
							name="Blockspace Solutions"
							backgroundColor="#000"
						/>
					</div>
				</div>
			</main>
			<footer>
				<hr />
				<div className="w-1/2 mx-auto py-24 flex flex-wrap">
					<div className="w-1/2">
						<h6>
							Nathan Lu
						</h6>
						<p style={{opacity: .5}}>
							Designing solutions to problems.
						</p>
					</div>
					<div className="w-1/2">
						<h6>
							Links
						</h6>
						<div className="flex flex-wrap">
							<div className="w-1/4">
								<a target="_blank" href="" className="link">Resume</a>
							</div>
							<div className="w-1/4">
								<a target="_blank" href="https://github.com/nathannlu" className="link">Github</a>
							</div>
							<div className="w-1/4">
								<a target="_blank" href="https://www.linkedin.com/in/nathanlu/" className="link">LinkedIn</a>
							</div>
							<div className="w-1/4">
								<a target="_blank" href="mailto:nathanlu_@hotmail.com" className="link">Email</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
};

export default Home;
