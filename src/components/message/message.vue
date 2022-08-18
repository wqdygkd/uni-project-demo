<template>
  <view class="message">
    <MessageItem
      v-for="(item, index) in messageList"
      :key="index"
      :type="item.type"
      :msg="item"
    />
  </view>
</template>

<script>
import MessageItem from './messageItem/messageItem'
export default {
  components: {
    MessageItem
  },
  props: {
    messageList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  transform: rotate(180deg);
  // z-index: 100;
  overflow-x: scroll;
}
</style>
