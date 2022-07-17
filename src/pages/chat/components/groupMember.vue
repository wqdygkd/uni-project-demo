<template>
  <view class="members">
    <view v-for="item in 2" :key="item" class="item">
      <image
        src="https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png"
        mode="aspectFit"
      />
      <view class="name">
        hahaha
      </view>
    </view>
  </view>
</template>

<script>
export default {
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
  padding: 8.5px 26px 0;
  background: #fff;
  .item {
    box-sizing: border-box;
    padding: 9.5px 8.8px;
    display: flex;
    flex-direction: column;
    width: calc(47px + 17.6px);
    height: 81.5px;
    justify-content: space-between;
    .name {
      font-size: 10px;
      width: 47px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #b2b2b2;
      text-align: center;
    }
    uni-image {
      width: 47px;
      height: 47px;
      border-radius: 3px;
    }
  }
}
</style>
