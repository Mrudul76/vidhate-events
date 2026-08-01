import Image from 'next/image'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Wedding Decoration',
  'Car Decoration',
  'Cold Pyro Effects',
  'Naming Ceremony',
  'Baby Shower',
  'Retirement Party',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pb-8 pt-20">
      <div className="container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/60">
                <Image src="/images/logo.png" alt="Vidhate Events" fill className="object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg tracking-[0.2em] text-foreground">VIDHATE</span>
                <span className="font-script text-base text-gold -mt-1">Events</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Crafting timeless celebrations — from a baby&apos;s first cradle
              to a grand wedding.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground">Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                +91 9767099073
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                vidhatesamir46@gmail.com
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                Wani, Dist. Yavatmal, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vidhate Events. All rights reserved.</p>
          <p>Designed with care for unforgettable celebrations.</p>
        </div>
      </div>
    </footer>
  )
}
