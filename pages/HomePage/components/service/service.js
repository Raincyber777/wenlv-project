Component({
  data: {
    services: [
      { id: 1, name: '找厕所', icon: '🚻', bg: '#e7f8f0' },
      { id: 2, name: '一键救援', icon: '🆘', bg: '#ffecec' },
      { id: 3, name: '文创商店', icon: '🛍️', bg: '#fff6e0' }
    ]
  },
  methods: {
    onService(e) {
      this.triggerEvent('service', { name: e.currentTarget.dataset.name })
    }
  }
})
