import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Mail, Target, Zap, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200">iEMA - Email Marketing Automation</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Email Marketing with
                <span className="text-cream-200"> Intelligent Automation</span>
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                Drive 45% higher open rates and maximize ROI with our advanced email marketing automation platform.
                Nurture leads, automate sequences, and scale your B2B marketing effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cream-100 hover:bg-cream-200 text-black font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="https://salescentri.com/book-demo">
                    Book Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream-200 text-black bg-cream-100 hover:bg-cream-200 font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="https://salescentri.com/free-trial">Start Free Trial</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cream-200 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Smart Automation</h3>
                      <p className="text-red-100">AI-powered email sequences</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cream-200 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Lead Nurturing</h3>
                      <p className="text-red-100">Convert prospects to customers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cream-200 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">ROI Analytics</h3>
                      <p className="text-red-100">Track performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-600">45%</div>
              <div className="text-gray-600">Higher Open Rates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-600">3.2x</div>
              <div className="text-gray-600">ROI Improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-600">89%</div>
              <div className="text-gray-600">Lead Conversion</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by leading B2B companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Email Marketing Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Drip Campaigns</h3>
                <p className="text-gray-600 mb-6">
                  Create sophisticated email sequences that nurture leads automatically based on behavior and
                  engagement.
                </p>
                <Button variant="outline" className="text-black border-red-200 hover:bg-red-50 bg-transparent" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">A/B Testing</h3>
                <p className="text-gray-600 mb-6">
                  Optimize your campaigns with advanced split testing for subject lines, content, and send times.
                </p>
                <Button variant="outline" className="text-black border-red-200 hover:bg-red-50 bg-transparent" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Analytics & ROI</h3>
                <p className="text-gray-600 mb-6">
                  Track performance with detailed analytics and measure the true ROI of your email marketing efforts.
                </p>
                <Button variant="outline" className="text-black border-red-200 hover:bg-red-50 bg-transparent" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">See how iEMA has transformed their email marketing results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Marketing Director, TechCorp",
                content:
                  "iEMA increased our email open rates by 45% and conversion rates by 60%. The automation features are game-changing.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                title: "CEO, GrowthLab",
                content:
                  "The ROI calculator helped us justify our marketing spend. We've seen 3.2x return on our email campaigns.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                title: "VP Marketing, ScaleUp Inc",
                content:
                  "The drip campaign functionality is incredibly powerful. We've automated our entire lead nurturing process.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of B2B companies using iEMA to automate their email marketing and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 hover:bg-cream-200 text-black font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="https://salescentri.com/free-trial">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream-200 text-black bg-cream-100 hover:bg-cream-200 font-semibold px-8 py-4 text-lg"
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
