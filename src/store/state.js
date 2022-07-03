const state = {
  // 会话列表
  conversationList: [
    {
      title: '开源数字艺术78群',
      type: "groupchat",
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
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
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
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
      {
        type: 'time',
        time: '15:10',
        id: 1
      },
      {
        type: 'ImageMessage',
        bySelf: true,
        id: 2,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png',
        width: 1080,
        height: 2400
      },
      {
        type: 'ImageMessage',
        bySelf: true,
        id: 3,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png',
        width: 640,
        height: 640
      },
      {
        type: 'ImageMessage',
        bySelf: true,
        id: 4,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/c3a63f2f-a85d-4774-95eb-a02f6f958398.png',
        width: 900,
        height: 1599
      },
      {
        type: 'ImageMessage',
        bySelf: false,
        id: 5,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png',
        width: 640,
        height: 640,
        from: {
          id: 2,
          userName: '张三',
          userAvatar: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png'
        }
      },
      {
        type: 'ImageMessage',
        bySelf: false,
        id: 6,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/c3a63f2f-a85d-4774-95eb-a02f6f958398.png',
        width: 900,
        height: 1599,
        from: {
          id: 2,
          userName: '张三',
          userAvatar: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png'
        }
      },
      {
        type: 'ImageMessage',
        bySelf: false,
        id: 7,
        imgUrl: 'https://xspace-img-cn.alicdn.com/consult/1f276ddc-feb0-4ad9-87b8-d90b328d22fe.png',
        width: 1080,
        height: 2400,
        from: {
          id: 2,
          userName: '张三',
          userAvatar: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png'
        }
      },
      {
        type: 'time',
        time: '15:42',
        id: 8
      },
      {
        type: 'OffiaccountPageShare',
        bySelf: true,
        id: 9
      },
    ],
    2: [
      { type: 'time', time: '4月24日 下午16:33', id: 1 },
      { type: 'paipai', id: 1 },
      { type: 'TextMessage', text: 'hahahahaha', bySelf: true, id: 3 },
    ]
  },

  contacts: new Map(), // 通讯录

  // 用户信息
  userInfo: {
    id: 1,
    userName: '',
    userAvatar: 'https://xspace-img-cn.alicdn.com/consult/0a1b7c66-b0e3-4046-b2d1-b3453585946a.png'
  },

  activedConversationId: 1, //
  systemInfo: {},
}

export default state
