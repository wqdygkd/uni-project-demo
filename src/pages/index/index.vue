<template>
	<view class="content">
		<Message />
	</view>
</template>

<script>
import Message from '@/components/message/message'
export default {
	components: {
		Message
	},
	data() {
		return {}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss">
.content {
	height: 100vh;
	background: #ededed;
}

.msg {
	position: absolute;
	right: 30px;
	top: 30px;
}
</style>
