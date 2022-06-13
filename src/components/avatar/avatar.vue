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
      default: 'https://www.gravatar.com/avatar/933ea1dccd7d902a0c7a92b91c549703'
    }
  }
}
</script>

<style lang="scss" scoped>
uni-image {
  width: 40px;
  height: 40px;
  border-radius: 3px;
}
</style>
