import React from 'react';
import { StyleSheet, Text, View , Alert, Button} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const styles = StyleSheet.create({
    container: {
        height:1000,marginTop: 400
    },
    image: {
        height:250,
        marginTop: 200
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop : 400
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
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    onImagePress(){
        Alert.alert('this.state.position');

    }
 
    render() { 
        return (
            <View style={styles.container}>
                <ImageSlider
                    style = {styles.image}
                    height = {250}
                    images={[
                        require(`../img/card.png`),
                        require(`../img/loan.png`),
                        require(`../img/tax.png`),
                    ]}
                    position={this.state.position}
                    onPress = {this.onImagePress}
                    onPositionChanged={position => this.setState({position})}/>
                
            </View>
        );
    }
}

export default OfferScreen