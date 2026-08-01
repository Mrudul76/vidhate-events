'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled ? 'glass-card shadow-lg shadow-black/20 py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/60">
            <Image src="/images/logo.png" alt="Vidhate Events" fill className="object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.2em] text-foreground">VIDHATE</span>
            <span className="font-script text-lg text-gold -mt-1">Events</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gold-gradient rounded-full px-6 py-2.5 text-sm font-medium text-[#0a1526] transition-transform duration-300 hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden glass-card lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-gold-gradient mt-2 rounded-full px-6 py-2.5 text-center text-sm font-medium text-[#0a1526]"
              >
                Book Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
