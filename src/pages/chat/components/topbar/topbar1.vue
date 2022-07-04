<template>
  <view class="top-bar">
    <view class="left" @click="goBack">
      <image src="@/static/arrow-left.svg" />
    </view>
    <view class="title">
      <view class="title-name">
        群聊信息
      </view>
      <text v-if="data.type === 'groupchat'">
        ({{ data.groupMemberCount }})
      </text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goBack () {
      uni.navigateBack()
    }
  }
}
</script>
<style lang="scss" scoped>
.top-bar {
  position: relative;
  height: 83rpx;
  width: 100%;
  background: #ededed;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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
    transform: translate(1.3px, 0.5px);
    color: #1d1d1d;
    display: flex;
    align-items: center;
    .title-name {
      letter-spacing: .44px;
      display: inline-block;
    }
  }
  .left {
    position: absolute;
    // padding-left: 5px;
    left: 5px;
    uni-image {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
