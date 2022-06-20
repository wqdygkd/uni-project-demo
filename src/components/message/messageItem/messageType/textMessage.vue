<template>
  <div class="text">{{ text }}</div>
</template>

<script>
// 文本消息
export default {
  name: 'TextMessage',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.text {
  border-radius: 5px;
  max-width:  223px;
  font-size: 14px;
  padding: 8px;
  background: #fff;
  width: fit-content;
}
</style>
