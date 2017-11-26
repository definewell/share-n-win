import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Bubble,H4 } from 'nachos-ui'

export default class Dialog extends React.Component {

  render() {
    return (
      <View>
      <View style={{ marginVertical: 15, flexDirection: 'row' }}>
        <Bubble style={bubbleStyle}>You won 100 points!</Bubble>
         <Bubble
          style={bubbleStyle}
          arrowPosition='top'
          color='#ff9c00'
        >
          Congrats?
        </Bubble> 
      </View>
    </View>
    );
  }
}

const bubbleStyle = { marginLeft: 10,marginTop: 30 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
