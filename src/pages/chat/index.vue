<template>
  <view class="chat">
      <view :style="'height:' + statusBarHeight + 'px'"></view>
      <view class="top-bar">
        <view>
          <text class="left" @click="goBack">
            <image src="./../../static/arrow-left.svg"></image>
          </text>
        </view>
        <view class="title">
          <text>群聊</text>
          <text>(2)</text>
          <image src="./../../static/qiyeweixin.png"></image>
        </view>
        <view class="right">
          <image src="./../../static/more.svg"></image>
        </view>
      </view>

      <Message class="messageBox"/>
      <SendBar class="send-bar"/>
      <view class="test">
        <image src="./../../static/test.jpg" mode="aspectFit"></image>
        <image src="./../../static/test.jpg" mode="aspectFill"></image>
      </view>
    </view>
</template>

<script>
import Message from '@/components/message/message'
import SendBar from '@/components/sendbar/sendbar'
export default {
	components: {
		Message,
    SendBar
	},
	data() {
		return {
      statusBarHeight: 0
    }
	},
	onLoad(){
    // #ifdef APP-PLUS
    this.statusBarHeight = plus.navigator.getStatusbarHeight(); //状态栏高度
    // #endif
  },
	methods: {
    goBack() {
      uni.navigateBack()
    }
	}
}
</script>

<style lang="scss">
.chat {
  height: 100vh;
  background: #ededed;
  position: relative;
  overflow: hidden;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  .top-bar {
    position: relative;
    height: 40px;
    width: 100%;
    background: #ededed;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      transform: translate(-1.4px, 0.5px);
      color: #1d1d1d;
      display: flex;
      align-items: center;
      uni-image {
        width: 23px;
        height: 23px;
      }
    }
    .left {
      padding-left: 5px;
      uni-image {
        width: 25px;
        height: 25px;
      }
    }
    .right {
      padding-right: 11px;
      uni-image {
        width: 25px;
        height: 25px;
      }
    }
  }

  .send-bar {
    position: absolute;
    bottom: 0;
  }

  // 测试
  &::before{
    content: '';
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('./../../static/test.jpg') center top/cover no-repeat;
    background-position: center -30px;
    // opacity: 0.2;
  }
}
// 测试
.test {
  display: none;
  width: 100%;
  height: calc(100vh / 2);
  position:absolute;
  top: 350px;
  background: #fff;
  z-index: 100;
  overflow: scroll;
  border-top: 1px solid #fff;
  uni-image {
    width: 100%;
    height: 250vh;
  }
}
</style>
