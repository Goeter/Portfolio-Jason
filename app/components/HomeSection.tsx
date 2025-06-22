import Image from "next/image"

const skills = [
  { name: "Figma", color: "bg-purple-500" },
  { name: "Visio", color: "bg-blue-500" },
  { name: "Trello", color: "bg-blue-600" },
  { name: "Balsamiq", color: "bg-red-500" },
  { name: "Illustrator", color: "bg-orange-600" },
  { name: "BPMN.iO", color: "bg-green-500" },
  { name: "MySQL", color: "bg-blue-700" },
  { name: "ORACLE", color: "bg-red-600" },
]

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <div className="space-y-4">
              <h1 className="text-gray-800 text-3xl lg:text-4xl xl:text-5xl font-light leading-tight">
                Hello my name is <span className="font-bold text-blue-600">Jason Vianney Sugiarto</span>
              </h1>

              <h2 className="text-indigo-600 text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
                System Analyst, UI/UX Design,
                <br />
                Data Analyst, Remote
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                I am a System Analyst with a strong ability to work across UI/UX design and data analysis domains. I am
                comfortable working both on-site and remotely, and I bring a combination of solid technical expertise
                and effective interpersonal communication to every project. With a proven track record in understanding
                business needs and transforming them into functional, user-friendly systems, I bridge the gap between
                technical and non-technical teams seamlessly.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 4).map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${skill.color} text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.slice(4).map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${skill.color} text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/images/jason-formal.jpg"
                  alt="Jason Vianney Sugiarto"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
