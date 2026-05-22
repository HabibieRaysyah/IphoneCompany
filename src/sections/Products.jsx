import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'

const products = [
  {
    badge: 'New 2025',
    badgeColor: { border: 'rgba(0,113,227,0.4)', color: '#2997ff', bg: 'rgba(0,113,227,0.08)' },
    icon: '📱',
    iconBg: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
    iconBorder: 'rgba(255,255,255,0.08)',
    colors: ['#1c1c1e', '#f5f5f7', '#c0c0c0', '#4a9eda'],
    name: 'iPhone 16',
    desc: 'A18 chip with 6-core GPU. Advanced Camera Control. All-day battery life that goes longer than ever before.',
    price: 'From $799',
  },
  {
    badge: 'Bestseller',
    badgeColor: { border: 'rgba(255,159,10,0.4)', color: '#ff9f0a', bg: 'rgba(255,159,10,0.08)' },
    icon: '🌟',
    iconBg: 'linear-gradient(135deg, rgba(255,159,10,0.15), rgba(255,100,0,0.08))',
    iconBorder: 'rgba(255,159,10,0.2)',
    colors: ['#3a3a3c', '#e3ccb2', '#b8bdb3', '#6c6060'],
    name: 'iPhone 16 Pro',
    desc: 'Titanium. A18 Pro chip. 5x optical zoom. ProMotion always-on display with 120Hz adaptive refresh rate.',
    price: 'From $999',
  },
  {
    badge: 'Ultimate',
    badgeColor: { border: 'rgba(94,92,230,0.4)', color: '#7d7aff', bg: 'rgba(94,92,230,0.08)' },
    icon: '💎',
    iconBg: 'linear-gradient(135deg, rgba(94,92,230,0.15), rgba(41,151,255,0.08))',
    iconBorder: 'rgba(94,92,230,0.2)',
    colors: ['#1c1c1e', '#c0b090', '#b0b8c0', '#5c5050'],
    name: 'iPhone 16 Pro Max',
    desc: 'Our largest Pro display. Unparalleled camera system. The most powerful iPhone ever crafted by human hands.',
    price: 'From $1,199',
  },
]

export default function Products() {
  return (
    <div id="products" style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0f 100%)' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-10 pt-24 pb-14">
        <RevealOnScroll>
          <span className="block text-xs font-medium tracking-[4px] uppercase mb-4" style={{ color: '#2997ff' }}>Our Lineup</span>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: -2, lineHeight: 1.05 }}>
            Every iPhone.<br />Perfected.
          </h2>
          <p className="font-light leading-relaxed max-w-lg" style={{ fontSize: 'clamp(16px,1.8vw,20px)', color: 'rgba(255,255,255,0.45)' }}>
            From the powerful standard to the extraordinary Pro Max — find the iPhone made for you.
          </p>
        </RevealOnScroll>
      </div>

      {/* Grid */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 2,
          background: 'rgba(255,255,255,0.04)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {products.map((p, i) => (
          <RevealOnScroll key={p.name} delay={i * 0.12}>
            <motion.div
              className="relative overflow-hidden cursor-pointer"
              style={{ background: '#000', padding: '60px 48px' }}
              whileHover={{ background: '#0a0a0f' }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,113,227,0.08) 0%, transparent 60%)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-8"
                style={{
                  border: `1px solid ${p.badgeColor.border}`,
                  color: p.badgeColor.color,
                  background: p.badgeColor.bg,
                  letterSpacing: '1px',
                }}
              >
                {p.badge}
              </div>

              {/* Icon */}
              <motion.div
                className="flex items-center justify-center mb-8 text-3xl"
                style={{
                  width: 80, height: 80, borderRadius: 20,
                  background: p.iconBg,
                  border: `1px solid ${p.iconBorder}`,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.4 }}
              >
                {p.icon}
              </motion.div>

              {/* Colors */}
              <div className="flex gap-2 mb-6">
                {p.colors.map((c) => (
                  <div key={c} style={{ width: 14, height: 14, borderRadius: '50%', background: c, border: '1.5px solid rgba(255,255,255,0.18)' }} />
                ))}
              </div>

              <div className="text-3xl font-bold mb-3" style={{ letterSpacing: -1 }}>{p.name}</div>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>
              <div className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.price}</div>

              <motion.span
                className="inline-flex items-center gap-1 text-sm"
                style={{ color: '#2997ff' }}
                whileHover={{ gap: '10px' }}
              >
                Learn more →
              </motion.span>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
