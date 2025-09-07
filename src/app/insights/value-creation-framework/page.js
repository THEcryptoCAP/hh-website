"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function ValueCreationFramework() {
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
                Building Enduring Value Across Every Stage: The HansHills Approach
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on December 25, 2024</span>
                <span className="mx-2">•</span>
                <span>18 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">Value Creation</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">Strategy</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">Growth</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                In the contemporary world of finance, capital alone is no longer sufficient to shape destiny. Investors and entrepreneurs alike recognise that the true alchemy of success lies in building enduring value. HansHills has placed this philosophy at the very heart of its strategy. Whether through private equity, venture capital, advisory, or strategic partnerships, the guiding principle is not simply transactional wealth but transformational growth. This is the approach that allows businesses to not only thrive in the short term but to remain resilient and relevant across decades.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mt-4">
                India in 2025 stands at a remarkable inflection point. With a growing consumer base, a digital-first economy, and regulatory reforms that encourage both domestic and international capital inflows, the market presents unparalleled opportunities. However, opportunity by itself does not ensure longevity. What is required is a framework that nurtures companies across the stages of their journey, from inception to maturity, ensuring they remain adaptive, compliant, innovative, and globally competitive.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Philosophy of Enduring Value</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="value-creation"
                  title="Value Creation Framework: Performance Metrics"
                  description="Comprehensive visualizations of the four-stage value creation journey, three-pillar framework progress, sector performance, and global benchmarking"
                />
              </div>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Enduring value is not about maximising quarterly returns. It is about embedding within a company the structural, cultural, and strategic foundations that allow it to sustain growth across shifting landscapes. This requires balancing innovation with prudence, agility with compliance, and ambition with discipline. HansHills defines enduring value through three lenses:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Sustainable Growth</h3>
                  <p className="text-body text-foreground/90">
                    Growth that is consistent, responsibly financed, and environmentally and socially responsible.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Strategic Resilience</h3>
                  <p className="text-body text-foreground/90">
                    The capacity to withstand shocks such as regulatory changes, geopolitical uncertainties, and market downturns.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Institutional Excellence</h3>
                  <p className="text-body text-foreground/90">
                    The building of strong governance frameworks, ethical standards, and transparent decision-making processes that outlast individual leadership.
                  </p>
                </div>
              </div>

              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                This tripartite philosophy forms the bedrock of the HansHills approach.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Many Indian businesses struggle to translate early success into long-term sustainability. A large number remain family-run with limited professional management, leading to succession challenges and decision-making bottlenecks. Others grow aggressively but rely on excessive leverage, leaving them vulnerable to downturns. Weak governance frameworks, underdeveloped compliance practices, and an overemphasis on short-term valuations further erode resilience. HansHills' model directly addresses these gaps by embedding governance, discipline, and strategic foresight from the outset.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Stages of Growth: A HansHills Perspective</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                HansHills does not view business as a singular moment. It views it as a continuum, with each stage requiring distinct kinds of support.
              </p>

              <div className="space-y-8">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Stage One: Seed and Early Stage Ventures</h3>
                  <p className="text-body text-foreground/90">
                    At the earliest stage, entrepreneurs often need more than just seed capital. They require mentorship, access to networks, and guidance in navigating regulatory frameworks. HansHills supports them by providing both capital and strategic inputs. Unlike investors who focus solely on valuations, HansHills pays attention to product-market fit, founder resilience, and governance readiness.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Stage Two: Growth and Expansion</h3>
                  <p className="text-body text-foreground/90 mb-4">
                    Once the proof of concept is established, businesses face the daunting challenge of scaling. This requires access to larger pools of capital, operational expertise, and the ability to navigate cross-border opportunities. HansHills provides structured growth financing while embedding professional management practices. Expansion strategies include mergers, acquisitions, and international partnerships, but all are executed with careful due diligence and long-term value creation in mind.
                  </p>
                  <p className="text-body text-foreground/90">
                    Scaling in India is not simply about injecting capital. Companies face structural barriers ranging from regulatory complexities and state-level compliance variations to challenges in cross-border taxation and global supply chains. The war for top-tier talent and leadership bandwidth further intensifies as firms seek to expand beyond local markets. HansHills helps its portfolio navigate these hurdles by offering sector-specific advisory, access to international networks, and frameworks for operational efficiency—ensuring that growth remains strategic, compliant, and sustainable.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Stage Three: Maturity and Market Leadership</h3>
                  <p className="text-body text-foreground/90">
                    At this stage, companies often need to balance innovation with stability. The challenge is not only to sustain leadership but also to reinvent themselves before disruption overtakes them. HansHills partners with mature firms by enabling restructuring, digital transformation, and succession planning.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Stage Four: Transition and Exit</h3>
                  <p className="text-body text-foreground/90">
                    A true test of enduring value is how a business transitions, whether through IPOs, strategic sales, or generational succession. HansHills designs exit strategies that preserve the legacy of the business, ensure shareholder returns, and sustain growth under new leadership structures.
                  </p>
                </div>
            </div>
          </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Differentiating the HansHills Approach</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                What distinguishes HansHills from other players in the private capital space is its insistence on holistic involvement. Rather than seeing investment as a purely financial commitment, HansHills treats it as an intellectual and cultural partnership.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Governance-Centric Model</h3>
                  <p className="text-body text-foreground/90">
                    Each portfolio company is supported in building strong boards, compliance structures, and risk management frameworks.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Capital Plus Advisory</h3>
                  <p className="text-body text-foreground/90">
                    HansHills is not only a provider of equity but also of insights, from financial structuring to global strategy.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Long-Term Orientation</h3>
                  <p className="text-body text-foreground/90">
                    The horizon is measured in decades, not in quick exits.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Multi-Vertical Synergy</h3>
                  <p className="text-body text-foreground/90">
                    HansHills operates across private equity, venture capital, advisory, and impact, creating synergies that benefit its portfolio.
                  </p>
                </div>
              </div>

              <p className="text-body-large text-foreground/90 leading-relaxed">
                Traditional private capital often emphasizes speed: rapid valuations, short investment horizons, and aggressive exits. While this may generate short-term gains, it frequently leaves companies structurally weak, overextended, or culturally fragile. HansHills differentiates itself by resisting this transactional approach. Its emphasis on building resilient institutions—through governance-centric practices, strategic patience, and cultural alignment—ensures that portfolio companies are prepared not just for the next round of funding, but for decades of value creation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">India's Current Context</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                India's trajectory offers fertile ground for the HansHills model. In 2024, the private equity and venture capital investments in India crossed USD 65 billion, a significant recovery from pandemic-era slowdowns. At the same time, domestic capital markets witnessed record IPO activity, with over 200 companies listing on Indian exchanges in the past three years. This convergence of private capital and public market opportunities makes it imperative to create businesses that can transition seamlessly from private to public, from founder-driven to institutionally governed.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                India's vast diversity regional regulations, cultural preferences, and sector-specific dynamics makes sector specialization a necessity, not a choice. Unlike developed economies where scale can often be standardized, Indian businesses must adapt to fragmented markets and shifting policy regimes. Sector-focused strategies allow investors to combine capital with contextual expertise. HansHills applies this principle by aligning investment theses with industry realities, ensuring that capital deployment is always paired with practical, domain-specific insight.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Case Illustrations of Value Creation</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                HansHills often uses sector-focused strategies. For example:
              </p>

              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Healthcare</h3>
                  <p className="text-body text-foreground/90">
                    By supporting hospital chains in adopting digital health records and telemedicine, HansHills ensures scale without compromising care quality.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Technology</h3>
                  <p className="text-body text-foreground/90">
                    Early investments in enterprise software are paired with global go-to-market strategies, enabling startups to expand beyond India.
                  </p>
                </div>

                <div className="bg-secondary/40 p-6 rounded-lg border border-border/50">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Hospitality and Tourism</h3>
                  <p className="text-body text-foreground/90">
                    Strategic capital is linked with brand-building and compliance, ensuring long-term trust with both regulators and consumers.
                  </p>
                </div>
              </div>

              <p className="text-body-large text-foreground/90 leading-relaxed mt-6">
                Each case reflects the HansHills principle: do not merely fund growth, but architect it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Global Lens</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Global investors are watching India closely. Sovereign wealth funds from the Middle East, large U.S. buyout firms like Blackstone, and Asian players such as Temasek and SoftBank have all deepened their exposure to Indian markets. Their interest, however, is not only in growth potential but also in governance standards, ESG compliance, and institutional readiness.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                HansHills positions itself as a bridge, preparing Indian companies to meet these global benchmarks while still retaining the entrepreneurial agility that makes them competitive. While India remains central, HansHills recognises that true enduring value must be globally benchmarked. The firm therefore actively aligns Indian companies with global standards of compliance, ESG frameworks, and governance practices. In doing so, it not only prepares them for international investors but also for long-term survival in highly competitive environments.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Building enduring value is not without hurdles. Founders often resist external governance. Markets can shift unpredictably. Regulatory landscapes may evolve faster than businesses can adapt. HansHills addresses these challenges by fostering a culture of preparedness. Every company is encouraged to anticipate rather than react, to embed flexibility within its strategy, and to treat compliance not as an obligation but as a competitive advantage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Road Ahead</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                As India aims to become a USD 5 trillion economy by 2030, private capital will play a defining role. Yet the winners will not be those who chase short-term gains, but those who build institutions capable of enduring. HansHills intends to be at the forefront of this movement, demonstrating how capital combined with strategy, governance, and cultural stewardship can redefine what it means to create lasting value.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                India's policy landscape is also becoming increasingly favorable for long-term value creation. Initiatives such as the Production-Linked Incentive (PLI) schemes, the Make in India movement, and the development of GIFT City as a global financial hub create an enabling environment for private capital. Simultaneously, mandatory ESG disclosures and digital compliance frameworks are raising governance standards. HansHills integrates these policy tailwinds into its strategy, equipping portfolio companies to capture opportunities and remain aligned with both domestic reforms and international expectations.
              </p>
            </section>

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
          </article>
        </div>
      </main>
    </div>
  );
}