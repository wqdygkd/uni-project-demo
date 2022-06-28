import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		conversationList: [
      {
        title: '开源数字艺术78群',
        type: "groupchat",
        groupMember: [
          { userName: '', url: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png'}
        ],
        groupMemberCount: 174, //
        from: { userName: '' },
        time: '',
        id: 1,
        bySelf: false,
        messageType: 'text',
        weCom: true // 企业微信
        // unreadNum: 100 // 未读数
      }
    ],
    message: {
      1: []
    },

    activedConversationId: 1, //
	},

  getters: {
    currentConversation(state) {
      return state.conversationList.find(item => item.id === state.activedConversationId)
    },

    currentConversationMsg(state) {
      return state.message[state.activedConversationId]
    }
  }
})

export default store
