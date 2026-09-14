Component({
  data: {
    menus: [
      { name: '我的收藏', desc: '4 个景点 · 2 条路线', icon: '⭐' },
      { name: '优惠券', desc: '5 张可用', icon: '🎟️' },
      { name: '我的积分', desc: '128 积分', icon: '💎' },
      { name: '游览足迹', desc: '已到访 3 次', icon: '👣' },
      { name: '帮助与反馈', desc: '常见问题 · 联系客服', icon: '❓' },
      { name: '设置', desc: '通知 · 隐私 · 关于', icon: '⚙️' }
    ]
  },
  methods: {
    onMenu(e) {
      this.triggerEvent('menu', { name: e.currentTarget.dataset.name })
    }
  }
})
