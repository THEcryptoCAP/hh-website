"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function MarketOutlook2025() {
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
                2025 Market Outlook: Opportunities in Uncertainty
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on December 20, 2024</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">Market Outlook</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">2025</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">Investment</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                As we navigate through 2025, the global investment landscape presents a complex tapestry of opportunities and challenges. While uncertainty remains a constant companion, it is precisely in these moments of volatility that the most astute investors find their greatest opportunities. This market outlook examines the key trends, sectors, and strategies that will define investment success in 2025.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mt-4">
                From the continued rise of artificial intelligence and clean energy to the evolving dynamics of emerging markets, the investment thesis for 2025 centers on resilience, innovation, and long-term value creation. This analysis provides actionable insights for investors seeking to capitalize on the year's most promising opportunities.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Global Economic Landscape</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                The global economy in 2025 continues to show signs of recovery, albeit with regional variations. Developed markets are experiencing moderate growth, while emerging markets, particularly in Asia, are demonstrating robust expansion. The key themes shaping the economic landscape include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Technology Integration:</strong> AI and automation are reshaping industries across sectors</li>
                <li><strong className="text-primary">Sustainability Focus:</strong> ESG considerations are becoming central to investment decisions</li>
                <li><strong className="text-primary">Geopolitical Shifts:</strong> Supply chain diversification and regional partnerships are gaining importance</li>
                <li><strong className="text-primary">Demographic Changes:</strong> Aging populations in developed markets vs. young, growing populations in emerging markets</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Key Investment Themes for 2025</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="market-outlook"
                  title="Market Outlook 2025: Investment Analysis"
                  description="Comprehensive visualizations of key investment themes, sector performance, geographic opportunities, risk factors, and portfolio allocation recommendations"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Artificial Intelligence & Technology</h3>
                  <p className="text-body text-foreground/90">
                    AI continues to be the dominant theme, with applications expanding beyond tech into healthcare, finance, manufacturing, and services. Companies that successfully integrate AI into their operations are seeing significant competitive advantages.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Clean Energy & Sustainability</h3>
                  <p className="text-body text-foreground/90">
                    The transition to clean energy is accelerating, driven by policy support, technological advances, and increasing cost competitiveness. Solar, wind, and energy storage technologies are particularly attractive.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Healthcare Innovation</h3>
                  <p className="text-body text-foreground/90">
                    Biotech, pharmaceuticals, and digital health are experiencing unprecedented growth. Personalized medicine, gene therapy, and telemedicine are key areas of focus.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Emerging Market Growth</h3>
                  <p className="text-body text-foreground/90">
                    Developing economies, particularly in Asia and Africa, offer compelling growth opportunities driven by urbanization, rising middle classes, and digital transformation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Sector Analysis</h2>
              
              <div className="space-y-8">
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h3 className="text-heading-3 font-serif font-semibold text-foreground mb-4">Technology Sector</h3>
                  <p className="text-body text-foreground/90 mb-4">
                    The technology sector remains the most dynamic area for investment, with AI, cloud computing, and cybersecurity leading the charge. Key opportunities include:
                  </p>
                  <ul className="list-disc pl-6 text-body text-foreground/90 space-y-1">
                    <li>Enterprise software and SaaS solutions</li>
                    <li>Cybersecurity and data protection</li>
                    <li>Quantum computing and advanced semiconductors</li>
                    <li>Digital infrastructure and cloud services</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <h3 className="text-heading-3 font-serif font-semibold text-foreground mb-4">Financial Services</h3>
                  <p className="text-body text-foreground/90 mb-4">
                    Fintech continues to disrupt traditional banking, with digital payments, blockchain, and alternative lending gaining traction. Focus areas include:
                  </p>
                  <ul className="list-disc pl-6 text-body text-foreground/90 space-y-1">
                    <li>Digital banking and neobanks</li>
                    <li>Cryptocurrency and digital assets</li>
                    <li>Insurtech and risk management</li>
                    <li>Regtech and compliance solutions</li>
                  </ul>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50">
                  <h3 className="text-heading-3 font-serif font-semibold text-foreground mb-4">Healthcare & Life Sciences</h3>
                  <p className="text-body text-foreground/90 mb-4">
                    Healthcare innovation is accelerating, driven by technological advances and changing demographics. Key investment themes include:
                  </p>
                  <ul className="list-disc pl-6 text-body text-foreground/90 space-y-1">
                    <li>Precision medicine and genomics</li>
                    <li>Digital therapeutics and telemedicine</li>
                    <li>Medical devices and diagnostics</li>
                    <li>Mental health and wellness solutions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Geographic Opportunities</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">North America</h3>
                  <p className="text-body text-foreground/90">
                    Mature markets with strong innovation ecosystems. Focus on technology, healthcare, and clean energy sectors. High valuations but strong fundamentals.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Asia-Pacific</h3>
                  <p className="text-body text-foreground/90">
                    Rapidly growing markets with significant demographic advantages. Strong opportunities in technology, manufacturing, and consumer sectors.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Europe</h3>
                  <p className="text-body text-foreground/90">
                    Focus on sustainability and ESG investments. Strong regulatory environment supports clean energy and technology adoption.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Risk Factors to Monitor</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                While opportunities abound, investors must remain vigilant about several risk factors:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Geopolitical Tensions:</strong> Trade wars, regional conflicts, and policy changes can impact global markets</li>
                <li><strong className="text-primary">Interest Rate Volatility:</strong> Central bank policies and inflation concerns affect asset valuations</li>
                <li><strong className="text-primary">Technology Disruption:</strong> Rapid technological change can quickly make existing business models obsolete</li>
                <li><strong className="text-primary">Climate Risks:</strong> Physical and transition risks associated with climate change</li>
                <li><strong className="text-primary">Regulatory Changes:</strong> Evolving regulations, particularly in technology and finance sectors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Investment Strategies for 2025</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Diversification Across Sectors and Geographies</h3>
                  <p className="text-body text-foreground/90">
                    Maintain a balanced portfolio across different sectors and regions to mitigate risks and capture opportunities across various markets.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Focus on Quality and Fundamentals</h3>
                  <p className="text-body text-foreground/90">
                    Prioritize companies with strong balance sheets, competitive advantages, and sustainable business models that can weather market volatility.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">ESG Integration</h3>
                  <p className="text-body text-foreground/90">
                    Incorporate environmental, social, and governance factors into investment decisions to align with long-term sustainability trends.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Technology Adoption</h3>
                  <p className="text-body text-foreground/90">
                    Invest in companies that are successfully leveraging technology to improve efficiency, reduce costs, and create new revenue streams.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Conclusion</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                The 2025 investment landscape presents a unique combination of challenges and opportunities. While uncertainty remains a constant, it is precisely this environment that creates the most compelling investment opportunities for those willing to take a long-term view.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Success in 2025 will require a focus on quality, diversification, and alignment with long-term trends such as technological advancement, sustainability, and demographic shifts. Investors who can navigate these themes while maintaining discipline and patience are likely to find significant opportunities for value creation.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                As we move through 2025, the key will be to remain adaptable, informed, and focused on the fundamentals that drive long-term value creation. The markets may be uncertain, but for the prepared investor, uncertainty often represents the greatest opportunity.
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