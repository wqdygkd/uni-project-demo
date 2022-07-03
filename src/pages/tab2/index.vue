<template>
  <view class="content">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="top-bar">
      <uni-nav-bar>
        <view class="title">
          通讯录
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
    <view>
      <uni-list>
        <uni-list-item
          title="昵称"
          thumb="https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png"
          thumb-size="lg"
        />
        <uni-list-item
          title="昵称"
          thumb="https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png"
          thumb-size="lg"
        />
        <uni-list-item
          title="昵称"
          thumb="https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png"
          thumb-size="lg"
        />
      </uni-list>
    </view>
  </view>
</template>

<script>
export default {
  components: {
    // uniIcons
  },
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
