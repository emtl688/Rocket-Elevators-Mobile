import React from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Text, Button } from 'react-native';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elevatorsList: []
		};
		this.elevatorStatusView = this.elevatorStatusView.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.route.params.refresh) this.fetchData()
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		try {
			const elevators = await fetch(
				'https://rocketelevators-em.azurewebsites.net/api/elevator/non-operational'
			);
			const data = await elevators.json();
			this.setState({
				elevatorsList: data
			});
		} catch {
			console.log;
		}
	};

	
	elevatorStatusView = elevator => {
		const { navigation } = this.props;
		navigation.navigate('Status', { elevatorData: elevator });
	};
	logout = () => {
		const { navigation } = this.props;
		navigation.navigate('Login');
	};

	render() {
		const listViews = this.state.elevatorsList.map((elevator, key) => {
			return (
				<View key={key}>
					<Text>Elevator ID: {elevator.id}</Text>
					<Text>Serial Number: {elevator.serialNumber}</Text>
					<Text>Status: {elevator.status}</Text>
						<Button
						onPress={() => this.props.navigation.navigate('Status', { MyElevator: elevator })}
						title={elevator.status}
					/>
				</View>
			);
		});
		return (
			<ScrollView>
				<View style={styles.container}>
					{listViews}
					<TouchableOpacity style={styles.buttonContainer} onPress={() => this.logout()}>
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