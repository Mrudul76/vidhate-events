'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { galleryCategories, galleryItems } from '@/data/gallery'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const categoryRowRef = useRef(null)

  const filtered = useMemo(() => {
    if (active === 'All') {
      return galleryItems.slice(0, 8)
    }
    return galleryItems.filter((item) => item.category === active)
  }, [active])

  const scrollCategories = (direction) => {
    if (!categoryRowRef.current) return
    const offset = categoryRowRef.current.clientWidth * 0.6
    categoryRowRef.current.scrollBy({ left: direction === 'left' ? -offset : offset, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script mb-2 text-3xl text-gold">Our Portfolio</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Moments We&apos;ve Designed
          </h2>
          <div className="divider-gold mx-auto my-6 w-24" />
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollCategories('left')}
            className="rounded-full border border-border bg-[#071225] p-2 text-muted-foreground transition hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={categoryRowRef}
            className="flex w-full max-w-4xl gap-3 overflow-x-auto py-2 thin-scrollbar"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  'flex-shrink-0 rounded-full border px-5 py-2 text-sm uppercase tracking-widest transition-all duration-300',
                  active === category
                    ? 'bg-gold-gradient border-transparent text-[#0a1526]'
                    : 'border-border text-muted-foreground hover:border-gold/50 hover:text-gold'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollCategories('right')}
            className="rounded-full border border-border bg-[#071225] p-2 text-muted-foreground transition hover:border-gold hover:text-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#050e22]/95 via-[#050e22]/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-widest text-gold">{item.category}</p>
                  <p className="font-serif text-lg text-foreground">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1a34] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-sm text-white transition hover:border-gold hover:text-gold"
              >
                Close
              </button>
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-t border-white/10 p-6">
                <p className="text-xs uppercase tracking-widest text-gold">{selectedItem.category}</p>
                <h3 className="mt-2 text-2xl font-serif text-foreground">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
