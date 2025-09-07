import Link from 'next/link';
import Logo from '../components/Logo';

export default function VentureCapital() {
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
            Backing Tomorrow's Visionaries
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe the future is built by founders. That's why we invest in bold ideas, ambitious teams, and disruptive business models — providing not just capital, but the strategic guidance, networks, and resources to help startups grow smarter and faster.
          </p>
        </div>
      </section>

      {/* Our VC Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">Our VC Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Founder-First</h3>
              <p className="text-muted-foreground">
                We see ourselves as partners, not just investors. Your vision is our mission.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Beyond Capital</h3>
              <p className="text-muted-foreground">
                From business model refinement to go-to-market strategy, we bring operating experience that accelerates growth.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ecosystem Access</h3>
              <p className="text-muted-foreground">
                Tap into our network of industry leaders, advisors, and portfolio companies to open doors and scale faster.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Support</h3>
              <p className="text-muted-foreground">
                Whether seed, early-stage, or growth equity, we tailor our involvement to what founders truly need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">What We Look For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Meaningful Problems</h3>
              <p className="text-muted-foreground">
                Founders solving meaningful problems with big markets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Models</h3>
              <p className="text-muted-foreground">
                Innovative, scalable, and technology-driven business models.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ambitious Teams</h3>
              <p className="text-muted-foreground">
                Teams with the ambition to lead industries not just participate in them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">How We Help Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Insights</h3>
              <p className="text-muted-foreground">
                Access to strategic insights and market intelligence to inform your decisions.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Mentorship from industry experts and seasoned operators who've been in your shoes.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Network Access</h3>
              <p className="text-muted-foreground">
                Support in fundraising, partnerships, and team building through our extensive network.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Growth Guidance</h3>
              <p className="text-muted-foreground">
                Hands-on guidance through the critical early growth stages of your startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Pitch Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're a founder with a bold vision and relentless drive, we'd love to hear your story.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300">
            Pitch Us Your Startup
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
