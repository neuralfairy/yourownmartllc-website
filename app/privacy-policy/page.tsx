import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Yourownmartllc Solutions",
  description:
    "Learn how Yourownmartllc Solutions handles information for its website and iEMA email marketing automation platform.",
}

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide when you contact us, request a demo, subscribe to updates, create or manage an account, or use iEMA. This may include your name, work email address, phone number, company and job information, account details, and the contents of messages you send us.",
      "When customers use iEMA, they may provide business contact and subscriber information, email content, campaign settings, and related records. This information is supplied and controlled by the customer. We process it to provide the service and according to the customer's instructions and applicable agreements.",
      "We may also receive information about how you use our website or services, such as pages viewed, links followed, device and browser details, and interactions with email campaigns where tracking features are enabled.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information to operate, maintain, and improve our website and iEMA; provide customer support; manage accounts and requested services; communicate about products, service updates, or events; protect against misuse; and meet legal obligations.",
      "Customers are responsible for ensuring they have an appropriate basis to provide subscriber information to iEMA and for configuring campaigns and tracking in accordance with their own privacy obligations.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    paragraphs: [
      "Our website and services may use cookies or similar technologies to support essential functions, remember preferences, and understand usage where those features are enabled. You can manage cookies through your browser settings. Disabling them may affect some features.",
    ],
  },
  {
    title: "How we share information",
    paragraphs: [
      "We may share information with service providers that help us host, operate, secure, or support our website and services. They may use information only to provide services to us and are subject to appropriate confidentiality and data-protection obligations.",
      "We may also disclose information when required by law, to protect rights and safety, or in connection with a business transaction such as a merger or transfer of assets. We do not disclose customer-provided subscriber data for the service providers' independent marketing.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We retain information for as long as needed for the purposes described in this policy, to provide services, resolve disputes, and meet legal obligations. Customer account and subscriber data may be retained or deleted according to the applicable customer agreement and the customer's instructions.",
      "We use reasonable administrative, technical, and organizational safeguards designed to protect information. No method of transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Your choices and privacy rights",
    paragraphs: [
      "You can unsubscribe from promotional emails using the link in the message. You may also contact us to request access to, correction of, or deletion of personal information we hold about you, subject to applicable law.",
      "Depending on where you live, you may have additional rights regarding your personal information, such as requesting a copy, limiting certain uses, or objecting to processing. If your information is in an iEMA customer's account, please contact that customer directly; we will assist the customer as appropriate.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "Our website and services are intended for businesses and are not directed to children. We do not knowingly collect personal information directly from children under 13. If you believe a child has provided us personal information, contact us so we can review and address the request.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. We will post the revised version on this page and update the date below. Your continued use of the website or services after an update means the revised policy applies to future use.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-cream-50 to-red-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg sm:p-10 lg:p-12">
        <header className="mb-10 border-b border-gray-200 pb-8">
          <p className="mb-3 font-semibold text-red-600">Yourownmartllc Solutions</p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: November 26, 2026</p>
          <p className="mt-5 leading-relaxed text-gray-600">
            This policy explains how Yourownmartllc Solutions handles information through
            yourownmartllc.com and iEMA, our B2B email marketing automation platform.
          </p>
        </header>

        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">{section.title}</h2>
              <div className="space-y-3 leading-relaxed text-gray-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Contact us</h2>
            <p className="leading-relaxed text-gray-600">
              For privacy questions or requests, contact Yourownmartllc Solutions at{" "}
              <a className="font-medium text-red-600 underline" href="mailto:hello@yourownmartllc.com">
                hello@yourownmartllc.com
              </a>
              , or write to 123 Innovation Drive, Tucson, AZ 85701, United States.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
