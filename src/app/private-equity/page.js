import Link from 'next/link';
import Logo from '../components/Logo';

export default function PrivateEquity() {
  return (
    <div className="min-h-screen relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 transition-all duration-300 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo size="default" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Home</Link>
                <Link href="/about" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">About</Link>
                <Link href="/private-equity" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Private Equity</Link>
                <Link href="/venture-capital" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Venture Capital</Link>
                <Link href="/advisory" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Advisory</Link>
                <Link href="/insights" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Insights</Link>
                <Link href="/contact" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
            Private Equity with Purpose
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We invest in businesses with the potential to scale, transform, and lead. Through strategic capital and hands-on partnership, we unlock growth and deliver lasting value — not just for investors, but for employees, customers, and communities.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">Our Approach to PE</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Capital</h3>
              <p className="text-muted-foreground">
                We provide more than funding — we deliver a roadmap for transformation and long-term value creation.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Operational Expertise</h3>
              <p className="text-muted-foreground">
                Our team works closely with management to strengthen operations, drive efficiencies, and fuel innovation.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Partnership-Driven</h3>
              <p className="text-muted-foreground">
                We collaborate with business leaders as long-term partners, aligning our success with theirs.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Perspective</h3>
              <p className="text-muted-foreground">
                We bring networks, knowledge, and insights that extend beyond capital to accelerate growth in competitive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">What We Look For</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            We seek established businesses with strong fundamentals and growth potential across various sectors.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Established Businesses</h3>
              <p className="text-muted-foreground">
                Companies with strong fundamentals and proven track records.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Growth Potential</h3>
              <p className="text-muted-foreground">
                Businesses seeking transformation, scale, or market expansion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategic Value</h3>
              <p className="text-muted-foreground">
                Companies that benefit from strategic, operational, and financial expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Value Creation Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe private equity is about more than capital. It is about identifying opportunities, nurturing strengths, and creating pathways to sustainable growth. Every investment is guided by discipline, precision, and a relentless pursuit of long-term impact.
          </p>
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 italic">
            "If you are a business leader seeking a partner who brings both capital and strategy to the table, we're here to help create enduring value."
          </blockquote>
          <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Hanshills & Co.</h3>
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
