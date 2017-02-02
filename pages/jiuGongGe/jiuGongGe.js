var links = require("links")    //links变量关联links.js文件
Page({
    data: {
        gridLines:[],
    },

    onLoad: function(){
        this.setData({
            gridLines: links.PageItems    //访问links.js文件的PageItems
        })
    },

    onReady: function(){
        // console.log("矩阵行数：" + this.data.gridLines.length);
        // console.log(this.data.gridLines[0]);
    }
})