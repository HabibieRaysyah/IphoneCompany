import { FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa6'

const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales & Refunds', 'Legal', 'Site Map', 'Accessibility']

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="text-xl font-extralight tracking-tight">⬡ iPhone Pro</div>
          <div className="flex flex-wrap gap-7">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200 no-underline">
                {l}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/20 leading-relaxed mb-6">
          Copyright © 2025 iPhone Pro Company Profile. All rights reserved.<br />
          This is a demo website created for portfolio purposes. iPhone is a trademark of Apple Inc., registered in the U.S. and other countries.<br />
          Apple, iPhone, Face ID, MagSafe, Siri, and other Apple marks are trademarks of Apple Inc. Prices shown are for illustration purposes only.
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/[0.04]">
          <span className="text-xs text-white/20">United States — English</span>
          <div className="flex gap-3">
            {[FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 cursor-pointer bg-transparent"
              >
                <Icon size={12} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
