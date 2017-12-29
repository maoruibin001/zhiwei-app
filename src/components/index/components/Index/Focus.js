/**
 * Created by lenovo on 2017/12/29.
 */
import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';

const FIXMARGIN = 6;
const FIXPADDING = 12;
const FIXDESCLENGTH = 95;
const FIXANSWERPADDING = 3;
const FIXGRAYCOLOR = '#999'
let DEFAULTIMAGEURL = 'http:\/\/img1.mukewang.com\/59f6c68e0001665305000348-100-100.jpg';

let data = [
  {
    id: '0',
    name: 'mao',
    imgUrl: '',
    title: '毛瑞彬赞同了回答',
    time: '12天前',
    contentTitle: '2018一个合格的前端该是什么样的？',
    contentDesc: '从8月中旬实习结束就开始找工作了，一直到十一，终于尘埃落定，在博客园写文章也有一年了，写博客也真的可以获得很多，这里做一个总结。非科班，但自己比较喜欢前端，所以最后虽然没有拿到bat的offer，但最后也收到了自己满意的。比较后悔的时内推比较晚了，之前实习一直没有在意，实习回来内推已经不多了，我笔试也比较菜，所以前期挂到绝望。。。',
    starCount: '20',
    commentCount: '88'
  },
  {
    id: '0',
    name: 'mao',
    imgUrl: '',
    title: '毛瑞彬赞同了回答',
    time: '12天前',
    contentTitle: '2018一个合格的前端该是什么样的？',
    contentDesc: '从8月中旬实习结束就开始找工作了，一直到十一，终于尘埃落定，在博客园写文章也有一年了，写博客也真的可以获得很多，这里做一个总结。非科班，但自己比较喜欢前端，所以最后虽然没有拿到bat的offer，但最后也收到了自己满意的。比较后悔的时内推比较晚了，之前实习一直没有在意，实习回来内推已经不多了，我笔试也比较菜，所以前期挂到绝望。。。',
    starCount: '20',
    commentCount: '88'
  },
  {
    id: '0',
    name: 'mao',
    imgUrl: '',
    title: '毛瑞彬赞同了回答',
    time: '12天前',
    contentTitle: '2018一个合格的前端该是什么样的？',
    contentDesc: '从8月中旬实习结束就开始找工作了，一直到十一，终于尘埃落定，在博客园写文章也有一年了，写博客也真的可以获得很多，这里做一个总结。非科班，但自己比较喜欢前端，所以最后虽然没有拿到bat的offer，但最后也收到了自己满意的。比较后悔的时内推比较晚了，之前实习一直没有在意，实习回来内推已经不多了，我笔试也比较菜，所以前期挂到绝望。。。',
    starCount: '20',
    commentCount: '88'
  },
  {
    id: '0',
    name: 'mao',
    imgUrl: '',
    title: '毛瑞彬赞同了回答',
    time: '12天前',
    contentTitle: '2018一个合格的前端该是什么样的？',
    contentDesc: '从8月中旬实习结束就开始找工作了，一直到十一，终于尘埃落定，在博客园写文章也有一年了，写博客也真的可以获得很多，这里做一个总结。非科班，但自己比较喜欢前端，所以最后虽然没有拿到bat的offer，但最后也收到了自己满意的。比较后悔的时内推比较晚了，之前实习一直没有在意，实习回来内推已经不多了，我笔试也比较菜，所以前期挂到绝望。。。',
    starCount: '20',
    commentCount: '88'
  },
  {
    id: '0',
    name: 'mao',
    imgUrl: '',
    title: '毛瑞彬赞同了回答',
    time: '12天前',
    contentTitle: '2018一个合格的前端该是什么样的？',
    contentDesc: '从8月中旬实习结束就开始找工作了，一直到十一，终于尘埃落定，在博客园写文章也有一年了，写博客也真的可以获得很多，这里做一个总结。非科班，但自己比较喜欢前端，所以最后虽然没有拿到bat的offer，但最后也收到了自己满意的。比较后悔的时内推比较晚了，之前实习一直没有在意，实习回来内推已经不多了，我笔试也比较菜，所以前期挂到绝望。。。',
    starCount: '20',
    commentCount: '88'
  },
];
class Focus extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {

    data = data.map(e => {
      e.contentDesc = (e.contentDesc && e.contentDesc.length > FIXDESCLENGTH) ? e.contentDesc.slice(0, FIXDESCLENGTH - 3) + '...' : e.contentDesc;
      return e;
    });
    this.setState({
      data: data
    })
  }
  _renderRow({item, index}) {

    return <View style={[styles.item, index === 0 ? styles.firstItem : null]}>
      {/*头部*/}
      <View style={styles.itemHead}>
        <View style={styles.itemHeadImgBox}>
          <Image style={styles.itemHeadImg} source={{uri: item.imgUrl || DEFAULTIMAGEURL}}/>
        </View>
        <View style={styles.itemHeadDescBox}>
          <Text style={styles.itemHeadDescText}>{item.title} - {item.time}</Text>
        </View>
      </View>

      {/*內容*/}
      <View style={styles.itemContent}>
        <View style={styles.contentTitle}>
          <Text style={styles.contentTitleText}>{item.contentTitle}</Text>
        </View>
        <View style={styles.contentDesc}>
          <Text style={styles.contentDescText}>{item.contentDesc}</Text>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.answerBox}>
            <Text style={styles.answerText}>回答</Text>
          </View>
          <View style={styles.starBox}>
            <Text style={styles.starText}>{item.starCount || 0} 个赞</Text>
          </View>
          <View style={styles.commentBox}>
            <Text style={styles.commentText}>{item.commentCount || 0}评论</Text>
          </View>
        </View>
      </View>

    </View>
  }

  render() {
    return <View>
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
  flat:  {
    marginBottom: 130,
  },
  item: {
    marginBottom: FIXMARGIN,
    backgroundColor: '#fff',
    paddingTop: FIXPADDING,
    paddingBottom: FIXPADDING,
    paddingLeft: FIXPADDING,
    paddingRight: FIXPADDING,
  },
  firstItem: {
    marginTop: FIXMARGIN,
  },

  itemHead: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemHeadImgBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: -5,
  },
  itemHeadImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemHeadDescBox: {
    flex: 8,
    justifyContent: 'flex-start',
  },
  itemHeadDescText: {
    color: FIXGRAYCOLOR
  },

  itemContent: {
    display: 'flex',
  },
  contentTitle: {
    flex: 1,
  },
  contentTitleText: {
    fontSize: 17,
    fontWeight: '500',

  },
  contentDesc: {
    flex: 3,
    marginTop: 7,
    marginBottom:7,
  },
  contentDescText: {},

  contentBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  answerBox: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  answerText: {
    paddingTop: FIXANSWERPADDING,
    paddingBottom: FIXANSWERPADDING,
    paddingLeft: FIXANSWERPADDING,
    paddingRight: FIXANSWERPADDING,
    borderWidth: 1,
    borderColor: FIXGRAYCOLOR,
    borderRadius: 5,
    fontSize: 12,
    color: FIXGRAYCOLOR

  },
  starBox: {
    flex: 2,
    alignItems: 'center'
  },
  starText: {
    color: FIXGRAYCOLOR
  },
  commentBox: {
    flex: 6,
  },
  commentText: {
    color: FIXGRAYCOLOR
  }


});
export default Focus;