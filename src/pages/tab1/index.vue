<template>
  <view class="page">
    <Test :bg="['https://pic.rmb.bdstatic.com/bjh/2934725cddc12de5c16f7912f96b70ff.jpeg', 'https://pic.rmb.bdstatic.com/bjh/ba7e075f41a85be6f402d2ef07ea1f8f.jpeg']" />
    <view class="status_bar" />

    <TopBar title="微信" :show-left="false">
      <template #right>
        111
      </template>
    </TopBar>

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
import Test from '@/components/test/test'
import TopBar from '@/components/topbar/topbar'
export default {
  components: {
    Test,
    TopBar
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

</style>
