<template>
  <view class="chat-info">
    <Test :bg="bg" />
    <view class="status_bar" />
    <TopBar :data="activedConversation" />
    <GroupMember />
  </view>
</template>

<script>
import TopBar from './components/topbar/topbar1'
import GroupMember from './components/groupMember.vue'
import Test from '@/components/test/test'

import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
    GroupMember,
    Test
  },
  data () {
    return {
      hidden: false,
      bg: [
        'https://xspace-img-cn.alicdn.com/consult/573acdbb-dd1c-4514-973b-c2eebe7c8a08.png',
        'https://xspace-img-cn.alicdn.com/consult/be8a40b3-69f0-4479-92b4-bfd2418f21f8.png',
        'https://xspace-img-cn.alicdn.com/consult/03c9e9bf-e2fc-46f1-a2e5-e97a6f173894.png',
        'https://xspace-img-cn.alicdn.com/consult/24338ae7-05f1-4220-b470-666dcb00ab69.png'
      ]
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
