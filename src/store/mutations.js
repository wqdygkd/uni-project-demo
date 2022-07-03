const mutations = {
  setActivedConversationId (state, payload) {
    state.activedConversationId = payload.id
  },

  updateSystemInfo (state, payload) {
    state.systemInfo = payload
  }
}

export default mutations
