import { Shield, Clock, ThumbsUp } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "We treat every property as if it were our own, with full care and respect.",
  },
  {
    icon: Clock,
    title: "Prompt & Efficient",
    description: "On time, every time. We work hard to meet your deadlines.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "We stand behind every job we do with a satisfaction guarantee.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Your Local Property Services Experts
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Above 42 Solutions is a proudly Australian, locally owned property
              services business based in Korumburra, VIC. We handle both
              residential and commercial jobs across Gippsland and the greater
              Melbourne area.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              From rubbish removal and deceased estate clearances to painting,
              lawn maintenance and general handyman work, our team brings hard
              work, reliability and genuine respect for your property to every
              job. No task is too big or too small.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-lg bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-md bg-gold/10">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
