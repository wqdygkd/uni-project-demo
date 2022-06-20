<template>
  <view class="time">{{time}}</view>
</template>

<script>
// 时间
export default {
  name: 'Time',
  props: {
    time: {
      type: String,
      default: '1月1号 下午13:00'
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  text-align: center;
  font-size: 14px;
  color: #999;
  background: #fff;
  transform: translate(-1px) scale(0.7);
  font-weight: 500;
}
</style>
