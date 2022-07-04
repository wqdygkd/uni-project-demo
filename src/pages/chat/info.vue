<template>
  <view class="chat-info">
    <view class="status_bar" />
    <TopBar :data="activedConversation" />

    <Test />
  </view>
</template>

<script>
import TopBar from './components/topbar/topbar1'
import Test from '@/components/test/test'

import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
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
.chat-info {
  height: 100vh;
  background: #ededed;
  position: relative;
  overflow: hidden;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  display: flex;
  flex-direction: column;
}
</style>
