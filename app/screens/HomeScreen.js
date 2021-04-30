import React from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Text, Button } from 'react-native';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elevatorsList: []
		};

		this.goToStatusScreen = this.goToStatusScreen.bind(this);
	}
	async componentDidMount() {
		try {
			const elevators = await fetch(
				'https://rocketelevators-em.azurewebsites.net/api/elevator/non-operational'
			);
			const data = await elevators.json();
			this.setElevators(data);
		} catch {
			console.log;
		}
	}

	setElevators(data) {
		this.setState({
			elevatorsList: data
		});
	}

	goToStatusScreen = elevator => {
		const { navigation } = this.props;
		navigation.navigate('Status', { elevator: elevator });
	};

	return = elevator => {
		const { navigation } = this.props;
		navigation.navigate('Login', { elevator: elevator });
	};

	render() {
		const listViews = this.state.elevatorsList.map((elevator, key) => {
			return (
				<View key={key}>
					<Text>Elevator ID: {elevator.id}</Text>
					<Text>Serial Number: {elevator.serialNumber}</Text>
					<Text>Status: {elevator.status}</Text>
						<Button
						onPress={() => this.goToStatusScreen(elevator)}
						title={elevator.status}
					/>
				</View>
			);
		});

		return (
			<ScrollView>
				<View style={styles.container}>
					{listViews}
					<TouchableOpacity style={styles.buttonContainer} onPress={() => this.return()}>
						<Text style={styles.buttonText}>LOG OUT</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: 'center',
		backgroundColor: '#FFFFFF',
		fontWeight: 'bold',
		margin: 20,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: '800',
		margin: 20,
		color: 'white',
	},
	buttonContainer: {
		backgroundColor: '#DC143C',
		paddingVertical: 10,
		margin: 20,
		color: '#424755',
	},
});