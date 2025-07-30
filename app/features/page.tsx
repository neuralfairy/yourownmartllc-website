import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Target,
  BarChart3,
  Zap,
  Users,
  Settings,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Filter,
  Workflow,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Drip Campaigns",
      description:
        "Create sophisticated email sequences that automatically nurture leads based on their behavior, engagement, and position in your sales funnel.",
      benefits: [
        "Behavior-triggered sequences",
        "Dynamic content personalization",
        "Multi-path campaign flows",
        "Lead scoring integration",
      ],
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Email Flows",
      description:
        "Design complex automation workflows with visual drag-and-drop builder. Create branching logic based on user actions and preferences.",
      benefits: [
        "Visual workflow builder",
        "Conditional branching",
        "Time-based triggers",
        "Cross-channel integration",
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "A/B Testing",
      description:
        "Optimize every aspect of your campaigns with comprehensive split testing for subject lines, content, send times, and call-to-actions.",
      benefits: [
        "Subject line optimization",
        "Content variation testing",
        "Send time optimization",
        "Statistical significance tracking",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Automation Logic",
      description:
        "Advanced automation rules and triggers that respond to subscriber behavior, engagement patterns, and custom events in real-time.",
      benefits: [
        "Real-time trigger responses",
        "Custom event tracking",
        "Engagement-based segmentation",
        "Predictive automation",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Segmentation",
      description:
        "Automatically segment your audience based on demographics, behavior, engagement history, and custom attributes for targeted messaging.",
      benefits: [
        "Dynamic segmentation",
        "Behavioral targeting",
        "Custom attribute filtering",
        "Engagement-based groups",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analytics",
      description:
        "Comprehensive reporting and analytics to track campaign performance, ROI, and subscriber engagement across all touchpoints.",
      benefits: [
        "Real-time performance metrics",
        "ROI calculation and tracking",
        "Engagement heatmaps",
        "Custom report builder",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">iEMA Features</Badge>
            <h1 className="text-5xl font-bold mb-6">Powerful Email Marketing Automation Features</h1>
            <p className="text-xl text-red-100 mb-8">
              Everything you need to create, automate, and optimize your email marketing campaigns for maximum ROI and
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cream-100 hover:bg-cream-200 text-black font-semibold px-8 py-4" asChild>
                <Link href="https://salescentri.com/interactive-demo">
                  Interactive Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cream-200 text-black bg-cream-100 hover:bg-cream-200 font-semibold px-8 py-4"
                asChild
              >
                <Link href="https://salescentri.com/use-case-navigator">Use Case Navigator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See iEMA in Action</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience our powerful automation features with an interactive demo tailored to your industry and use
              case.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Quick Demo</h3>
                  <p className="text-gray-600 mb-4">5-minute overview of key features</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/quick-demo">Start Demo</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Filter className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Industry-Specific</h3>
                  <p className="text-gray-600 mb-4">Customized for your business type</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/industry-demo">Choose Industry</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Full Walkthrough</h3>
                  <p className="text-gray-600 mb-4">Complete feature demonstration</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/full-demo">Full Demo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Aggregator Overview */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-100 text-red-600 mb-6">AI-Powered Intelligence</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Aggregator Overview</h2>
            <p className="text-xl text-gray-600 mb-8">
              Leverage artificial intelligence to optimize your email campaigns, predict subscriber behavior, and
              automate decision-making processes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Predictive Analytics</h3>
                    <p className="text-gray-600">
                      AI predicts the best send times, subject lines, and content for each subscriber.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Smart Segmentation</h3>
                    <p className="text-gray-600">
                      Automatically create and update audience segments based on behavior patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Content Optimization</h3>
                    <p className="text-gray-600">AI suggests content improvements and personalization strategies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Performance Insights</h3>
                    <p className="text-gray-600">
                      Get actionable insights and recommendations to improve campaign performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4" asChild>
                <Link href="https://salescentri.com/ai-overview">
                  Learn More About AI Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how iEMA can transform your email marketing results.
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
