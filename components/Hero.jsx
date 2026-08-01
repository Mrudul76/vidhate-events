'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const slides = ['/images/2.jpg', '/images/1.jpg', '/images/3.jpeg', '/images/4.webp']

export default function Hero() {
  const [active] = useState(0)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={slides[active]}
          alt="Vidhate Events celebration"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e22]/80 via-[#050e22]/85 to-[#050e22]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card mb-8 flex items-center gap-2 rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold"
        >
          <Sparkles size={14} />
          Luxury Event Planners
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-script mb-2 text-3xl text-gold sm:text-4xl"
        >
          Where every moment becomes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl"
        >
          A <span className="text-gold italic">Masterpiece</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          From dreamy weddings and grand car décor to cold pyro spectacles, cradle ceremonies,
          baby showers and beyond — Vidhate Events designs celebrations you&apos;ll relive for a
          lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="bg-gold-gradient group flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium text-[#0a1526] transition-transform duration-300 hover:scale-105"
          >
            Plan My Event
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="glass-card rounded-full px-8 py-3.5 font-medium text-foreground transition-colors duration-300 hover:border-gold/60"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <span className="h-10 w-px animate-floaty bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
