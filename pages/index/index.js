var app = getApp()  

var shoppings={
    myname:null,
    shoppinglist:[] //从接口接收需要展示的json数据
}

Page({    
    data:{
        mylist:shoppings
    },
    onLoad:function(){
        var that = this
        app.getData() // 这个是异步调用ws.request        
        console.log('成功调用接口')
    },
    onShow:function(){
        console.log('onShow')
        this.setData({
            mylist : app.globalData
        })
    },
    onReady:function(){
        console.log('onReady 已经从接口读取数据到页面')
        this.setData({
            mylist : app.globalData
        })
    }
})