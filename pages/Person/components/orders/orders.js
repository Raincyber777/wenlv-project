Component({
  data: {
    orders: [
      { key: 'pending', name: '待付款', icon: '💳', bg: '#e8f1ff' },
      { key: 'unused', name: '待使用', icon: '🎫', bg: '#fff3d6' },
      { key: 'done', name: '已完成', icon: '✅', bg: '#e7f8f0' },
      { key: 'refund', name: '退款', icon: '🔄', bg: '#e8f4ff' }
    ]
  },
  methods: {
    onOrder(e) {
      this.triggerEvent('order', { type: e.currentTarget.dataset.type })
    }
  }
})
