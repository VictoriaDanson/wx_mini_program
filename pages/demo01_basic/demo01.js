// pages/demo01_basic/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:3,
    list:[100,200,300],
    answer:'f',
    info:{},
    myCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  read(){
    var appInstance = getApp();
    var nowCount = appInstance.globalData.count;
    console.log(nowCount);
  },
  write(){
    var appInstance = getApp();
    var nowCount = appInstance.globalData.count;
    nowCount++;
    appInstance.globalData.count = nowCount
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  handleClick(){
    var nowNum = this.data.num;
    nowNum++
    console.log(nowNum);
    this.setData({
      num:nowNum
    })
  },
  getInfo(data){
  console.log(data.detail.rawData);
  JSON.stringify
  this.setData({ info: JSON.parse(data.detail.rawData)});
  },
  
})