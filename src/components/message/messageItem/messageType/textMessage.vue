<template>
  <view
    class="text"
    :class="{'self': msg.bySelf}"
    @click="openlink"
    v-html="html"
  >
    <!-- {{ msg.text }} -->
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
  },
  computed: {
    html () {
      const re = /[a-zA-z]+:\/\/[^\s]*/g
      return this.msg.text.replace(re, function (website) {
        return `<a href='javascript:void(0)' data-href='${website}' data-type='b' >${website}</a>`
      })
    }
  },
  methods: {
    openlink (e) {
      console.log(e)
      console.log(e.currentTarget)
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
  user-select: auto;
  &.self {
    background: #95eb6c;
  }
}
</style>
