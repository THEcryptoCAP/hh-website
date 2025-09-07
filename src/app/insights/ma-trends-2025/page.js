"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function MATrends2025() {
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
                M&A Trends 2025: The Future of Deal-Making in India
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on January 10, 2025</span>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">M&A</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">India</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">Private Equity</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Mergers and acquisitions in India are entering a decisive phase. The last decade was defined by sporadic consolidation and selective cross-border investments. In 2025, the landscape is different. India is no longer a peripheral player in global deal-making. It has become a hub where international capital, private equity, and domestic conglomerates converge to create deals that reshape industries.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mt-4">
                For senior executives, private equity leaders, and corporate strategists, understanding the next wave of transactions in India is no longer optional. The future of deal-making here will influence valuations, capital allocation, and even boardroom strategy at a global scale.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">India's M&A Momentum in Numbers</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="ma-trends"
                  title="M&A Trends 2025: Market Analysis"
                  description="Detailed visualizations of M&A deal values, sector performance, private equity participation, and cross-border transaction trends in India"
                />
              </div>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Despite uncertainty in global markets, India continues to project resilience in deal-making. Projections indicate that total mergers and acquisitions in India may cross <strong className="text-primary">USD 150 billion in 2025</strong>, placing the country among the top five global M&A destinations. This momentum is driven by strong domestic demand, investor confidence, and a regulatory environment that increasingly encourages consolidation.
              </p>

              <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Sector-wise M&A Deal Values (India, 2022–2025F)</h3>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The numbers tell a compelling story. In technology, the rise of artificial intelligence, cloud computing, and fintech integration has created fertile ground for acquisitions. Financial services remain attractive due to the deepening of digital banking and insurance penetration. Healthcare is consolidating as both domestic players and international investors chase opportunities in pharmaceuticals, diagnostics, and hospital networks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Why India is Becoming the Epicenter of Deal-Making</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Three strategic shifts explain India's position in global M&A conversations in 2025.
              </p>

              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">First: Consumption-Driven Economy at Scale</h3>
                  <p className="text-body text-foreground/90">
                    India is now a consumption-driven economy at scale. Global companies no longer see India as a future market but as a present driver of revenue. This creates appetite for acquisitions that enable immediate access to distribution networks, consumer bases, and digital platforms.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Second: Matured Regulatory Stance</h3>
                  <p className="text-body text-foreground/90">
                    The regulatory stance has matured. Streamlined approval processes under the Competition Commission of India, increasing alignment with international accounting standards, and an openness toward foreign direct investment have significantly reduced barriers to large-scale transactions.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Third: Accelerated Capital Inflows</h3>
                  <p className="text-body text-foreground/90">
                    Capital inflows from sovereign wealth funds, global private equity firms, and pension funds have accelerated. These investors are not merely pursuing minority stakes. They are now shaping the governance and strategy of Indian corporates through significant buyouts and joint ventures.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Sectors Driving M&A in 2025</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The future of M&A in India is not evenly distributed. Certain sectors will attract a disproportionate share of investment due to their growth potential and strategic relevance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Technology and Digital Platforms</h3>
                  <p className="text-body text-foreground/90">
                    India has more than 800 million internet users, making it the second-largest digital market in the world. Companies in e-commerce, SaaS, and AI-driven solutions are prime acquisition targets. Large-scale deals are also expected in the cybersecurity and cloud infrastructure space as corporates prioritise digital resilience.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Financial Services and Fintech</h3>
                  <p className="text-body text-foreground/90">
                    Banks and non-banking financial companies are actively consolidating to scale operations and manage risk. Fintechs that bring credit access to underserved segments are attracting acquisitions from both domestic institutions and international investors. The integration of blockchain in transaction platforms is another catalyst for M&A.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Healthcare and Pharmaceuticals</h3>
                  <p className="text-body text-foreground/90">
                    Rising healthcare expenditure and the demand for world-class infrastructure have pushed hospitals, diagnostics firms, and pharmaceutical companies into acquisition mode. India's role as a pharmaceutical manufacturing hub also attracts cross-border transactions.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">Energy and Infrastructure</h3>
                  <p className="text-body text-foreground/90">
                    With the government's push for renewable energy, investments in solar, wind, and green hydrogen are accelerating. Infrastructure M&A is equally strong, with private equity funds backing projects in logistics, roads, and data centres.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Rise of Private Equity in Indian M&A</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Private equity is shaping the M&A conversation in ways unseen before. Global and domestic PE firms are shifting from growth capital to buyouts, creating fundamental changes in ownership structures. In 2025, over 40 percent of India's M&A deal value is expected to involve private equity.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                PE firms are also engaging more actively in governance, talent strategy, and exit planning. This is turning them into long-term partners rather than short-term financiers. The ability of PE-backed companies to professionalise management and scale operations faster makes them attractive acquisition or IPO candidates in the medium term.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Cross-Border Transactions: India as Both Buyer and Seller</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                India's corporates are no longer passive recipients of foreign capital. Increasingly, Indian companies are going global through outbound acquisitions. Technology, pharmaceuticals, and renewable energy are the key outbound sectors. At the same time, global players are entering India to secure growth markets.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The dual role of India as both a buyer and seller signals maturity. It also reflects confidence among Indian corporates to compete globally while leveraging domestic growth.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg mb-6 border border-accent/30">
                <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Cross-Border M&A Trends (Inbound vs Outbound, 2020–2025F)</h3>
                <p className="text-body text-foreground/90">
                  Chart comparing inbound versus outbound M&A deal values (2020–2025). Inbound deals led by US, Japan, and Middle East investors; outbound deals driven by Indian acquisitions in Europe, Southeast Asia, and Africa.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Regulatory and Policy Shifts to Watch</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Deal-making in 2025 will be influenced by several regulatory developments.
              </p>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li>The Competition Commission of India has enhanced scrutiny on large digital deals, aligning with global trends in antitrust enforcement.</li>
                <li>Taxation on cross-border deals is becoming more streamlined, with double taxation agreements offering relief to investors.</li>
                <li>Policies around data protection and ESG compliance are increasingly shaping valuation models, particularly for technology and infrastructure acquisitions.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                For investors, regulatory literacy is no longer a peripheral issue. It is central to deal execution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">ESG and Sustainability as Valuation Drivers</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Environmental, Social, and Governance factors are now mainstream in M&A. Investors are rewarding companies that demonstrate sustainable practices, not only in energy but across all industries. In India, ESG-compliant firms are commanding valuation premiums of 15 to 20 percent in certain sectors.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                This is particularly relevant in infrastructure, renewable energy, and consumer-facing industries, where sustainable operations directly influence consumer trust and investor appetite.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Challenges Ahead in the Indian M&A Market</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                While the outlook is promising, deal-makers must remain cautious. Valuation mismatches remain a recurring challenge, particularly in technology start-ups where growth expectations outpace profitability. Integration risks are equally significant, especially in cross-border transactions involving cultural differences.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Access to skilled talent for post-merger integration and cybersecurity concerns in digital acquisitions are also emerging risks that boards must address proactively.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Road Ahead: Strategic Priorities for Deal-Makers</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                For corporate leaders and investors, the next phase of M&A in India requires clarity of strategy and discipline in execution. Three priorities stand out:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Focus on long-term value</strong> rather than short-term synergies.</li>
                <li><strong className="text-primary">Invest in integration planning</strong> from the start of negotiations.</li>
                <li><strong className="text-primary">Strengthen due diligence</strong> by embedding ESG, technology, and regulatory risk assessments.</li>
              </ol>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Mergers and acquisitions in India are not just growing in volume. They are becoming more strategic, more global, and more influential on the shape of industries. The future of deal-making in 2025 reflects a balance between opportunity and discipline. For investors, the message is clear: India is no longer an optional geography. It is a decisive market for growth, innovation, and competitive advantage.
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