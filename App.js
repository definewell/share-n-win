import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OfferScreen from './screens/OfferScreen'
import LoginScreen from './screens/LoginScreen'
import Header from './screens/Header'
import Dialog from './screens/Dialog'

const SimpleApp = DrawerNavigator({
    Home: {
        screen: Header,
    }
});

export default class App extends React.Component {

  render() {
    return (
      <OfferScreen />
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
