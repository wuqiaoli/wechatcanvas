//index.js
//获取应用实例
const app = getApp()
const ctx = wx.createCanvasContext('firstCanvas')

Page({
  data:{
    list: [
      {id:1,src:'../../img/1.png'},
      {id:2,src: '../../img/2.png'},
      {id:3,src:'../../img/3.png'}, 
      {id:4,src:'../../img/4.png'}
    ],
    inputValue: '',
    path:'',
    focus: false
  },
  onReady: function (e) {
   
  },
  getImg(e){
    let img = e.target.dataset.src;
    ctx.drawImage(img, 0, 0,250,250)
    ctx.draw();
    this.setData({
      path: img
    })
  },
  addText(){
    ctx.drawImage(this.data.path, 0, 0, 250, 250)
    ctx.setFontSize(20)
    ctx.fillText(this.data.inputValue, 50, 20);
    ctx.draw()
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  
})
