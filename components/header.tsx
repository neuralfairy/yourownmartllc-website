"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">iE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Yourownmartllc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  pathname === item.href ? "text-red-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-black hover:text-red-600 hover:bg-red-50" asChild>
              <Link href="https://salescentri.com/login">Sign In</Link>
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold" asChild>
              <Link href="https://salescentri.com/free-trial">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">iE</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Yourownmartllc</span>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-4 flex-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-red-600 py-2 ${
                        pathname === item.href ? "text-red-600" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-4 mt-8">
                  <Button
                    variant="outline"
                    className="w-full text-black border-red-200 hover:bg-red-50 bg-transparent"
                    asChild
                  >
                    <Link href="https://salescentri.com/login">Sign In</Link>
                  </Button>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold" asChild>
                    <Link href="https://salescentri.com/free-trial">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
