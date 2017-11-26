import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OfferScreen from './screens/OfferScreen'
import LoginScreen from './screens/LoginScreen'
import ShareScreen from './screens/ShareScreen'
import Header from './screens/Header'
import Dialog from './screens/Dialog'
import {DrawerNavigator} from 'react-navigation'

export default class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <OfferScreen/>;
    else 
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }
}
