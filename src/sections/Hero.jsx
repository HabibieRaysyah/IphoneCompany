import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function IPhoneMockup() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      setTime(`${h}:${m}`)
      setDate(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15, y: 20 }}
      animate={{ opacity: 1, rotateY: 0, y: 0 }}
      transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.3 }}
        className="relative mx-auto"
        style={{ width: 220, height: 440 }}
      >
        {/* Frame */}
        <div
          className="w-full h-full relative overflow-hidden"
          style={{
            borderRadius: 44,
            background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a, #0d0d0d)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Shine */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
            borderRadius: '44px 44px 0 0', pointerEvents: 'none',
          }} />

          {/* Screen */}
          <div style={{
            position: 'absolute', inset: 8, borderRadius: 38, overflow: 'hidden',
            background: 'linear-gradient(135deg, #0a0a1e 0%, #000428 50%, #001a33 100%)',
          }}>
            {/* Screen glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(0,113,227,0.3) 0%, transparent 70%)',
            }} />
            {/* Clock */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <div style={{ fontSize: 28, fontWeight: 200, color: '#fff', letterSpacing: -1 }}>{time}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>{date}</div>
            </div>
            {/* Home indicator */}
            <div style={{
              position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
              width: 100, height: 4, background: 'rgba(255,255,255,0.35)', borderRadius: 2,
            }} />
          </div>

          {/* Notch */}
          <div style={{
            position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
            width: 80, height: 26, background: '#000', borderRadius: '0 0 18px 18px', zIndex: 2,
          }}>
            <div style={{
              position: 'absolute', top: 7, right: 22, width: 10, height: 10,
              background: '#1a1a1a', borderRadius: '50%', border: '2px solid #111',
            }}>
              <div style={{
                position: 'absolute', top: 2, left: 2, width: 4, height: 4,
                background: 'rgba(41,151,255,0.4)', borderRadius: '50%',
              }} />
            </div>
          </div>

          {/* Side buttons */}
          <div style={{ position: 'absolute', top: 80, left: -3, width: 3, height: 60, background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', top: 160, left: -3, width: 3, height: 40, background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', top: 100, right: -3, width: 3, height: 70, background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />
        </div>
      </motion.div>
    </motion.div>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            background: 'rgba(41,151,255,0.5)',
            left: `${Math.random() * 100}%`,
            bottom: '-10px',
          }}
          animate={{ y: [0, -(window.innerHeight + 20)], opacity: [0, 0.6, 0.4, 0] }}
          transition={{
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center"
      style={{ padding: '80px 20px 60px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, #1a1a2e 0%, #000 70%),
          radial-gradient(ellipse 40% 40% at 20% 80%, #001d3d 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 80% 80%, #0a0a1a 0%, transparent 60%)
        `
      }} />

      {/* Glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,113,227,0.18) 0%, transparent 70%)',
          top: '50%', left: '50%', x: '-50%', y: '-60%',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Particles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs font-medium tracking-[4px] uppercase mb-6"
          style={{ color: '#2997ff', letterSpacing: '4px' }}
        >
          Engineered for the Future
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-bold leading-[0.95] mb-7"
          style={{
            fontSize: 'clamp(56px, 10vw, 108px)',
            letterSpacing: '-3px',
            background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.55) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Think<br />Different.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light max-w-lg leading-relaxed mb-12"
          style={{
            fontSize: 'clamp(17px, 2.2vw, 22px)',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Innovation that redefines what a smartphone can be. Power, beauty, and intelligence — unified in titanium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-4 items-center justify-center flex-wrap mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,113,227,0.45)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 rounded-full text-sm font-medium text-white border-none cursor-pointer"
            style={{ background: 'var(--blue)' }}
          >
            Explore Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 rounded-full text-sm font-normal text-white cursor-pointer"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* iPhone Mockup with parallax */}
        <motion.div style={{ rotateX, rotateY, perspective: 1000 }}>
          <IPhoneMockup />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 20, height: 20,
            borderRight: '1px solid rgba(255,255,255,0.25)',
            borderBottom: '1px solid rgba(255,255,255,0.25)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>
    </section>
  )
}
