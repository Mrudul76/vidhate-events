'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Events Curated' },
  { value: '5+', label: 'Years of Craft' },
  { value: '50+', label: 'Cities Served' },
  { value: '100%', label: 'Client Delight' },
]

const collage = [
  { src: '/images/IMG_4738.JPG.jpeg', className: 'col-span-2 row-span-2' },
  { src: '/images/3.jpeg', className: '' },
  { src: '/images/4.webp', className: '' },
  { src: '/images/2.jpg', className: 'col-span-2' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 grid-rows-2 gap-4"
        >
          {collage.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden rounded-2xl border border-gold/20 ${item.className}`}
            >
              <Image
                src={item.src}
                alt="Vidhate Events portfolio"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-script mb-2 text-3xl text-gold">About Us</p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Crafting <span className="italic text-gold">timeless</span> moments, one event at a
            time
          </h2>
          <div className="divider-gold my-6 w-24" />

          <p className="leading-relaxed text-muted-foreground">
            At <span className="text-gold">Vidhate Events</span>, we believe every celebration
            deserves the touch of magic. Born from a love for beauty, tradition and storytelling,
            our studio designs bespoke experiences — from a baby&apos;s first cradle to a grand
            wedding.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every drape, every flower, every spark of cold pyro is orchestrated with care so you
            can be fully present with the people who matter most. We don&apos;t just decorate — we
            design memories that outlive the day.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-5 py-4 transition-colors duration-300 hover:border-gold/50"
              >
                <p className="font-serif text-3xl text-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
