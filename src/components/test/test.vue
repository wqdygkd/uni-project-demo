<template>
  <view>
    <view class="test" >
        <!-- <image :src="'./' + bg + '.jpg'" mode="aspectFit"></image> -->
        <image src="./1.jpg" mode="aspectFit"></image>
        <!-- <image src="./2.jpg" mode="aspectFit"></image> -->
        <image src="./10.jpg" mode="widthFix"></image>
        <image src="./11.jpg" mode="widthFix"></image>
        <!-- <image src="./1.jpg" mode="aspectFit"></image> -->
      </view>

      <!-- <view @click="changeBg" class="change">切换背景</view> -->
      <!-- <view @click="changeshow" class="changeshow">changeshow</view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // statusBarHeight: 0,

        bg: 1,
      }
    },
    methods: {
    changeBg() {
      this.bg = this.bg === 1 ? 2 : 1
    },
    changeshow() {
      console.log(11)
      this.$emit('show', !this.hidden )
    }
	}
  }
</script>

<style lang="scss" scoped>
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
