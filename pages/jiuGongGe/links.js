var PageItems =  
  [  
    [
        {  
        text: '格子1',  
        icon: '../../images/c1.png',  
        route: '../logs/logs',  
        },  
        {  
        text: '格子2',  
        icon: '../../images/c2.png',  
        route: '../c2/c2',  
        },  
        {  
        text: '格子3',  
        icon: '../../images/c3.png',  
        route: '../c3/c3',  
        },  
    ],
    [
        {  
        text: '格子4',  
        icon: '../../images/c4.png',  
        route: '../c4/c4',  
        },  
        {  
        text: '格子5',  
        icon: '../../images/c5.png',  
        route: '../c5/c5',  
        },  
        {  
        text: '格子6',  
        icon: '../../images/c6.png',  
        route: '../c6/c6',  
        },  
    ],
    [
        {  
        text: '格子7',  
        icon: '../../images/c7.png',  
        route: '../c7/c7',  
        },  
        {  
        text: '格子8',  
        icon: '../../images/c8.png',  
        route: '../c8/c8',  
        },  
        {  
        text: '格子9',  
        icon: '../../images/c9.png',  
        route: '../c9/c9',  
        }  
    ]

  ];  
//每个js文件自动创建module对象，module有一个exports属性
//这样做后，导入本js文件的的js文件内才能够访问到到PageItems。
module.exports = {  
  PageItems: PageItems  
}  