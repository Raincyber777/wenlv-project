Page({
  data: {
    statusBarHeight: 20
  },
  onLoad() {
    try {
      const info = wx.getWindowInfo()
      this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    } catch (e) {
      this.setData({ statusBarHeight: 20 })
    }
  },
  onOrder(e) {
    wx.showToast({ title: `我的订单：${e.detail.type}`, icon: 'none' })
  },
  onMenu(e) {
    wx.showToast({ title: `${e.detail.name}`, icon: 'none' })
  }
})
