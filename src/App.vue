<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateSystemInfo'])
  },
  onLaunch () {
    console.log('App Launch')
    uni.getSystemInfo({
      success: res => {
        this.updateSystemInfo(res)
        console.log(res.screenHeight * (750 / res.windowWidth))
      }
    })
  },
  onShow () {
    console.log('App Show')
  },
  onHide () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "./static/styles/index.scss";
@import "./static/iconfont/iconfont.css";

.page {
  height: 100vh;
  background: #ededed;
  position: relative;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}
</style>
