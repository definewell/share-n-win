import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View,StyleSheet, Image, TouchableHighlight, Share} from 'react-native';
import { Button} from 'nachos-ui';
import Dimensions from 'Dimensions';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      count : null,
      link : '',
      imgSource : '',
      width: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    /* get this from  second page*/
    let userId = '123456';
    let cmpId = '100';
    switch (cmpId) {
        case '100':
        this.state.imgSource = '../img/card.png';
            break;
        case '200':
        this.state.imgSource = '../img/loan.png';
            break;
        case '300':
        this.state.imgSource = '../img/tax.png';
            break;        
        default:
            break;
    }

    return fetch('http://shareandwin.herokuapp.com/checkToken/'+userId+cmpId)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          console.log('http://shareandwin.herokuapp.com/checkToken/'+userId+cmpId);
          this.setState({
            isLoading: false,
            count : responseJson,
            link : 'http://shareandwin.herokuapp.com/applyToCampaing/'+userId+cmpId
          }, function() {
            // do something with new state
            
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View >
          <ActivityIndicator />
        </View>
      );
    }

    return (
        <View style={styles.container}>
            
            <Image style={{position: 'absolute',
                top: 50,
                left: 0,
                bottom: 350,
                right: 0,
                margin :10,
                borderRadius : 10,
                borderColor : '#0961ef',
                borderWidth : 7,
                width : this.state.width-20,
                alignItems: 'center',
                justifyContent: 'center',

            }} 
                source={require('../img/loan.png')}/>
            
            
            <View style={styles.circle}><Text style={{fontWeight: 'bold', alignItems: 'center', fontSize : 25}}>{this.state.count}</Text></View>
            
            <TouchableHighlight >
                <View style={styles.button}>
                    
                    <Button style={{width: 250}} onPress={() => this._shareText(this.state.link)}  >Share Link</Button>
                </View>
            </TouchableHighlight>
        
      </View> 
    );
  }

  _shareText(data) {
    
    Share.share({
      message: data,
      url:data,
      title: 'Share-N-win'
    }, {
      dialogTitle: 'Share-N-Win',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor: 'green'
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    width : 300,
    height : 50  
    },
  canvas: {
    position: 'absolute',
    top: 50,
    left: 0,
    bottom: 350,
    right: 0,
    margin :10,
    borderRadius : 10,
    borderColor : '#0961ef',
    borderWidth : 1,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#a3d4ed',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 250,
    marginBottom:10,
    borderWidth: 5,
    borderColor: '#0961ef'
  }
});