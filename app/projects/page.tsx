"use client"

import { ChevronLeft } from "lucide-react"
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

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Tech Background Pattern */}
      <div className="fixed inset-0">
        {/* Purple geometric lines on the right */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg className="w-full h-full opacity-30" viewBox="0 0 400 800" fill="none">
            <path
              d="M200 0L350 100L300 200L400 300L250 400L350 500L200 600L300 700L150 800"
              stroke="#a855f7"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M250 50L400 150L350 250L450 350L300 450L400 550L250 650L350 750L200 850"
              stroke="#c084fc"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Blue hexagonal pattern on bottom left */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
          <svg className="w-full h-full opacity-20" viewBox="0 0 400 400" fill="none">
            <polygon points="50,25 75,50 75,100 50,125 25,100 25,50" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <polygon
              points="100,75 125,100 125,150 100,175 75,150 75,100"
              stroke="#60a5fa"
              strokeWidth="1"
              fill="none"
            />
            <polygon
              points="150,25 175,50 175,100 150,125 125,100 125,50"
              stroke="#93c5fd"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-cyan-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link href="/#experience">
              <Button variant="ghost" size="sm" className="text-black hover:bg-cyan-300 flex items-center gap-2">
                <ChevronLeft className="w-5 h-5" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-bold mb-8">All my project</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="aspect-video bg-gray-300 rounded-t-lg flex-shrink-0"></div>
                <div className="bg-cyan-200 p-4 rounded-b-lg flex-grow flex flex-col">
                  <h3 className="text-black font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-black text-sm mb-4 flex-grow line-clamp-4">{project.description}</p>
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
          ))}
        </div>
      </div>
    </div>
  )
}
