<template>
  <view class="text" :class="{'self': msg.bySelf}">
    <mpHtml
      :content="html"
      :use-anchor="true"
      :copy-link="false"
      @linktap="openlink"
    />
    <!-- {{ msg.text }} -->
    <!-- V<text style="transform: scale(0.3);"> </text> -->
  </view>
</template>

<script>
// 文本消息
import mpHtml from '@/components/mp-html/mp-html.vue'
export default {
  name: 'TextMessage',
  components: {
    mpHtml
  },
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
        return `<a href='${website}'>${website}</a>`
      })
    }
  },
  methods: {
    openlink (e) {
      uni.navigateTo({
        url: '/pages/webview/webview?url=' + e.href,
        animationType: 'pop-in',
        animationDuration: 300
      })
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
