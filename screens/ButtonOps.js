import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'nachos-ui'

export default class ButtonOps extends React.Component {

  render() {
    return (
        <View>
       <Button style={btnStyle}>Track Your Offers</Button>
  
      </View>
    );
  }
}

const btnStyle = { margin: 15 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
