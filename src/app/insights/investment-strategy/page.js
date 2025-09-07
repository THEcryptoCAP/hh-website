"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function InvestmentStrategy() {
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
                Value Creation Through Operational Excellence
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on December 28, 2024</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">Operational Excellence</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">Value Creation</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">Strategy</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                In today's complex investment landscape, <strong>financial engineering</strong> alone no longer guarantees superior returns. The most sophisticated asset management firms have discovered that true value creation lies in the <strong>algorithmic transformation</strong> of portfolio companies' operational DNA. At HansHills & Co., we've developed proprietary frameworks that systematically unlock hidden value through operational excellence.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The New Algorithm of Value Creation</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                The fundamental challenge in value creation lies in what we term the <strong>"quantum execution gap"</strong>—the disconnect between strategic vision and operational reality. Most management teams understand what needs to be achieved strategically but lack the <strong>algorithmic protocols</strong> to translate this understanding into coordinated action.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                At HansHills & Co., we've developed a triple-layer framework for operational value creation that systematically transforms portfolio companies from good to exceptional performers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The HansHills Operational Excellence Framework</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="investment-strategy"
                  title="Investment Strategy: Operational Excellence Data"
                  description="Comprehensive visualizations of operational transformation impact, ESG value multiplier, digital transformation trends, and industry-specific value creation metrics"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">1. Operational Cipher Layer</h3>
                  <p className="text-body text-foreground/90">
                    We implement <strong>mathematical transformation protocols</strong> that convert inefficient processes into optimized workflows. This involves applying <strong>algorithmic constraint resolution</strong> to bottlenecks and creating <strong>feedback loops</strong> that continuously optimize performance.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">2. Quantum Decision Matrix</h3>
                  <p className="text-body text-foreground/90">
                    Traditional decision-making structures create organizational latency. We install <strong>probabilistic decision frameworks</strong> that enable management teams to evaluate multiple scenarios simultaneously, dramatically reducing <strong>temporal drag</strong> in strategic execution.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">3. Value Extraction Algorithms</h3>
                  <p className="text-body text-foreground/90">
                    Rather than relying on generic efficiency programs, we deploy <strong>targeted value algorithms</strong> that identify and exploit specific operational leverage points unique to each business.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 mb-6">
                <blockquote className="text-body-large text-foreground/90 leading-relaxed italic">
                  "Value creation happens through operational execution, not strategic planning. Markets reward businesses that can deliver consistent performance, adapt quickly to changing conditions, and build sustainable competitive advantages through superior execution capability."
                </blockquote>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Digital Alchemy of Operational Transformation</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Digital transformation serves as the <strong>catalytic converter</strong> in our operational value creation engine. The most sophisticated private equity firms now prioritize technological investments, with digital transformation expected to double in importance over the next three years.
              </p>

              <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300 mb-6">
                <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Operational Transformation Impact</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Operational Element</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Traditional Approach</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">HansHills Transformation</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Value Impact</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/90">
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-4">Process Optimization</td>
                        <td className="py-3 px-4">Linear improvement</td>
                        <td className="py-3 px-4">Quantum process entanglement</td>
                        <td className="py-3 px-4 text-accent-foreground font-semibold">23% EBITDA uplift</td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-4">Decision Velocity</td>
                        <td className="py-3 px-4">Hierarchical approval</td>
                        <td className="py-3 px-4">Blockchain decision protocol</td>
                        <td className="py-3 px-4 text-accent-foreground font-semibold">40% faster execution</td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-4">Data Utilization</td>
                        <td className="py-3 px-4">Periodic analysis</td>
                        <td className="py-3 px-4">Real-time predictive analytics</td>
                        <td className="py-3 px-4 text-accent-foreground font-semibold">18% cost reduction</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Asset Utilization</td>
                        <td className="py-3 px-4">Scheduled maintenance</td>
                        <td className="py-3 px-4">Predictive optimization</td>
                        <td className="py-3 px-4 text-accent-foreground font-semibold">30% lifespan extension</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">ESG: The Hidden Value Multiplier</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                Environmental, Social, and Governance factors represent more than compliance requirements—they constitute an <strong>encryption key</strong> for unlocking hidden value. Firms that successfully integrate ESG considerations into their operational DNA demonstrate remarkable performance characteristics.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                At HansHills & Co., we've observed that portfolio companies with strong ESG frameworks consistently outperform their peers by 15-20% in operational metrics, while also commanding premium valuations in exit scenarios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Case Study: Manufacturing Excellence</h2>
              <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300 mb-6">
                <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Portfolio Company Transformation</h3>
                <p className="text-body text-foreground/90 mb-4">
                  A mid-market manufacturing company in our portfolio demonstrated the power of operational excellence. Through our systematic approach, we achieved:
                </p>
                <ul className="text-body text-foreground/90 space-y-2">
                  <li>• <strong>35% improvement</strong> in production efficiency through process optimization</li>
                  <li>• <strong>28% reduction</strong> in operational costs via digital transformation</li>
                  <li>• <strong>42% increase</strong> in EBITDA margins within 18 months</li>
                  <li>• <strong>3.2x multiple expansion</strong> at exit due to operational improvements</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">The Future of Operational Excellence</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                As we look toward 2025 and beyond, operational excellence will become even more critical. The convergence of artificial intelligence, advanced analytics, and sustainable business practices creates unprecedented opportunities for value creation.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                At HansHills & Co., we remain committed to staying at the forefront of operational innovation, continuously refining our frameworks and methodologies to deliver superior returns for our investors and transformative growth for our portfolio companies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Conclusion: The Operational Imperative</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                In an investment landscape characterized by increasing complexity and competition, operational excellence provides the <strong>cryptographic differentiation</strong> that separates superior performers from the mediocre. The firms that will dominate the next decade of asset management are those that master the <strong>algorithmic transformation</strong> of portfolio companies' operational infrastructure.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                The future belongs to those who can systematically unlock value through operational excellence, and at HansHills & Co., we are proud to be leading this transformation.
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