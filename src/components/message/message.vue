<template>
  <view class="message">
    <MessageItem type="time" :msg={} />
    <!-- <MessageItem /> -->
  </view>
</template>

<script>
import MessageItem from './messageItem/messageItem'
export default {
	components: {
		MessageItem
	},
	data() {
		return {
			messageList: [
        {
          type: '',
          time: '',
          article: ''
        }
      ]
		}
	}
}
</script>

<style lang="scss">
.message {
  position: relative;
}
.msg {
  position: absolute;
  right: 30px;
  top: 30px;
}
</style>
