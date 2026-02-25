import {
  Truck,
  Package,
  Trash2,
  Users,
  Home,
  Building,
  Warehouse,
  SprayCan,
  Paintbrush,
  Scissors,
  Droplets,
  GlassWater,
  Trees,
  Wrench,
} from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Commercial & Residential Moves",
    description:
      "Full-service moving for homes and businesses. We handle the heavy lifting so you don't have to.",
  },
  {
    icon: Package,
    title: "Pick-Up & Delivery",
    description:
      "Reliable pick-up and delivery services for furniture, appliances and more across the region.",
  },
  {
    icon: Trash2,
    title: "Rubbish Removal",
    description:
      "Fast, affordable rubbish removal for any size job. We dispose of waste responsibly.",
  },
  {
    icon: Users,
    title: "Man Power (Labour Hire)",
    description:
      "Need an extra pair of hands? Our team is ready to help with any manual labour tasks.",
  },
  {
    icon: Home,
    title: "Deceased Estate Clear Outs",
    description:
      "Compassionate and respectful clearing of deceased estates, handled with care and sensitivity.",
  },
  {
    icon: Building,
    title: "Hoarding & Squatter Clean Outs",
    description:
      "Professional clean-out services for hoarding situations and squatter-affected properties.",
  },
  {
    icon: Warehouse,
    title: "Abandoned House Clean Outs",
    description:
      "Complete clearing and cleaning of abandoned properties, ready for sale or lease.",
  },
  {
    icon: SprayCan,
    title: "End of Lease Cleaning",
    description:
      "Thorough end-of-lease cleaning to help you get your bond back in full.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting services for a fresh new look. Neat, clean and professional finish.",
  },
  {
    icon: Scissors,
    title: "Carpet Removal",
    description:
      "Quick and efficient carpet removal and disposal, preparing floors for new finishes.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning for driveways, decks, fences and more. Restoring surfaces to like new.",
  },
  {
    icon: GlassWater,
    title: "Window Cleaning",
    description:
      "Crystal clear windows inside and out. Professional streak-free results every time.",
  },
  {
    icon: Trees,
    title: "Garden & Lawn Maintenance",
    description:
      "Regular or one-off garden and lawn care to keep your property looking its best.",
  },
  {
    icon: Wrench,
    title: "General Handyman Work",
    description:
      "Odd jobs, repairs and maintenance. If it needs fixing, we can help.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight text-balance">
            Everything Your Property Needs
          </h2>
          <p className="mt-6 text-gold-light/60 leading-relaxed text-lg">
            We offer a comprehensive range of property services for residential
            and commercial clients across Gippsland and Melbourne.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-lg bg-dark-light border border-gold/10 hover:border-gold/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold/10 group-hover:bg-gold/20 transition-colors mb-5">
                <service.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-secondary-foreground text-base mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gold-light/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
