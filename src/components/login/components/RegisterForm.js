/**
 * Created by lenovo on 2017/12/1.
 * 注册表单
 */
import React, {Component} from 'react';
import '../../../styles/login/register.css';
import Valid from '../../utils/valid/valid';
import Utils from '../../utils/utils';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
// 校验规则
const FIELDRULLS = [
  {
    require: true,
    name: 'name',
    label: '姓名'
  },
  {
    require: true,
    name: 'phone',
    rex: /\d{11}/,
    emptyErr: '电话号码不能为空',
    err: '请输入正确的电话号码'
  },
  {
    require: true,
    name: 'pwd',
    label: '密码'
  },
];

// 注册表单
class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      formData: {
        name: '',
        phone: '',
        pwd: ''
      }
    }
  }

  download() {
    this.setState({
      name: 'mao'
    })
  }

// 点击注册按钮
  register(e) {
    e.preventDefault();

    const formData = {
      name: this.refs.register_name.value,
      phone: this.refs.register_phone.value,
      pwd: this.refs.register_pwd.value
    };
    // 校验提交数据
    let invalids = Valid.check(FIELDRULLS, formData, this.refs, {
      position: 'absolute',
      filled: 'register_',
    });
    if (invalids) return;
    Utils.ajax('register', formData, (err, model) => {
      if (err) {
        alert(err);
      } else {
        location.href = model.url;
      }
    });
  }

  render() {
    return <View className="register_form">
      <View className="group_inputs">
        <View className="name input">
          <TextInput ref="register_name" name="name" placeholder="姓名"/>
        </View>
        <View className="phone input">
          <TextInput ref="register_phone" name="phone" placeholder="手机号"/>
        </View>
        <View className="passworld input">
          <TextInput ref="register_pwd" type="password" placeholder="密码（不少于6位）"/>
        </View>
        <View className="button-register">
          <Button onPress={this.register.bind(this)} title='注册知微'/>
        </View>
      </View>
      <View className="agreement-tip">
        <Text>点击「注册」按钮，即代表你同意《知微协议》</Text>
      </View>
      <View className="qrcode">
        <Button className="qucode-toggleButton" onpress={this.download.bind(this)} title='下载知微'/>
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  group_inputs: {
    padding: 0
  },
  input: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderLeft: 1,
    borderRight: 1,
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
export default RegisterForm;