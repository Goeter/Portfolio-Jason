"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration and admin dashboard for modern retail businesses",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for business intelligence and data visualization with real-time reporting capabilities",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and comprehensive financial management",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking and management system for retail with automated stock alerts and reporting",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Online learning platform with video streaming, progress tracking, and interactive course management tools",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateCardsPerView = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setCardsPerView(1)
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2)
        } else {
          setCardsPerView(3)
        }
      }
    }

    updateCardsPerView()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateCardsPerView)
      return () => window.removeEventListener("resize", updateCardsPerView)
    }
  }, [])

  const maxIndex = Math.max(1, projects.length - cardsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  const getTransformValue = () => {
    if (!isClient) return 0
    const percentage = 100 / cardsPerView
    return currentIndex * percentage
  }

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-gray-800 text-3xl lg:text-4xl xl:text-5xl font-bold">Experience</h2>
          <Link href="/projects">
            <Button className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              See all my project <span className="bg-green-600 text-white px-2 py-1 rounded ml-2">5</span> {">"}
            </Button>
          </Link>
        </div>

        <div className="relative scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 border-gray-300 hover:bg-white shadow-lg"
            onClick={prevSlide}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 border-gray-300 hover:bg-white shadow-lg"
            onClick={nextSlide}
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${getTransformValue()}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="aspect-video bg-gray-300 rounded-t-lg flex-shrink-0" />
                      <div className="bg-cyan-200 p-4 rounded-b-lg flex-grow flex flex-col">
                        <h3 className="text-black font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-black text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>
                        <Link href={`/experience/${project.id}`}>
                          <Button
                            variant="link"
                            className="text-blue-600 hover:text-blue-500 p-0 text-sm self-start font-semibold"
                          >
                            See Detail {">"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
