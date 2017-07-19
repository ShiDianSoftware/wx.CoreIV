// Index.js
let CoreIV = require("../FrameWorks/CoreIV/CoreIV.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  btnClick: function(){

    CoreIV.showLoadingInVC(this)

    let weakSelf = this
    setTimeout(function () {
      CoreIV.dismissFromVC(weakSelf)
    }, 2000)

  },



  //用户点击了空视图
  CoreIVClickAction: function(e){
    //0.加载中 1.暂无数据 2.加载失败
    let index = e.currentTarget.dataset.index
    
  }

})