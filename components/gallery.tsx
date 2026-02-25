"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    category: "Squatter House Clean Up",
    before: "/images/before-squatter.jpg",
    after: "/images/after-squatter.jpg",
  },
  {
    category: "Hoarding Clear Out",
    before: "/images/before-hoarding.jpg",
    after: "/images/after-hoarding.jpg",
  },
  {
    category: "Lawn Maintenance",
    before: "/images/before-lawn.jpg",
    after: "/images/after-lawn.jpg",
  },
  {
    category: "Pressure Washing Driveway",
    before: "/images/before-pressure.jpg",
    after: "/images/after-pressure.jpg",
  },
  {
    category: "Interior Painting Refresh",
    before: "/images/before-painting.jpg",
    after: "/images/after-painting.jpg",
  },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [lightboxView, setLightboxView] = useState<"before" | "after">("before")

  const openLightbox = (index: number, view: "before" | "after") => {
    setLightboxIndex(index)
    setLightboxView(view)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return
    const newIndex =
      direction === "next"
        ? (lightboxIndex + 1) % galleryItems.length
        : (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
    setLightboxIndex(newIndex)
  }

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Before & After Transformations
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            See the incredible transformations we deliver for our clients. Every
            project is a testament to our dedication and quality workmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.category}
              className="group rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-colors bg-card"
            >
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-base mb-3">
                  {item.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openLightbox(index, "before")}
                    className="relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.before}
                      alt={`Before - ${item.category}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 left-2 bg-dark/80 text-secondary-foreground text-xs font-medium px-2 py-1 rounded">
                      Before
                    </span>
                  </button>
                  <button
                    onClick={() => openLightbox(index, "after")}
                    className="relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.after}
                      alt={`After - ${item.category}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 left-2 bg-gold/90 text-dark text-xs font-medium px-2 py-1 rounded">
                      After
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-secondary-foreground hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 text-secondary-foreground hover:text-gold transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="text-center mb-4">
              <h3 className="text-secondary-foreground font-serif text-xl font-semibold">
                {galleryItems[lightboxIndex].category}
              </h3>
              <div className="flex justify-center gap-4 mt-3">
                <button
                  onClick={() => setLightboxView("before")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    lightboxView === "before"
                      ? "bg-gold text-dark"
                      : "bg-dark-light text-secondary-foreground hover:bg-gold/20"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setLightboxView("after")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    lightboxView === "after"
                      ? "bg-gold text-dark"
                      : "bg-dark-light text-secondary-foreground hover:bg-gold/20"
                  }`}
                >
                  After
                </button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={
                  lightboxView === "before"
                    ? galleryItems[lightboxIndex].before
                    : galleryItems[lightboxIndex].after
                }
                alt={`${lightboxView === "before" ? "Before" : "After"} - ${
                  galleryItems[lightboxIndex].category
                }`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 text-secondary-foreground hover:text-gold transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  )
}
