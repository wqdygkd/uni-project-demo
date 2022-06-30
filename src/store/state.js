const state = {
  // 会话列表
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
    },
    {
      title: '开源数字艺术79群',
      type: "groupchat",
      groupMember: [
        { userName: '', url: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png'}
      ],
      groupMemberCount: 174, //
      from: { userName: '' },
      time: '',
      id: 2,
      bySelf: false,
      messageType: 'text',
      weCom: false // 企业微信
      // unreadNum: 100 // 未读数
    }
  ],

  // 消息
  message: {
    1: [
      { type: 'time', time: '4月24日 下午16:33',id: 1 },
      { type: 'paipai', id: 2 },
      { type: 'time', time: '00:07', id: 4 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
      { type: 'OffiaccountPageShare', bySelf: true, id: 6 },
    ],
    2: [
      { type: 'time', time: '4月24日 下午16:33',id: 1 },
      { type: 'TextMessage', text: 'hahahahaha',  bySelf: true,id: 3 },
    ]
  },

  contacts: new Map(), // 通讯录
  userInfo: {}, // 用户信息

  activedConversationId: 1, //
}

export default state
