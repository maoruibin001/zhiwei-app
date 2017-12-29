/**
 * Created by lenovo on 2017/12/29.
 */
import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet
} from 'react-native';
class Hot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'mao'},
        {name: 'rui'},
      ]
    }
  }
  _renderRow({item, index}) {
    return <Text>{item.name}</Text>
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
  flat: {

  }
});
export default Hot;