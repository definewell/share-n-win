import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';

import Environment from '../Environment';
import { Input} from 'nachos-ui';
import { Button} from 'nachos-ui';

import OfferScreen from './OfferScreen';

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    state = {
        username: '',
        usernameStatus: 'normal',
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
        fetch(Environment.CLIENT_API+"/checkUser/"+params.username)
            .then((response) => response.json())
            .then((response) => {
                console.debug("response is :  "+response);
                if (response) proceed = true;
                else this.setState({ usernameStatus: 'error' })
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                // if (proceed) this.props.onLoginPress();
                if (proceed) {
                    const {navigate} = this.props.navigation;
                    navigate('OfferScreen', {user: this.state.text});
                }
            })
            .catch(err => {
				// this.setState({ message: err.message });
				// this.setState({ isLoggingIn: false })
                const {navigate} = this.props.navigation;
                navigate('OfferScreen', {user: this.state.text});
			});
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={{width: 250, height: 250, margin: 35}}
                    source={require('../img/logo.png')}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Share & Win
                </Text>
                <Input
                    style={styles.inputStyle}
                    placeholder='Identity Number'
                    value={this.state.username}
                    status={this.state.usernameStatus}
                    onChangeText={username => this.setState({username})}
                />
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<Button style={styles.btnStyle} onPress={this._userLogin}>Login</Button>
	      </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    btnStyle : { 
        margin: 15,
        width: 300 
    },
    inputStyle : { 
        margin: 15
    }
  });