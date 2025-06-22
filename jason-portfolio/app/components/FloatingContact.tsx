"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  const contactLinks = [
    {
      icon: Github,
      href: "https://github.com/Goeter",
      color: "bg-gray-800 hover:bg-gray-700",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jasonvianneysugiarto",
      color: "bg-blue-600 hover:bg-blue-500",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jasonvianneys@gmail.com",
      color: "bg-red-500 hover:bg-red-400",
      label: "Gmail",
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Contact Icons */}
        <div
          className={`flex flex-col space-y-3 transition-all duration-300 ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                aria-label={link.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>

        {/* Main Contact Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full bg-green-400 hover:bg-green-300 text-black font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Contact
        </Button>
      </div>
    </div>
  )
}
