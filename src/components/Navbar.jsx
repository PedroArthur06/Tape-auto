import { useState, useEffect } from 'react'
import logo from '../assets/Logo Tapeçauto.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Localização', href: '#localizacao' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/75 backdrop-blur-xl border-b border-brand-orange/20 navbar-glow'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Tapeçauto Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-brand-orange font-black text-xl tracking-tight">
            Tapeçauto
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-gray-300 hover:text-brand-orange transition-colors text-sm font-medium group"
            >
              {l.label}
              {/* animated underline */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/556599317888?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 ring-1 ring-brand-orange/30"
          >
            Agendar Agora
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black/90 backdrop-blur-xl border-t border-brand-orange/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-brand-orange transition-colors font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/556599317888?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white font-semibold text-center py-3 rounded-lg hover:bg-brand-orange-dark transition-colors"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </header>
  )
}
