<template>
	<view class="content">
		<view class="top-bar">
			<uni-nav-bar >
				<view>通讯录</view>
				<block slot="left">
					<view class="right">
						<uni-icons class="search" type="search" size="30"></uni-icons>
						<text >
							<uni-icons  class="action" type="plus" size="30"></uni-icons>
						</text>
					</view>
				</block>

				<block slot="right">
					<view class="right">
						<uni-icons class="search" type="search" size="30"></uni-icons>
						<text >
							<uni-icons  class="action" type="plus" size="30"></uni-icons>
						</text>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view>
			<text class="title">{{title}}111</text>
		</view>
	</view>
</template>

<script>
// import { uniIcons } from '@dcloudio/uni-ui'
export default {
	components: {
		// uniIcons
	},
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss">

</style>
