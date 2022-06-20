<template>
  <view class="message-item">
    <block v-if="type === 'time'">
      <Time :time="msg.time" />
    </block>
    <div class="has-avatar" :class="{'right': msg.bySelf}" v-else>
      <Avatar class="avatar" />
      <view class="message-item-content">
        <view class="user-name" v-if="!msg.bySelf">{{msg.from.userName}}</view>
        <div>
          <TextMessage :text="msg.text" />
          <div :class="{'arrow-left': !msg.bySelf, 'arrow-right': msg.bySelf}"></div>
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
import TextMessage from './messageType/textMessage'
import Avatar from '@/components/avatar/avatar'
export default {
	components: {
		OffiaccountPageShare,
    Time,
    TextMessage,
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
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
.message-item {
  // background: #fff;
  margin-bottom: 20px;
  .has-avatar {
    display: flex;
    padding: 0 10px;
    .message-item-content {
      position: relative;
      .arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        top: 17px;
      }
      .arrow-right {
        @extend .arrow;
        border-left: 3px solid #fff;
        border-right: 3px solid transparent;
        border-right-width: 0;
        right: -3px;
      }

      .arrow-left {
        @extend .arrow;
        border-right: 3px solid #fff;
        border-left: 3px solid transparent;
        border-left-width: 0;
        left: -3px;
        top: 30px;
      }

      .user-name {
        font-size: 10px;
        color: #999;
        margin-bottom: 2px;
      }
    }
    .avatar {
      margin-right: 10px;
    }
    &.right {
      justify-content: right;
      .message-item-content {
        order: 1;
      }
      .avatar {
        order: 2;
        margin-right: 0;
        margin-left: 5px;
      }
    }
  }
}
</style>
