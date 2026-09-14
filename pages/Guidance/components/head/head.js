Component({
  data: {
    spots: [
      { id: 1, name: '建福宫', distance: '0m', desc: '道教第一宫观 · 入口', audio: '12:30', icon: '🏯', bg: 'linear-gradient(135deg, #ffb75e, #ff7e3e)' },
      { id: 2, name: '天师洞', distance: '480m', desc: '张道陵创教之地 · 千年银杏', audio: '08:45', icon: '🌲', bg: 'linear-gradient(135deg, #9beeb8, #34c98a)' },
      { id: 3, name: '祖师殿', distance: '860m', desc: '沿石阶上行 · 观前山全景', audio: '06:20', icon: '⛩️', bg: 'linear-gradient(135deg, #82bcff, #3e7bfa)' },
      { id: 4, name: '朝阳洞', distance: '1.2km', desc: '天然洞穴 · 伏鳌观景', audio: '05:10', icon: '⛰️', bg: 'linear-gradient(135deg, #ff9ec4, #f0558f)' },
      { id: 5, name: '上清宫', distance: '1.8km', desc: '登顶核心 · 日落最佳', audio: '09:30', icon: '🏯', bg: 'linear-gradient(135deg, #55ddc6, #0aa88f)' },
      { id: 6, name: '老君阁', distance: '2.1km', desc: '制高点 · 俯瞰全山', audio: '07:15', icon: '🗼', bg: 'linear-gradient(135deg, #b993ff, #7a4df0)' }
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
