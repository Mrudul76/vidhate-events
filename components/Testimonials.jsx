'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script mb-2 text-3xl text-gold">Kind Words</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            What Our Families Say
          </h2>
          <div className="divider-gold mx-auto my-6 w-24" />
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="min-w-0 flex-[0_0_100%] px-2">
                  <div className="glass-card relative rounded-3xl px-8 py-12 text-center sm:px-14">
                    <Quote className="mx-auto mb-4 text-gold/40" size={40} />
                    <div className="mb-4 flex justify-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={18} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                      &ldquo;{testimonial.feedback}&rdquo;
                    </p>
                    <div className="divider-gold mx-auto my-6 w-16" />
                    <p className="text-gold">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-gold/60"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    selected === i ? 'w-8 bg-gold-gradient' : 'w-2 bg-border'
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-gold/60"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
