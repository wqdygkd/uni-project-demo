<template>
  <view>
    <uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
      <view class="uni-popup-share">
        <view class="uni-share-title"><text class="uni-share-title-text">{{shareTitleText}}</text></view>
        <view class="uni-share-content">
          <view class="uni-share-content-box">
            <view class="uni-share-content-item" v-for="(item,index) in bottomData" :key="index" @click.stop="select(item,index)">
              <image class="uni-share-image" :src="item.icon" mode="aspectFill"></image>
              <text class="uni-share-text">{{item.text}}</text>
            </view>
          </view>
        </view>
        <view class="uni-share-button-box">
          <button class="uni-share-button" @click="close">{{cancelText}}</button>
        </view>
      </view>
      <!-- <uni-popup-share></uni-popup-share> -->
    </uni-popup>
  </view>
</template>
<script>
	export default {
		data() {
			return {
				type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
				value: '',
        bottomData: [{
						text: '转发给朋友',
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c2b17470-50be-11eb-b680-7980c8a877b8.png',
						name: 'wx'
					},
					{
						text: '分享到朋友圈',
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d684ae40-50be-11eb-8ff1-d5dcf8779628.png',
						name: 'wx'
					},
				]
			}
		},
    props: {
			title: {
				type: String,
				default: ''
			},
			beforeClose: {
				type: Boolean,
				default: false
			}
		},
		onReady() {},
    computed: {
      shareTitleText() {
				return this.title
			}
		},
		methods: {
      open() {
        this.$refs.share.open()
      },
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			messageToggle(type) {
				this.msgType = type
				this.messageText = `这是一条${type}消息提示`
				this.$refs.message.open()
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				console.log('点击确认')
				this.messageText = `点击确认了 ${this.msgType} 窗口`
				this.$refs.message.open()
			},
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			dialogClose() {
				console.log('点击关闭')
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 3000)
			},
			shareToggle() {
				this.$refs.share.open()
			}
		}
	}
</script>
<style lang="scss" scoped>
.uni-popup-share {
  background-color: #fff;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  .uni-share-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 40px;
    .uni-share-title-text {
      font-size: 14px;
      color: #666;
    }
	}
  .uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
    .uni-share-content-box {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */
      flex-direction: row;
      flex-wrap: wrap;
      width: 360px;
      .uni-share-content-item {
        width: 90px;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: column;
        justify-content: center;
        padding: 10px 0;
        align-items: center;
        &:active {
          background-color: #f5f5f5;
        }

        .uni-share-image {
          width: 30px;
          height: 30px;
        }
        .uni-share-text {
          margin-top: 10px;
          font-size: 14px;
          color: #3B4144;
        }
      }
    }
	}

  .uni-share-button-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px 15px;

    .uni-share-button {
      flex: 1;
      border-radius: 50px;
      color: #666;
      font-size: 16px;
    }

    .uni-share-button::after {
      border-radius: 50px;
    }
	}
}








</style>
