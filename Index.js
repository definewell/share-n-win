import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './RestExample'

import Login from './Login'
import SecondPage from './SecondPage'

export default class Index extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <SecondPage
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }
}
