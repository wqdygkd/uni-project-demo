<template>
  <view ref="sendBar" class="send-bar">
    <div class="send-bar-block">
      <view class="left icon-box">
        <image src="./../../static/arrow-left.svg" />
      </view>
      <view class="input">
        <textarea
          v-model="message"
          auto-height
          :adjust-position="false"
          @focus="onfocus"
          @blur="onblur"
        />
      </view>
      <view class="right icon-box">
        <image src="./../../static/more.svg" />
      </view>
      <view class="right icon-box">
        <image src="./../../static/more.svg" />
      </view>
    </div>
  </view>
</template>

<script>
export default {
  data () {
    return {
      message: '哈哈哈'
    }
  },

  methods: {
    onfocus (e) {
      const { height } = e.detail
      console.log(e.detail)
      const query = uni.createSelectorQuery().in(this)
      // query.select('.send-bar').style.bottom = '400px'
      query.select('.send-bar').boundingClientRect(data => {
        // console.log("得到布局位置信息" + JSON.stringify(data));
        // console.log("节点离页面顶部的距离为" + data.top);
        console.log(Object.keys(uni.createSelectorQuery().select('.send-bar')))
      }).exec()

      //   uni.createSelectorQuery().select(".sticke").boundingClientRect((res)=>{
      //     uni.createSelectorQuery().select(".sticke").style.transform

      // }).exec()

      // console.log(this.$refs.sendBar.$el.style.bottom = '400px')
    },

    onblur (e) {
      this.$refs.sendBar.$el.style.bottom = '0'
    }
  }
}
</script>
<style lang="scss" scoped>
.send-bar {
  transition: all 300ms;
  // z-index: 1000;
  opacity: 0;
  // position: relative;

  // .title {
  //   transform: translate(-1.4px, 0.5px);
  //   color: #1d1d1d;
  //   display: flex;
  //   align-items: center;
  //   uni-image {
  //     width: 23px;
  //     height: 23px;
  //   }
  // }
  // .left {
  //   padding-left: 5px;
  //   uni-image {
  //     width: 25px;
  //     height: 25px;
  //   }
  // }
  // .right {
  //   padding-right: 11px;
  //   uni-image {
  //     width: 25px;
  //     height: 25px;
  //   }
  // }
}

.send-bar-block {
  height: 48px;
  width: 100%;
  background: #f7f7f7;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-box {
    width: 25px;
    text-align: center;
    uni-image {
      width: 25px;
      height: 25px;
    }

    &.left {
      width: 40px;
    }
    &.right {
      width: 38px;
    }
  }
  .input {
    flex: 1;
    // height: 33px;
    min-height: 33px;
    line-height: 33px;
    background: #fff;
    border-radius: 3px;
    uni-textarea {
      padding: 6px;
      height: 100%;
    }
  }
}
</style>
