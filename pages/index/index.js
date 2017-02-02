//index.js
//获取应用实例
var app = getApp()  
var routes = require('routes');  //包含routes.js文件
Page({  
  data: {  
    userInfo: {},  
    cellHeight: '120px',  
    pageItems: []  
  },  
  //事件处理函数  
  onLoad: function () {  
    var that = this  
    console.log(app);  
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {  
      wx.setNavigationBarTitle({  
        title: '九宫格-' + userInfo.nickName,  
        success: function (res) {  
          // success  
        }  
      })  
      that.setData({  
        userInfo: userInfo  //页面数据对象的的userInfo属性值
      })  
      //重组PageItems：9个元素分成3组，每组3个，构成二维矩阵pageItems
      var pageItems = [];  
      var row = [];  
      var len = routes.PageItems.length;
      len = Math.floor((len + 2) / 3) * 3;  //考虑元素个数不是3的倍数的情形
      for (var i = 0; i < len; i++) {  
        if ((i + 1) % 3 == 0) {  
          row.push(routes.PageItems[i]);  
          pageItems.push(row);  //往二维矩阵pageItems添加一行
          row = [];  
          continue;  
        }  
        else {  
          row.push(routes.PageItems[i]);  //每3个凑成一组，构成二维矩阵的一行
        }  
      }  
      wx.getSystemInfo({  
        success: function (res) {  
          var windowWidth = res.windowWidth;  
          that.setData({  
            cellHeight: (windowWidth / 3) + 'px'  //设置cellHeight属性值
          })  
        },  
        complete: function () {  
          that.setData({  
            pageItems: pageItems    //设置pageItems属性值
          })  
        }  
      })  
    })  
  }  
}) 