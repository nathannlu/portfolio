import React from 'react';

const Project = props => {
	return (
		<>
			<div className="w-full px-8 sm:w-2/3 sm:px-0 lg:w-1/2 mx-auto py-64">
				<h6 className="uppercase" style={{opacity: .5, fontSize: '1.2rem', letterSpacing: 1}}>
					{props.subtitle}
				</h6>
				<h3 className="my-4">
					{props.title}
				</h3>
				<p className="mb-8">
					{props.description}
				</p>

				{props.link && (
					<a target="_blank" className="link" href={props.link}>View Project &rarr;</a>
				)}
			</div>
			<hr />
		</>
	)
};

export default Project;
