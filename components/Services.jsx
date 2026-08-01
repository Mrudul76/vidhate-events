'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script mb-2 text-3xl text-gold">Our Services</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Celebrations We Craft
          </h2>
          <div className="divider-gold mx-auto my-6 w-24" />
          <p className="text-muted-foreground">
            From a baby&apos;s naming ceremony to a grand wedding entrance, every service is
            tailored to your story.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="glass-card group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e22] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold transition-all duration-300 group-hover:gap-2.5"
                >
                  Enquire <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
