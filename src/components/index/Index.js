// 注册导航
import {
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './components/Index/Index';
import Search from './components/Search/Search';
const Navs = StackNavigator({
  Home: {
    screen: Index,
    navigationOptions: {
      headerStyle: {
        display: 'none'
      }
    }
  },
  Search: {
    'screen': Search
  }
}, {
  initialRouteName: 'Home'
});

export default Navs;