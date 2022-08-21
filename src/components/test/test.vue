<template>
  <view class="test" :style="{'--height': height + 'px'}">
    <template v-for="item in bg">
      <image :key="item" :src="item" mode="aspectFit" />
    </template>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    bg: {
      type: Array,
      default: () => ['https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png', 'https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png']
    }
  },

  computed: {
    ...mapGetters(['systemInfo']),
    height () {
      return this.systemInfo.screenHeight
    }
  }
}
</script>

<style lang="scss" scoped>
// 测试
.test {
  // display: none;
  display: block;
  width: 100%;
  height: var(--height);
  position: absolute !important;
  top: 0px;
  // z-index: -1;
  overflow: scroll;
  uni-image {
    width: 100%;
    height: var(--height);
    display: block;
  }
}
</style>
