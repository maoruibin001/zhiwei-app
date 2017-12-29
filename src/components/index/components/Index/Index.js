/**
 * Created by lenovo on 2017/12/29.
 */
import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput
} from 'react-native';

import Hearder from './Hearder';
class Index extends Component {
  render() {
    let {navigate} = this.props.navigation;
    return <View>
      <Hearder navigate={navigate}/>
    </View>
  }
}

export default Index;