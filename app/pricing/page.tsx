import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started with email automation",
      features: [
        "Up to 5,000 contacts",
        "10,000 emails per month",
        "Basic automation workflows",
        "Email templates library",
        "Basic analytics & reporting",
        "Email support",
        "A/B testing (2 variants)",
        "Landing page builder",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced features for growing businesses and marketing teams",
      features: [
        "Up to 25,000 contacts",
        "100,000 emails per month",
        "Advanced automation workflows",
        "Custom email templates",
        "Advanced analytics & ROI tracking",
        "Priority support + phone",
        "Unlimited A/B testing",
        "CRM integrations",
        "Lead scoring",
        "Custom fields & segmentation",
        "API access",
        "White-label options",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Unlimited emails",
        "Custom automation workflows",
        "Dedicated account manager",
        "Advanced reporting & analytics",
        "24/7 priority support",
        "Custom integrations",
        "Advanced security features",
        "Single sign-on (SSO)",
        "Custom onboarding",
        "SLA guarantees",
        "Multi-user permissions",
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">Transparent Pricing</Badge>
            <h1 className="text-5xl font-bold mb-6">Choose the Perfect Plan for Your Business</h1>
            <p className="text-xl text-red-100 mb-8">
              Start with our free trial and scale as you grow. No hidden fees, no long-term contracts.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-cream-100 hover:bg-cream-200 text-black font-semibold px-8 py-4" asChild>
                <Link href="https://salescentri.com/plans-overview">
                  View All Plans <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-2 border-red-500 scale-105 bg-white"
                    : "border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full font-semibold py-3 ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-cream-100 hover:bg-cream-200 text-black border border-red-200"
                    }`}
                    asChild
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I change plans anytime?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial with full access to all Professional plan features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-600">
                    Yes, save 20% when you pay annually. The discount is applied automatically at checkout.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">What happens if I exceed my contact limit?</h3>
                  <p className="text-gray-600">
                    We'll notify you before you reach your limit and help you upgrade to accommodate your growth.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is there a setup fee?</h3>
                  <p className="text-gray-600">
                    No setup fees for Starter and Professional plans. Enterprise plans include complimentary onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-gray-600 mb-6">
                Not satisfied with iEMA? Get a full refund within 30 days, no questions asked. We're confident you'll
                love the results, but your satisfaction is our priority.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link href="https://salescentri.com/free-trial">Start Risk-Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using iEMA to automate their email marketing and drive better results.
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
              <Link href="https://salescentri.com/enterprise-custom">Enterprise & Custom</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
