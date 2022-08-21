# wechat-standalone

微信单机版，使用 [uniapp](https://uniapp.dcloud.io/component/) 开发

## 将实现的功能
* 微信
  * 消息列表
    * 文字消息
    * 图片消息
    * 表情消息
    * 语音消息
  * 创建新会话
  * 新会话加入
  * 消息侧滑删除
* 通讯录界面
  * 新的朋友
  * 好友列表
  * 好友搜索
  * 好友资料
* 发现
  * 朋友圈
* 我
  * 设置

> Syntax Error: Error: Node Sass version 7.0.1 is incompatible with ^4.0.0.
node 和 node-sass 版本不兼容，在[这里](https://www.npmjs.com/package/node-sass)查看node对用的node-sass版本重新安装
或者删除 node-sass 安装 sass


adb 工具

```
adb kill-server 关闭adb服务
adb start-server 启用adb服务
adb devices
adb tcpip 8888
adb connect [ip]:8888
```
