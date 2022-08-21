const state = {
  // 会话列表
  conversationList: [
    {
      title: '群聊',
      type: 'groupchat',
      groupMember: [
        { id: 2 },
        { id: 1, self: true }
      ],
      groupMemberCount: 174,
      // from: { userName: '' },
      time: '昨天',
      id: 1,
      bySelf: false,
      messageType: 'text',
      weCom: false, // 企业微信
      unreadNum: 0
    },
    {
      title: '42V官方21群',
      type: 'groupchat',
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
      ],
      groupMemberCount: 165, //
      // from: { userName: '' },
      time: '23:14',
      id: 2,
      bySelf: false,
      messageType: 'text',
      weCom: true,
      unreadNum: 0
    },
    {
      title: '订阅号消息',
      type: 'groupchat',
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
      ],
      groupMemberCount: 165,
      // from: { userName: '' },
      time: '23:10',
      id: 3,
      bySelf: false,
      messageType: 'text',
      weCom: false,
      unreadNum: 0
    },
    {
      title: '知笔知艺官方3群',
      type: 'groupchat',
      groupMember: [
        { userName: '', userAvatar: 'https://static.okx.com/cdn/assets/imgs/221/F1B0C71EFA832CA3.png' }
      ],
      groupMemberCount: 165,
      // from: { userName: '' },
      time: '22:33',
      id: 4,
      bySelf: false,
      messageType: 'text',
      weCom: true,
      unreadNum: 0
    }
  ],

  // 消息
  message: {
    1: [
      {
        type: 'OffiaccountPageShare',
        bySelf: true,
        id: 5
      },
      {
        type: 'OffiaccountPageShare',
        bySelf: false,
        from: 2,
        id: 5
      },
      {
        type: 'ImageMessage',
        bySelf: true,
        id: 4,
        imgUrl: 'https://pic.rmb.bdstatic.com/bjh/42b099851588919a179e96c124c0053a.jpeg',
        width: 367,
        height: 688
      },
      {
        type: 'ImageMessage',
        bySelf: false,
        from: 2,
        id: 3,
        imgUrl: 'https://pic.rmb.bdstatic.com/bjh/42b099851588919a179e96c124c0053a.jpeg',
        width: 367,
        height: 688
      },
      {
        type: 'TextMessage',
        text: '文本消息',
        bySelf: true,
        id: 3
      },
      {
        type: 'TextMessage',
        text: '文本消息',
        bySelf: false,
        from: 2,
        id: 2
      },
      { type: 'time', time: '17:40', id: 1 }
    ],
    2: [
      { type: 'ImageMessage', bySelf: true, id: 11, imgUrl: 'https://pic.rmb.bdstatic.com/bjh/42b099851588919a179e96c124c0053a.jpeg', width: 367, height: 688 },
      { type: 'time', time: '17:40', id: 10 },
      { type: 'TextMessage', text: '要不是玩草方格我早就赚到钱了', bySelf: false, from: 4, id: 9 },
      { type: 'TextMessage', text: '现在去不也是追涨嘛', bySelf: false, from: 4, id: 8 },
      { type: 'TextMessage', text: '就该早卖的', bySelf: false, from: 3, id: 7 },
      { type: 'TextMessage', text: '要不是缺钱，我刚才就把这亏的钱赚回来了', bySelf: false, from: 3, id: 6 },
      { type: 'TextMessage', text: '最高峰接的', bySelf: false, from: 3, id: 5 },
      { type: 'TextMessage', text: '什么时候倒也不知道', bySelf: false, from: 2, id: 4 },
      { type: 'TextMessage', text: '台子就这样了', bySelf: false, from: 2, id: 3 },
      { type: 'TextMessage', text: '当解压', bySelf: false, from: 2, id: 2 },
      { type: 'TextMessage', text: '笑死骂客服没有用', bySelf: false, from: 2, id: 1 }
    ],
    3: [
      { type: 'ImageMessage', bySelf: true, id: 2, imgUrl: 'https://pic.rmb.bdstatic.com/bjh/42b099851588919a179e96c124c0053a.jpeg', width: 367, height: 688 },
      { type: 'TextMessage', text: '被抢了', bySelf: false, id: 6, from: 12 },
      { type: 'TextMessage', text: '刚看到个30的ssr', bySelf: false, id: 6, from: 12 },
      { type: 'TextMessage', text: '我均价200买的', bySelf: false, id: 6, from: 12 },
      { type: 'TextMessage', text: '哪个逼在偷偷抄底', bySelf: false, id: 6, from: 7 },
      { type: 'TextMessage', text: '操', bySelf: false, id: 6, from: 7 },
      { type: 'time', time: '17:40', id: 10 },
      { type: 'TextMessage', text: '前两天200多', bySelf: false, id: 6, from: 7 },
      { type: 'TextMessage', text: '成就都抄完了', bySelf: false, id: 6, from: 7 },
      { type: 'TextMessage', text: '看看会不会起飞', bySelf: false, id: 5, from: 5 },
      { type: 'TextMessage', text: '留了几百块在里面', bySelf: false, id: 4, from: 5 },
      { type: 'TextMessage', text: '抛完了', bySelf: false, id: 3, from: 5 },
      { type: 'time', time: '4月24日 下午16:33', id: 1 }
    ],
    4: [
      { type: 'ImageMessage', bySelf: true, id: 2, imgUrl: 'https://pic.rmb.bdstatic.com/bjh/42b099851588919a179e96c124c0053a.jpeg', width: 367, height: 688 },
      { type: 'time', time: '16:08', id: 10 },
      { type: 'TextMessage', text: '我不行了', bySelf: false, id: 6, from: 9 },
      { type: 'TextMessage', text: '什么时候上盯链兄弟们', bySelf: false, id: 6, from: 13 },
      { type: 'TextMessage', text: '你们怎么都不抄成就了', bySelf: false, id: 6, from: 15 },
      { type: 'TextMessage', text: '不是要卡创世合成吗', bySelf: false, id: 6, from: 15 },
      { type: 'TextMessage', text: '都要合完了', bySelf: false, id: 6, from: 15 },
      { type: 'time', time: '17:40', id: 10 },
      { type: 'TextMessage', text: '那两三百买成就的大冤种怎么办', bySelf: false, id: 6, from: 11 },
      { type: 'TextMessage', text: '成就都抄完了', bySelf: false, id: 6, from: 11 },
      { type: 'TextMessage', text: '恩', bySelf: false, id: 5, from: 10 },
      { type: 'TextMessage', text: '明天合成结束么', bySelf: false, id: 4, from: 9 },
      { type: 'TextMessage', text: '这个图最少？', bySelf: false, id: 3, from: 9 }
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
    },
    {
      id: 5,
      userName: '几分快乐',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/60/e3664e2e-29c0-9b00-539d-f079a9547b60.jpg'
    },
    {
      id: 6,
      userName: '言不由衷',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/34/86123280-28dd-6691-f570-1629034c5244.jpg'
    },
    {
      id: 7,
      userName: '有点小困',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/55/42899b89-f5fc-c39c-1320-6c0bd5f424e2.jpg'
    },
    {
      id: 8,
      userName: '.',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/96/60feb748-ba3b-f567-5e63-4ea3995c1200.jpg'
    },
    {
      id: 9,
      userName: '行者',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/47/72d73ba0-cbb4-f50c-703a-6d2f89d441d0.jpg'
    },
    {
      id: 10,
      userName: '六月的男孩.',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/58/9932e1f9-17e6-3433-5eba-058d457f651e.jpg'
    },
    {
      id: 11,
      userName: '。',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/100/c38b6811-4b83-f05e-c132-46385fbd9635.jpg'
    },
    {
      id: 12,
      userName: '梭哈是一种智慧',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/25/2f330089-e0ac-d8ec-44d8-4fc8f06c2357.jpg'
    },
    {
      id: 13,
      userName: 'Nuyoah',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/76/9435c7ee-d4fb-d227-07c6-644898d4c6d5.jpg'
    },
    {
      id: 15,
      userName: '妮蔻要骂人惹',
      userAvatar: 'https://skillstore.cdn.bcebos.com/icon/76/c4bbefce-56ae-ac7a-e073-9f365f7960f3.jpg'
    }
  ],

  // 用户
  userId: 1,

  activedConversationId: 1, //
  systemInfo: {}
}

export default state
