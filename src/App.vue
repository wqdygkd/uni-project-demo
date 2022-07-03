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
/*每个页面公共css */
@import "./styles/index.scss";
</style>
