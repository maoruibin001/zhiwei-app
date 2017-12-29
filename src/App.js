/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Index from './components/index/Index';
import Technology from './components/technology/Technology';
import Info from './components/info/Info';
import OpenSource from './components/openSource/OpenSource';
// import Life from './components/life/Life';
import Mine from './components/mine/Mine';

import {eventManger} from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'index',
      defaultTabHeight: 50,
    }
  }

  componentDidMount() {
    eventManger.addHandler('changeBarHeight', this.onPress.bind(this))
  }
  onPress(data){
    this.setState({
      defaultTabHeight: data.hidden ? 0 : 50
    });
  }
  render() {
    return (
      <TabNavigator
        sceneStyle={{
          paddingBottom:0,
        }}
        tabBarStyle={{
          height:this.state.defaultTabHeight,
          overflow:'hidden'
        }}
      >
        <TabNavigator.Item
          title="首页"
          titleStyle={styles.iconText}
          selected={'index' === this.state.selected}
          renderIcon={() => <Image source={require('./images/cottage.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({selected: 'index'})}>
          <Index op={this.onPress}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="技术"
          titleStyle={styles.iconText}
          selected={'tech' === this.state.selected}
          renderIcon={() => <Image source={require('./images/robot.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({selected: 'tech'})}>
          <Technology/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="资讯"
          titleStyle={styles.iconText}
          selected={'info' === this.state.selected}
          renderIcon={() => <Image source={require('./images/business-management.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({selected: 'info'})}>
          <Info/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="开源"
          titleStyle={styles.iconText}
          selected={'open' === this.state.selected}
          renderIcon={() => <Image source={require('./images/open-source.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({selected: 'open'})}>
          <OpenSource/>
        </TabNavigator.Item>
        {/*<TabNavigator.Item*/}
          {/*title="人生"*/}
          {/*titleStyle={styles.iconText}*/}
          {/*selected={'life' === this.state.selected}*/}
          {/*renderIcon={() => <Image source={require('./images/life-cycle-female.png')} style={styles.iconStyle}/>}*/}
          {/*onPress={() => this.setState({selected: 'life})}>*/}
          {/*<Life/>*/}
        {/*</TabNavigator.Item>*/}
        <TabNavigator.Item
          title="我的"
          titleStyle={styles.iconText}
          selected={'mine' === this.state.selected}
          renderIcon={() => <Image source={require('./images/my.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({selected: 'mine'})}>
          <Mine/>
        </TabNavigator.Item>
      </TabNavigator>
    )

  }
}
const styles = StyleSheet.create({
  iconStyle: {},
  iconText: {
    fontSize: 12
  },
  iconIndex: {

  }
});
export default App;