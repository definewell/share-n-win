import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';

import Environment from './Environment';

export default class Login extends Component {

    state = {
        username: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        console.debug("begin");

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            username: this.state.username
        };

        var proceed = false;
        fetch("http://"+Environment.CLIENT_API+"/checkUser/"+params.username)
            .then((response) => response.json())
            .then((response) => {
                console.debug("response is :  "+response);
                if (response) proceed = true;
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) this.props.onLoginPress();
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false })
			});
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={{width: 250, height: 250}}
                    source={require('./img/logo.png')}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Share & Win
                </Text>
				<TextInput style={{width: 250, borderColor: 'gray', borderWidth: 1, marginTop: 5}}
					ref={component => this._username = component}
					placeholder='TC Identity Number' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
                    onFocus={this.clearUsername}
                    keyboardType={'numeric'}
                    underlineColorAndroid={'transparent'}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<View style={styles.button}>
                <Text  style={{fontWeight: 'bold', alignItems: 'center', fontSize : 25, color: 'white'}}
                    onPress={this._userLogin}
                    disabled={this.state.isLoggingIn||!this.state.username}>Login</Text>
                </View>
	      </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#0961ef',
        padding: 10,
        marginBottom:10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width : 250,
        height : 50  
    },
  });