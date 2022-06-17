<template>
  <view class="time">1月30日 下午13:34</view>
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
  },
  data() {
    return {
    }
  },
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
