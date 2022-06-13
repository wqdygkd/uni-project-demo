<template>
  <view class="content">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="top-bar">
      <uni-nav-bar>
        <view class="title">微信</view>
        <block slot="right">
          <view class="right">
            <uni-icons class="search" type="search" size="30"></uni-icons>
            <text>
              <uni-icons class="action" type="plus" size="30"></uni-icons>
            </text>
          </view>
        </block>
      </uni-nav-bar>
    </view>
    <view>
      <uni-list>
        <uni-list-item
          title="昵称"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="昵称"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="昵称"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script>
// import { uniIcons } from '@dcloudio/uni-ui'
export default {
  components: {
    // uniIcons
  },
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style lang="scss">
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
.title {
  width: 100%;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
}
</style>
