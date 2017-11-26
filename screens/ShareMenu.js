import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import OfferScreen from './OfferScreen'
import ShareScreen from './ShareScreen'



const MyApp = DrawerNavigator({
    Home: {
        screen: OfferScreen,
    },
    ShareScreen: {
        screen: ShareScreen,
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
