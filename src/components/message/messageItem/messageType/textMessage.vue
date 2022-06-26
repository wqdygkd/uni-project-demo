<template>
  <div class="text" :class="{'self': msg.bySelf}">
    {{ msg.text }}
  </div>
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
  padding: 7.7px 11px;
  background: #fff;
  width: fit-content;
  // letter-spacing: 1px;
  text-align: justify;
  line-height: 18px;
  &.self {
    background: #95eb6c;
  }
}
</style>
