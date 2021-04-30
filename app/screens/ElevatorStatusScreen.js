import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class ElevatorStatus extends React.Component {
	constructor(props) {
		super(props);

        const {elevatorData} = this.props.route.params;

		this.state = {
			elevator: this.props.navigation.getParam('elevator'),
		};
	}

    render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text>CHANGE ELEVATOR STATUS: </Text>
				<Text>Elevator ID: {this.state.elevator.id}</Text>
                <Text>Serial Number: {this.state.serialNumber}</Text>
                <Text>Status: {this.state.status}</Text>
				<Button title="< Back" onPress={() => navigation.navigate('Home')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		textAlign: 'center',
		backgroundColor: 'rgba(255,255,255,0.4)',
		fontWeight: 'bold',
		margin: 20,
		color: '#ffffff',
	},
	buttonContainer: {
		paddingVertical: 10,
		margin: 20,
		backgroundColor: 'red',
	},
});


























/*
import 'react-native-gesture-handler';
import React from 'react';

function ElevatorStatusScreen(props) {
    return (
        <div>
            <h1>TEST STATUS NAV</h1>
        </div>
    );
}

export default ElevatorStatusScreen;
*/

