import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yourownmartllc Solutions - iEMA Email Marketing Automation",
  description:
    "Transform your B2B email marketing with iEMA's intelligent automation platform. Drive 45% higher open rates, nurture leads effectively, and maximize ROI with our advanced email marketing tools.",
  keywords:
    "email automation, drip campaigns, marketing sequences, B2B sales tools, iEMA, email marketing, lead nurturing, marketing ROI",
  authors: [{ name: "Yourownmartllc Solutions" }],
  creator: "Yourownmartllc Solutions",
  publisher: "Yourownmartllc Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourownmartllc.com",
    siteName: "Yourownmartllc Solutions",
    title: "iEMA - Email Marketing Automation Platform",
    description:
      "Drive 45% higher open rates with intelligent email marketing automation. Nurture leads, automate sequences, and maximize ROI.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "iEMA Email Marketing Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourownmartllc",
    creator: "@yourownmartllc",
    title: "iEMA - Email Marketing Automation Platform",
    description: "Drive 45% higher open rates with intelligent email marketing automation.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourownmartllc.com" />
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Tucson" />
        <meta name="geo.position" content="32.2217;-110.9265" />
        <meta name="ICBM" content="32.2217, -110.9265" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yourownmartllc Solutions",
              alternateName: "iEMA",
              url: "https://yourownmartllc.com",
              logo: "https://yourownmartllc.com/logo.png",
              description:
                "B2B email marketing automation platform specializing in lead nurturing and marketing ROI optimization",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive",
                addressLocality: "Tucson",
                addressRegion: "AZ",
                postalCode: "85701",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-520-555-0123",
                contactType: "customer service",
                email: "hello@yourownmartllc.com",
              },
              sameAs: [
                "https://facebook.com/yourownmartllc",
                "https://twitter.com/yourownmartllc",
                "https://linkedin.com/company/yourownmartllc",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
