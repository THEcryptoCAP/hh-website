import Link from 'next/link';
import SpotlightCard from '../components/SpotlightCard';

export default function About() {
  return (
    <div className="min-h-screen relative z-10">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-heading-1 font-serif font-bold text-foreground leading-tight mb-8">
              An Integrated Ecosystem for Capital, Strategy, and Growth
            </h1>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              We are not just investors. We are builders, advisors, and long-term partners. Our firm was created with a simple mission: to bring together the disciplines of Private Equity, Venture Capital, and Advisory under one roof enabling businesses at every stage to unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">Our Vision</h2>
            <p className="text-body-large text-muted-foreground leading-relaxed text-center">
              To create a seamless bridge between capital and strategy, empowering founders, businesses, and investors to build enduring enterprises that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-3 font-serif font-bold text-foreground mb-12 text-center">Our Ethos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <SpotlightCard className="p-8">
                <h3 className="text-heading-4 font-semibold text-foreground mb-4">Value Creation First</h3>
                <p className="text-body text-muted-foreground">
                  Every engagement whether investment or advisory is guided by our commitment to generate sustainable long-term value.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-8">
                <h3 className="text-heading-4 font-semibold text-foreground mb-4">Partnership Over Transactions</h3>
                <p className="text-body text-muted-foreground">
                  We see relationships as collaborations, not one-off deals.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-8">
                <h3 className="text-heading-4 font-semibold text-foreground mb-4">Integrated Expertise</h3>
                <p className="text-body text-muted-foreground">
                  With the combined power of PE, VC, and Advisory, we bring clarity and capability across the entire business lifecycle.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-8">
                <h3 className="text-heading-4 font-semibold text-foreground mb-4">Intentional Growth</h3>
                <p className="text-body text-muted-foreground">
                  Every decision is made with precision, discipline, and purpose.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">What Makes Us Different</h2>
            <p className="text-body-large text-muted-foreground leading-relaxed mb-8 text-center">
              While most firms focus on just one piece of the puzzle investing, advising, or consulting we unite them all. This integrated model allows us to:
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body text-muted-foreground">
                  Help startups secure the capital and strategic guidance they need to scale.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body text-muted-foreground">
                  Partner with established enterprises through private equity to drive transformation and create enduring stakeholder value.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body text-muted-foreground">
                  Support business leaders with advisory services that blend deal-making precision with strategic clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-heading-3 font-serif font-bold text-foreground leading-tight mb-8">
              "We are more than financiers. We are strategic partners committed to building the next generation of market leaders."
            </blockquote>
            <div className="flex justify-center">
              <Link href="/contact" className="btn btn-primary btn-large">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="large" className="text-primary-foreground mb-4" />
              <p className="text-muted-foreground">
                Where Capital Meets Strategy — Building Enduring Value Across Every Stage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/private-equity" className="hover:text-primary-foreground transition-colors">Private Equity</Link></li>
                <li><Link href="/venture-capital" className="hover:text-primary-foreground transition-colors">Venture Capital</Link></li>
                <li><Link href="/advisory" className="hover:text-primary-foreground transition-colors">Advisory</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
                <li><Link href="/insights" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
                <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-muted-foreground">
                Ready to create value together? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hanshills & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
