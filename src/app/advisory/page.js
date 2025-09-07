import Link from 'next/link';
import Logo from '../components/Logo';

export default function Advisory() {
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
            Advisory That Delivers Clarity and Results
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our advisory arm bridges strategy and execution. Whether you're exploring an exit, raising capital, or reimagining your growth strategy, we combine the precision of investment banking with the insight of consulting to deliver actionable outcomes that create lasting value.
          </p>
        </div>
      </section>

      {/* Our Advisory Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">Our Advisory Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Dealmaking Precision</h3>
              <p className="text-muted-foreground">
                From sell-side M&A to capital raising, we execute transactions with discipline, discretion, and maximum value capture.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Clarity</h3>
              <p className="text-muted-foreground">
                Beyond the deal, we provide market intelligence, growth roadmaps, and financial modeling to help businesses make informed decisions.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Integrated Expertise</h3>
              <p className="text-muted-foreground">
                Because we operate alongside PE and VC, we bring an investor's mindset to every advisory engagement.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Partnership, Not Paperwork</h3>
              <p className="text-muted-foreground">
                We work closely with leadership teams, aligning execution with long-term vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">M&A Advisory</h3>
              <p className="text-muted-foreground">
                Sell-side transactions, mergers, carve-outs, strategic exits.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Capital Raising</h3>
              <p className="text-muted-foreground">
                Equity & debt advisory, fundraising strategy, investor introductions.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Consulting</h3>
              <p className="text-muted-foreground">
                Market entry, business model refinement, growth strategy.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Financial Modeling & Valuations</h3>
              <p className="text-muted-foreground">
                Deep analysis to support deals and decision-making.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-4">Value Creation Advisory</h3>
              <p className="text-muted-foreground">
                Post-deal operational support to strengthen performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Execution</h3>
              <p className="text-muted-foreground">
                Deal discipline backed by global-standard advisory practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategic Insight</h3>
              <p className="text-muted-foreground">
                We don't just structure deals — we help you understand the "why" behind them.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lifecycle Partner</h3>
              <p className="text-muted-foreground">
                Whether you're a startup raising growth capital, or an established business planning an exit, we bring continuity across your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 italic">
            "Great businesses don't just need capital — they need clarity, partners, and precision. Our advisory team helps you chart the path forward and execute with confidence."
          </blockquote>
          <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300">
            Explore Our Advisory Services
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
