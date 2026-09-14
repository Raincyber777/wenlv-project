Page({
  data: {
    statusBarHeight: 20,
    chips: ['青城山有什么好玩的?', '前山和后山有什么区别?', '推荐一条轻松路线']
  },
  onLoad() {
    try {
      const info = wx.getWindowInfo()
      this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    } catch (e) {
      const info = wx.getSystemInfoSync()
      this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    }
  },
  onVoice() {
    wx.showToast({ title: '语音助手已就绪', icon: 'none' })
  },
  onChip(e) {
    wx.showToast({ title: `提问：${e.currentTarget.dataset.q}`, icon: 'none' })
  },
  onMore() {
    wx.redirectTo({ url: '/pages/Guidance/Guidance' })
  },
  onPlan(e) {
    wx.showToast({ title: `规划线路：${e.detail.name}`, icon: 'none' })
  }
})
