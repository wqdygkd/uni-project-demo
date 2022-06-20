<template>
  <view class="send-bar">
    <div class="send-bar-block">
      <view class="icon-box">
        <image src="./../../static/arrow-left.svg"></image>
      </view>
      <view class="input">
        <input focus />
      </view>
      <view class="icon-box">
        <image src="./../../static/more.svg"></image>
      </view>
      <view class="icon-box">
        <image src="./../../static/more.svg"></image>
      </view>
    </div>
  </view>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.send-bar {
  // position: relative;

  // .title {
  //   transform: translate(-1.4px, 0.5px);
  //   color: #1d1d1d;
  //   display: flex;
  //   align-items: center;
  //   uni-image {
  //     width: 23px;
  //     height: 23px;
  //   }
  // }
  // .left {
  //   padding-left: 5px;
  //   uni-image {
  //     width: 25px;
  //     height: 25px;
  //   }
  // }
  // .right {
  //   padding-right: 11px;
  //   uni-image {
  //     width: 25px;
  //     height: 25px;
  //   }
  // }
}

.send-bar-block {
  height: 40px;
  width: 100%;
  background: #f7f7f7;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-box {
    width: 25px;
    uni-image {
      width: 25px;
      height: 25px;
    }
  }
  .input {
    flex: 1;
    height: 25px;
    line-height: 25px;
    background: #fff;
  }
}
</style>

