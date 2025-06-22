"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern web technologies. This platform includes a complete admin dashboard for inventory management, order processing, and customer relationship management. The system features secure payment integration with multiple payment gateways, real-time inventory tracking, and automated email notifications for order confirmations and shipping updates.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    description:
      "An interactive dashboard designed for business intelligence and data visualization with real-time reporting capabilities. The system processes large datasets and presents actionable insights through intuitive charts, graphs, and metrics that help stakeholders make informed business decisions.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication and comprehensive financial management features. The app provides users with complete control over their banking needs while maintaining the highest security standards.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "A real-time inventory tracking and management system designed for retail operations. The system provides automated stock alerts, comprehensive reporting, and seamless integration with existing business processes.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "An online learning platform with video streaming, progress tracking, and interactive course management tools. The system supports both instructors and students with comprehensive features for modern education delivery.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ExperienceDetail({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

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
            <path
              d="M300 100L450 200L400 300L500 400L350 500L450 600L300 700L400 800L250 900"
              stroke="#e879f9"
              strokeWidth="1"
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
            <polygon
              points="200,75 225,100 225,150 200,175 175,150 175,100"
              stroke="#3b82f6"
              strokeWidth="1"
              fill="none"
            />
            <polygon points="50,175 75,200 75,250 50,275 25,250 25,200" stroke="#60a5fa" strokeWidth="1" fill="none" />
            <polygon
              points="100,225 125,250 125,300 100,325 75,300 75,250"
              stroke="#93c5fd"
              strokeWidth="1"
              fill="none"
            />
            <polygon
              points="150,175 175,200 175,250 150,275 125,250 125,200"
              stroke="#3b82f6"
              strokeWidth="1"
              fill="none"
            />
            <polygon
              points="200,225 225,250 225,300 200,325 175,300 175,250"
              stroke="#60a5fa"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/#experience">
          <Button className="bg-green-400 hover:bg-green-300 text-black font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-white text-3xl font-bold mb-8">Detail Experience</h1>

          {/* Main Image */}
          <div className="mb-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Title */}
          <h2 className="text-white text-2xl font-bold mb-4">{project.title}</h2>

          {/* Project Content */}
          <div className="text-gray-300 text-lg leading-relaxed">{project.description}</div>
        </div>
      </div>
    </div>
  )
}
