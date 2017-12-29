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
  TouchableWithoutFeedback, //无任何附加效果的触摸组件
} from 'react-native';


//export 因为要在其他类中使用
export default class Search extends Component{
  toSearch() {
    this.props.navigate('Search');
  }
  render(){
    return (
      <View style={styles.container} onPress={this.toSearch}>
        <TouchableWithoutFeedback onPress={this.toSearch.bind(this)}>
          <View style={styles.searchBox}>
            <View style={styles.searchIconBox}>
              <Image style={styles.searchIcon} source={{uri: 'https://image.flaticon.com/icons/png/128/149/149852.png'}}/>
            </View>
            <View style={styles.searchTextBox}>
              <Text>搜索</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  searchBox:{//搜索框
    height:38,
    flexDirection: 'row',   // 水平排布
    flex:1,
    borderRadius: 5,  // 设置圆角边
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  search: {
    // height: 26,
    display: 'flex',
    flexDirection:'row'
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
    flex: 5
  },
});