import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// For now we set the class to HomePage to acces the route.params
export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
    // In the HomeScreen, we pass the elevator object to the MyElevator constant here
    const { MyElevator } = this.props.route.params;
    // We can access whatever we want from the MyElevator constant here such as id, serialNumber...
    this.state = {
      id: MyElevator.id,
      serialNumber: MyElevator.serialNumber,
      status: MyElevator.status
    };
	}
    render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.statusHeader}>CHANGE ELEVATOR STATUS: </Text>
				<Text style={styles.statusInfo}>Elevator ID: {this.state.id}</Text>
                <Text style={styles.statusInfo}>Serial Number: {this.state.serialNumber}</Text>
                <Text style={styles.statusInfo}>Current Status: {this.state.status}</Text>
				<Button style={styles.statusInfo} title="< Back" onPress={() => navigation.navigate('Home')} />
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
    statusInfo: {
        padding: 10
    },
    statusHeader: {
        padding: 10,
        fontWeight: 'bold'
    }
});

