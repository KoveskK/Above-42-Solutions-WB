import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Rubbish Removal",
  "Deceased Estate Clear Outs",
  "Hoarding Clean Outs",
  "Painting",
  "Pressure Washing",
  "Lawn Maintenance",
  "General Handyman",
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Above 42 Solutions logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-gold font-serif text-lg font-semibold tracking-wide">
                Above 42 Solutions
              </span>
            </a>
            <p className="text-gold-light/50 leading-relaxed text-sm mb-6">
              Your trusted local property services provider. Based in
              Korumburra, VIC, proudly serving all of Gippsland and the greater
              Melbourne area.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+61400000000"
                className="flex items-center gap-2 text-sm text-gold-light/60 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                0400 000 000
              </a>
              <a
                href="mailto:info@above42solutions.com.au"
                className="flex items-center gap-2 text-sm text-gold-light/60 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@above42solutions.com.au
              </a>
              <span className="flex items-center gap-2 text-sm text-gold-light/60">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Korumburra, VIC 3950
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-secondary-foreground font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gold-light/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-secondary-foreground font-semibold mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gold-light/50 hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-secondary-foreground font-semibold mb-6">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gold-light/50">
              <li>Korumburra</li>
              <li>Leongatha</li>
              <li>Wonthaggi</li>
              <li>Warragul</li>
              <li>Drouin</li>
              <li>South Gippsland</li>
              <li>Greater Melbourne</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gold-light/40">
              &copy; {new Date().getFullYear()} Above 42 Solutions. All rights
              reserved.
            </p>
            <p className="text-sm text-gold-light/40">
              ABN: 00 000 000 000
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
