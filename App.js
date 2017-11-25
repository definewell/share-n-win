import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './RestExample'
import OfferScreen from './screens/OfferScreen'
import LoginScreen from './screens/LoginScreen'
import Header from './screens/Header'

export default class App extends React.Component {

  render() {
    return (
      <Header />
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
