<template>
  <view class="offiaccount-page-share">
    <view class="title line-2">{{detail.title}}</view>
    <view class="sub-title">
      <view class="description line-3">{{detail.description}}</view>
      <view class="image">
        <image :src="detail.pic" alt="" mode="aspectFill">
      </view>
    </view>

    <view class="separator"></view>

    <view class="footer">
      <image class="logo" :src="detail.logo" alt="">
      <view class="nickname">
        {{detail.nickname}}
      </view>
    </view>
  </view>
</template>

<script>
// 公众号分享消息
export default {
  name: 'OffiaccountPageShare',
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      detail: {
        title: "超元空间 | 嗨爆夏日计划进行中 | 新用户注册 | 分享、邀新得好礼",
        description: "超元空间嗨爆夏日计划 | 邀新分享新用户注册赢实物大奖",
        logo: "https://images.weserv.nl/?url=http://mmbiz.qpic.cn/mmbiz_png/ZgpvpluCJTiavaksGH44ibN3EgwVFcnFQeASyRNUiammY7kRefXbB6mIG6pFTzOt0ziauHERY8qBpayGolbAK9WKoA/0?wx_fmt=png",
        nickname: "超元空间数字藏品",
        pic: "https://images.weserv.nl/?url=http://mmbiz.qpic.cn/mmbiz_jpg/CuoDGGD2IDrb2jnSg1meguuxIkbg31GziaIBw6hTRk7bErPV02jM04lv2OZJyQ5W0TDRbLWt4A8Coiak8snJqlEQ/0?wx_fmt=jpeg",
      }
    }
  },
  watch: {
    'msg.article': {
      async handler(newVal, oldVal) {
        this.loading = true
        // await this.getArticleDetail(newVal)
        this.loading = false
      },
      immediate: true
    }
  },
  methods: {
    getArticleDetail(url) {
      uni.request({
        url: `http://localhost:3000/api/weixin?url=${url}`,
        success: (res) => {
          console.log(res)
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.offiaccount-page-share {
  border-radius: 5px;
  width: 257px;
  padding: 8px 11px 0px 10px;
  background: #fff;
  // background: #95eb6c;
  .title {
    color: #212121;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 3.5px;
    letter-spacing: .5px;
  }

  .sub-title {
    display: flex;
    padding-bottom: 10px;
    .description {
      color: #909090;
      font-size: 12px;
      line-height: 15px;
      flex: 1;
      padding-right: 10px;
      letter-spacing: -.15px;
    }

    .image {
      width: 44px;
      height: 44px;
      margin-top: 1px;
      border: 1px solid #212121;
      box-sizing: border-box;
      uni-image {
        width: 100%;
        height: 100%;
      }
    }
  }

  .separator {
    &::before {
      content: "";
      transform: scaleY(0.5);
      display: block;
      height: 1px;
      background: #f7f7f7;
      // background: #212121;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 20px;
    .logo {
      width: 9px;
      height: 9px;
      border: 1px solid #212121;
      transform: translateY(-1px);
    }
    .nickname {
      padding-left: 4px;
      color: #909090;
      font-size: 14px;
      transform: scale(0.72);
      transform-origin: left center;

    }
  }
}
</style>
