<template>
  <view>
    <view class="status_bar" />
    <TopBar
      class="top-bar"
      left-icon-class="iconfont-close"
      @leftClick="closePage"
      @rightClick="sharePage"
    />
  </view>
</template>

<script>
import TopBar from '@/components/topbar/topbar'
import { mapGetters } from 'vuex'

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

  computed: {
    ...mapGetters(['systemInfo'])
  },

  onLoad (options) {
    this.url = options.url
    const query = uni.createSelectorQuery().in(this)

    query.select('.top-bar').boundingClientRect(data => {
      console.log('得到布局位置信息' + JSON.stringify(data))
    }).exec()
  },

  mounted () {
    const query = uni.createSelectorQuery().in(this)
    query.select('.top-bar').boundingClientRect(data => {
      this.createWebview(data)
    }).exec()
  },

  methods: {
    createWebview (data) {
      // #ifdef APP-PLUS
      wv = plus.webview.create('', 'custom-webview', {
        plusrequire: 'none',
        'uni-app': 'none',
        top: this.systemInfo.statusBarHeight + data.height,
        height: this.systemInfo.screenHeight - this.systemInfo.statusBarHeight - data.height
      })
      wv.loadURL(this.url)
      const currentWebview = this.$scope.$getAppWebview()
      currentWebview.append(wv)
      // #endif
    },

    closePage () {
      uni.navigateBack()
    },
    sharePage () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
