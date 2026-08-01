'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'

export default function ContactCTA() {
  const whatsappMessage = encodeURIComponent(
    'Hello Vidhate Events, I would like to inquire about an event.'
  )

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script mb-2 text-3xl text-gold">Let&apos;s Talk</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Ready to Create Magic?
          </h2>
          <div className="divider-gold mx-auto my-6 w-24" />
          <p className="text-muted-foreground">
            Tap below to send a WhatsApp message or visit our Instagram profile.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 items-stretch lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card flex h-full flex-col justify-between rounded-3xl p-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;d love to hear the story of your celebration.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0a1526]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Call or WhatsApp</p>
                    <a
                      href="tel:+919767099073"
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      +91 9767099073
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0a1526]">
                    <Instagram size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/vidhate_event_wani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      @vidhate_event_wani
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0a1526]">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <a
                      href="mailto:vidhatesamir46@gmail.com"
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      vidhatesamir46@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0a1526]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                    <p className="text-foreground">Wani, Dist. Yavatmal, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="divider-gold mb-6" />
              <div className="flex gap-4">
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="font-serif text-2xl text-foreground">Message Us Directly</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Start a chat with us on WhatsApp or send a DM on Instagram.
            </p>
            <p className="mt-4 text-base font-semibold text-gold sm:text-lg">
              Proprietor: Samir S. Vidhate
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/919767099073?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-gradient inline-flex items-center justify-center rounded-full px-6 py-4 text-center font-medium text-[#0a1526] transition-transform duration-300 hover:scale-[1.02]"
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://www.instagram.com/vidhate_event_wani/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-center font-medium text-foreground transition-colors duration-300 hover:border-gold/60 hover:text-gold"
              >
                Message on Instagram
              </a>
            </div>
            <div className="mt-10">
              <div className="divider-gold mb-6" />
              <div className="flex gap-4">
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
