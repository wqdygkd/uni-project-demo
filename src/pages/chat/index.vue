<template>
  <view class="page chat">
    <Test />
    <view class="status_bar" />
    <TopBar
      :data="activedConversation"
      :title="title"
      :show-we-com="true"
      @leftClick="goBack"
      @rightClick="toChatInfo"
    />
    <Message class="message-box" :message-list="activedConversationMsg" />
    <!-- <SendBar class="send-bar" /> -->
  </view>
</template>

<script>
import TopBar from '@/components/topbar/topbar'
import Message from '@/components/message/message'
// import SendBar from '@/components/sendbar/sendbar'
import Test from '@/components/test/test'

import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
    Message,
    // SendBar,
    Test
  },
  data () {
    return {
      hidden: false
    }
  },
  computed: {
    ...mapGetters(['activedConversation', 'activedConversationMsg']),
    title () {
      return `${this.activedConversation.title}(${this.activedConversation.groupMemberCount})`
    }
  },
  onLoad (options) {
    this.setActivedConversationId({ id: +options.id })
    // #ifdef APP-PLUS
    // this.statusBarHeight = plus.navigator.getStatusbarHeight(); //状态栏高度
    // #endif
  },
  methods: {
    ...mapMutations(['setActivedConversationId']),
    goBack () {
      uni.navigateBack()
    },

    toChatInfo () {
      uni.navigateTo({
        url: `/pages/chat/info?id=${this.activedConversation.id}`,
        animationType: 'pop-in',
        animationDuration: 300
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  .message-box {
    height: calc(100% - 117px);
    // flex: 1;
  }
  .send-bar {
    // position: absolute;
    bottom: 0;
    // display: none;
  }
}
</style>
