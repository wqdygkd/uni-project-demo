<template>
  <view class="page chat-info">
    <Test :bg="bg" />
    <view class="status_bar" />
    <TopBar
      :data="activedConversation"
      :title="title"
      :show-right="false"
      @leftClick="goBack"
    />
    <GroupMember />
    <Divider />
    <!-- <Divider :height="121" /> -->
    <CellGroup>
      <Cell
        title="群聊名称"
        :value="activedConversation.title"
        is-link
        @click="changeGroupTitle"
      >
        <template #title>
          111
        </template>
      </Cell>
      <Cell title="群二维码" is-link />
      <Cell title="群公告" is-link />
      <Cell title="备注" is-link />
    </CellGroup>
    <Divider />
    <CellGroup>
      <Cell title="查找聊天记录" is-link />
    </CellGroup>
    <Divider />
    <CellGroup>
      <Cell title="消息免打扰" />
      <Cell title="置顶聊天" />
      <Cell title="保存到通讯录" />
    </CellGroup>
    <Divider />
    <CellGroup>
      <Cell title="我在群里的昵称" is-link />
      <Cell title="显示群成员昵称" />
    </CellGroup>
    <Divider />
    <CellGroup>
      <Cell title="设置当前聊天背景" is-link />
      <Cell title="投诉" is-link />
    </CellGroup>
    <Divider />
  </view>
</template>

<script>
import TopBar from '@/components/topbar/topbar'
import GroupMember from './components/groupMember.vue'
import Cell from '@/components/cell/cell'
import CellGroup from '@/components/cell-group/cell-group'
import Divider from '@/components/divider/divider'
import Test from '@/components/test/test'

import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
    GroupMember,
    Cell,
    CellGroup,
    Divider,
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
        // 'https://xspace-img-cn.alicdn.com/consult/03c9e9bf-e2fc-46f1-a2e5-e97a6f173894.png'
      ]
    }
  },
  computed: {
    ...mapGetters(['activedConversation']),
    title () {
      return `群聊信息(${this.activedConversation.groupMemberCount})`
    }
  },
  onLoad (options) {
    this.setActivedConversationId({ id: +options.id })
  },
  methods: {
    ...mapMutations(['setActivedConversationId']),
    goBack () {
      uni.navigateBack()
    },
    changeGroupTitle () {

    }
  }
}
</script>

<style lang="scss" scoped>
.chat-info {
  > * {
    position: relative;
  }
}
</style>
