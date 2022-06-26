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
        { type: 'time', time: '4月24日 下午16:33',id: 1 },
        { type: 'paipai', id: 2 },
        { type: 'TextMessage', text: 'hahahahaha',  bySelf: true,id: 3 },
        { type: 'time', time: '23:16',id: 4 },
        { type: 'TextMessage', text: 'V家小KdV超级小桀考察课vjvj看出来吉好的，谢谢你了吗丁啉发的时候了吧台的人',  bySelf: true,id: 5 },
        { type: 'OffiaccountPageShare', bySelf: true,id: 6 },


        // { type: 'text', time: '', text: 'hahahahaha', from: { userName: '深蓝NFT08群(186)' }, bySelf: true,id: 2 },
        // { type: 'time', time: '1月31日 晚上21:04',id: 3 },
        // { type: 'text', time: '', text: '虎虎生威111', bySelf: true,id: 4 },
        // { type: 'text', time: '', article: '' },
      ]
		}
	}
}
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  z-index: 100;
}
</style>
