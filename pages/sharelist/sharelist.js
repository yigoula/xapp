Page({
  data: {
      totalShareCount: 2,
      totalCommentCount: 1,
      shareList: [
      {
          id: 1,
          avatarUrl: "http://wx.qlogo.cn/mmhead/hwibicRVnYwlzyfnTPicJsKMiaEESqwfskGibVmpDiaibKozFY/132",
          userName: "易购啦测试用户名称1",
          shareTitle: "我中奖了，终于收到货物了",
          shareBatchNum: 3,
          shareTime: "2017-01-05 12:02:36",
          shareText: "确实很难用简单的词汇去形容。 第一眼初见，印象不过泛泛，毕竟没有恢弘的建筑，没有宽敞的前厅，稍显昏暗的环境让人很难立刻静下心来去关注她的种种细节。但是随着时间的推移，对她的了解不断深入，她的温雅，她的精致，点点滴滴，都让人越来越感受到她的独特魅力，如一位含蓄典雅的江南女子，竟能比盛装示人的国际化五星级酒店更令人难忘。 其实从设施方面看，同文君亭真是很好的诠释了魔都的寸土寸金，从酒店大堂到走廊房间，空间都不宽敞。好在麻雀虽小但五脏俱全，休息区的书刊和免费自助咖啡茶饮、餐厅都可以为顾客提供优质的服务；房间中除了一般的设备设施，还提供了新风系统、JBL蓝牙音响、胶囊咖啡机及咖啡、电水壶及免费饮用水、小冰箱及软饮零食、保险柜、熨斗甚至雨伞，更值得一提的，是洗手间中细致入微的配置，特别是那一朵康乃馨，真真让当时浮躁的我瞬间安静了下来。 每个来过同文君亭的人都对她的早餐赞不绝口，我也觉得，这真的是我在上海住过的几家酒店中吃得最舒服的一家，种类丰富，味道适口，环境舒适，服务及时，真正的一天好开始。至于每天晚上的暖心粥，我并没有去体验，不过单看同文君亭能够做出这样的暖心安排，我想已经值得为之点个赞了。 这样的一家酒店，在地理位置方面虽不起眼，但也确实非常便利，3条地铁线路都在千米以内，步行不过几分钟；酒店旁边两家购物中心，购物餐饮娱乐休闲无不方便；如果有需要，工作人员还可以代叫出租，服务不可谓不周到。 综上，如果今后要到其他地方，如果当地也有君亭，我想，我还会选择她。",
          pictures: [      
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/89657046393905.jpg',     'http://m.yigoula.com/statics/uploads/shaidan/20150824/24752073393905.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/95836199393905.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/86887037393905.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/50950142393905.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/27042574393906.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/95087445393906.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/57152521393906.jpg',
		  'http://m.yigoula.com/statics/uploads/shaidan/20150824/71238446393906.jpg'
          ],
          likeCount: 1,
          commentCount: 1
      },{
          id: 2,
          avatarUrl: "http://wx.qlogo.cn/mmhead/hwibicRVnYwlzyfnTPicJsKMiaEESqwfskGibVmpDiaibKozFY/132",
          userName: "易购啦测试用户名称2",
          shareTitle: "什么是煎熬，等待开始",
          shareBatchNum: 3,
          shareTime: "2017-01-05 12:02:36",
          shareText: "欢迎使用云购系统，请注意字符长度限制哦~!",
          pictures: [      'http://m.yigoula.com/statics/uploads/shopimg/20151205/66095091304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/41271202304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/31414612304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/63552304304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/13827375304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/31414612304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/63552304304715.jpg',      'http://m.yigoula.com/statics/uploads/shopimg/20151205/13827375304715.jpg'
          ],
          likeCount: 1,
          commentCount: 1
      }
    ]
  },
  onLoad: function(options) {
      console.log("进入sharelist页面")
    this.setData({
      title: options.title
    })
  }
})