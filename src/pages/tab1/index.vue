<template>
  <view class="page conversation">
    <!-- <Test
      :bg="[
        'https://pic.rmb.bdstatic.com/bjh/2934725cddc12de5c16f7912f96b70ff.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/ba7e075f41a85be6f402d2ef07ea1f8f.jpeg',
      ]"
    /> -->

    <view class="status_bar" />

    <TopBar title="微信" :show-left="false" class="topbar">
      <template #right>
        <view class="right__custom">
          <i class="item item1 iconfont iconfont-search1" />
          <i class="item item2 iconfont iconfont-add-circle" />
        </view>
      </template>
    </TopBar>

    <view v-if="false">
      <uni-list :border="false">
        <view v-for="item in [conversationList[0]]" :key="item.id">
          <block v-if="item.type === 'groupchat'">
            <uni-list-chat
              :title="item.title"
              :avatar-list="item.groupMember.slice(0, 9)"
              note="您收到一条新的消息"
              time="20:20"
              badge-positon="left"
              :badge-text="item.unreadNum > 99 ? 'dot' : item.unreadNum"
              clickable
              @click="toChat(item)"
            />
          </block>
        </view>
      </uni-list>
    </view>

    <view class="list">
      <view
        v-for="item in conversationList"
        :key="item.id"
        class="list__container"
        @click="toChat(item)"
      >
        <view class="list__header-warp">
          <view class="list__header">
            <image src="https://xspace-img-cn.alicdn.com/consult/f109dfe0-d437-42a8-bdb9-526e5cae11ab.png" />
          </view>
          <!-- <view class="list__badge" /> -->
        </view>
        <view class="list__content">
          <view class="list__content-main">
            <view class="list__content-title">
              {{ item.title }}
              <image v-if="item.weCom" src="@/static/qiyeweixin.png" />
            </view>
            <view class="list__content-time">
              {{ item.time }}
            </view>
          </view>
          <view class="list__content-note">
            <view class="list__content-title">
              https://fanyi
            </view>
            <view class="list__content-icon" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
// import Test from '@/components/test/test'
import TopBar from '@/components/topbar/topbar'
export default {
  components: {
    // Test,
    TopBar
  },

  data () {
    return {}
  },
  computed: {
    ...mapState(['conversationList'])
  },
  onLoad () {

  },
  methods: {
    toChat (item) {
      uni.navigateTo({
        url: `/pages/chat/index?id=${item.id}`,
        animationType: 'pop-in',
        animationDuration: 300
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.conversation {
  background: #fff;
  .topbar {
    // background: #ededed;
  }
  .right__custom {
    padding-right: 3px;
    display: flex;
    .item1 {
      padding-right: 16px;
    }
    i {
      font-size: 18px;
    }
  }

  .list {
    position: relative;
    height: calc(100% - 117px + 50px);
    overflow-y: auto;
    .list__container {
      padding: 7px 14px;
      display: flex;
      height: 61px;
      box-sizing: border-box;
    }
    .list__header-warp {
      width: 47px;
      height: 47px;
      position: relative;
      display: flex;
      align-items: center;
      .list__header {
        width: 41px;
        height: 41px;
        border-radius: 3px;
        display: block;
        overflow: hidden;
        uni-image {
          width: 100%;
          height: 100%;
        }
      }
      .list__badge {
        position: absolute;
        width: 8.5px;
        height: 8.5px;
        background: #fc5251;
        border-radius: 50%;
        top: 0;
        right: 2px;
      }
    }
    .list__content {
      flex: 1;
      height: 50px;
      padding-left: 4px;
      .list__content-main, .list__content-note {
        display: flex;
      }
      .list__content-main {
        padding: 5px 0 0;
        .list__content-title {
          color: #181818;
          letter-spacing: .5px;
          flex: 1;
          font-size: 14px;
          line-height: 21px;
          // background: rgba(4, 255, 88, .3);
          display: flex;
          align-items: center;
          uni-image {
            margin-left: 3px;
            width: 15px;
            height: 15px;
          }
        }
        .list__content-time {
          color: #b2b2b2;
          width: 56px;
          font-size: 10px;
          height: 13px;
          line-height: 14px;
          text-align: right;
        }
      }
      .list__content-note {
        color: #b2b2b2;
        margin-top: 2px;
        .list__content-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 245px;
          font-size: 11px;
          height: 15px;
          line-height: 15px;
        }
        .list__content-icon {
          // width: 50px;
        }
      }
    }
  }
}
</style>
