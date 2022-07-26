<template>
  <div>
    <view class="status_bar" />
    <TopBar />
    <web-view :src="url" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: ''
    }
  },

  onLoad (options) {
    this.url = options.url
  }
}
</script>

<style lang="less" scoped>

</style>
