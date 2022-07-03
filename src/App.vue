<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateSystemInfo'])
  },
  onLaunch: function() {
    console.log('App Launch')
    uni.getSystemInfo({
        success: res => {
          this.updateSystemInfo(res)
          console.log(res.screenHeight * (750 / res.windowWidth))
        }
    })
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "./styles/index.scss";
</style>
