import React from "react";
import Grid from "@material-ui/core/Grid";
import CenteredImage from "./CenteredImage";
import ProfilePic from '../assets/Marcelo.jpg';
import IconsLink from "./IconsLink";

const LeftContainer = () => {

	const icons = [
		{name: 'linkedin', href:'https://www.linkedin.com/in/marcelo-wippel-359505160/'},
		{name: 'github', href:'https://github.com/mawippel'},
		{name: 'google', href:'mailto:mawippel2@hotmail.com'},
		{name: 'stack-overflow', href:'https://stackoverflow.com/users/11211119/marcelo-wippel?tab=profile'}
	]

	return (
		<Grid item xs={4} className="left-container">
			<CenteredImage image={ProfilePic} />
			<IconsLink links={icons}/>
		</Grid>
	);
};

export default LeftContainer;
