<template>
  <view class="time">
    {{ time }}
  </view>
</template>

<script>
// 时间
export default {
  name: 'Time',
  props: {
    time: {
      type: String,
      default: '刚刚'
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  text-align: center;
  font-size: 30rpx;
  color: #999;
  // background: #fff;
  transform: translateY(1rpx) scale(0.7);
  font-weight: 400;
  padding: 18rpx 0;
}
</style>
