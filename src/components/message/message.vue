<template>
	<view class="content">
		<MessageCart />
	</view>
</template>

<script>
import MessageCart from './messageCart'
export default {
	components: {
		MessageCart
	},
	data() {
		return {
			messageList: [
        {
          type: ''
        }
      ]
		}
	}
}
</script>

<style lang="scss">
.content {
  position: relative;
}
.msg {
	position: absolute;
	right: 30px;
	top: 30px;
}
</style>
