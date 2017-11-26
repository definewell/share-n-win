import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableHighlight, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Dialog from './Dialog'
import ButtonOps from './ButtonOps'
import ShareScreen from './ShareScreen';

import { Button} from 'nachos-ui'

const styles = StyleSheet.create({
    container: {
        // marginTop: 10
    },
    image: {
        height: 250,
        marginTop: 10
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 100
    },
    button: {
        margin: 3,
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#ccc',
        opacity: 0.9
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: '#fff',
    },
    buttonOpsStyle: {
        margin: 15
    }
});


class OfferScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            interval: null
        };
    }


    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
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

                {/*<Header/>*/}
                <ImageSlider
                    style={styles.image}
                    height={250}
                    images={[
                        require(`../img/card.png`),
                        require(`../img/loan.png`),
                        require(`../img/tax.png`),
                    ]}
                    position={this.state.position}
                    onPress={() => navigate('ShareScreen', {tckn: "12345678901", compId: this.state.position})}
                    onPositionChanged={position => this.setState({position})}/>
                <Dialog/>
                {/*<ButtonOps btnText={"Track Your Offers"} btnStyle={styles.buttonOpsStyle}/>*/}
                <Button style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('MyCards')}>{"Track Your Offers"}</Button>

            </View>
        );
    }
}

export default OfferScreen