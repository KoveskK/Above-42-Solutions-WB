"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Above 42 Solutions logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="hidden sm:block text-gold font-serif text-lg font-semibold tracking-wide">
              Above 42 Solutions
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gold-light/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+61400000000"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="h-4 w-4" />
              0400 000 000
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-dark hover:bg-gold-light transition-colors"
            >
              Book Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-gold"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark border-t border-gold/20">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gold-light/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gold/20">
              <a
                href="tel:+61400000000"
                className="flex items-center gap-2 text-base font-medium text-gold"
              >
                <Phone className="h-4 w-4" />
                0400 000 000
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-dark hover:bg-gold-light transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
