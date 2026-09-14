Component({
  properties: {
    active: { type: String, value: 'home' },
    badge: { type: Number, value: 0 }
  },
  data: {
    tabs: [
      { key: 'home', name: '首页', icon: '🏠' },
      { key: 'guide', name: '导览', icon: '🗺️' },
      { key: 'infor', name: '消息', icon: '💬' },
      { key: 'mine', name: '我的', icon: '👤' }
    ],
    routes: {
      home: '/pages/HomePage/HomePage',
      guide: '/pages/Guidance/Guidance',
      infor: '/pages/Infor/Infor',
      mine: '/pages/Person/Person'
    }
  },
  methods: {
    onTap(e) {
      const key = e.currentTarget.dataset.tab
      if (key === this.data.active) return
      wx.redirectTo({ url: this.data.routes[key] })
    }
  }
})
