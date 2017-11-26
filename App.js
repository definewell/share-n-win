import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './screens/Login'
import MyCards from './screens/MyCards'
import ShareMenu from './screens/ShareMenu'
import OfferScreen from './screens/OfferScreen'

const SimpleApp = StackNavigator({
    Login: {screen: Login},
    OfferScreen: {screen: ShareMenu},
    MyCards: {screen: MyCards}
});

export default class App extends React.Component {

    state = {
        isLoggedIn: false
    }

    render() {
        return <SimpleApp/>;
        // if (this.state.isLoggedIn)
        //   return <OfferScreen/>;
        // else
        //   return <Login
        //       onLoginPress={() => this.setState({isLoggedIn: true})}
        //     />;
    }
}
