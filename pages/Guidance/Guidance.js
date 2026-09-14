Page({
  data: {
    statusBarHeight: 20,
    activeTab: 'head'
  },
  onLoad() {
    try {
      const info = wx.getWindowInfo()
      this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    } catch (e) {
      this.setData({ statusBarHeight: 20 })
    }
  },
  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab })
  },
  onSearch() {
    wx.showToast({ title: '搜索景点', icon: 'none' })
  },
  onFullscreen() {
    wx.showToast({ title: '打开全屏地图', icon: 'none' })
  },
  onNavigate(e) {
    wx.showToast({ title: `导航：${e.detail.name}`, icon: 'none' })
  },
  onPlay(e) {
    wx.showToast({ title: `播放讲解：${e.detail.name}`, icon: 'none' })
  }
})
