<template>
  <view class="cell">
    <view class="">
      <!-- <view class="title">
        <view>
          {{title}}
        </view>
        <view>
          {{label}}
        </view>
      </view> -->
      11111
    </view>
    <view class="icon" />
  </view>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    isLink: Boolean
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  justify-content: space-between;
}
</style>
