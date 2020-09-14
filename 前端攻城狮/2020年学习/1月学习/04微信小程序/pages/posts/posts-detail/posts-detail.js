var postsData = require('../../../data/posts-data.js');
// pages/posts/posts-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 用户点击触发事件
  onStar:function(){
    // 获取所有文章
    var stars = wx.getStorageSync('star');
    // 获取单篇文章
    var star = stars[this.data.currentPostId];
    star = !star;
    // 修改单篇文章
    stars[this.data.currentPostId] = star;
    // 修改所有文章
    wx.setStorageSync('star', stars);
    // 将更新的数据绑定
    this.setData({star});

    wx.showToast({
      title:star?'收藏成功':'取消成功',
      duration:1000
    })
  },

  onShare:function(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var posts = postsData.posts[postId];
    this.setData({
      ...posts
    })

    // 读取缓存
    var star = wx.getStorageSync('star');
    // 总文章缓存判空
    if(star){
      // 单篇文章缓存判空
      var star = star[postId]
      if(star){
        this.setData({
          star:star[postId]
        })
      }
    }else{
      // 如果没有缓存，则设置默认无
      var star = {}
      star[postId] = false;
      wx.setStorageSync('star', star);
    }
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

  }
})