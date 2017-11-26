import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { Card , H2,Strong} from 'nachos-ui'

export default class MyCards extends React.Component {

    render() {
        return (
            <View>

                <View >
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{width: 40, height: 40, marginTop: 30, marginLeft: 10, marginBottom: 15}}
                                source={require('../img/menu.png')}
                            />
                            {/*<Text>SHARE & WIN </Text>*/}
                        </View>
                    </TouchableHighlight>

                </View>

                <H2 style={textStyle}>
                    Campaigns Attended
                </H2>
                <Card
                    footerContent='You won 15 points'
                    image='http://i63.tinypic.com/29eorwy.jpg'
                    style={cardStyle}
                />

                <Card
                    footerContent='You won 30 points'
                    image='http://i64.tinypic.com/2s1w5k3.png'
                    style={cardStyle}
                />
            </View>
        );
    }
}

const cardStyle = {width: 250, height:140,alignItems: 'center', marginLeft:30 }
const textStyle = { margin: 1,alignItems: 'center', marginLeft:50,color: '#002e68'}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});