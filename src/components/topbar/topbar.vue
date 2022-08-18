<template>
  <view class="top-bar">
    <view v-if="showLeft" class="left" @click="leftClick">
      <view class="left__default">
        <i :class="`iconfont ${leftIconClass}`" />
      </view>
    </view>

    <view class="title">
      <view class="title-name">
        {{ title }}
      </view>
      <!-- <text v-if="data.type === 'groupchat'">
        ({{ data.groupMemberCount }})
      </text> -->
      <image v-if="data.weCom && showWeCom" src="@/static/qiyeweixin.png" />
    </view>

    <view v-if="showRight" class="right">
      <slot v-if="!!$scopedSlots.right" name="right" />

      <view v-else class="right__default" @click="rightClick">
        <i class="iconfont iconfont-more" />
      </view>

      <!-- <image src="@/static/more.svg"  /> -->
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    showLeft: {
      type: Boolean,
      default: true
    },
    leftIconClass: {
      type: String,
      default: 'iconfont-arrow-left'
    },
    showRight: {
      type: Boolean,
      default: true
    },
    showWeCom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this.$scopedSlots)
    // console.log(this.$slots)
  },

  methods: {
    leftClick () {
      if (this.$listeners.leftClick) {
        this.$emit('leftClick')
      } else {
        uni.navigateBack()
      }
    },

    rightClick () {
      if (this.$listeners.rightClick) {
        this.$emit('rightClick')
      }
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
    uni-image {
      margin-left: 4px;
      margin-top: 0.9px;
      width: 18px;
      height: 18px;
    }
  }

  .left {
    padding-left: 5px;
    left: 0;
  }

  .right {
    padding-right: 12.5px;
    right: 0;
  }

  .left, .right {
    position: absolute;
    &__default {
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 15px;
      }
    }
  }
}
</style>
