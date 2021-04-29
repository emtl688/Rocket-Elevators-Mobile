import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';




const LogInScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState("");

    const findEmployeeEmail = async () => {
        try{
            let response= await fetch (`https://rocketelevators-em.azurewebsites.net/api/Employee/Email/${email}`,{
                method:'GET'
            });
            let json = await response.json();
            if (response['status'] != "200") {
                Alert.alert("This is not a valid email")
            } else {
                navigation.navigate('Home')
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/R2.png')}/>
                <View style={styles.inputView} >
                <TextInput
                placeholder= "email"
                autoCapitalize='none'
                style={styles.inputText}
                onChangeText={(email) => setEmail(email)}
                value={email}/></View>
                <TouchableOpacity style={styles.loginBtn} onPress={findEmployeeEmail}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        position: 'absolute',
        top: 80,
        left: 40,
        alignItems: 'center'
    },
    inputView:{
        width: "80%",
        backgroundColor: "#C0C0C0",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        top: 50
    },
    inputText: {
        height: 50,
        color: "#000000"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#0000FF",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});

export default LogInScreen;