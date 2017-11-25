import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OfferScreen from './screens/OfferScreen'
import LoginScreen from './screens/LoginScreen'
import ShareScreen from './screens/ShareScreen'
import Header from './screens/Header'
import Dialog from './screens/Dialog'
import {DrawerNavigator} from 'react-navigation'

const SimpleApp = DrawerNavigator({
    Home: {
        screen: Header,
    }
});

export default class App extends React.Component {

  render() {
    return (
      <ShareScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
