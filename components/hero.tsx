import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Professional property maintenance work in progress"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-6">
            Korumburra, VIC &mdash; Serving All of Gippsland
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground leading-tight text-balance">
            Expert Solutions For All Your Needs
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gold-light/80 leading-relaxed max-w-2xl">
            Reliable, professional and efficient property services you can
            trust. From rubbish removal to full property makeovers, we handle it
            all.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-dark hover:bg-gold-light transition-colors"
            >
              Book Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+61400000000"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gold px-8 py-4 text-base font-semibold text-gold hover:bg-gold hover:text-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-gold-light/60 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-medium">0400 000 000</span>
            <span className="mx-2">&bull;</span>
            <span>Available 7 days a week</span>
          </div>
        </div>
      </div>
    </section>
  )
}
