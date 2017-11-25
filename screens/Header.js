import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default class Header extends React.Component {

  render() {
    return (
        <View>
            <Image
            style={{width: 40, height: 40,  marginTop: 30,marginLeft:10, marginBottom:15}}
            source={require('../img/menu.png')}
            />

            <Image
            source={require('../img/card.png')}
            />
      </View>
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
