/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'
import KeypadDemo from './src/keypad/KeypadDemo'

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <KeypadDemo/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
AppRegistry.runApplication('AwesomeProject', {
  rootTag: document.getElementById('react-root')
})
