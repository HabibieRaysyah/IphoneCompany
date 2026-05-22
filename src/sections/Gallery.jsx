import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'

const cards = [
  {
    bg: 'linear-gradient(135deg, #001a33, #003d80)',
    icon: '📸',
    tag: 'Camera',
    title: 'Capture the impossible',
    sub: '48MP · Night Mode · Deep Fusion',
  },
  {
    bg: 'linear-gradient(135deg, #1a0a00, #4d2000)',
    icon: '🎬',
    tag: 'Video',
    title: 'Cinematic 4K Pro Res',
    sub: '120fps · Log Video · Dolby Vision',
  },
  {
    bg: 'linear-gradient(135deg, #0a1a00, #1a4d00)',
    icon: '🌱',
    tag: 'Design',
    title: 'Grade 5 Titanium',
    sub: 'Aerospace alloy · 4 finishes',
  },
  {
    bg: 'linear-gradient(135deg, #1a0020, #4d0050)',
    icon: '🤖',
    tag: 'AI',
    title: 'Apple Intelligence',
    sub: 'On-device · Private · Powerful',
  },
  {
    bg: 'linear-gradient(135deg, #001a1a, #004040)',
    icon: '🔒',
    tag: 'Security',
    title: 'Impossible to breach',
    sub: 'Face ID · Secure Enclave',
  },
  {
    bg: 'linear-gradient(135deg, #1a1500, #4d3d00)',
    icon: '⚡',
    tag: 'Performance',
    title: 'A18 Pro in full flight',
    sub: '6-core GPU · Neural Engine',
  },
]

export default function Gallery() {
  return (
    <div id="gallery" style={{ background: '#050505', overflow: 'hidden', padding: '100px 0' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-10 mb-14">
        <RevealOnScroll>
          <span className="block text-xs font-medium tracking-[4px] uppercase mb-4" style={{ color: '#2997ff' }}>Experience</span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: -2, lineHeight: 1.05 }}>
            Life through<br />iPhone's lens.
          </h2>
        </RevealOnScroll>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: '.gallery-pagination' }}
        style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 48 }}
      >
        {cards.map((c, i) => (
          <SwiperSlide key={i} style={{ width: 340, flexShrink: 0 }}>
            <motion.div
              className="relative overflow-hidden cursor-pointer"
              style={{
                height: 420, borderRadius: 24,
                background: c.bg,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div style={{
                position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 100,
              }}>
                {c.icon}
              </div>

              {/* Overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
              }}>
                <div className="text-xs mb-2 font-medium tracking-widest uppercase" style={{ color: '#2997ff' }}>{c.tag}</div>
                <div className="text-xl font-semibold" style={{ letterSpacing: -0.5 }}>{c.title}</div>
                <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.sub}</div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots */}
      <div className="gallery-pagination flex justify-center gap-1 mt-4" />

      <style>{`
        .gallery-pagination .swiper-pagination-bullet {
          width: 6px; height: 6px; background: rgba(255,255,255,0.2);
          border-radius: 3px; transition: all .3s; opacity: 1;
        }
        .gallery-pagination .swiper-pagination-bullet-active {
          width: 24px; background: rgba(255,255,255,0.6);
        }
      `}</style>
    </div>
  )
}
