App({
    getData:function(){
        var that = this
        wx.request({
          url: 'http://localhost:8080/wxdata.php',
          data: {},
          header: {
              'content-type': 'application/json'
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            //that.setData
            that.globalData = res.data
            console.log(that.globalData)
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    globalData:{
      myname:null,
      shoppinglist:[]
    }
})