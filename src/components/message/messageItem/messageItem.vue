<template>
  <view class="message-item">
    <block v-if="type === 'time'">
      <Time :time="msg.time" />
    </block>
    <block v-else-if="type === 'paipai'">
      <Paipai />
    </block>
    <div v-else class="has-avatar" :class="{'right': msg.bySelf}">
      <Avatar class="avatar" :user-avatar="msgUserInfo.userAvatar" />
      <view class="message-item-content">
        <view v-if="!msg.bySelf" class="user-name">
          {{ msgUserInfo.userName }}
        </view>
        <div>
          <component :is="msg.type" :msg="msg" />
          <div v-if="!['ImageMessage'].includes(msg.type)" :class="{'arrow-left': !msg.bySelf, 'arrow-right': msg.bySelf, 'bg-white': msg.type === 'OffiaccountPageShare'}" />
        </div>
      </view>
    </div>

    <!-- <div class="has-avatar avatar-left" v-else>
      <Avatar class="avatar" />
      <view class="message-item-content">
        <OffiaccountPageShare article="https://mp.weixin.qq.com/s/NtTqFn1nXZ4zYBIBjA6CSQ" />
        <div class="arrow-left"></div>
      </view>
    </div> -->
    <!-- <div class="has-avatar right">
      <Avatar class="avatar" />
      <view class="message-item-content">
        <OffiaccountPageShare article="https://mp.weixin.qq.com/s/NtTqFn1nXZ4zYBIBjA6CSQ" />
        <div class="arrow-right"></div>
      </view>
    </div> -->
  </view>
</template>

<script>
import OffiaccountPageShare from './messageType/offiaccountPageShare'
import Time from './messageType/time'
import Paipai from './messageType/paipai'
import TextMessage from './messageType/textMessage'
import ImageMessage from './messageType/imageMessage'
import Avatar from '@/components/avatar/avatar'

import { mapGetters } from 'vuex'
export default {
  components: {
    OffiaccountPageShare,
    Time,
    Paipai,
    TextMessage,
    ImageMessage,
    Avatar
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    msg: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['userInfo', 'contacts']),
    msgUserInfo () {
      return this.msg.bySelf ? this.userInfo : this.contacts.find(item => item.id === this.msg.from) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.message-item {
  // background: #fff;
  // margin-bottom: 20px;
  .has-avatar {
    display: flex;
    padding: 0 5.5px;
    .message-item-content {
      position: relative;
      padding: 5.8px 4.5px 4.5px 5.3px;
      // margin-top: 5px;
      // background: #fff;
      .arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        top: 15px;
      }
      .arrow-right {
        @extend .arrow;
        border-left: 7px solid #95eb6c;
        border-right: 7px solid transparent;
        border-right-width: 0;
        right: 0;
        &.bg-white {
          border-left-color: #fff;
        }
      }

      .arrow-left {
        @extend .arrow;
        border-right: 7px solid #fff;
        border-left: 7px solid transparent;
        border-left-width: 0;
        left: 0;
        top: 30px;
      }

      .user-name {
        font-size: 10px;
        color: #999;
        line-height: 16px;
        // margin-bottom: 2px;
      }
    }
    .avatar {
      padding: 5.7px 5px;
      // background: #fff;
    }
    &.right {
      justify-content: right;
      .message-item-content {
        order: 1;
      }
      .avatar {
        order: 2;
      }
    }
  }
}
</style>
