import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Korumburra, VIC",
    quote:
      "Above 42 Solutions cleared out my late mother's estate with such care and respect. They were prompt, professional and went above and beyond. I cannot recommend them highly enough.",
    rating: 5,
    project: "Deceased Estate Clear Out",
  },
  {
    name: "James Chen",
    location: "Leongatha, VIC",
    quote:
      "We hired them for a full hoarding clean-out and the transformation was unbelievable. What seemed like an impossible job was done in just two days. Absolutely incredible work.",
    rating: 5,
    project: "Hoarding Clean Out",
  },
  {
    name: "Rebecca Taylor",
    location: "Wonthaggi, VIC",
    quote:
      "Regular lawn and garden maintenance for our 3-acre property. They always arrive on time, do a fantastic job, and leave the place looking immaculate. Best in the business.",
    rating: 5,
    project: "Lawn Maintenance",
  },
]

const projectHighlights = [
  {
    title: "3-Acre Property Makeover",
    description:
      "Complete lawn and garden transformation for a large rural property in South Gippsland.",
    stat: "3 acres",
  },
  {
    title: "Hoarding House Restoration",
    description:
      "Full clean-out and restoration of a severely hoarded 4-bedroom home.",
    stat: "2 days",
  },
  {
    title: "Commercial Move",
    description:
      "Office relocation for a 50-person company, completed over a weekend with zero downtime.",
    stat: "1 weekend",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-lg bg-dark-light border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-gold/40 mb-4" />
              <p className="text-gold-light/70 leading-relaxed mb-6 italic">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-secondary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gold-light/50">
                  {testimonial.location} &mdash; {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project highlights */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary-foreground">
            Project Highlights
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projectHighlights.map((project) => (
            <div
              key={project.title}
              className="text-center p-8 rounded-lg bg-dark-light border border-gold/10"
            >
              <p className="text-4xl font-bold text-gold mb-3 font-serif">
                {project.stat}
              </p>
              <h4 className="font-semibold text-secondary-foreground text-lg mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-gold-light/50 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
