<template>
	<view class="content">
		<view class="message">
      <OffiaccountPageShare article="https://mp.weixin.qq.com/s/NtTqFn1nXZ4zYBIBjA6CSQ" />
      <div class="arrow">
      </div>
    </view>
    <Avatar class="avatar"/>
	</view>
</template>

<script>
import OffiaccountPageShare from './type/offiaccountPageShare'
import Avatar from '@/components/avatar/avatar'
export default {
	components: {
		OffiaccountPageShare,
    Avatar
	},
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
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
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  .message {
    position: relative;
    .arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 3px solid #fff;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-right: 3px solid transparent;
      border-right-width: 0;
      top: 17px;
      right: -3px;
    }
  }
  .avatar {
    margin-left: 5px;
  }
}

</style>
