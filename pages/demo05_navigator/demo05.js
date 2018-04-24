// pages/demo05_navigator/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{id:1,name:'john'},{id:2,name:'root'},{id:3,name:'shaw'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  jump(){
    wx.navigateTo({
      url: '../demo04_request/demo04',
    })
  },
  jumpToDetail(){
    wx.navigateTo({
      url: './demo05_detail?id=3',
    })
  },
  showMyName(e){
    console.log(e);
    console.log(this.data.list[e.target.id].name);
  },
  showName(e){
    console.log(e);
    console.log(e.target.dataset.uname);
  }
})