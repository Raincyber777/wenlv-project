Component({
  data: {
    spots: [
      { id: 1, name: '泰安古镇', distance: '0m', desc: '后山门户 · 食宿集散', audio: '10:00', icon: '🏘️', bg: 'linear-gradient(135deg, #ffb75e, #ff7e3e)' },
      { id: 2, name: '飞泉沟', distance: '600m', desc: '峡谷溪流 · 沁凉避暑', audio: '08:20', icon: '🌊', bg: 'linear-gradient(135deg, #82bcff, #3e7bfa)' },
      { id: 3, name: '五龙沟', distance: '1.1km', desc: '五龙吐水 · 幽谷栈道', audio: '09:05', icon: '🌿', bg: 'linear-gradient(135deg, #9beeb8, #34c98a)' },
      { id: 4, name: '又一村', distance: '1.6km', desc: '山中村落 · 补给休整', audio: '07:40', icon: '🏡', bg: 'linear-gradient(135deg, #ffd36e, #ff9a3d)' },
      { id: 5, name: '白云古寨', distance: '2.4km', desc: '历史寨堡 · 云海观景', audio: '06:50', icon: '🏔️', bg: 'linear-gradient(135deg, #b993ff, #7a4df0)' },
      { id: 6, name: '翠映湖', distance: '2.9km', desc: '高山平湖 · 泛舟体验', audio: '05:30', icon: '🛶', bg: 'linear-gradient(135deg, #55ddc6, #0aa88f)' }
    ]
  },
  methods: {
    onNavigate(e) {
      this.triggerEvent('navigate', { name: e.currentTarget.dataset.name })
    },
    onPlay(e) {
      this.triggerEvent('play', { name: e.currentTarget.dataset.name })
    }
  }
})
