<template>
  <view class="cell-group">
    <slot />
  </view>
</template>

<style lang="scss" scoped>
::v-deep.cell-group {
  .cell {
    .cell__block::after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      right: -20px;
      bottom: 0;
      left: 0px;
      border-bottom: 1px solid #e5e5e5;
      transform: scaleY(0.5);
    }
    &:last-child {
      .cell__block::after {
        display: none;
      }
    }
  }
}
</style>
