import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, ArrowRight, Building, Target, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const leadership = [
    {
      name: "Sarah Martinez",
      title: "CEO & Founder",
      bio: "15+ years in marketing automation and B2B sales. Former VP at leading MarTech companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      title: "CTO",
      bio: "Expert in AI and machine learning applications for marketing. PhD in Computer Science from Stanford.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      title: "VP of Customer Success",
      bio: "Passionate about helping businesses achieve their marketing goals. 10+ years in customer success.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description:
        "We're obsessed with helping our clients achieve measurable results and ROI from their email marketing efforts.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Every decision we make is guided by what's best for our customers and their success.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously innovate and improve our platform to stay ahead of industry trends and needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">About Yourownmartllc</Badge>
            <h1 className="text-5xl font-bold mb-6">Empowering B2B Success Through Intelligent Email Marketing</h1>
            <p className="text-xl text-red-100 mb-8">
              Based in Tucson, Arizona, we're dedicated to helping businesses transform their email marketing with
              cutting-edge automation technology and proven strategies.
            </p>
            <div className="flex items-center justify-center gap-2 text-red-100">
              <MapPin className="h-5 w-5" />
              <span>Proudly serving businesses from Tucson, Arizona</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2019 in the heart of Tucson, Yourownmartllc Solutions emerged from a simple observation:
                    businesses were struggling to effectively nurture leads and convert prospects into customers through
                    email marketing.
                  </p>
                  <p>
                    Our founder, Sarah Martinez, experienced this challenge firsthand while working with B2B companies
                    across various industries. She realized that existing email marketing tools were either too complex
                    for small businesses or too simplistic for growing companies that needed sophisticated automation.
                  </p>
                  <p>
                    This led to the creation of iEMA (Email Marketing Automation) - a platform that combines the power
                    of advanced automation with the simplicity that businesses need to succeed. Today, we're proud to
                    serve over 500 companies worldwide, helping them achieve an average of 45% higher open rates and
                    3.2x ROI improvement.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-100 to-cream-100 rounded-2xl p-8">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Yourownmartllc team collaboration"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe that every business deserves access to powerful email marketing automation that drives real
                results and sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <Building className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  To democratize advanced email marketing automation by providing businesses of all sizes with
                  intelligent, easy-to-use tools that drive measurable results, foster customer relationships, and
                  accelerate growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Meet the experienced professionals driving innovation at Yourownmartllc
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-red-600 font-semibold mb-4">{leader.title}</p>
                    <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link href="https://salescentri.com/leadership-team">
                  View Full Leadership Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Recognition</h2>
              <p className="text-xl text-gray-600">Our commitment to excellence is recognized by industry leaders</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "SOC 2 Type II", description: "Security & Compliance" },
                { name: "GDPR Compliant", description: "Data Protection" },
                { name: "ISO 27001", description: "Information Security" },
                { name: "MarTech Breakthrough", description: "Innovation Award 2023" },
              ].map((cert, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="text-black border-red-200 hover:bg-red-50 font-semibold px-8 py-3 bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/certifications">View All Certifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for helping businesses succeed through
              innovative marketing technology.
            </p>
            <div className="bg-gradient-to-br from-red-50 to-cream-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Remote-First</div>
                  <div className="text-gray-600">Work from anywhere</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Growth-Focused</div>
                  <div className="text-gray-600">Continuous learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Impact-Driven</div>
                  <div className="text-gray-600">Make a difference</div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link href="https://salescentri.com/career-openings">
                  View Career Openings <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Yourownmartllc Difference?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us to power their email marketing success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cream-100 hover:bg-cream-200 text-black font-semibold px-8 py-4" asChild>
              <Link href="https://salescentri.com/free-trial">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream-200 text-black bg-cream-100 hover:bg-cream-200 font-semibold px-8 py-4"
              asChild
            >
              <Link href="https://salescentri.com/book-demo">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
