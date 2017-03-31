//index.js
//获取应用实例
var app = getApp()
var inputArray={}
Page({
  data: {
    BMI: '',
  },
  bindChange(e){
    inputArray[e.currentTarget.id] = e.detail.value
  },
  BMIHandle(){
    let BMI=(inputArray["weight"]/(inputArray["height"]*inputArray["height"])).toFixed(2)
    this.setData({
        BMI:BMI
      })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
