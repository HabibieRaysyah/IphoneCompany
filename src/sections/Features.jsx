import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'

const features = [
  {
    icon: '⚡',
    title: 'A18 Pro Chip',
    desc: 'The world\'s fastest smartphone chip. 6-core CPU and 6-core GPU deliver desktop-class performance in your pocket.',
    stat: '3× FASTER THAN COMPETITION',
  },
  {
    icon: '📷',
    title: 'Pro Camera System',
    desc: '48MP Fusion camera. 5x optical zoom. Photographic Styles. Cinematic mode in 4K Dolby Vision at 120fps.',
    stat: 'PROFESSIONAL STUDIO QUALITY',
  },
  {
    icon: '🔋',
    title: 'All-Day Battery',
    desc: 'Up to 33 hours video playback. MagSafe wireless charging. Reverse wireless charging for your accessories.',
    stat: '29H VIDEO STREAMING',
  },
  {
    icon: '🛡️',
    title: 'Privacy by Design',
    desc: 'Face ID. Secure Enclave. App Tracking Transparency. Your data stays yours — that\'s the promise we keep.',
    stat: 'HARDWARE-LEVEL SECURITY',
  },
  {
    icon: '🌐',
    title: 'Pro Connectivity',
    desc: '5G Gigabit-class. Wi-Fi 7. Ultra Wideband. USB-C with USB 3 speed for the fastest transfers ever on iPhone.',
    stat: 'UP TO 10 GBPS TRANSFER',
  },
  {
    icon: '✨',
    title: 'Apple Intelligence',
    desc: 'On-device AI that understands you. Writing tools, image generation, and Siri that truly gets context.',
    stat: 'PRIVATE AI PROCESSING',
  },
]

export default function Features() {
  return (
    <div id="features" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto px-10 py-24">
        <RevealOnScroll>
          <span className="block text-xs font-medium tracking-[4px] uppercase mb-4" style={{ color: '#2997ff' }}>What's Inside</span>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: -2, lineHeight: 1.05 }}>
            Engineered at<br />every level.
          </h2>
          <p className="font-light leading-relaxed max-w-xl" style={{ fontSize: 'clamp(16px,1.8vw,20px)', color: 'rgba(255,255,255,0.45)' }}>
            Every component designed to deliver a seamless, extraordinary experience from the moment you touch it.
          </p>
        </RevealOnScroll>

        <div
          className="mt-16 grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 0.1}>
              <motion.div
                className="relative overflow-hidden p-9 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow bottom */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,113,227,0.06) 0%, transparent 60%)' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div
                  className="flex items-center justify-center text-2xl mb-6 rounded-2xl"
                  style={{
                    width: 52, height: 52,
                    background: 'linear-gradient(135deg, rgba(0,113,227,0.2), rgba(41,151,255,0.1))',
                    border: '1px solid rgba(0,113,227,0.2)',
                  }}
                >
                  {f.icon}
                </div>

                <div className="text-xl font-semibold mb-3" style={{ letterSpacing: -0.5 }}>{f.title}</div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>{f.desc}</p>
                <div className="text-xs font-medium tracking-wider" style={{ color: '#2997ff' }}>{f.stat}</div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}
