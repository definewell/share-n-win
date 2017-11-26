import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';


export default class Header extends React.Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: 'Home'
    };

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Image
                        style={{width: 40, height: 40, marginTop: 30, marginLeft: 10, marginBottom: 15}}
                        source={require('../img/menu.png')}
                    />
                </TouchableHighlight>

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
