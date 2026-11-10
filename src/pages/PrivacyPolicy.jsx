import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SeoHead from '../components/SeoHead'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-chalk">
      <SeoHead
        title="Privacy Policy — MidAm Golf Camp"
        description="How MidAm Golf Camp collects and uses your personal data."
        canonical="https://www.midamgolfcamp.com/privacy"
      />
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-extrabold font-condensed uppercase text-pine text-3xl md:text-4xl mb-2">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-pine/40 uppercase tracking-widest mb-12">
            Last updated: 10 November 2026
          </p>

          <div className="space-y-8 text-pine/70 leading-relaxed text-[15px]">
            <p>
              This policy explains how MidAm Golf Camp ("MidAm", "we", "us") collects and uses your
              personal data when you join our waitlist, fill in one of our forms (including forms on
              Facebook and Instagram), or contact us.
            </p>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">Who we are</h2>
              <p>
                The data controller is Antoni Sallent Tonijoan, trading as MidAm Golf Camp,
                NIF 53299988H, Carrer de Santa Eulàlia 11, 08195 Sant Cugat del Vallès, Barcelona, Spain.
              </p>
              <p className="mt-2">
                Contact for any privacy question:{' '}
                <a href="mailto:sales@midamgolfcamp.com" className="text-flag hover:text-flag-ink transition-colors">
                  sales@midamgolfcamp.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">What data we collect</h2>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Name, email address, phone number and country.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Golf information you choose to give us, such as your handicap range and when you would like to attend a camp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Your consent choices and the date you gave them.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>If you sign up through a Facebook or Instagram ad, Meta passes us the answers you submit in the form. We do not receive your Facebook or Instagram password or private messages.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">Why we use it and on what legal basis</h2>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>To manage the waitlist and contact you about our golf camps (dates, prices, early-bird offers and registration), by email, phone or WhatsApp. Legal basis: <strong className="text-pine">your consent</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>To answer your questions and prepare a booking if you ask us to. Legal basis: <strong className="text-pine">steps taken at your request before entering into a contract</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>To keep records of consent and bookings. Legal basis: <strong className="text-pine">our legal obligations</strong>.</span>
                </li>
              </ul>
              <p className="mt-4">
                You can withdraw your consent at any time by replying "unsubscribe" to any message or by
                writing to{' '}
                <a href="mailto:sales@midamgolfcamp.com" className="text-flag hover:text-flag-ink transition-colors">
                  sales@midamgolfcamp.com
                </a>
                . We will stop contacting you straight away.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">Who we share it with</h2>
              <p className="mb-3">
                We do not sell your data. We only share it with service providers that help us run MidAm,
                under contracts that protect your data:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Meta Platforms Ireland Ltd (Facebook and Instagram lead forms and ads).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Web3Forms (the waitlist form on our website) and Google (our email provider).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-flag mt-1 flex-shrink-0">—</span>
                  <span>Empordà Golf Resort and transfer providers, and the venues of our other camps, only if you book a camp and only the data needed for your stay.</span>
                </li>
              </ul>
              <p className="mt-3">
                Some of these providers may process data outside the UK and the European Economic Area.
                When they do, the transfer is protected by European Commission Standard Contractual Clauses
                or an adequacy decision.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">How long we keep it</h2>
              <p>
                We keep waitlist data until you ask us to delete it or withdraw your consent, and for a
                maximum of 24 months after our last contact with you. Booking records are kept for as long
                as the law requires (usually 6 years for tax purposes).
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">Your rights</h2>
              <p>
                Under the GDPR and the UK GDPR you can ask to access, correct or delete your data, to
                restrict or object to its use, and to receive it in a portable format. Write to{' '}
                <a href="mailto:sales@midamgolfcamp.com" className="text-flag hover:text-flag-ink transition-colors">
                  sales@midamgolfcamp.com
                </a>{' '}
                and we will reply within one month.
              </p>
              <p className="mt-3">
                If you are not happy with our answer, you can complain to the Spanish data protection
                authority (AEPD, aepd.es), the UK Information Commissioner's Office (ico.org.uk) or the
                Irish Data Protection Commission (dataprotection.ie).
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold uppercase text-pine text-lg mb-3">Changes</h2>
              <p>
                We may update this policy. The date at the top shows the latest version.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
