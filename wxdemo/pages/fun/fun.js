Page({
  data:{
      html:""
  },
  tapName: function(event) {
    this.setData({
      html:JSON.stringify(event)
    })
  }
})