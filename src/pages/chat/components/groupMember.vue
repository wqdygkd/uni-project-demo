<template>
  <view>
    <view class="members">
      <view
        v-for="item in 10"
        :key="item"
        class="item"
      >
        <image
          src="https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png"
          mode="aspectFit"
        />
      </view>
    </view>
  </view>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      hidden: false
    }
  }
}
</script>

<style lang="scss" scoped>
.members {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 10px 10px;
  }
  uni-image {
    width: 45px;
    height: 45px;
    border-radius: 3px;
  }
}
</style>
