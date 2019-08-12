import React from 'react';

const CenteredImage = (props) => {
	return (
		<div className='centered'>
			<img src={props.image} alt="Marcelo" className="profile-pic" />
		</div>
	)
}

export default CenteredImage;
