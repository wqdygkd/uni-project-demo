<template>
  <view class="top-bar">
    <view class="left" @click="goBack">
      <image src="@/static/arrow-left.svg" />
    </view>
    <view class="title">
      <view class="title-name">
        {{ data.title }}
      </view>
      <text v-if="data.type === 'groupchat'">
        ({{ data.groupMemberCount }})
      </text>
      <image v-if="data.weCom" src="@/static/qiyeweixin.png" />
    </view>
    <view class="right">
      <image src="@/static/more.svg" @click="toChatInfo" />
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
  data () {
    return {
    }
  },

  methods: {
    goBack () {
      uni.navigateBack()
    },
    toChatInfo () {
      uni.navigateTo({
        url: `/pages/chat/info?id=${this.data.id}`,
        animationType: 'pop-in',
        animationDuration: 300
      })
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
  justify-content: space-between;
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
    uni-image {
      margin-left: 4px;
      margin-top: 0.9px;
      width: 18px;
      height: 18px;
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
</style>
