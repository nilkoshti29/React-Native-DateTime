
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }

componentDidMount() {
  var that = this;
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  that.setState({
    //Setting the value of the date time
    date:
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
  });
}
  render() {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Current Date Time
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 16,
        }}>
        {this.state.date}
      </Text>
    </View>
    );
  }
}
