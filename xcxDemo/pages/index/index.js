//index.js
//获取应用实例
var app = getApp()
var inputArray={}
Page({
  data: {
    BMI: '',
    focus:false
  },
  bindChange(e){
    inputArray[e.currentTarget.id] = e.detail.value
  },
  BMIHandle(){
    let BMI = (inputArray["weight"] / (inputArray["height"] * inputArray["height"] / 10000)).toFixed(2)
    let type = "  中国标准";
    if (BMI < 18.5){
      type += "偏瘦"
    }
    if (BMI >= 18.5 && BMI < 23.9) {
      type += "正常"
    }
    if (BMI > 24 && BMI < 27.9) {
      type += "偏胖"
    }
    if (BMI >= 28) {
      type += "肥胖"
    }
    if (BMI >= 40) {
      type += "重度肥胖"
    }

    this.setData({
      BMI: (BMI == "NaN" ? 0 : BMI) + type
      })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
