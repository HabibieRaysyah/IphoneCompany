import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 transition-all duration-300 ${
          scrolled
            ? 'h-[52px] bg-black/75 backdrop-blur-2xl border-b border-white/[0.08]'
            : 'h-[52px] bg-transparent'
        }`}
        style={{ backdropFilter: scrolled ? 'saturate(180%) blur(24px)' : 'none' }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('#hero')}
          className="text-white text-xl font-extralight tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ⬡ iPhone Pro
        </motion.button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <button
                onClick={() => scrollTo(link.href)}
                className="text-[13px] text-white/80 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none font-normal"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          onClick={() => scrollTo('#contact')}
          className="hidden md:block text-[13px] text-[#2997ff] hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none"
          whileHover={{ x: 2 }}
        >
          Buy Now →
        </motion.button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white/80 hover:text-white transition-colors p-1 bg-transparent border-none cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="text-3xl font-extralight text-white tracking-tight hover:text-white/60 transition-colors cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollTo('#contact')}
              className="mt-4 px-10 py-4 rounded-full text-sm font-medium text-white cursor-pointer border-none"
              style={{ background: 'var(--blue)' }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
