import Link from 'next/link';
import SpotlightCard from '../components/SpotlightCard';

export default function Advisory() {
  return (
    <div className="min-h-screen relative z-10">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-2 md:text-heading-1 font-serif font-bold text-foreground leading-tight mb-6">Architects of Transformation</h1>
          <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We operate at the intersection of capital, technology, and design, shaping ventures, partnerships, and ecosystems that are resilient, innovation-led, and impact-driven.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="border-t border-border/60 my-8"></div></div>

      {/* Venture Studio & Strategic Advisory */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">Venture Studio & Strategic Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Venture Studio</h3>
              <p className="text-muted-foreground">End-to-end incubation and scaling of enterprises.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Investment Banking</h3>
              <p className="text-muted-foreground">Structuring of equity, debt, and hybrid capital solutions.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v1m-7 0v-1m-7-2a3 3 0 005.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M12 14a3 3 0 013 3v4m-6 0v-4a3 3 0 013-3m-9 0h18" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategic Partnerships</h3>
              <p className="text-muted-foreground">Cross-border, cross-sector alliances engineered for growth and resilience.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-4m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-4m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">PPP & CSR Projects</h3>
              <p className="text-muted-foreground">Advisory and execution in public–private partnerships and corporate social responsibility mandates.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco Tech Initiatives</h3>
              <p className="text-muted-foreground">Sustainability-driven projects integrating environmental stewardship with technological advancement.</p>
            </SpotlightCard>
          </div>
          <p className="text-center mt-6 text-body-large text-muted-foreground max-w-4xl mx-auto">
            We do not simply fund ventures; we institutionalize them. We align capital with governance and strategy, creating enterprises built to endure volatility and compound value across cycles.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="border-t border-border/60 my-8"></div></div>

      {/* Technology & Development Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">Technology & Development Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Core Competence</h3>
              <p className="text-muted-foreground">Systems & process architecture, AI frameworks, Web 3.0 ecosystems.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Delivery Model</h3>
              <p className="text-muted-foreground">Decentralized, yet structured and outcome-driven.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v1m-7 0v-1m-7-2a3 3 0 005.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M12 14a3 3 0 013 3v4m-6 0v-4a3 3 0 013-3m-9 0h18" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Ecosystem</h3>
              <ul className="text-left list-disc pl-5 text-muted-foreground">
                <li>Industry practitioners with domain-specific expertise.</li>
                <li>Specialized subject-matter and technology experts.</li>
                <li>PAN-IIT networks of innovators and technologists.</li>
                <li>Academicians of global distinction.</li>
              </ul>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 01-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Scope of Engagement</h3>
              <p className="text-muted-foreground">Portfolio companies, in-house initiatives, strategic alliances, and client mandates.</p>
            </SpotlightCard>
          </div>
          <p className="text-center mt-6 text-body-large text-muted-foreground max-w-4xl mx-auto">
            Technology, for us, is not a service but an architecture of scale. We embed intelligence, efficiency, and resilience into every system we design, ensuring outcomes that meet institutional-grade rigor.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="border-t border-border/60 my-8"></div></div>

      {/* Design Studio & Innovation Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">Design Studio & Innovation Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Design Solutions</h3>
              <p className="text-muted-foreground">Branding, communication, and identity systems.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.414-.586h-12a2 2 0 00-1.414.586m14.828 0v-5.656a2 2 0 00-.586-1.414L15.414 4.586a2 2 0 00-1.414-.586H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2.828m.414-9.414l2.828 2.828a2 2 0 010 2.828l-2.828 2.828" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Product R&D</h3>
              <p className="text-muted-foreground">Concept-to-prototype development driven by structured innovation.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategy & Branding</h3>
              <p className="text-muted-foreground">Narrative-building, positioning, and market differentiation.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <h3 className="text-lg font-semibold text-foreground mb-2">CSR & Social Impact Design</h3>
              <p className="text-muted-foreground">Purpose-led solutions integrating community, ecology, and sustainability.</p>
            </SpotlightCard>
          </div>
          <p className="text-center mt-6 text-body-large text-muted-foreground max-w-4xl mx-auto">
            Design is our instrument of transformation—functional, human-centered, and impact-oriented. We move beyond aesthetics to architect strategies and innovations that align purpose with performance.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="border-t border-border/60 my-8"></div></div>

      {/* Schedule a Consultation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8 text-center">Schedule a Consultation</h2>
          <SpotlightCard className="p-8">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-body-large text-muted-foreground mb-6">Book a strategic consultation with our team for ₹3,999 per hour.</p>
            </div>
            <form className="grid gap-4">
              <input type="text" placeholder="Your Name" className="bg-secondary border border-border rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground" required />
              <input type="email" placeholder="Your Email" className="bg-secondary border border-border rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground" required />
              <input type="datetime-local" className="bg-secondary border border-border rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground" required />
              <button type="submit" className="btn btn-primary">Book Now</button>
            </form>
            <p className="text-body-small text-muted-foreground mt-4 text-center">Note: This is a placeholder form. Please contact us to confirm your booking.</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="border-t border-border/60 my-8"></div></div>

      {/* Our Institutional Ethos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8">Our Institutional Ethos</h2>
          <SpotlightCard className="p-8 max-w-2xl mx-auto text-left">
            <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <ul className="text-body-large list-disc pl-6 text-muted-foreground space-y-2">
              <li>We do not advise, we architect.</li>
              <li>We do not transact, we transform.</li>
              <li>We do not operate in silos, we orchestrate ecosystems.</li>
              <li>We do not network, we cultivate enduring partnerships.</li>
            </ul>
          </SpotlightCard>
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
