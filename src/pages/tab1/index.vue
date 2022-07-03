<template>
  <view class="content">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="top-bar">
      <uni-nav-bar>
        <view class="title">
          微信
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
      <uni-list :border="true">
        <view v-for="item in conversationList" :key="item.id">
          <!-- 头像显示角标 -->
          <block v-if="item.type === 'groupchat'">
            <uni-list-chat
              :title="item.title"
              :avatar-list="item.groupMember.slice(0,9)"
              note="您收到一条新的消息"
              time="20:20"
              badge-positon="left"
              :badge-text="item.unreadNum > 99 ? 'dot' : item.unreadNum"
              clickable
              @click="toChat(item)"
            />
          </block>
        </view>
      </uni-list>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    // uniIcons
  },

  data () {
    return {}
  },
  computed: {
    ...mapState(['conversationList'])
  },
  onLoad () {

  },
  methods: {
    toChat (item) {
      uni.navigateTo({
        url: `/pages/chat/index?id=${item.id}`,
        animationType: 'pop-in',
        animationDuration: 300
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
}
</style>
