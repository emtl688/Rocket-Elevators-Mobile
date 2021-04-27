import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  state={
    email:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/R2.png')}/>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="EMAIL"
            placeholderTextColor="#151515"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>  
      </View>
    );
  }
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
        top: 70,
        left: 40,
        alignItems: 'center'
    },
    inputView:{
        width: "80%",
        backgroundColor: "#D3D3D3",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        top: 50
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#0000FF",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        top: 17
    },
    loginText: {
        color: "white"
    }
});