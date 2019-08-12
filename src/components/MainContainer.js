import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import Grid from '@material-ui/core/Grid';

const MainContainer = () => {

	return (
		<Container maxWidth="md" className="container">
			<CssBaseline />
			<Grid container className="container-group">
				<LeftContainer />
				<RightContainer />
			</Grid>
		</Container>
	)

}

export default MainContainer;