<template>
  <div>
    <view class="status_bar" />
    <TopBar />
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar'

let wv
export default {
  components: {
    TopBar
  },
  data () {
    return {
      url: ''
    }
  },

  onLoad (options) {
    this.url = options.url
    // #ifdef APP-PLUS
    wv = plus.webview.create('', 'custom-webview', {
      plusrequire: 'none',
      'uni-app': 'none',
      top: uni.getSystemInfoSync().statusBarHeight + 44
    })
    wv.loadURL(options.url)
    const currentWebview = this.$scope.$getAppWebview()
    currentWebview.append(wv)
    // #endif
  }
}
</script>

<style lang="scss" scoped>
</style>
