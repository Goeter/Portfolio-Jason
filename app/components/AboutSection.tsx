"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const handleDownloadCV = () => {
    // Convert Google Drive view link to direct download link
    const fileId = "17RP2ktLobfYz4VnrLDc0Ux0hNfTIM5pD"
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    // Create a temporary link and trigger download
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = "Jason_Vianney_Sugiarto_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 scroll-animate opacity-0 translate-x-8 transition-all duration-1000">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/images/jason-casual.jpeg"
                  alt="Jason Vianney Sugiarto - Casual"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-green-200 animate-pulse"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2 scroll-animate opacity-0 translate-x-8 transition-all duration-1000 delay-300">
            <div className="space-y-4">
              <h2 className="text-gray-800 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                A little bit about me
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                System Analyst with 3 years of experience (1 year at PT Astra Honda Motor and 2 years at PT Topas Multi
                Finance) with a strong understanding of in business requirements analysis, system design, technical
                documentation & system testing. Accustomed to working closely with the development team, QA & business
                stakeholders to ensure the system runs as needed. Able to design prototypes with a high level of
                fidelity and good communication & systematic approach to problem solving.
              </p>
            </div>

            <Button
              onClick={handleDownloadCV}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
