"use client";

import Link from 'next/link';
import Logo from '../../components/Logo';
import VisualizationContainer from '../../components/visualizations/VisualizationContainer';

export default function CSRBeyondCompliance() {
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
                Corporate Social Responsibility (CSR) in India 2025: Beyond Compliance
              </h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>Published on January 3, 2025</span>
                <span className="mx-2">•</span>
                <span>16 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">CSR</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">ESG</span>
                <span className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm font-medium rounded-full border border-border">Sustainability</span>
              </div>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-heading-4 font-serif font-semibold text-foreground mb-4">Executive Summary</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                Corporate Social Responsibility (CSR) in India has evolved from being an obligatory legal requirement under the Companies Act, 2013 to becoming a strategic driver of brand reputation, sustainable growth, and investor confidence. In 2025, CSR is no longer confined to writing cheques for charity or fulfilling statutory obligations. Instead, companies are aligning CSR initiatives with core business strategies, environmental sustainability, community empowerment, and global ESG (Environmental, Social, and Governance) benchmarks.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mt-4">
                This article examines the CSR landscape in India in 2025, key trends, sectoral performance, government policy updates, challenges, and the way forward. It also provides ready-to-use data visuals and insights designed for business leaders, investors, and policymakers who are looking to understand the deeper transformation of CSR into a business imperative.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">CSR in India: The Legal Foundation</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The legal foundation of Corporate Social Responsibility (CSR) in India is firmly embedded in <em>Section 135 of the Companies Act, 2013</em>, which for the first time in Indian corporate history made CSR a <strong className="text-primary">statutory obligation rather than a voluntary gesture</strong>. This provision mandates that every company having a <strong className="text-primary">net worth of ₹500 crore or more, or a turnover of ₹1,000 crore or more, or a net profit of ₹5 crore or more during the immediately preceding financial year</strong> must constitute a CSR Committee and ensure that at least <strong className="text-primary">two per cent of the average net profits of the last three financial years</strong> is spent on CSR activities.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The mandatory CSR regime is significant because India became the <strong className="text-primary">first country in the world</strong> to legislate CSR spending. During the parliamentary debates preceding the passage of the Companies Bill, 2012, the then Minister of Corporate Affairs, Sachin Pilot, emphasized that <em className="text-primary">"corporate growth must be inclusive, and regulations must ensure that wealth creators also serve the society which sustains them."</em> The intent was clear: CSR was to be a structural reform, embedding social responsibility within the DNA of corporate governance.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                The 2020 amendment to the Companies Act further strengthened the compliance framework by introducing penalties for non-spending. Prior to this, the CSR provision was often regarded as a "comply or explain" mechanism. However, post-amendment, failure to spend the mandated amount without adequate justification could result in fines for the company and even imprisonment for defaulting officers in certain cases. This shift reinforced the seriousness of CSR, transforming it from a <strong className="text-primary">symbolic obligation to a legally enforceable accountability measure</strong>.
              </p>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                In essence, the legal framework for CSR in India is not just about <strong className="text-primary">spending 2% of profits</strong>. It represents a <strong className="text-primary">paradigm shift in corporate governance</strong>, legally mandating that corporations embed social, environmental, and community welfare obligations into their strategic core.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">CSR Spending Trends in India (2015–2025)</h2>
              
              <div className="mb-8">
                <VisualizationContainer 
                  articleType="csr-compliance"
                  title="CSR in India 2025: Impact Analysis"
                  description="Data visualizations showing CSR spending trends, sector allocations, top spenders, impact metrics, and ESG integration in Indian corporate sector"
                />
              </div>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-6">
                Corporate India has steadily increased its CSR spending over the last decade. According to Ministry of Corporate Affairs (MCA) data, total CSR expenditure has grown significantly. CSR spending has nearly tripled since its introduction. By 2025, Indian corporates are expected to cross <strong className="text-primary">₹30,000 crore annually</strong>, with higher allocations toward sustainability and digital inclusion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Sector-Wise CSR Allocations in India (2025)</h2>
              <p className="text-body-large text-foreground/90 leading-relaxed mb-4">
                CSR in India spans multiple sectors, but education, healthcare, and rural development remain the dominant recipients. However, 2025 marks a significant shift toward climate action, renewable energy, and technology-enabled social impact.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg mb-6 border border-accent/30">
                <p className="text-body text-foreground/90 font-medium">
                  <strong className="text-primary">Insight:</strong> Education and healthcare dominate CSR spends, but <strong className="text-primary">climate-focused initiatives are emerging rapidly</strong>, especially among top IT, manufacturing, and energy firms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Emerging CSR Trends in 2025</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">1. Integration with ESG Goals</h3>
                  <p className="text-body text-foreground/90">
                    Corporates now align CSR with broader ESG commitments, improving their global investor appeal. CSR spending on carbon neutrality, renewable energy, and sustainable supply chains has doubled between 2020–2025.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">2. Technology in CSR</h3>
                  <p className="text-body text-foreground/90">
                    Firms are using AI, data analytics, and blockchain to monitor CSR project efficiency, reduce leakages, and increase transparency.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">3. Impact Measurement</h3>
                  <p className="text-body text-foreground/90">
                    Mere financial disclosure is no longer enough. Companies now publish <strong className="text-primary">impact assessment reports</strong> highlighting measurable outcomes such as number of students educated, reduction in carbon emissions, or rural households uplifted.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">4. Public–Private Partnerships (PPP)</h3>
                  <p className="text-body text-foreground/90">
                    Many corporates are collaborating with state governments for infrastructure, skill training, and health initiatives.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">5. Shift from Philanthropy to Strategy</h3>
                  <p className="text-body text-foreground/90">
                    Instead of ad-hoc donations, firms are designing CSR programs that align with business goals—for example, IT companies funding digital literacy programs or pharma firms investing in rural healthcare.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Case Studies of CSR Leaders in India 2025</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">1. Reliance Industries</h3>
                  <p className="text-body text-foreground/90">
                    Reliance's CSR arm has invested heavily in <strong className="text-primary">renewable energy projects</strong>, women empowerment, and healthcare infrastructure. By 2025, its CSR budget exceeds ₹1,000 crore annually.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">2. Tata Group</h3>
                  <p className="text-body text-foreground/90">
                    The Tata Trusts continue to lead in <strong className="text-primary">education, healthcare, and livelihood generation</strong>, with a strong focus on tribal and rural communities.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">3. Infosys</h3>
                  <p className="text-body text-foreground/90">
                    Infosys Foundation focuses on <strong className="text-primary">digital education, healthcare access, and rural development</strong>, deploying tech-based solutions for impact measurement.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-3">4. HDFC Bank</h3>
                  <p className="text-body text-foreground/90">
                    HDFC's CSR programs under "Parivartan" focus on <strong className="text-primary">financial literacy, sustainable livelihood, and community healthcare</strong>, benefiting millions across rural India.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Government and Regulatory Push</h2>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Mandatory Impact Assessment:</strong> CSR projects with spends above ₹1 crore must undergo independent evaluation.</li>
                <li><strong className="text-primary">Unspent CSR Funds:</strong> If not spent within 3 years, they are transferred to a government CSR fund.</li>
                <li><strong className="text-primary">CSR and ESG Linkage:</strong> SEBI mandates Business Responsibility and Sustainability Reporting (BRSR), further integrating CSR with financial disclosures.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Challenges in CSR 2025</h2>
              <ol className="list-decimal pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Uneven Sectoral Distribution:</strong> Education and healthcare dominate, while environment and digital inclusion get less funding.</li>
                <li><strong className="text-primary">Rural vs Urban Divide:</strong> CSR is concentrated in urban or semi-urban areas where corporates operate. Remote regions often remain neglected.</li>
                <li><strong className="text-primary">Measuring True Impact:</strong> Many projects still highlight outputs (money spent) rather than outcomes (lives improved).</li>
                <li><strong className="text-primary">Short-Term Focus:</strong> Some firms still treat CSR as a compliance box-ticking exercise rather than a long-term social investment.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Opportunities for the Future</h2>
              <ul className="list-disc pl-6 mb-6 text-body-large text-foreground/90 space-y-2">
                <li><strong className="text-primary">Green CSR:</strong> Massive potential in renewable energy, water conservation, and carbon-neutral projects.</li>
                <li><strong className="text-primary">Skill Development for Industry 4.0:</strong> Preparing rural youth for AI, robotics, and data-driven jobs.</li>
                <li><strong className="text-primary">Digital CSR:</strong> Expanding internet access, digital literacy, and fintech inclusion for underserved communities.</li>
                <li><strong className="text-primary">Healthcare Innovation:</strong> Telemedicine and AI-driven healthcare can transform rural health outcomes.</li>
              </ul>
              <p className="text-body-large text-foreground/90 leading-relaxed">
                In 2025, CSR in India is <strong className="text-primary">moving beyond compliance to strategy</strong>. Corporate leaders recognize that CSR is not charity but an <strong className="text-primary">investment in sustainable growth, brand reputation, and community trust</strong>. With the rise of ESG, climate imperatives, and investor scrutiny, CSR will increasingly become a boardroom priority. Companies that align their CSR with both business goals and societal needs will emerge as leaders in India's sustainable development journey.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Frequently Asked Questions (FAQs)</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q1. Is CSR mandatory in India in 2025?</h3>
                  <p className="text-body text-foreground/90">Yes. Under Section 135 of the Companies Act, 2013, eligible companies must spend 2% of their average net profits from the last three years on CSR.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q2. Which sectors receive the most CSR funding in India?</h3>
                  <p className="text-body text-foreground/90">Education (32%) and healthcare (28%) receive the majority, followed by rural development and climate action.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q3. How much is India's total CSR spending in 2025?</h3>
                  <p className="text-body text-foreground/90">CSR spending is expected to cross <strong className="text-primary">₹30,000 crore annually</strong> in 2025.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q4. What is the difference between CSR and ESG?</h3>
                  <p className="text-body text-foreground/90">CSR is a company's obligation toward society, often through projects and programs. ESG (Environmental, Social, Governance) is a broader investment framework that evaluates a company's sustainability and governance practices.</p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <h3 className="text-heading-4 font-serif font-semibold text-foreground mb-2">Q5. What role will technology play in CSR in the future?</h3>
                  <p className="text-body text-foreground/90">Technology will ensure transparency, better impact measurement, and scalability in CSR projects. AI and blockchain will track fund utilization and impact delivery.</p>
                </div>
              </div>
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