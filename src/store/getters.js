const getters = {
  activedConversation(state) {
    return state.conversationList.find(item => item.id === state.activedConversationId)
  },

  activedConversationMsg(state) {
    return state.message[state.activedConversationId]
  },
}

export default getters
