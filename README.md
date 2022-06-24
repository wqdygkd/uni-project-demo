# my-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


https://uniapp.dcloud.io/component/


> Syntax Error: Error: Node Sass version 7.0.1 is incompatible with ^4.0.0.
node 和 node-sass 版本不兼容，在[这里](https://www.npmjs.com/package/node-sass)查看node对用的node-sass版本重新安装
或者删除 node-sass 安装 sass


## 将实现的功能
* 消息界面
  * 消息列表
    * 新会话加入
    * 消息侧滑删除
* 通讯录界面
  * 好友列表（分组算法、DB）
  * 好友搜索
  * 好友资料（UI抽象模板），资料设置UI（使用设置类UI模板）
  * 新的朋友（读取手机联系人信息）
  * 群聊（UI，DB）
  * 标签（UI，逻辑）
聊天界面
聊天输入框
消息展示视图
文字消息
图片消息
表情消息
语音消息
