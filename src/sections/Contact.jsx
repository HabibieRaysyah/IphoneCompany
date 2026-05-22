import { useState } from 'react'
import { motion } from 'framer-motion'
import { Store, MessageCircle, Phone, ChevronRight } from 'lucide-react'
import RevealOnScroll from '../components/RevealOnScroll'

const contactItems = [
  { icon: Store, title: 'Find a Store', sub: 'Visit us at 200+ locations worldwide' },
  { icon: MessageCircle, title: 'Chat with a Specialist', sub: 'Available 24/7, instant response' },
  { icon: Phone, title: 'Call 1-800-MY-APPLE', sub: 'Monday – Sunday, 5am – 8pm PT' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.email) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', interest: '', message: '' })
  }

  const inputStyle = {
    padding: '14px 18px', borderRadius: 12, outline: 'none',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.03)', color: '#fff',
    fontFamily: 'var(--font)', fontSize: 14, width: '100%',
    transition: 'border-color .3s, background .3s',
  }

  return (
    <div id="contact" style={{ background: '#050505', padding: '100px 40px' }}>
      <div
        className="max-w-6xl mx-auto grid gap-20"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {/* Left */}
        <RevealOnScroll>
          <span className="block text-xs font-medium tracking-[4px] uppercase mb-4" style={{ color: '#2997ff' }}>Get in Touch</span>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)', letterSpacing: -2, lineHeight: 1.05 }}>
            We're here<br />for you.
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 380 }}>
            Questions about your iPhone? Ready to upgrade? Our specialists are ready to help you find your perfect device.
          </p>

          <div className="flex flex-col gap-3">
            {contactItems.map(({ icon: Icon, title, sub }) => (
              <motion.div
                key={title}
                className="flex items-center gap-4 p-5 rounded-2xl cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                whileHover={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: 44, height: 44,
                    background: 'rgba(0,113,227,0.12)',
                    border: '1px solid rgba(0,113,227,0.2)',
                  }}
                >
                  <Icon size={18} color="#2997ff" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium mb-0.5">{title}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{sub}</div>
                </div>
                <ChevronRight size={16} color="rgba(255,255,255,0.2)" />
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Right - Form */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Your Name', key: 'name', placeholder: 'John Appleseed', type: 'text' },
              { label: 'Email Address', key: 'email', placeholder: 'you@example.com', type: 'email' },
              { label: 'Interested In', key: 'interest', placeholder: 'iPhone 16 Pro Max, Trade-in…', type: 'text' },
            ].map(({ label, key, placeholder, type }) => (
              <div key={key}>
                <div className="text-xs mb-2 font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,113,227,0.5)'; e.target.style.background = 'rgba(0,113,227,0.04)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
                />
              </div>
            ))}

            <div>
              <div className="text-xs mb-2 font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>Message</div>
              <textarea
                placeholder="Tell us how we can help..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,113,227,0.5)'; e.target.style.background = 'rgba(0,113,227,0.04)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              whileHover={{ background: '#0077ed', y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl text-sm font-medium text-white border-none cursor-pointer mt-2"
              style={{ background: sent ? '#1a8a3a' : 'var(--blue)', transition: 'background .3s' }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
