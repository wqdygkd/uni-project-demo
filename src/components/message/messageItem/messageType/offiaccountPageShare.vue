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
    article: {
      type:String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      detail: {
        description: "元本空间交易平台APP上线，功能优化升级|千万元奖品送完为止",
        logo: "https://images.weserv.nl/?url=http://mmbiz.qpic.cn/mmbiz_png/ZgpvpluCJTiavaksGH44ibN3EgwVFcnFQeASyRNUiammY7kRefXbB6mIG6pFTzOt0ziauHERY8qBpayGolbAK9WKoA/0?wx_fmt=png",
        nickname: "元本空间3D",
        pic: "https://images.weserv.nl/?url=http://mmbiz.qpic.cn/mmbiz_jpg/CuoDGGD2IDrb2jnSg1meguuxIkbg31GziaIBw6hTRk7bErPV02jM04lv2OZJyQ5W0TDRbLWt4A8Coiak8snJqlEQ/0?wx_fmt=jpeg",
        title: "元本空间交易平台APP上线，功能优化升级|千万元奖品送完为止"
      }
    }
  },
  watch: {
    article: {
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
  width: 223px;
  padding: 10px 8px 0px 10px;
  background: #fff;
  .title {
    color: #4b4b4b;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
  }

  .sub-title {
    display: flex;
    padding-bottom: 10px;
    .description {
      color: #909090;
      font-size: 12px;
      flex: 1;
      padding-right: 10px;
    }

    .image {
      width: 38px;
      height: 38px;
      margin-top: 5px;
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
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 26px;
    .logo {
      width: 12px;
      height: 12px;
    }
    .nickname {
      padding-left: 4px;
      color: #909090;
      font-size: 12px;
      line-height: 12px;
    }
  }
}
</style>
