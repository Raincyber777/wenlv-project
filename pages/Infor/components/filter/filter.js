Component({
  properties: {
    active: { type: String, value: 'all' }
  },
  data: {
    tabs: [
      { key: 'all', name: '全部' },
      { key: 'system', name: '系统' },
      { key: 'order', name: '订单' },
      { key: 'service', name: '客服' }
    ]
  },
  methods: {
    onTap(e) {
      this.triggerEvent('change', { key: e.currentTarget.dataset.key })
    }
  }
})
