// pages/demo04_request/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
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
    var nowList = this.data.list;
    for(var i=0;i<5;i++){
      nowList.unshift({id:Math.floor(Math.random()*100)});
    }
    this.setData({
      list: nowList
    });
    console.log(nowList);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var nowList = this.data.list;
    for (var i = 0; i < 5; i++) {
      nowList.push({ id: Math.floor(Math.random() * 100) });
    }
    this.setData({
      list: nowList
    });
    console.log(nowList);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  loadmore(){
    wx.request({
      url: 'http://jsonplaceholder.typicode.com/users',
      success:(result)=>{
      console.log(result);
      this.setData({
        list:this.data.list.concat(result.data)
      })
      }
    })
  }
})