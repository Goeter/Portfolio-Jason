"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ImplementationSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section id="implementation" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-gray-800 text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
          My Experience Implementation
        </h2>

        <div className="space-y-6">
          {/* BRA Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="flex justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 flex items-center justify-center shadow-inner">
                    <div className="relative w-full h-full">
                      {/* BRA Diagram with updated colors */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          1<br />
                          Business
                          <br />
                          Requirement
                          <br />
                          Analysis
                        </div>
                      </div>
                      {/* Update other circles with gradients and shadows */}
                      <div className="absolute top-2 right-1/2 transform translate-x-1/2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          2<br />
                          Identify
                          <br />
                          Business
                          <br />
                          Needs
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          3<br />
                          Document
                          <br />
                          Requirement
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          4<br />
                          Validate &<br />
                          Clarify
                          <br />
                          Requirement
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          5<br />
                          Define
                          <br />
                          Project
                          <br />
                          Scope
                        </div>
                      </div>
                      {/* Arrows */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 288 288">
                          <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                            </marker>
                          </defs>
                          <path
                            d="M 144 72 L 180 108"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <path
                            d="M 180 180 L 144 216"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <path
                            d="M 108 216 L 72 180"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <path
                            d="M 72 108 L 108 72"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-gray-800 text-xl lg:text-2xl font-bold">Business Requirement Analysis (BRA)</h3>
                  <div className="text-gray-600 space-y-2 text-sm lg:text-base">
                    <p>
                      adalah proses mengidentifikasi, memahami, mendokumentasikan, dan mengklarifikasi kebutuhan bisnis
                      dari suatu proyek atau sistem yang akan dikembangkan.
                    </p>
                    <p>
                      <strong>Tujuan BRA :</strong>
                    </p>
                    <p>
                      Agar solusi teknologi atau sistem yang dibangun benar-benar sesuai dengan kebutuhan dan tujuan
                      bisnis, bukan hanya sekedar dari sisi teknis.
                    </p>
                    {expandedCard === "bra" && (
                      <div className="space-y-2">
                        <p>
                          <strong>Dalam praktiknya, Business Requirement Analysis melibatkan:</strong>
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          <li>
                            <strong>Menggali kebutuhan bisnis</strong>
                            <br />
                            Wawancara, observasi, diskusi dengan stakeholder (manajemen, user, pelanggan).
                          </li>
                          <li>
                            <strong>Mendefinisikan ruang lingkup proyek</strong>
                            <br />
                            Apa yang harus dan tidak harus dilakukan sistem.
                          </li>
                          <li>
                            <strong>Mendokumentasikan kebutuhan</strong>
                            <br />
                            Membuat dokumen yang jelas dan terstruktur.
                          </li>
                        </ol>
                      </div>
                    )}
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-500 p-0 text-sm"
                      onClick={() => toggleCard("bra")}
                    >
                      {expandedCard === "bra" ? "View Less" : "View More"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SDLC Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-400">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="flex justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 flex items-center justify-center shadow-inner">
                    <div className="relative w-full h-full">
                      {/* SDLC Circular Diagram */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-28 h-28 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold text-center shadow-lg">
                          THE
                          <br />
                          SOFTWARE
                          <br />
                          CYCLE
                        </div>
                      </div>
                      {/* Phase segments */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                        <div className="w-14 h-10 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          1<br />
                          PLANNING
                        </div>
                      </div>
                      <div className="absolute top-6 right-0 transform translate-x-1">
                        <div className="w-14 h-10 bg-blue-500 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          2<br />
                          ANALYSIS
                        </div>
                      </div>
                      <div className="absolute bottom-6 right-0 transform translate-x-1">
                        <div className="w-14 h-10 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          3<br />
                          DEVELOPMENT
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                        <div className="w-14 h-10 bg-teal-500 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          4<br />
                          IMPLEMENTATION
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-0 transform -translate-x-1">
                        <div className="w-14 h-10 bg-yellow-500 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          5<br />
                          TESTING &<br />
                          INTEGRATION
                        </div>
                      </div>
                      <div className="absolute top-6 left-0 transform -translate-x-1">
                        <div className="w-14 h-10 bg-orange-500 text-white text-xs font-bold flex items-center justify-center rounded shadow-lg">
                          6<br />
                          MAINTENANCE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-gray-800 text-xl lg:text-2xl font-bold">
                    Software Development Life Cycle (SDLC)
                  </h3>
                  <div className="text-gray-600 space-y-2 text-sm lg:text-base">
                    <p>
                      adalah sebuah proses sistematis untuk mengembangkan perangkat lunak (software) dari awal hingga
                      selesai. SDLC membantu tim pengembang agar dapat bekerja secara terstruktur, efisien, dan
                      menghasilkan software yang berkualitas serta sesuai kebutuhan pengguna.
                    </p>
                    <p>
                      <strong>Tujuan SDLC :</strong>
                    </p>
                    {expandedCard === "sdlc" && (
                      <div className="space-y-2">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Mengurangi risiko kegagalan proyek</li>
                          <li>Meningkatkan kualitas perangkat lunak</li>
                          <li>Menjaga timeline dan anggaran proyek</li>
                          <li>Menyediakan dokumentasi dan standar kerja yang jelas</li>
                        </ul>
                      </div>
                    )}
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-500 p-0 text-sm"
                      onClick={() => toggleCard("sdlc")}
                    >
                      {expandedCard === "sdlc" ? "View Less" : "View More"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
