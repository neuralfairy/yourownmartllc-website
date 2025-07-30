"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is iEMA and how does it work?",
          answer:
            "iEMA (Email Marketing Automation) is our comprehensive platform that helps businesses automate their email marketing campaigns. It uses intelligent workflows, behavioral triggers, and AI-powered optimization to nurture leads and convert prospects into customers. The platform integrates with your existing tools and provides detailed analytics to track performance and ROI.",
        },
        {
          question: "How quickly can I get started with iEMA?",
          answer:
            "You can be up and running with iEMA in under 30 minutes. Our onboarding process includes account setup, email template selection, and basic automation configuration. We provide step-by-step guidance and our support team is available to help you get started quickly.",
        },
        {
          question: "Do I need technical knowledge to use iEMA?",
          answer:
            "No technical knowledge is required. iEMA is designed with a user-friendly interface that allows marketers to create sophisticated campaigns using drag-and-drop builders and pre-built templates. However, we also offer advanced features and API access for technical users who want more customization.",
        },
      ],
    },
    {
      title: "Email Automation",
      faqs: [
        {
          question: "What types of email automation can I create?",
          answer:
            "iEMA supports various automation types including welcome sequences, drip campaigns, abandoned cart recovery, lead nurturing workflows, re-engagement campaigns, and behavioral-triggered emails. You can create complex multi-path automations based on subscriber actions, preferences, and engagement history.",
        },
        {
          question: "How does behavioral triggering work?",
          answer:
            "Our behavioral triggering system monitors subscriber actions such as email opens, clicks, website visits, and purchase behavior. Based on these actions, the system automatically sends relevant emails or moves subscribers through different automation paths. This ensures each subscriber receives personalized content at the right time.",
        },
        {
          question: "Can I A/B test my automated emails?",
          answer:
            "Yes, iEMA includes comprehensive A/B testing capabilities for automated emails. You can test subject lines, content, send times, and call-to-actions. The system automatically sends the winning variation to the remaining subscribers and provides detailed performance analytics.",
        },
      ],
    },
    {
      title: "Deliverability & Performance",
      faqs: [
        {
          question: "How do you ensure high email deliverability?",
          answer:
            "We maintain high deliverability through multiple strategies: dedicated IP addresses, authentication protocols (SPF, DKIM, DMARC), reputation monitoring, bounce management, and compliance with anti-spam regulations. Our deliverability team continuously monitors and optimizes delivery rates across all major email providers.",
        },
        {
          question: "What kind of analytics and reporting do you provide?",
          answer:
            "iEMA provides comprehensive analytics including open rates, click-through rates, conversion tracking, revenue attribution, subscriber engagement scores, and ROI calculations. You can create custom reports, set up automated reporting, and integrate with Google Analytics for deeper insights.",
        },
        {
          question: "How do you calculate ROI for email campaigns?",
          answer:
            "Our ROI calculator tracks revenue generated from email campaigns by monitoring conversions, purchase values, and attributing sales to specific emails or automation sequences. It factors in your subscription cost and time investment to provide accurate ROI metrics and recommendations for optimization.",
        },
      ],
    },
    {
      title: "Integrations & Technical",
      faqs: [
        {
          question: "What integrations are available?",
          answer:
            "iEMA integrates with popular CRM systems (Salesforce, HubSpot, Pipedrive), e-commerce platforms (Shopify, WooCommerce, Magento), analytics tools (Google Analytics, Facebook Pixel), and hundreds of other applications through Zapier. We also provide REST API access for custom integrations.",
        },
        {
          question: "Is my data secure with iEMA?",
          answer:
            "Yes, we take data security seriously. iEMA is SOC 2 Type II certified, GDPR compliant, and uses enterprise-grade security measures including data encryption, secure data centers, regular security audits, and strict access controls. Your subscriber data is protected and never shared with third parties.",
        },
        {
          question: "Do you provide API access?",
          answer:
            "Yes, we offer comprehensive REST API access that allows you to integrate iEMA with your existing systems, automate account management, sync subscriber data, trigger campaigns, and access analytics programmatically. API documentation and SDKs are available for developers.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "How does your pricing work?",
          answer:
            "Our pricing is based on the number of contacts in your database and emails sent per month. We offer three main plans: Starter ($49/month), Professional ($149/month), and Enterprise (custom pricing). All plans include core automation features, with advanced capabilities available in higher tiers.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a 14-day free trial with full access to Professional plan features. No credit card is required to start your trial. You can test all automation features, send emails, and explore the platform before making a commitment.",
        },
        {
          question: "Can I change my plan at any time?",
          answer:
            "Absolutely. You can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and billing is prorated accordingly. Our team can help you choose the right plan based on your current needs and growth projections.",
        },
      ],
    },
    {
      title: "Support & Training",
      faqs: [
        {
          question: "What support options are available?",
          answer:
            "We provide multiple support channels: email support (all plans), priority phone support (Professional and Enterprise), live chat, comprehensive knowledge base, video tutorials, and webinar training sessions. Enterprise customers also get a dedicated account manager.",
        },
        {
          question: "Do you offer training and onboarding?",
          answer:
            "Yes, we provide comprehensive onboarding for all new customers, including platform walkthrough, strategy consultation, and campaign setup assistance. We also offer regular webinars, certification programs, and one-on-one training sessions for Enterprise customers.",
        },
        {
          question: "How can I get help with campaign strategy?",
          answer:
            "Our customer success team provides strategic guidance to help you optimize your email marketing. This includes campaign planning, automation workflow design, performance analysis, and best practice recommendations. Professional and Enterprise customers receive priority strategic support.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">Help Center</Badge>
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-red-100 mb-8">
              Find answers to common questions about iEMA, email automation, deliverability, integrations, and more.
              Can't find what you're looking for? Contact our support team.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or browse our categories below.</p>
                <Button onClick={() => setSearchTerm("")} className="bg-red-600 hover:bg-red-700 text-white">
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.title}</h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 10 + faqIndex
                        const isOpen = openItems.includes(globalIndex)

                        return (
                          <Card key={faqIndex} className="border-0 shadow-lg overflow-hidden">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                {isOpen ? (
                                  <ChevronUp className="h-5 w-5 text-red-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-red-500 flex-shrink-0" />
                                )}
                              </div>
                            </button>
                            {isOpen && (
                              <CardContent className="px-6 pb-6 pt-0">
                                <div className="border-t border-gray-100 pt-4">
                                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                              </CardContent>
                            )}
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Need More Help?</h2>
              <p className="text-xl text-gray-600">Explore our additional resources and support options</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <HelpCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">User Guide</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive documentation and step-by-step tutorials for all iEMA features
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/user-guide">View User Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">API Reference</h3>
                  <p className="text-gray-600 mb-6">
                    Technical documentation for developers integrating with iEMA's API
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/api-reference">API Documentation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Ticket</h3>
                  <p className="text-gray-600 mb-6">
                    Can't find your answer? Submit a support ticket and our team will help you
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href="https://salescentri.com/submit-ticket">Submit Ticket</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <MessageSquare className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-xl text-gray-600 mb-8">
                Our support team is here to help. Get personalized assistance with your email marketing strategy and
                technical questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4" asChild>
                  <Link href="https://salescentri.com/live-chat">
                    Start Live Chat <MessageSquare className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-red-200 hover:bg-red-50 font-semibold px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started with iEMA?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of intelligent email marketing automation.
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
