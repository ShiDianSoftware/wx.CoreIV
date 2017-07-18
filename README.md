# wx.CoreIV

一、快速集成：
=================================

#### 1.复制CoreIV到FrameWorks目录


#### 2.集成js文件，到当前js页面：

    let CoreIV = require("../FrameWorks/CoreIV/CoreIV.js")


#### 3.集成wxml文件，到当前js页面：

    <import src="/pages/FrameWorks/CoreIV/CoreIV.wxml" />
    <template is="CoreIV" data="{{...CoreIVData}}"></template>

#### 4.集成wxss文件，到当前app.css文件：

    @import "/pages/FrameWorks/CoreIV/CoreIV.wxss";



二、快速使用：
=================================

    //加载中
    CoreIV.showLoadingInVC(this)
    //暂无数据
    CoreIV.showNoDataInVC(this)
    //加载失败，第二个选填参数可自定义错误信息
    CoreIV.showErrorInVC(this)
    //dismiss
    CoreIV.dismissFromVC(this)

    //用户点击了空视图
    CoreIVClickAction: function(e){
      //0.加载中 1.暂无数据 2.加载失败
      let index = e.currentTarget.dataset.index
    }
