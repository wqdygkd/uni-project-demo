<template>
  <view class="chat">
      <view class="status-bar"></view>
      <view class="top-bar" >
          <view class="left" @click="goBack">
            <image src="./../../static/arrow-left.svg"></image>
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

      <Message class="messageBox" :class="{'hidden': hidden}"/>
      <SendBar class="send-bar"/>
      <view class="test" >
        <image :src="'./' + bg + '.jpg'" mode="aspectFit"></image>
        <image src="./1.jpg" mode="aspectFit"></image>
        <image src="./2.jpg" mode="aspectFit"></image>
        <!-- <image src="./1.jpg" mode="aspectFit"></image> -->
      </view>

      <view @click="changeBg" class="change">切换背景</view>
      <view @click="changeshow" class="changeshow">changeshow</view>
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
      // statusBarHeight: 0,

      bg: 1,
      hidden: false
    }
	},
	onLoad(){
    // #ifdef APP-PLUS
    // this.statusBarHeight = plus.navigator.getStatusbarHeight(); //状态栏高度
    // #endif
  },
	methods: {
    goBack() {
      uni.navigateBack()
    },

    changeBg() {
      this.bg = this.bg === 1 ? 2 : 1
    },
    changeshow() {
      this.hidden = !this.hidden
    }
	}
}
</script>

<style lang="scss" scoped>
.status-bar {
  height: var(--status-bar-height);
  background: #ededed;
  z-index: 100;
  position: relative;
}
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
    z-index: 100;
    &::before {
      content: "";
      transform: scaleY(0.5);
      display: block;
      height: 1px;
      width: 100%;
      // background: #212121;
      background: #e5e5e5;
      position: absolute;
      bottom: 0;
      left: 0;
    }
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
      padding-right: 12.5px;
      uni-image {
        width: 25px;
        height: 25px;
        // transform: translate();
        display: block;
      }
    }
  }

  .send-bar {
    position: absolute;
    bottom: 0;
    display: none;
  }
}

.hidden {
  display: none;
  opacity: 0;
}
// 测试
.test {
  // display: none;
  display: block;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  // z-index: -1;
  overflow: scroll;
  uni-image {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.change {
  position: absolute;
  left: 100px;
  top: 100px;
  z-index: 200;
}
.changeshow {
  position: absolute;
  left: 100px;
  top: 140px;
  z-index: 200;
}
</style>
