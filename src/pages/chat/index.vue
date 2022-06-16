<template>
  <view class="content">
    <view :style="'height:' + statusBarHeight + 'px'"></view>

    <view class="top-bar">
      <uni-nav-bar>
        <view class="title">聊天标题</view>
        <block slot="right">
          <view class="right">
            <uni-icons class="action" type="plus" size="30"></uni-icons>
          </view>
        </block>
      </uni-nav-bar>
    </view>
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
		return {
      statusBarHeight: 0
    }
	},
	onLoad(){
    // #ifdef APP-PLUS
    this.statusBarHeight = plus.navigator.getStatusbarHeight();//状态栏高度
    // #endif
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
</style>
