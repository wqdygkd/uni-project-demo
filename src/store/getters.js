const getters = {
  activedConversation: state => state.conversationList.find(item => item.id === state.activedConversationId),
  activedConversationMsg: state => state.message[state.activedConversationId],
  systemInfo: state => state.systemInfo,
  userInfo: state => state.userInfo,
  contacts: state => state.contacts
}

export default getters
