<template>
  <view class="content">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="top-bar">
      <uni-nav-bar>
        <view class="title">
          发现
        </view>
        <block slot="right">
          <view class="right">
            <uni-icons class="search" type="search" size="30" />
            <text>
              <uni-icons class="action" type="plus" size="30" />
            </text>
          </view>
        </block>
      </uni-nav-bar>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: 'Hello'
    }
  },
  onLoad () {

  },
  methods: {
  }
}
</script>

<style lang="scss">

.title {
  width: 100%;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
}
</style>
