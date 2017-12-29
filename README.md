# 知 微 APP
## 项目介绍
* 前端使用reactNative编写的知微app。
* 后端采用nginx + nodejs。
* 本项目旨在打造一个开源学习平台，前期主攻前端方向，有兴趣的朋友可以一起搞
* 本项目预计明年七月左右上线。
* 关于项目的详细介绍，大家可以参考这篇文章：http://blog.csdn.net/weixin_38150378/article/details/78737707

## 目录结构
```
+android    安卓app目录
+ios        ios app目录
+src        源代码目录
+__tests__  测试代码目录
+example    测试例子目录
```

## 注意事项
* JS统一使用ES6语法
* ReactNative坑很多，请严格按照当前项目依赖引入

## 第三方库参考文档
* webpack https://webpack.js.org/
* react https://hulufei.gitbooks.io/react-tutorial/content/introduction.html
* react-dom https://reactjs.org/docs/react-dom.html
* redux https://redux.js.org/docs/introduction/

## 单页面实例
* 参考/singlePage里面有对应的react-router单页面示例
* 建议参考网址https://www.cnblogs.com/dudeyouth/p/6617059.html

## 依赖安装
* 安装node
* 安装mysql
* 安装全局的npm
* 安装工程依赖
```
cd path/to/project
yarn install
```

## 开发
* 开发环境实时打包, 并启动本地热更新热替换。
```
react-native run-android
```

## 项目踩过的坑（会持续更新）
* 1、react-native安装环境配置各种报错，服务不能启动。
** 解决方案：严格按照官方推荐配置，并一定注意java版本1.8。

* 2、启动项目引入React和Component报错
** 解决方案：采用项目依赖的react引入React和Component,不要从react-native中引入。

* 3、项目的排列方式为竖向排列。
** 解决方案：默认flexDerection 为 column，需要手动设置为 row。

* 4、TabNavigator和FlatList一起使用，底部内容被遮挡问题。
** 解决方案：给FlatList加一个margin(个人觉得这个方案并不好，虽然实现了效果，不过感觉很挫，但并没有找到好的实现方式)。

* 5、影藏TabNavigator时出现一个灰色的横条
** 解决方案：在TabNavigator上设置sceneStyle={{paddingBottom:0}}，当然这个值可以动态设置，但隐藏时必须设置为0。

* 6、搜索框外面加一个View，并设置对应的flex，键盘输入内容时不展示。
** 解决方案： 给外层View价格高度。

* 7、Image引入图片时source没用问题
** 解决方案：source对应资源为后端返回资源时使用source={{uri: xxx}}这种方式引入，所以就要求后端必须返回绝对地址，不能返回相对地址。相对地址引入采用require()的方式，但是require只能引入字符串对应的地址，不能引入变量对应地址。

* 8、在一个View中使用ScrollableTabView内容不展示问题
** 解决方案：需要给View设置一个高度，不然不会展示。