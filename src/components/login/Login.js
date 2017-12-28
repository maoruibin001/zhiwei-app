/**
 * Created by lenovo on 2017/12/27.
 */
import React, {Component} from 'react';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// 登陆页组件
class Login extends Component {
  // 导航栏设置
  static navigationOptions = ({navigation, screenProps}) => {
    let {state, goBack} = navigation;
    return ({
      // 这里面的属性和App.js的navigationOptions是一样的。

      headerTitleStyle: {
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerLeft: <Text onPress={() => goBack()} style={{
        marginLeft: 20,
        fontSize: 25,
        color: 'black'
      }}> X </Text>
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      isRegster: true
    }
  }

  // 切换为注册
  registerTab(e) {
    e.preventDefault();
    this.state.isRegster ? this.setState(null) : this.setState({
      isRegster: true
    })
  }

  // 切换为登陆
  loginTab(e) {
    e.preventDefault();
    !this.state.isRegster ? this.setState(null) : this.setState({
      isRegster: false
    })
  }

  render() {
    return <View style={styles.login_outer}>
      <View style={styles.login_box}>
        <View style={styles.login_header}>
          <View style={styles.login_header_h1}><Text style={styles.login_header_h1_text}>知 微</Text></View>
          <View style={styles.login_header_h2}><Text style={styles.login_header_h2_text}>程序员的开源提升平台</Text></View>
        </View>
        <View style={styles.login_content}>
          <View style={styles.login_tab_navs}>
            <View style={styles.navs_slider}>
              <Text style={[styles.navs_slider_a, this.state.isRegster ? styles.active : {}]}
                    onPress={this.registerTab.bind(this)}>注册</Text>
              <Text style={[styles.navs_slider_a, this.state.isRegster ? styles.active : {}]}
                    onPress={this.loginTab.bind(this)}>登录</Text>
            </View>
          </View>
          {/*{this.state.isRegster ? <RegisterForm/> : <LoginForm/>}*/}
        </View>
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  login_outer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_box: {
    width: 300,
    minHeight: 590
  },

  login_header: {
    justifyContent: 'center',
  },
  login_header_h1: {
    flex: 1,
    justifyContent: 'center'
  },
  login_header_h1_text: {
    color: 'blue',
    fontSize: 52
  },
  login_header_h2: {
    flex: 1,
    justifyContent: 'center',
  },
  login_header_h2_text: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  login_content: {
    padding: 8
  },
  login_tab_navs: {
    marginBottom: 22
  },
  navs_slider: {
    justifyContent: 'center'
  },
  navs_slider_a: {
    paddingTop: 5,
    paddingRight: 2,
    paddingBottom: 5,
    paddingLeft: 2,
    color: '#555',
    // textDecoration: 'none',
    marginRight: 11,
    marginLeft: 11,
    // display: 'inline-block',
  },
  active: {
    color: 'blue',
    borderBottomWidth: 2,
    borderBottomColor: 'blue'
  }
});
export default Login;