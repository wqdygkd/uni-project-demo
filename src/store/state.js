const state = {
  // 会话列表
  conversationList: [
    {
      title: '开源数字艺术78群',
      type: 'groupchat',
      groupMember: [
        { id: 2 },
        { id: 1, self: true }
      ],
      groupMemberCount: 174,
      // from: { userName: '' },
      time: '',
      id: 1,
      bySelf: false,
      messageType: 'text',
      weCom: true // 企业微信
      // unreadNum: 100 // 未读数
    },
    {
      title: '提米元宇宙55',
      type: 'groupchat',
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
      ],
      groupMemberCount: 165, //
      // from: { userName: '' },
      time: '',
      id: 2,
      bySelf: false,
      messageType: 'text',
      weCom: true // 企业微信
      // unreadNum: 100 // 未读数
    },
    {
      title: '水星艺术用户群7',
      type: 'groupchat',
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
      ],
      groupMemberCount: 165, //
      // from: { userName: '' },
      time: '',
      id: 3,
      bySelf: false,
      messageType: 'text',
      weCom: true // 企业微信
      // unreadNum: 100 // 未读数
    }
  ],

  // 消息
  message: {
    1: [
      {
        type: 'TextMessage',
        text: '笑死骂客服没有用',
        bySelf: false,
        from: 2,
        id: 1
      },
      {
        type: 'TextMessage',
        text: '当解压',
        bySelf: false,
        from: 2,
        id: 3
      },
      {
        type: 'TextMessage',
        text: '台子就这样了',
        bySelf: false,
        from: 2,
        id: 4
      },
      {
        type: 'TextMessage',
        text: '什么时候倒也不知道',
        bySelf: false,
        from: 2,
        id: 5
      },
      {
        type: 'TextMessage',
        text: '最高峰接的',
        bySelf: false,
        from: 3,
        id: 6
      },
      {
        type: 'TextMessage',
        text: '要不是缺钱，我刚才就把这亏的钱赚回来了',
        bySelf: false,
        from: 3,
        id: 7
      },
      {
        type: 'TextMessage',
        text: '就该早卖的',
        bySelf: false,
        from: 3,
        id: 8
      },
      {
        type: 'TextMessage',
        text: '现在去不也是追涨嘛',
        bySelf: false,
        from: 4,
        id: 8
      },
      {
        type: 'TextMessage',
        text: '要不是玩草方格我早就赚到钱了',
        bySelf: false,
        from: 4,
        id: 11
      },
      {
        type: 'ImageMessage',
        bySelf: false,
        id: 2,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png',
        from: 2,
        width: 1080,
        height: 2400
      },
      { type: 'time', time: '12:00', id: 10 },
      {
        type: 'OffiaccountPageShare',
        bySelf: true,
        id: 9
      }
    ],
    2: [
      { type: 'time', time: '4月24日 下午16:33', id: 1 },
      { type: 'TextMessage', text: 'hahahahaha', bySelf: true, id: 3 },
      {
        type: 'ImageMessage',
        bySelf: false,
        id: 2,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png',
        from: 2,
        width: 1080,
        height: 2400
      }
    ]
  },

  // 通讯录
  contacts: [
    {
      id: 1,
      userName: '张三',
      userAvatar: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png'
    },
    {
      id: 2,
      userName: '张三',
      userAvatar: 'https://xspace-img-cn.alicdn.com/consult/b4d9441f-d518-4f83-a162-9582f02e635c.png'
    },
    {
      id: 3,
      userName: '阳光男孩',
      userAvatar: 'https://xspace-img-cn.alicdn.com/consult/f3fec498-6919-413f-bd90-958448960c1c.png'
    },
    {
      id: 4,
      userName: '大佬',
      userAvatar: 'https://xspace-img-cn.alicdn.com/consult/d55919ff-566d-4d77-94b7-b311f8a467c1.png'
    }
  ],

  // 用户
  userId: 1,

  activedConversationId: 1, //
  systemInfo: {}
}

export default state
