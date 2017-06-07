import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Container } from 're-bulma';

const styles = {
	height: '40em', width: '40em'
};


export class GMap extends Component {
	render() {
		return (
			<Container style={styles} >
				<Map
					style={{ width: '39.6em', height: '39.4em' }} google={window.google}
					initialCenter={{
						lat: -33.878594,
						lng: 151.200000
					}}>
				</Map>
			</Container>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GKEY,
})(GMap);
