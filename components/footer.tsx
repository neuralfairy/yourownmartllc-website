import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "https://salescentri.com/integrations" },
      { name: "API", href: "https://salescentri.com/api-reference" },
      { name: "Security", href: "https://salescentri.com/security" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "https://salescentri.com/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/whitepapers" },
      { name: "Templates", href: "https://salescentri.com/templates" },
      { name: "Webinars", href: "https://salescentri.com/webinars" },
    ],
    support: [
      { name: "Help Center", href: "/faq" },
      { name: "Contact Support", href: "/contact" },
      { name: "User Guide", href: "https://salescentri.com/user-guide" },
      { name: "System Status", href: "https://salescentri.com/status" },
      { name: "Community", href: "https://salescentri.com/community" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "https://salescentri.com/career-openings" },
      { name: "Press", href: "https://salescentri.com/press" },
      { name: "Partners", href: "https://salescentri.com/partnerships" },
      { name: "Contact", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Email Marketing Insights</h3>
            <p className="text-gray-400 mb-8">
              Get weekly tips, strategies, and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6" asChild>
                <Link href="https://salescentri.com/newsletter">Subscribe</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">iE</span>
              </div>
              <span className="text-2xl font-bold">Yourownmartllc</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering B2B businesses with intelligent email marketing automation. Drive better results, nurture leads
              effectively, and maximize your marketing ROI.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">hello@yourownmartllc.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">(520) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">123 Innovation Drive, Tucson, AZ 85701</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <span>© 2024 Yourownmartllc Solutions. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Info
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com/yourownmartllc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/yourownmartllc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/yourownmartllc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/yourownmartllc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <Separator className="my-6 bg-gray-800" />

          <div className="text-center">
            <Link
              href="https://salescentri.com?utm_source=yourownmartllc.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Powered by Sales Intelligence Platform
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
