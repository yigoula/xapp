var app = getApp()

Page({
  data: {
    imgUrls: [
      'http://m.yigoula.com/statics/uploads/shopimg/20151205/66095091304715.jpg',
      'http://m.yigoula.com/statics/uploads/shopimg/20151205/41271202304715.jpg',
      'http://m.yigoula.com/statics/uploads/shopimg/20151205/31414612304715.jpg',
      'http://m.yigoula.com/statics/uploads/shopimg/20151205/63552304304715.jpg',
      'http://m.yigoula.com/statics/uploads/shopimg/20151205/13827375304715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 0,
    duration: 0,
    hotList: [
      {
		  id: 1,
        pic: 'http://m.yigoula.com/statics/uploads/shopimg/20151205/66095091304715.jpg',
        title: '第7期',
        desc: ''
      }, {
		  id: 2,
        pic: 'http://m.yigoula.com/statics/uploads/shopimg/20151205/41271202304715.jpg',
        title: '第6期',
        desc: ''
      }, {
		  id: 3,
        pic: 'http://m.yigoula.com/statics/uploads/shopimg/20151205/31414612304715.jpg',
        title: '第5期',
        desc: ''
      }, {
		  id: 4,
        pic: 'http://m.yigoula.com/statics/uploads/shopimg/20151205/63552304304715.jpg',
        title: '第4期',
        desc: ''
      }, {
		  id: 5,
        pic: 'http://m.yigoula.com/statics/uploads/shopimg/20151205/13827375304715.jpg',
        title: '第3期',
        desc: ''
      }, {
		  id: 6,
        pic: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '第2期',
        desc: ''
      }, {
		  id: 7,
        pic: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '第1期',
        desc: ''
      }
    ],
    buyerList:[
      {
        id: 1,
        avatarUrl: "http://wx.qlogo.cn/mmhead/hwibicRVnYwlzyfnTPicJsKMiaEESqwfskGibVmpDiaibKozFY/132",
        userName: "易购啦测试用户名称1",
        country: "中国",
        province: "福建省",
        city: "厦门市",
        gender: "男",
        ip: "127.0.0.1",
        buyTimes: 1,
        buyTime: '2016-03-27 21:38:07.565000'
      },{
        id: 2,
        avatarUrl: "",
        userName: "易购啦测试用户名称2",
        country: "中国",
        province: "云南省",
        city: "昭通市",
        gender: "男",
        ip: "127.0.0.1",
        buyTimes: 1,
        buyTime: '2016-03-27 21:26:01.321000'
      },{
        id: 3,
        avatarUrl: "",
        userName: "易购啦测试用户名称3",
        country: "中国",
        province: "黑龙江省",
        city: "佳木斯市",
        gender: "男",
        ip: "127.0.0.1",
        buyTimes: 1,
        buyTime: '2016-03-26 15:21:07.561000'
      },{
        id: 4,
        avatarUrl: "",
        userName: "易购啦测试用户名称4",
        country: "中国",
        province: "河北省",
        city: "石家庄市",
        gender: "男",
        ip: "127.0.0.1",
        buyTimes: 1,
        buyTime: '2016-03-26 09:38:07.565000'
      }
    ],
	cartCountText: 0,
	/*揭晓信息*/
	resultInfo: {
		userid: 101,
		username: "郑钱",
		useravatar: "http://m.yigoula.com/statics/uploads/photo/member.jpg", /*用户头像*/
		totalbuytimes: 2,
		opentime: "2016-03-10 17:16:58.970",
		buytime: "2016-03-10 16:52:59.932",
		luckynumber: 10000009,
		item: 324 /*应该是历史开过的记录id*/
	}
  },
  onLoad: function(options) {
      console.log("进入detail页面")
    this.setData({
      title: options.title,
	  oldqs: options.oldqs
    })
  },
  addToCart: function(e) {
    app.addCart()
	var appCartCount = app.cartCount
	console.log(appCartCount)
	this.setData({
		cartCountText: appCartCount
	})
  },
})