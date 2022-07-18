<template>
  <view class="cell" :class="{isLink: isLink}">
    <view class="cell__left-icon" />
    <view class="cell__block" :class="{ border: border }">
      <view class="cell__content">
        <view class="cell__title">
          {{ title }}
        </view>
        <view class="cell__value">
          {{ value }}
        </view>
      </view>
      <view v-if="isLink" class="cell__right-icon">
        <i class="iconfont iconfont-arrow-right-b2b2b2" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    isLink: Boolean,
    border: Boolean
  }
}
</script>

<style lang="scss" scoped>
.cell {
  height: 47.3px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  // background: #fff;

  &.isLink:active {
    background: #e9e9e9;
  }

  .cell__block {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    &.border::after {
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
  }
  .cell__content {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .cell__title {
    color: #191919;
    letter-spacing: -0.8px;
  }

  .cell__value {
    color: #737373;
    letter-spacing: -0.7px;
  }
  .cell__right-icon {
    height: 100%;
    width: 17px;
    // background: blue;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    i {
      font-size: 11px;
    }
  }
}
</style>
