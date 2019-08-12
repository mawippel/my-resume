import React from "react";
import Oca from '../assets/oca-badge.png';
import Ocp from '../assets/ocp-badge.png';

const CertificationsBadge = () => {
	return (
		<div className='certification-container'>
            <img src={Oca} alt="OCA" className='certification-pic' />
            <img src={Ocp} alt="OCP" className='certification-pic' />
        </div>
	);
};

export default CertificationsBadge;
