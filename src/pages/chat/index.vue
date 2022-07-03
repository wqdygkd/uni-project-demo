<template>
  <view class="chat">
    <view class="status_bar" />
    <TopBar :data="activedConversation" />
    <Message class="message-box" :message-list="activedConversationMsg" />
    <SendBar class="send-bar" />

    <Test />
  </view>
</template>

<script>
import TopBar from './components/topbar/topbar'
import Message from '@/components/message/message'
import SendBar from '@/components/sendbar/sendbar'
import Test from '@/components/test/test'

import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
    Message,
    SendBar,
    Test
  },
  data () {
    return {
      hidden: false
    }
  },
  computed: {
    ...mapGetters(['activedConversation', 'activedConversationMsg'])
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
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  height: 100vh;
  background: #ededed;
  position: relative;
  overflow: hidden;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  display: flex;
  flex-direction: column;
  .message-box {
    // height: calc(100% - );
    flex: 1;
  }
  .send-bar {
    // position: absolute;
    bottom: 0;
    // display: none;
  }
}
</style>
