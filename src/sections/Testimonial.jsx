import RevealOnScroll from '../components/RevealOnScroll'
import { AiFillStar } from 'react-icons/ai'

export default function Testimonial() {
  return (
    <div
      className="text-center py-24 px-10"
      style={{ background: 'linear-gradient(180deg, #000 0%, #050510 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <RevealOnScroll>
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <AiFillStar key={i} size={18} color="#ff9f0a" />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="font-light leading-relaxed mb-8 italic"
            style={{ fontSize: 'clamp(18px, 2.8vw, 30px)', letterSpacing: -0.5, color: 'rgba(255,255,255,0.85)' }}
          >
            <span style={{ fontSize: '3rem', lineHeight: 0, verticalAlign: '-0.3em', color: 'rgba(255,255,255,0.1)', marginRight: 8 }}>"</span>
            This is not just a phone. It's a creative partner, a professional tool, and the most beautifully designed object I've ever held.
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="flex items-center justify-center rounded-full text-sm font-semibold"
              style={{
                width: 42, height: 42,
                background: 'linear-gradient(135deg, #1c1c1e, #2c2c2e)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              MR
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Marcus Rivera</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Professional Photographer, New York</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
