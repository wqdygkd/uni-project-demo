<template>
  <view class="message">
    <MessageItem :type="item.type" :msg="item" v-for="(item, index) in messageList" :key="index"/>
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
        { type: 'time', time: '1月30日 下午13:35',id: 1 },
        { type: 'text', time: '', text: '虎虎生威', from: { userName: '深蓝NFT08群(186)' }, bySelf: false,id: 2 },
        { type: 'time', time: '1月31日 晚上21:04',id: 3 },
        { type: 'text', time: '', text: '虎虎生威111', bySelf: true,id: 4 },
        // { type: 'text', time: '', article: '' },
      ]
		}
	}
}
</script>

<style lang="scss">
.message {
  position: relative;
}
</style>
