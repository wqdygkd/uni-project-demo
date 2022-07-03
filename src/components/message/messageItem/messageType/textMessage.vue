<template>
  <view class="text" :class="{'self': msg.bySelf}">
    {{ msg.text }}
    <!-- V<text style="transform: scale(0.3);"> </text> -->
  </view>
</template>

<script>
// 文本消息
export default {
  name: 'TextMessage',
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  border-radius: 4px;
  max-width: 257px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 7.8px 11px;
  background: #fff;
  width: fit-content;
  // letter-spacing: .5px;
  text-align: justify;
  line-height: 18px;
  &.self {
    background: #95eb6c;
  }
}
</style>
