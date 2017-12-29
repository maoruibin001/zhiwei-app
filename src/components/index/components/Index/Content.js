import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import Focus from './Focus';
import Recommend from './Recommend';
import Hot from './Hot';
export default () => {
  return <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <DefaultTabBar />}
    tabBarUnderlineStyle={{height:2}}
    tabBarBackgroundColor='#FFFFFF'
    tabBarActiveTextColor='blue'
    tabBarInactiveTextColor='black'
    tabBarTextStyle={{fontSize: 14}}
  >
    <Focus tabLabel='关注'/>
    <Recommend tabLabel='推荐'/>
    <Hot tabLabel='热榜'/>
    {/*<Text tabLabel='关注'>My</Text>*/}
    {/*<Text tabLabel='推荐'>favorite</Text>*/}
    {/*<Text tabLabel='热榜'>project</Text>*/}
  </ScrollableTabView>;
}