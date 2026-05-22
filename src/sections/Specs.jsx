import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'

const specs = [
  ['Display', '6.9" Super Retina XDR OLED 2868 × 1320 px'],
  ['Chip', 'A18 Pro, 3nm, 6-core CPU'],
  ['Main Camera', '48MP Fusion, ƒ/1.78 aperture'],
  ['Front Camera', '12MP TrueDepth, ƒ/1.9'],
  ['Battery', '4685 mAh, 33h video playback'],
  ['Charging', 'MagSafe 25W, USB-C 27W'],
  ['Storage', '256GB / 512GB / 1TB'],
  ['Build', 'Grade 5 Titanium, Ceramic Shield'],
  ['Connectivity', '5G, Wi-Fi 7, Bluetooth 5.3'],
  ['Water Resistance', 'IP68, 6m for 30 minutes'],
  ['Colors', 'Black Titanium, Natural, White, Desert'],
  ['Price', 'From $1,199 USD'],
]

export default function Specs() {
  return (
    <div style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto px-10 py-24">
        <RevealOnScroll>
          <span className="block text-xs font-medium tracking-[4px] uppercase mb-4" style={{ color: '#2997ff' }}>Tech Specs</span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: -2, lineHeight: 1.05 }}>
            Every detail.<br />Perfected.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div
            className="mt-14 overflow-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 2,
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {specs.map(([label, value]) => (
              <motion.div
                key={label}
                className="flex items-center justify-between"
                style={{
                  background: '#000', padding: '22px 28px',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
                whileHover={{ background: '#0a0a0a' }}
              >
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                <span className="text-sm font-medium text-right max-w-xs" style={{ color: '#fff' }}>{value}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
