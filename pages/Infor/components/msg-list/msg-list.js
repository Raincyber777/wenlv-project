Component({
  properties: {
    list: { type: Array, value: [] }
  },
  methods: {
    onItem(e) {
      this.triggerEvent('item', { title: e.currentTarget.dataset.title })
    }
  }
})
