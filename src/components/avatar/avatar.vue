<template>
  <view>
    <image :src="avatarUrl"></image>
  </view>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: 'https://broker.mklij.com/favicon.ico'
    }
  }
}
</script>

<style lang="scss" scoped>
uni-image {
  width: 34px;
  height: 34px;
  border-radius: 3px;
  display: block;
}
</style>
