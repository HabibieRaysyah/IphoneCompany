import RevealOnScroll from '../components/RevealOnScroll'

export default function Innovation() {
  return (
    <div
      id="innovation"
      className="relative overflow-hidden text-center"
      style={{ background: '#000', padding: '140px 40px' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,113,227,0.12) 0%, transparent 70%)',
      }} />

      {/* Large background symbol */}
      <div
        className="absolute select-none pointer-events-none font-black"
        style={{
          fontSize: 'clamp(100px, 18vw, 200px)',
          letterSpacing: -12,
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        ∞
      </div>

      <RevealOnScroll>
        <p
          className="font-light leading-tight max-w-3xl mx-auto mb-8 relative z-10"
          style={{ fontSize: 'clamp(24px, 4vw, 52px)', letterSpacing: -1 }}
        >
          <strong className="font-bold">Innovation</strong> meets{' '}
          <strong className="font-bold">perfection.</strong>
          <br />The most advanced device humanity has ever held.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="relative z-10 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          iPhone 16 Pro Max — Available now worldwide
        </div>
      </RevealOnScroll>
    </div>
  )
}
