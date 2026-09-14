Component({
  data: {
    routes: [
      { id: 1, banner: '3小时速通青城前山', bannerBg: 'linear-gradient(135deg, #ff9a3d, #f5544d)', name: '特种兵爬山', tags: ['高强度', '前山'], distance: '全程 6.5km', duration: '约 3h' },
      { id: 2, banner: '亲子戏水·慢享时光', bannerBg: 'linear-gradient(135deg, #34c98a, #0eb877)', name: '带娃轻松游', tags: ['轻松', '后山'], distance: '全程 2.8km', duration: '约 2h' },
      { id: 3, banner: '问道祈福·文化漫步', bannerBg: 'linear-gradient(135deg, #b993ff, #7a4df0)', name: '文化祈福游', tags: ['轻松', '前山'], distance: '全程 4.2km', duration: '约 2.5h' },
      { id: 4, banner: '日落时分·登顶大片', bannerBg: 'linear-gradient(135deg, #ff9ec4, #f0558f)', name: '日落摄影游', tags: ['轻松', '前山'], distance: '全程 5.6km', duration: '约 3.5h' }
    ]
  },
  methods: {
    onPlan(e) {
      this.triggerEvent('plan', { name: e.currentTarget.dataset.name })
    }
  }
})
