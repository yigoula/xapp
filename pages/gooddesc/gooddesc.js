var WxParse = require('../../wxParse/wxParse.js');

var article='<div class="Product_Con hide" style="display:block;"><p><b style="color:red;padding: 10px;">你好</b>goodsdescgoodsdescgoodsdescgoodsdescgoodsdescgoodsdescgoodsdesc</p><p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1487448297162&amp;di=33d67a6041532a658d3a89b29ce14071&amp;imgtype=0&amp;src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F77%2F14%2F45S58PIC7EK.jpg" width="600" height="474"></p></div>';

Page({
  data: {
    wxParseData: null
  },
	onLoad:function(){
		console.log('进入gooddesc页面');
		var that = this
		that.setData({
			wxParseData: WxParse.wxParse('wxParseData','html',article,that,5)
		});
		console.log('成功进行html解析');
	}
})