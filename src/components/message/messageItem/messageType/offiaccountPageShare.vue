<template>
  <view class="offiaccount-page-share">
    <view class="title line-2">
      {{ detail.title }}
    </view>
    <view class="sub-title">
      <view class="desc line-3">
        {{ detail.desc }}
      </view>
      <view class="cover">
        <image :src="detail.cover" alt="" mode="aspectFill" />
      </view>
    </view>

    <view class="separator" />

    <view class="footer">
      <image class="headimg" :src="detail.headimg" alt="">
        <view class="name">
          {{ detail.name }}
        </view>
      </image>
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
  data () {
    return {
      loading: false,
      detail: {
        title: '平台首测 | 唯美艺术平台一大波注册福利来袭',
        desc: '唯美art——数字收藏着服务平台',
        cover: 'https://images.weserv.nl/?url=https://mmbiz.qlogo.cn/mmbiz_jpg/UIgW2nYmoibEv8SaLH8RQ0UY3DvN9CnNEmzqibHsxIs90Btd8vv3VyaiaWfscibykhibeUDmia1A3ZScmJQLzSP8JhtQ/0?wx_fmt=jpeg',
        headimg: 'https://images.weserv.nl/?url=http://wx.qlogo.cn/mmhead/Q3auHgzwzM6fKupht2mCdjP89118q8RicJWK8KHQOqsa5YN9Biceibiaicg/0',
        name: '唯美艺术服务'
      }
    }
  },
  watch: {
    'msg.article': {
      async handler (newVal) {
        this.loading = true
        // await this.getArticleDetail(newVal)
        this.loading = false
      },
      immediate: true
    }
  },
  methods: {
    getArticleDetail (url) {
      uni.request({
        url: `http://localhost:3000/api/weixin?url=${url}`,
        success: res => {
          console.log(res)
        }
      })
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
    .desc {
      color: #909090;
      font-size: 12px;
      line-height: 15px;
      flex: 1;
      padding-right: 10px;
      letter-spacing: -.15px;
    }

    .cover {
      width: 44px;
      height: 44px;
      margin-top: 1px;
      // border: 1px solid #212121;
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
      background: #f5f5f5;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 20px;
    .headimg {
      width: 10px;
      height: 10px;
      // border: 1px solid #212121;
      transform: translateY(-1px);
    }
    .name {
      padding-left: 4px;
      color: #909090;
      font-size: 14px;
      transform: scale(0.72);
      transform-origin: left center;
    }
  }
}
</style>
