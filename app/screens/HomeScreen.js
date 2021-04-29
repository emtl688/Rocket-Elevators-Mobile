import React from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Text, Button, ActivityIndicator } from 'react-native';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			elevatorsList: [],
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
			isLoading: false,
			elevatorsList: data,
		});
	}

	goToStatusScreen = elevator => {
		const { navigation } = this.props;
		navigation.navigate('Status', { elevator: elevator });
	};
	return = elevator => {
		const { navigation } = this.props;
		navigation.navigate('Home', { elevator: elevator });
	};

	render() {
		const listViews = this.state.elevatorsList.map((elevator, key) => {
			return (
				<View key={key}>
					<Text>ELEVATOR ID: {elevator.id}</Text>

					<Text>SERIAL NUMBER: {elevator.serialNumber}</Text>
					<Text>STATUS: {elevator.status}</Text>
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
					<Text> ELEVATORS IN SERVICE: </Text>
					{listViews}
					<TouchableOpacity style={styles.buttonContainer} onPress={() => this.return()}>
						<Text style={styles.buttonText}>LOG OUT</Text>
					</TouchableOpacity>
					<ActivityIndicator />
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		textAlign: 'center',
		backgroundColor: '#424755',
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
		backgroundColor: 'rgba(255,255,255,0.5)',
		paddingVertical: 10,
		margin: 20,
		color: '#424755',
	},
});



/*

import 'react-native-gesture-handler';
import React from 'react';
import { Flatlist, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    async componentDidMount() {
        fetch('https://rocketelevators-em.azurewebsites.net/api/elevator/non-operational')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })
        })
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>Elevator ID: {item.id}</Text>
            </View>
        );
    }

    render() {
        let {container} = styles
        let {dataSource, isLoading} = this.state
        if (isLoading) {

            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating/>
                </View>
            );

        } else {

            return (
                <View style={container}>
                    <Flatlist
                        data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 50
    },
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});

*/