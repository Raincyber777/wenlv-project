Page({
  data: {
    statusBarHeight: 20,
    activeFilter: 'all',
    badge: 3,
    messages: [
      { id: 1, category: 'system', title: '路线推荐已生成', content: '根据您的偏好 已为您定制 4 条青城山路线', time: '刚刚', unread: true, icon: '🎯', bg: '#ffe9ef' },
      { id: 2, category: 'order', title: '门票预订成功', content: '青城前山门票 ×2,请于 9 月 4 日入园', time: '10:30', unread: true, icon: '🎫', bg: '#fff3d6' },
      { id: 3, category: 'service', title: '小青回复了你', content: '关于前山和后山区别的解答,点击查看', time: '昨天', unread: true, icon: '💬', bg: '#efe9ff' },
      { id: 4, category: 'system', title: '新人优惠券到账', content: '10 元无门槛券已发放,3 日内有效', time: '昨天', unread: false, icon: '🎁', bg: '#fff6e0' },
      { id: 5, category: 'system', title: '景区公告', content: '9 月 5 日 6:00-8:00 前山索道例行维护', time: '2 天前', unread: false, icon: '📢', bg: '#ffe4ec' }
    ],
    filteredMessages: []
  },
  onLoad() {
    try {
      const info = wx.getWindowInfo()
      this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    } catch (e) {
      this.setData({ statusBarHeight: 20 })
    }
    this.setData({ filteredMessages: this.data.messages })
  },
  filterMessages(key) {
    const all = this.data.messages
    if (key === 'all') return all
    return all.filter(m => m.category === key)
  },
  onFilter(e) {
    const key = e.detail.key
    this.setData({
      activeFilter: key,
      filteredMessages: this.filterMessages(key)
    })
  },
  onMarkRead() {
    const messages = this.data.messages.map(m => ({ ...m, unread: false }))
    this.setData({ badge: 0, messages })
    this.setData({ filteredMessages: this.filterMessages(this.data.activeFilter) })
    wx.showToast({ title: '已全部标记为已读', icon: 'none' })
  },
  onItem(e) {
    wx.showToast({ title: `查看：${e.detail.title}`, icon: 'none' })
  }
})
