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
  width: 35px;
  height: 35px;
  border-radius: 3px;
}
</style>
