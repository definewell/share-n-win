import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login'
import OfferScreen from './screens/OfferScreen'
import MyCard from './screens/MyCard'

export default class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {

    // if (this.state.isLoggedIn) 
      // return <OfferScreen/>;
    // else 
      return <MyCard/>;
      //  <Login
      //     onLoginPress={() => this.setState({isLoggedIn: true})}
      //   />;
  }
}
