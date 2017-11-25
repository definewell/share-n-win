import React from 'react';
import { StyleSheet, Text, View , Icon , Button, Container , Alert} from 'react-native';

export default class LoginScreen extends React.Component {

    press(){
        Alert.alert('heyo');
    }

  render() {
    return (
            <Button 
                styles={styles.transparentButton}
                title = 'deneme'
            >
                <View style={styles.inline}>
                    <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
                    <Text style={styles.buttonBlueText}>with Facebook</Text>
                </View>
            </Button>
    );
  }
}

const styles = StyleSheet.create({
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    }
});
