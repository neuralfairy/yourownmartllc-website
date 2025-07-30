"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Users, Briefcase, Handshake } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const handleBack = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  const contactMethods = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "General Contact",
      description: "Questions about our platform or services",
      link: "https://salescentri.com/contact",
      linkText: "Contact Us",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Sales Inquiry",
      description: "Interested in iEMA for your business",
      link: "https://salescentri.com/sales-inquiry",
      linkText: "Talk to Sales",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Support Request",
      description: "Need help with your existing account",
      link: "https://salescentri.com/support-request",
      linkText: "Get Support",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Partnership",
      description: "Explore partnership opportunities",
      link: "https://salescentri.com/partnerships",
      linkText: "Partner With Us",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cream-100 text-red-600 hover:bg-cream-200 mb-6">Get In Touch</Badge>
            <h1 className="text-5xl font-bold mb-6">We're Here to Help You Succeed</h1>
            <p className="text-xl text-red-100 mb-8">
              Have questions about iEMA? Need support? Want to explore partnership opportunities? Our team is ready to
              assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
              <p className="text-xl text-gray-600">Choose the best way to reach us based on your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold" asChild>
                      <Link href={method.link}>{method.linkText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">Fill out our form and we'll get back to you within 24 hours</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <CardTitle className="text-2xl">Contact Form</CardTitle>
                  <Badge variant="outline" className="text-red-600 border-red-200">
                    Step {formStep} of 3
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                {formStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="inquiryType" className="text-lg font-semibold mb-4 block">
                        What type of inquiry is this?
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="demo">Request Demo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="h-12"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="h-12"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleNext}
                        disabled={!formData.inquiryType || !formData.firstName || !formData.lastName}
                        className="bg-red-600 hover:bg-red-700 text-white px-8"
                      >
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="h-12"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="text-black border-red-200 hover:bg-red-50 px-8 bg-transparent"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!formData.email || !formData.company}
                        className="bg-red-600 hover:bg-red-700 text-white px-8"
                      >
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="min-h-32"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Your Information:</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Type:</strong> {formData.inquiryType}
                        </p>
                        <p>
                          <strong>Name:</strong> {formData.firstName} {formData.lastName}
                        </p>
                        <p>
                          <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                          <strong>Company:</strong> {formData.company}
                        </p>
                        {formData.phone && (
                          <p>
                            <strong>Phone:</strong> {formData.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="text-black border-red-200 hover:bg-red-50 px-8 bg-transparent"
                      >
                        Back
                      </Button>
                      <Button
                        disabled={!formData.message}
                        className="bg-red-600 hover:bg-red-700 text-white px-8"
                        asChild
                      >
                        <Link href="https://salescentri.com/contact">Send Message</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
              <p className="text-xl text-gray-600">
                Prefer to contact us directly? Here are additional ways to get in touch
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us an email anytime</p>
                  <p className="text-red-600 font-semibold">hello@yourownmartllc.com</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak with our team directly</p>
                  <p className="text-red-600 font-semibold">(520) 555-0123</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Our Tucson headquarters</p>
                  <p className="text-red-600 font-semibold">
                    123 Innovation Drive
                    <br />
                    Tucson, AZ 85701
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM MST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-red-50 to-cream-50 rounded-2xl p-8">
              <MessageSquare className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
              <p className="text-xl text-gray-600 mb-8">
                Chat with our support team in real-time. We're here to help you get the most out of iEMA.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4" asChild>
                <Link href="https://salescentri.com/live-chat">
                  Start Live Chat <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait - start your free trial today and see how iEMA can drive better results for your business.
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
