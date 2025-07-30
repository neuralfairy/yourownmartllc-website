import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp, Mail, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to Email Marketing Automation in 2024",
    excerpt:
      "Discover the latest trends, strategies, and best practices for email marketing automation that drive real results for B2B businesses.",
    author: "Sarah Martinez",
    date: "January 15, 2024",
    readTime: "12 min read",
    category: "Strategy",
    image: "/placeholder.svg?height=400&width=600",
  }

  const blogPosts = [
    {
      title: "45% Higher Open Rates: How Our Client Transformed Their Email Strategy",
      excerpt:
        "A detailed case study showing how a SaaS company used iEMA to dramatically improve their email performance and drive more qualified leads.",
      author: "Michael Chen",
      date: "January 12, 2024",
      readTime: "8 min read",
      category: "Case Study",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Drip Campaign Mastery: Building Sequences That Convert",
      excerpt:
        "Learn how to create sophisticated drip campaigns that nurture leads effectively and guide them through your sales funnel.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      readTime: "10 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "A/B Testing Your Email Campaigns: What Actually Works",
      excerpt:
        "Data-driven insights on email A/B testing best practices, including subject lines, send times, and content optimization.",
      author: "David Kim",
      date: "January 8, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Email Deliverability in 2024: Avoiding the Spam Folder",
      excerpt:
        "Essential strategies to ensure your emails reach the inbox, including authentication, reputation management, and content best practices.",
      author: "Lisa Thompson",
      date: "January 5, 2024",
      readTime: "9 min read",
      category: "Technical",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "ROI Calculator: Measuring Email Marketing Success",
      excerpt:
        "How to accurately calculate and track the return on investment of your email marketing campaigns with practical examples.",
      author: "Sarah Martinez",
      date: "January 3, 2024",
      readTime: "7 min read",
      category: "Strategy",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Personalization at Scale: Using AI for Better Email Content",
      excerpt:
        "Explore how artificial intelligence can help you create personalized email content that resonates with each subscriber.",
      author: "Michael Chen",
      date: "December 28, 2023",
      readTime: "11 min read",
      category: "AI & Technology",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Strategy", count: 8 },
    { name: "Case Studies", count: 6 },
    { name: "Tutorials", count: 5 },
    { name: "Analytics", count: 3 },
    { name: "Technical", count: 2 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">iEMA Blog</Badge>
            <h1 className="text-5xl font-bold mb-6">Email Marketing Insights & Strategies</h1>
            <p className="text-xl text-red-100 mb-8">
              Stay ahead of the curve with expert insights, case studies, and actionable strategies to maximize your
              email marketing ROI.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <p className="text-xl text-gray-600">Our latest insights on email marketing automation</p>
            </div>

            <Card className="overflow-hidden border-0 shadow-2xl bg-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">{featuredPost.category}</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-fit" asChild>
                    <Link href="/blog/email-marketing-automation-guide-2024">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`${
                    category.active
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "text-black border-red-200 hover:bg-red-50"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0"
                        asChild
                      >
                        <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Hub */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Hub</h2>
              <p className="text-xl text-gray-600">
                Download our comprehensive guides, templates, and tools to accelerate your email marketing success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Email Templates</h3>
                  <p className="text-gray-600 mb-6">
                    Professional email templates for every stage of your customer journey
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/tutorials">Download Templates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Case Studies</h3>
                  <p className="text-gray-600 mb-6">Real success stories from businesses using iEMA to drive results</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/case-studies">View Case Studies</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Whitepapers</h3>
                  <p className="text-gray-600 mb-6">
                    In-depth research and insights on email marketing trends and strategies
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/whitepapers">Download Whitepapers</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-red-50 to-cream-50 rounded-2xl p-8">
              <TrendingUp className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Email Marketing Trends</h3>
              <p className="text-xl text-gray-600 mb-8">
                Get weekly insights, tips, and strategies delivered straight to your inbox. Join 10,000+ marketers who
                trust our newsletter.
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <Input placeholder="Enter your email address" className="flex-1 h-12" />
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6" asChild>
                  <Link href="https://salescentri.com/newsletter">Subscribe</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Put These Strategies Into Action?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start implementing these proven email marketing strategies with iEMA's powerful automation platform.
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
