"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const serviceOptions = [
  "Commercial & Residential Moves",
  "Pick-Up & Delivery",
  "Rubbish Removal",
  "Man Power (Labour Hire)",
  "Deceased Estate Clear Outs",
  "Hoarding & Squatter Clean Outs",
  "Abandoned House Clean Outs",
  "End of Lease Cleaning",
  "Painting",
  "Carpet Removal",
  "Pressure Washing",
  "Window Cleaning",
  "Garden & Lawn Maintenance",
  "General Handyman Work",
  "Other",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Ready To Get Started?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Contact us today for a free, no-obligation quote. We respond to all
            enquiries within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-gold/10">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Phone</h3>
                <a
                  href="tel:+61400000000"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  0400 000 000
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-gold/10">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Email</h3>
                <a
                  href="mailto:info@above42solutions.com.au"
                  className="text-muted-foreground hover:text-gold transition-colors break-all"
                >
                  info@above42solutions.com.au
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Korumburra, VIC 3950
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Serving Gippsland & Melbourne
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-gold/10">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 7am - 6pm</p>
                <p className="text-sm text-muted-foreground/70">
                  Sundays by appointment
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-lg bg-card border border-gold/30">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 mb-6">
                  <Send className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Thanks for reaching out! We will get back to you within 24
                  hours. If your request is urgent, please give us a call.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    })
                  }}
                  className="mt-6 text-gold hover:text-gold-light transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg bg-card border border-border"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold transition-colors outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold transition-colors outline-none"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold transition-colors outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Required <span className="text-gold">*</span>
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:ring-1 focus:ring-gold transition-colors outline-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold transition-colors outline-none resize-none"
                    placeholder="Tell us about your project or request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-dark hover:bg-gold-light transition-colors"
                >
                  <Send className="h-5 w-5" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
