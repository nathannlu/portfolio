import React from 'react';

const Company = props => {
	return (
		<div className="flex-1"> 
			<a 
				target="_blank"
				href={props.link}
				className="company rounded-lg flex items-center justify-center" 
				style={{height: '36rem', backgroundColor: props.backgroundColor}}
			>
				<img src={props.logo} style={{height: '6rem'}} />
			</a>
			<div className="company__description mt-8">
				<h6 className="uppercase mb-2" style={{fontSize: '1.2rem', opacity: .5}}>
					Web Developer @
				</h6>
				<h5>
					{props.name}
				</h5>
			</div>
		</div>	
	)
};

export default Company;
