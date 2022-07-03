<template>
  <div class="image-message" :class="{'self': msg.bySelf}">
    <image :style="style" mode="aspectFill" :src="imgUrl" ></image>
  </div>
</template>

<script>
// 图片消息
import { mapGetters} from 'vuex'
export default {
  name: 'ImageMessage',
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapGetters(['systemInfo']),
    style() {
      let {imgUrl, width, height} = this.msg
      let { windowWidth, devicePixelRatio} = this.systemInfo
      // 屏幕 1080*2400
      // 原图 1080/2400=0.45  182/405= 0.4493
      // 原图 1500/4872=0.3078  182/457=0.3982
      // 原图 900/1599=0.5628  206/366=0.5628
      // 原图 640/640=1  366/366=1
      // 原图 800/1599=0.5  183/366=0.5

      let ratio = width / height

      if (0.5 <= ratio && ratio <= 1) {
        if (height > 368) {
          height = 368 * (750 / windowWidth) / devicePixelRatio
          // height = 368 / devicePixelRatio
          width = height * ratio
        }
      } else if (ratio < 0.5) {
        width = 184 * (750 / windowWidth) / devicePixelRatio
        height = width / (ratio > 0.4 ? ratio : 0.4)
      }

      return `width: ${width}rpx; height: ${height}rpx`
    },
    imgUrl() {
      return this.msg.imgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.image-message {
  uni-image {
    border-radius: 6rpx;
    display: block;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 1rpx rgba(7,7, 7,0.2);
    // &::after {
      // content: '';
    //   position: absolute;
    //   width: 200%;
    //   height: 200%;
    //   top: 50%;
    //   left: 50%;
    //   border: 1rpx solid rgba(7,7, 7,0.2);
    //   transform: translate(-50%, -50%) scale(.5);
    //   border-radius: 5px;
    // }
  }
}
</style>
