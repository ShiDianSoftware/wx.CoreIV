function CoreIV() { }

CoreIV.anim_creator = wx.createAnimation({

  transformOrigin: "50% 50% 0",
  duration: 300,
  timingFunction: "ease-out",
  delay: 0

});

//展示加载中
CoreIV.showLoadingInVC = function (vc) {

  this.anim_creator.opacity(1).step()
  var anim_obj = this.anim_creator.export()
  let CoreIVData = {
    img: "jiazaizhong",
    title: "正在加载",
    desc: "请稍等片刻，马上就好",
    CoreIVAnim: anim_obj,
    index: 0
  }
  vc.setData({ CoreIVData })
}

//暂无数据
CoreIV.showNoDataInVC = function (vc) {

  this.anim_creator.opacity(1).step()
  var anim_obj = this.anim_creator.export()
  let CoreIVData = {
    img: "wushuju",
    title: "暂无数据",
    desc: "空空如也，什么都没有",
    CoreIVAnim: anim_obj,
    index: 1
  }
  vc.setData({ CoreIVData })
}

//加载失败
CoreIV.showErrorInVC = function (vc, str="") {

  this.anim_creator.opacity(1).step()
  var anim_obj = this.anim_creator.export()
  let CoreIVData = {
    img: "jiazaishibai",
    title: "加载失败",
    desc: str == "" ? "出错咯，稍后再试试呢" : str,
    CoreIVAnim: anim_obj,
    index: 2
  }
  vc.setData({ CoreIVData })
}

//dismiss
CoreIV.dismissFromVC = function(vc){
  this.anim_creator.opacity(0).step()
  var anim_obj = this.anim_creator.export()
  let CoreIVData = {
    CoreIVAnim: anim_obj
  }
  vc.setData({ CoreIVData })
}



module.exports = CoreIV

