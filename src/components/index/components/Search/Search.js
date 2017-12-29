/**
 * Created by lenovo on 2017/12/29.
 */
import React, {Component} from 'react';
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {eventManger} from '../../../../utils/utils';
//export 因为要在其他类中使用
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'hello '
    }
  }

  componentDidMount() {
    eventManger.trigger('changeBarHeight', {hidden: true})
  }

  componentWillUnmount() {
    eventManger.trigger('changeBarHeight', {hidden: false})
  }

  back() {
    let {navigate, goBack} = this.props.navigation;
    goBack();
  }
  _onSubmitEditing() {
    alert(222)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableWithoutFeedback onPress={this.back.bind(this)}>
            <View style={styles.searchIconBox}>
              <Image style={styles.searchIcon} source={{uri: 'https://image.flaticon.com/icons/png/128/61/61022.png'}}/>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.searchTextBox}>
            <TextInput
              underlineColorAndroid='transparent'
              autoFocus={true}
              placeholder={this.state.placeholder}
              keyboardType="web-search"
              returnKeyType='search'
              onSubmitEditing={this._onSubmitEditing.bind(this)}
            />
          </View>
        </View>
      </View>
    )
  }
}

//样式
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',   // 水平排布
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
    backgroundColor: 'blue',
    alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },

  searchBox: {//搜索框
    height: 38,
    flexDirection: 'row',   // 水平排布
    flex: 1,
    borderRadius: 5,  // 设置圆角边
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  searchIconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  searchTextBox: {
    flex: 5,
    height: 38, //此处必须设置高度，不然高度为0

  },
  search: {
    color: '#000'
  }
});