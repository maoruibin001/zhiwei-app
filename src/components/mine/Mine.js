/**
 * Created by lenovo on 2017/12/27.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
const MARGINFIX = 5;
let DEFAULTIMAGEURL = 'https://www.imooc.com/static/img/index/logo_new.png';
let userInfo = {
  "id": 1,
  "name": "毛瑞彬",
  "phone": "18603054239",
  "pwd": "4768094733",
  "experience": "0",
  "integral": "0",
  "imgUrl": "http:\/\/img1.mukewang.com\/59f6c68e0001665305000348-100-100.jpg",
  "create_time": 1512725464533,
  "desc": '爱生活，爱coding'
}
class Mine extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      data: [
        {name: '我的创作', id: 1, desc: '1个草稿', hasMsg: 0, iconUrl: 'https://png.icons8.com/ultraviolet/2x/edit.png'},
        {name: '我的收藏', id: 2, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/color/2x/christmas-star.png'},
        {name: '我的关注', id: 3, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/color/2x/visible.png'},
        {name: '我的开源', id: 4, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/color/2x/ms-project.png'},
        {name: '我的回答', id: 5, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/dusk/2x/faq.png'},
        {name: '我的书架', id: 6, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/cotton/2x/read.png'},

        {name: '我的创作', id: 1, desc: '1个草稿', hasMsg: 0, iconUrl: 'https://png.icons8.com/ultraviolet/2x/edit.png'},
        {name: '我的收藏', id: 2, desc: '', hasMsg: 1, iconUrl: 'https://png.icons8.com/color/2x/christmas-star.png'},
        {name: '我的关注', id: 3, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/color/2x/visible.png'},
        {name: '我的开源', id: 4, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/color/2x/ms-project.png'},
        {name: '我的回答', id: 5, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/dusk/2x/faq.png'},
        {name: '我的书架', id: 6, desc: '', hasMsg: 0, iconUrl: 'https://png.icons8.com/cotton/2x/read.png'},
      ],
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userInfo: userInfo
      })
    }, 1000)
  }

  _renderRow({item, index}) {
    return <View style={(index + 1) % 4 === 0 ? styles.itemMargin : styles.item}>
      <View style={styles.itemLeft}><Image source={{uri: item.iconUrl}} style={styles.iconImg}/></View>
      <View style={styles.itemRight}><Text style={styles.itemText}>{item.name}</Text></View>
    </View>
  }
  render() {
    return <View style={styles.container}>
      {/*头信息*/}
      <View style={styles.userInfo}>
        <View style={styles.imgBox}>
          <Image
            style={styles.headImage}
            source={{uri: this.state.userInfo.imgUrl || DEFAULTIMAGEURL}}
          />
        </View>
        <View style={styles.msg}>
          <View style={styles.name}>
            <Text style={styles.nameText}>{this.state.userInfo.name}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.descText}>{this.state.userInfo.desc}</Text>
          </View>
        </View>
      </View>
      {/*列表*/}
      <FlatList
        data={this.state.data}
        renderItem={this._renderRow.bind(this)}
        keyExtractor={(item, index) => index}
        style={styles.flat}
      />

    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb'
  },
  imgBox: {
    flex: 2,
  },
  headImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: MARGINFIX
  },
  msg: {
    flex: 5,
    flexDirection: 'column'
  },
  name: {
    flex: 3,
    justifyContent: 'center'
  },
  nameText: {
    fontWeight: '500',
    fontSize: 20,
    color: '#000'
  },
  desc: {
    flex: 3,
  },
  descText: {
    color: '#bbb'
  },

  item: {
    // marginBottom: MARGINFIX,
    backgroundColor: '#fff',
    display: 'flex',
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
  },
  itemMargin: {
    marginBottom: MARGINFIX,
    backgroundColor: '#fff',
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },

  itemLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  itemRight: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 20,
  },
  itemText: {
    fontWeight: '600',
    fontSize: 16
  },
  iconImg: {
    width: 30,
    height: 30,
  },
  flat:  {
    marginBottom: 100,
  }
});
export default Mine;