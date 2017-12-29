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
import Content from './Content';
class Index extends Component {
  render() {
    let {navigate} = this.props.navigation;
    return <View style={{height: 700}}>
      <Hearder navigate={navigate}/>
      <Content/>
    </View>
  }
}

export default Index;