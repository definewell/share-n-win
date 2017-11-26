import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import OfferScreen from './OfferScreen'
import ShareScreen from './ShareScreen'
import MyCards from './MyCards';


const MyApp = DrawerNavigator({
    Home: {
        screen: OfferScreen,
    },
    MyCards: {
        screen: MyCards,
    },
    ShareScreen: {
        screen: ShareScreen,
        text: false
    }
});

export default class App extends React.Component {

    static navigationOptions = {
        header: null
    };


    render() {
        return <MyApp/>;
    }
}
