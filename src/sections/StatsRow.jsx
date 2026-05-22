import RevealOnScroll from '../components/RevealOnScroll'

const stats = [
  { num: '48MP', label: 'Main Camera' },
  { num: 'A18', label: 'Pro Chip' },
  { num: '29h', label: 'Battery Life' },
  { num: 'Ti', label: 'Titanium Frame' },
  { num: '5G', label: 'Ultra-fast' },
]

export default function StatsRow() {
  return (
    <div className="border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#000' }}>
      <div className="max-w-6xl mx-auto px-10 py-14 flex items-center justify-around flex-wrap gap-6">
        {stats.map((s, i) => (
          <RevealOnScroll key={s.num} delay={i * 0.1}>
            <div className="text-center">
              <div
                className="font-bold tracking-tight"
                style={{
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  letterSpacing: -2,
                  background: 'linear-gradient(180deg, #fff, rgba(255,255,255,0.5))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.num}
              </div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
