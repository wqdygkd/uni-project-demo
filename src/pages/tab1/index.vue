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
      <uni-list :border="true" >
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
            ></uni-list-chat>
          </block>
        </view>
      </uni-list>
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState} from 'vuex'
export default {
  components: {
    // uniIcons
  },
  computed: {
    ...mapState(['conversationList']),
  },
  data() {
    return {
      // 会话列表
      // conversationList: [
      //   {
      //     title: '开源数字艺术78群(174)',
      //     type: "groupchat", // 会话类型
      //     groupMember: [
      //       { userName: '', url: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png'}
      //     ],
      //     from: { userName: '' }, // 发送人
      //     time: '',
      //     id: 1,
      //     bySelf: false, // 是否是自己发送
      //     messageType: 'text', // 消息类型
      //     // unreadNum: 100 // 未读数
      //   }
      // ]
    }
  },
  onLoad() {

  },
  methods: {
    toChat(item) {
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
