<template>
  <cover-view class="separator" :style="{ height: height + 'rpx' }" />
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 16
    }
  }
}
</script>

<style lang="scss" scoped>
.separator {
  width: 100%;
  background: #ededed;
  opacity: .5;
}
</style>
