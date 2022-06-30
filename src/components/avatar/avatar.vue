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
      default: 'https://xspace-img-cn.alicdn.com/consult/f109dfe0-d437-42a8-bdb9-526e5cae11ab.png'
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
