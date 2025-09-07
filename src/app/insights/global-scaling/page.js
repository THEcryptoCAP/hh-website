"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function GlobalScaling() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
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

      {/* Article Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-heading-1 font-serif font-bold text-foreground mb-6 leading-tight">
                From Bharat to Global: Startups Scaling Beyond Borders
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on January 5, 2025</span>
                <span className="mx-2">•</span>
                <span>14 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">Global Scaling</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">Startups</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">International</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                India's entrepreneurial journey has made a remarkable transformation. Startups that once catered to domestic demands are now demonstrating global ambition. These ventures, rooted in Bharat, are evolving into globally competitive enterprises. Their emergence signals not just growth but the capacity to influence markets far beyond India's borders.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mt-4">
                This article examines the structural, regulatory, and capital dynamics enabling Indian startups to scale internationally. It draws upon data, case studies, and investor trends to outline how Indian entrepreneurs are navigating global markets. This narrative is suited to sophisticated stakeholders: growth equity firms, board members, family offices, and economic policymakers.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">I. The Evolution from Domestic Focus to Global Ambition</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The early generation of Indian startups focused primarily on captive markets: e-commerce, local fintech, and urban delivery. Their business models addressed logistics gaps, digital payments, and consumer access.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Today, a new cohort of firms operates on a different universal premise: they design for global needs from inception. Software as a Service platforms that automate niche vertical functions, climate tech innovations that reduce carbon emissions, and health tech solutions adaptable across continents are emblematic of this shift.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                This change reflects several key developments: deepening capital base, professionalised promoter teams, and escalating investor expectations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">II. Financing the Global Journey</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="global-scaling"
                  title="Global Scaling: International Expansion Data"
                  description="Comprehensive visualizations of Indian startup global expansion patterns, sector performance, geographic opportunities, and scaling challenges"
                />
              </div>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                The types and volumes of capital flowing into Indian startups during 2022 and 2023 underscore this transition to international scale.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                These figures reflect that nearly half of private capital now anticipates or supports global operations. Investors are placing bets not only on transactional growth but also on strategic scale across borders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">III. Tech Sectors Driving the Global Footprint</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Several verticals have emerged as global ambassadors of Indian innovation:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">1. Software as a Service (SaaS)</h3>
                  <p className="text-body text-foreground/90">
                    Platforms specialising in niche enterprise workflows such as financial analytics, logistics tracking, and human resources management now serve a global customer base.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">2. Fintech</h3>
                  <p className="text-body text-foreground/90">
                    Universal payments, lending, and credit scoring solutions originated in India and are being localized across Southeast Asia, Africa, and the Middle East.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">3. Climate Technology</h3>
                  <p className="text-body text-foreground/90">
                    Energy efficiency tools and carbon reduction platforms appeal to clients in developed economies responding to sustainability mandates.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">4. Health Technology</h3>
                  <p className="text-body text-foreground/90">
                    Telehealth, remote monitoring, and AI diagnostic tools developed in India are gaining uptake in emerging market healthcare systems.
                  </p>
                </div>
              </div>

              <p className="text-body-large text-foreground/90 leading-relaxed mt-6">
                This sectoral diversity underlines that global scaling is not limited to a few categories but spans the enterprise spectrum.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">IV. Regulatory and Policy Enablers</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Quality entrepreneurship does not flourish without supportive policy. Recent developments have catalysed global scaling:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Candour in capital raising:</strong> The Securities and Exchange Board of India has simplified norms for global fundraising, clarifying tax and repatriation frameworks.</li>
                <li><strong className="text-primary">Ease of doing business enhancements:</strong> Single window approvals for international operations have reduced friction for expansion into Gulf and Southeast Asian markets.</li>
                <li><strong className="text-primary">Outbound investment channels:</strong> The Liberalised Remittance Scheme and Dual Currency Margin Trading frameworks now permit Indian startups to repatriate earnings or deploy capital globally with greater ease.</li>
                <li><strong className="text-primary">Government schemes:</strong> The Startup India Seed Fund, along with global partnerships, offers validation and financial support for international pilots.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                These reforms ensure that the regulatory regime is moving in tandem with entrepreneurial ambitions rather than lagging behind them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">V. Success Stories Illustrating Cross Border Execution</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                A few illustrative examples reflect how Indian startups are synchronising local strengths with global reach:
              </p>

              <div className="space-y-6">
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Case Study A: SaaS Firm EasilyHR</h3>
                  <p className="text-body text-foreground/90">
                    Having launched in India with enterprise HR automation, EasilyHR expanded first into Singapore and then the Middle East. Its AI powered onboarding and retention analytics garnered multinational clients. A $75 million funding round in 2024 explicitly supported these expansions. Today, 40 per cent of its revenues are international.
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Case Study B: ClimateTech Venture CleanGrid</h3>
                  <p className="text-body text-foreground/90">
                    CleanGrid developed energy management insights for manufacturing plants in India. Its platform was adopted by clients in Europe seeking to manage carbon footprints. Through partnerships and a $30 million round raised in 2025, it established European operations within eight months.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Case Study C: Fintech Startup CredScore</h3>
                  <p className="text-body text-foreground/90">
                    CredScore built an alternative credit rating system using utility bill data and mobile phone usage. It partners with lenders in Africa, offering instant underwriting capabilities. The startup processes loans in Ghana from Delhi, highlighting that location no longer imposes limits on financial service delivery.
                  </p>
                </div>
              </div>

              <p className="text-body-large text-foreground/90 leading-relaxed mt-6">
                These stories share two common themes: deep technological adaptation and global deployment strategy from early stages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">VI. Challenges to Endure</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Despite the optimism, global scaling is non trivial pending institutional challenges:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Talent Retention:</strong> As firms deploy operations abroad, retaining leadership capability across countries remains a boardroom issue.</li>
                <li><strong className="text-primary">Cultural adaptation:</strong> Products designed for Indian markets may require bespoke adjustments to address client expectations and regulatory norms in foreign jurisdictions.</li>
                <li><strong className="text-primary">Regulatory Variation:</strong> Data localisation laws, tax systems, and healthcare regulations vary significantly across boundaries.</li>
                <li><strong className="text-primary">Financial Sustainability:</strong> Managing foreign monetary exposure and operating costs while preserving margins requires CFO precision.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                These challenges underscore that scaling beyond India requires both strategic planning and disciplined execution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">VII. Domestic Ecosystem Supporting Global Expansion</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                India's scaling narrative is backed by a supportive ecosystem:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Incubators and accelerators:</strong> Entities such as NASSCOM's 10000 Startups and government designated centres support international piloting.</li>
                <li><strong className="text-primary">Global venture offices:</strong> Indian companies are establishing innovation labs and corporate investor offices in Silicon Valley, London, and Singapore.</li>
                <li><strong className="text-primary">Cross border M&A activity:</strong> Indian startups are acquiring smaller foreign firms to expedite market access and regulatory certification.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                These ecosystem investments extend support beyond funding to include networks, regulatory alignment, and market knowledge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">VIII. What Lies Ahead: India 2026 and Beyond</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Looking forward, several strategic trends will define the trajectory of Indian startups scaling globally:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Public Market Debuts Overseas:</strong> Dual listings in India and Nasdaq are likely for category leaders, providing access to global capital and valuation benchmarks.</li>
                <li><strong className="text-primary">India as a Global R and D Hub:</strong> Indian startups will attract talent globally with remote work and hiring policies, further anchoring the country's position.</li>
                <li><strong className="text-primary">Institutional Globalization of Indian VCs:</strong> Indian large capital allocation providers such as sovereign wealth, pension funds, and asset managers will invest internationally, in part to support startup portfolios globally.</li>
                <li><strong className="text-primary">Policy Reciprocity:</strong> Reciprocal startup visa arrangements, international innovation missions, and trade facilitation frameworks will ease market access.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                These dynamics will reinforce India's capacity to deliver global scale from Bharat roots.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">IX. Projected Global Revenue Share by Indian Startups (2025–2028)</h2>
              <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                <p className="text-body text-muted-foreground text-sm italic">Chart placeholder: Projected global revenue share by Indian startups showing increasing international revenue contribution over time.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">X. Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q1. Why are Indian startups scaling globally now?</h3>
                  <p className="text-body text-foreground/90">India's domestic market growth has provided the foundation but not the ceiling. Access to global capital, cloud-enabled distribution, and demand for tech solutions have made global scaling both necessary and feasible.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q2. What are the easiest regions for Indian startups to expand into?</h3>
                  <p className="text-body text-foreground/90">South Asia, the Gulf, and Southeast Asia present cultural and regulatory proximity. African markets also present growing opportunities in fintech and edtech.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q3. Are founders from India adapting leadership styles for global markets?</h3>
                  <p className="text-body text-foreground/90">Yes. Many are bringing on international operating executives, board advisors, and global investor representatives to align governance with global practices.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q4. How should startups manage currency and regulatory risk when operating internationally?</h3>
                  <p className="text-body text-foreground/90">Hedging mechanisms, forex indexes, and compliance automation tools are being adopted. Startups also often set up local subsidiaries and banking relationships to ease operations.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q5. Will Indian startups listed abroad remain committed to governance in India?</h3>
                  <p className="text-body text-foreground/90">Governance standards tied to listing regulations ensure continuity. However, maintaining alignment with Indian stakeholders remains a strategic responsibility.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Conclusion</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Indian startups are no longer just Bharat bound. They are moving across oceans with products, capital, and ambition. The convergence of private capital, technological maturity, and global opportunity is reshaping India's growth story.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                From fintech to climate tech, from SaaS to renewable infrastructure, startups are becoming global category leaders. Their success will define India's economic identity over the next decade.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                The imperative is clear: build global relevance not as an afterthought but as a foundation from day one. Then Bharat becomes not the boundary but the launchpad to the world.
              </p>
            </section>
          </article>

          {/* Back to Insights */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              href="/insights" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


