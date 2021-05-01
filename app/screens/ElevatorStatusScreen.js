import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity } from 'react-native';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
    const { MyElevator } = this.props.route.params;
    this.state = {
      id: MyElevator.id,
      serialNumber: MyElevator.serialNumber,
      status: MyElevator.status
    };
	}


    render() {
		const { navigation } = this.props;
        console.log("refresh");
		return (
			<View style={styles.container}>
				<Text style={styles.statusHeader}>CHANGE ELEVATOR STATUS: </Text>
				<Text style={styles.statusInfo}>Elevator ID: {this.state.id}</Text>
                <Text style={styles.statusInfo}>Serial Number: {this.state.serialNumber}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.activeStatus()}>
                    <Text>CURRENT STATUS: {this.state.status}</Text>
                </TouchableOpacity>
				<Button style={styles.statusInfo} title="< Back" onPress={() => navigation.navigate('Home', {refresh: true})} />
			</View>
		);
	}

    activeStatus = async () => {
		const id = this.state.id;
		var res = await fetch (
			`https://rocketelevators-em.azurewebsites.net/api/elevator/${id}?status=Active`,
			{ method: 'PUT' }
		)
			.then(res => {
                const result = res.json;
				this.setState({ status: result.status });
				this.changeStatus();
                Alert.alert('Elevator ID : ' + `${id}` + ' Status Changed To : Active');
			});
	};

    changeStatus = () => {
		this.setState({
				status: 'Active',
		});
	};
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
		backgroundColor: '#DC143C'
	},
    statusInfo: {
        padding: 10
    },
    statusHeader: {
        padding: 10,
        fontWeight: 'bold'
    }
});

