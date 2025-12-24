
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const InsightsPage = () => {
    return (
        <div className="w-full bg-black min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#8b7355] selection:text-white">
            
            {/* Logo - Mountain Icon */}
            <div className="mb-12 flex justify-center" style={{ marginTop: '200px' }}>
                <img
                    src="/assets/images/logos/logo.svg"
                    alt="Hanshills Logo"
                    className="h-12 w-auto object-contain"
                />
            </div>

            {/* Hero Section */}
            <header className="relative w-full mx-auto" style={{ marginTop: '180px', marginLeft: '72px', marginRight: '72px', maxWidth: 'calc(100% - 144px)' }}>
                <div className="relative rounded-[13px] overflow-hidden">
                    <img
                        src="assets/images/hero/insights-hero.png"
                        alt="India 2026 Hero"
                        className="w-full h-auto object-cover opacity-80"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    {/* Hero Content with Executive Summary */}
                    <div className="absolute inset-0 flex flex-col justify-start p-16">

                        <h1 className="text-7xl leading-[90px] tracking-[-0.01em] font-medium text-white mb-4 max-w-4xl">
                            India 2026: Where Private Capital Meets Public Market
                        </h1>
                        <p className="text-[15px] leading-[18px] font-bold !text-[#77ffaa] mb-8">
                            Published on January 8, 2025 • 15 min read
                        </p>

                        {/* Executive Summary inside hero */}
                        <div className="mt-4">
                            <h2 className="text-[32px] leading-[40px] font-medium text-white mb-6 backdrop-blur-sm" style={{ marginTop: '48px' }}>
                                Executive Summary
                            </h2>
                            <div className="rounded-[5px] bg-[#d9d9d9]/[13%] p-8 backdrop-blur-sm max-w-4xl">
                                <p className="text-xl leading-[32px] font-medium text-white text-justify">
                                    The Indian economy has entered a defining decade. By 2026, the lines
                                    between private markets and public markets are not only blurring but are
                                    actively converging. Private capital, long considered the engine of
                                    startup growth and venture expansion, is now flowing with greater intent
                                    towards the public sphere, while the stock markets are simultaneously
                                    becoming more receptive to innovative and high-growth businesses that were
                                    once confined to venture and private equity portfolios.
                                </p>
                                <p className="text-xl leading-[32px] font-medium text-white text-justify mt-4">
                                    This convergence is not just financial; it represents a fundamental reordering of India's
                                    capital ecosystem. It reflects a deeper maturity of the market, the
                                    confidence of domestic and foreign investors in India's regulatory
                                    environment, and the sheer scale of opportunity available across
                                    industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Container */}
            <main className="relative z-10 pb-32" style={{ marginTop: '48px', marginLeft: '72px', marginRight: '72px' }}>

                {/* Historical Divide */}
                <section className="mb-32" style={{ marginTop: '64px', marginBottom: '32px' }}>
                    <h2 className="text-5xl leading-[58px] font-bold !text-[#8b7355] mb-8">
                        The Historical Divide Between Private and Public Capital
                    </h2>
                    <br />
                    <div className="grid grid-cols-1 gap-10">
                        <p className="text-2xl leading-[35px] font-medium text-white">
                            For decades, India's private and public capital systems operated in parallel. Venture capital and private equity firms focused on early to growth-stage companies, providing patient risk capital in exchange for equity. These companies remained private for longer periods, relying on funding rounds for expansion. Meanwhile, the public markets were dominated by established corporations, often conservative in their governance and earnings growth.
                            <br />   <br />
                            The regulatory burden and disclosure requirements made public listing an intimidating prospect for young firms. Thus, only companies that had matured to significant scale pursued Initial Public Offerings (IPOs).
                            <br />   <br />
                            The result was a stark divide: innovation thrived in private markets, while stability defined the public markets.
                        </p>
                    </div>
                </section>
                {/* Inflection Point & Graph */}
                <section className="mb-32" style={{ marginTop: '64px', marginBottom: '32px' }}>
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-12">
                        India's Inflection Point
                    </h2>
                    <br />

                    <div className="text-2xl leading-[35px] font-medium text-white">
                        <p>
                            Between 2020 and 2025, three developments accelerated the bridging of this gap:
                        </p>
                        <br />
                        <ol className="list-none space-y-6">
                            <li className="flex gap-4">
                                <span className="font-extrabold text-[#8b7355] min-w-[24px]">1.</span>
                                <span><span className="font-bold">The Rise of Domestic Capital:</span> Indian venture funds, family offices, and corporate venture arms grew in scale, reducing dependence on foreign money. This localized pool of capital aligned better with India's regulatory climate and long-term growth story.</span>
                            </li>
                            <br />
                            <li className="flex gap-4">
                                <span className="font-extrabold text-[#8b7355] min-w-[24px]">2.</span>
                                <span><span className="font-bold">Public Market Appetite for Growth Stories:</span> The listing of new-age companies across e-commerce, fintech, and SaaS drew unprecedented retail and institutional participation, signaling that investors were willing to back innovation on the stock exchange.</span>
                            </li>
                            <br />
                            <li className="flex gap-4">
                                <span className="font-extrabold text-[#8b7355] min-w-[24px]">3.</span>
                                <span><span className="font-bold">Policy and Regulatory Reforms:</span> SEBI's initiatives around faster listing processes, relaxed disclosure requirements for startups, and frameworks for Special Purpose Acquisition Companies (SPACs) created smoother pathways between private capital and public markets.</span>
                            </li>
                        </ol>
                    </div>
                    <br />
                    <br />

                    {/* Graph Section */}
                    <div className="mt-16 relative">
                        <img
                            src="assets/images/graphs/insights-graph.svg"
                            alt="Regulatory Impact Graph"
                            className="w-full"
                        />

                        <div className="absolute bottom-17 left-1/2 transform -translate-x-1/2 z-10 flex justify-center w-full">

                            <button className="flex items-center justify-center gap-3 px-8 h-12 bg-[#8b7355] rounded-[5px] text-[#161616] font-bold whitespace-nowrap hover:bg-[#7a654a] transition-colors">
                                <span className="text-base font-bold">Show All Graphs</span>
                                <ArrowRight className="w-4 h-4 text-[#161616]" />
                            </button>
                        </div>
                    </div>
                    <br />
                    <br />

                </section>

                {/* Capital Journey */}
                <section className="mb-32">
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify space-y-8">
                        <p>
                            By 2026, this shift has crystallized. Private capital and public markets are no longer separate universes but complementary phases of the same capital journey.
                        </p>
                        <br />
                        <p>
                            Private equity firms are increasingly designing exit strategies around public listings rather than secondary sales. Venture-backed startups now see IPOs not as distant goals but as realistic milestones achievable within shorter timelines. Conversely, public market investors—both domestic mutual funds and foreign portfolio investors—are embracing higher-risk, higher-reward growth companies with startup DNA.
                        </p>
                        <br />
                        <p>
                            This has created a dynamic loop: private capital incubates innovation, the public markets scale it, and the cycle replenishes with fresh capital.
                        </p>
                    </div>
                </section>

                <br />
                <br />

                {/* Key Sectors Grid */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[58px] font-bold !text-[#8b7355] mb-6">
                        Key Sectors Driving the Convergence
                    </h2>
                    <br />
                    <p className="text-2xl leading-[35px] font-medium text-white mb-10">
                        The interplay of private and public capital is most visible in specific industries that combine rapid innovation with scalable business models.
                    </p>
                    <br />

                    <div className="grid grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="rounded-[5px] bg-[#d9d9d9]/[19%] p-10 min-h-[240px]">
                            <h3 className="text-4xl leading-[43px] font-medium text-white mb-4" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                1. Financial Technology (Fintech)
                            </h3>
                            <p className="text-xl leading-[30px] text-white/80" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                India's fintech sector, having already attracted billions in private equity and venture capital, is now seeing multiple players list on the stock exchanges. Public market investors are recognizing fintech's role in driving financial inclusion.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[5px] bg-[#d9d9d9]/[19%] p-10 min-h-[240px]">
                            <h3 className="text-4xl leading-[43px] font-medium text-white mb-4" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                2. Renewable Energy and Climate Tech
                            </h3>
                            <p className="text-xl leading-[30px] text-white/80" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                With India's ambitious 2030 green energy goals, this sector demands massive capital. Private equity initiates the high-risk infrastructure setup, while public markets (via InvITs and Green Bonds) provide long-term liquidity.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[5px] bg-[#d9d9d9]/[19%] p-10 min-h-[240px]">
                            <h3 className="text-4xl leading-[43px] font-medium text-white mb-4" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                3. Healthcare and Life Sciences
                            </h3>
                            <p className="text-xl leading-[30px] text-white/80" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                Post-pandemic, healthcare innovation has surged. Diagnostics, specialized hospital chains, and health-tech platforms are maturing rapidly, moving from PE-backed consolidation to IPO-driven expansion.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-[5px] bg-[#d9d9d9]/[19%] p-10 min-h-[240px]">
                            <h3 className="text-4xl leading-[43px] font-medium text-white mb-4" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                4. SaaS and Digital Infrastructure
                            </h3>
                            <p className="text-xl leading-[30px] text-white/80" style={{ marginTop: '18px', marginLeft: '24px' }}>
                                Global SaaS leaders building from India are finding ready acceptance. The predictable recurring revenue models of SaaS companies make them attractive to both growth-stage private investors and value-conscious public markets.
                            </p>
                        </div>
                    </div>
                </section>
                <br />
                <br />

                {/* Table Image Section (replaced Data Table with SVG) */}
                <section className="mb-32">
                    <img
                        src="assets/images/graphs/insights-table.svg"
                        alt="Private vs Public Capital Metrics Table"
                        className="w-full"
                    />
                </section>
                <br />

                {/* Regulatory Innovation */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-10">
                        The Role of Regulatory Innovation
                    </h2>
                    <br />
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify space-y-6">
                        <p>
                            Regulation has been the silent architect of this convergence. By 2026, SEBI and RBI have enacted frameworks that both protect investor interests and encourage capital fluidity. Examples include:
                        </p>
                        <ul className="list-disc pl-10 space-y-2">
                            <li><span className="font-bold">Faster IPO approvals:</span> Streamlined processes allow companies to move from filing to listing within months.</li>
                            <li><span className="font-bold">Dual-class share structures:</span> Empowering founders to retain control while accessing public capital.</li>
                            <li><span className="font-bold">Cross-border listing clarity:</span> Rules enabling Indian companies to list overseas while remaining compliant domestically.</li>
                            <li><span className="font-bold">Retail investor protections:</span> Improved disclosure and risk frameworks to safeguard smaller investors as they enter high-growth IPOs.</li>
                        </ul>
                        <p>These measures reduce friction between private incubation and public scaling.</p>
                    </div>
                </section>
                <br />
                <br />

                {/* Challenges */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-10">
                        Challenges in the New Ecosystem
                    </h2>
                    <br />
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify space-y-6">
                        <p>While the convergence of private and public capital is a sign of maturity, it also brings risks.</p>
                        <ul className="space-y-4">
                            <li><span className="font-bold">Valuation Gaps:</span> Private markets often value companies on growth potential, while public markets demand profitability. Bridging these expectations remains a challenge.</li>
                            <li><span className="font-bold">Governance Standards:</span> Startups transitioning to public life must meet stricter corporate governance norms. Missteps can trigger reputational damage.</li>
                            <li><span className="font-bold">Regulatory Arbitrage:</span> As companies operate across both domains, inconsistencies in compliance could create loopholes or disputes.</li>
                            <li><span className="font-bold">Investor Education:</span> Retail investors entering innovative sectors may lack the expertise to assess long-term risks.</li>
                        </ul>
                    </div>
                </section>

                <br />
                <br />

                {/* Opportunities */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-10">
                        Opportunities for Stakeholders
                    </h2>
                    <br />
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify">
                        Despite challenges, convergence opens significant opportunities:
                        <ul className="list-none mt-4 space-y-4">
                            <li><span className="font-bold">For Founders:</span> Faster access to liquidity without surrendering control.</li>
                            <li><span className="font-bold">For Investors:</span> Broader exit options and diversification across capital structures.</li>
                            <li><span className="font-bold">For Regulators:</span> An opportunity to position India as a global capital hub with innovative yet stable frameworks.</li>
                            <li><span className="font-bold">For Retail Investors:</span> Access to high-growth stories previously reserved for private equity.</li>
                        </ul>
                    </div>
                </section>

                <br />
                <br />

                {/* Global Context */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-8">
                        The Global Context
                    </h2>
                    <br />
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify">
                        <p>
                            India's convergence is not isolated. In the United States, crossover funds like Tiger Global and Coatue pioneered this trend, investing in companies pre-IPO and post-IPO. In China, regulatory restrictions created waves of delistings and relistings, often driving firms abroad. India's uniqueness lies in its <span className="italic">balanced approach</span>: maintaining regulatory discipline while embracing innovation. This positions India as a potential capital hub for the Global South by 2030.
                        </p>
                    </div>
                </section>

                <br />
                <br />

                {/* Road to 2030 */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-8">
                        The Road to 2030
                    </h2>
                    <br />
                    <div className="text-2xl leading-[35px] font-medium text-white text-justify">
                        <p className="mb-6">By 2026, the trajectory is clear: private and public capital are no longer rivals but collaborators. Looking towards 2030, we can expect:</p>
                        <ul className="list-disc pl-10 space-y-2">
                            <li><span className="font-bold">Deeper domestic capital pools</span> through pension funds and sovereign wealth participation.</li>
                            <li><span className="font-bold">Integration of ESG mandates</span> across both private and public investments.</li>
                            <li><span className="font-bold">Global Indian champions</span> emerging from sectors like renewable energy, AI-driven platforms, and health-tech.</li>
                            <li><span className="font-bold">Hybrid listing strategies</span> where companies float partial IPOs while raising parallel private rounds.</li>
                        </ul>
                    </div>
                </section>

                <br />
                <br />


                {/* FAQ Section */}
                <section className="mb-32">
                    {/* FAQ Section*/}
                    <div className="mt-16 relative">
                        <img
                            src="assets/images/graphs/FAQ.svg"
                            alt="Regulatory Impact Graph"
                            className="w-full"
                        />
                    </div>
                    {/* 
                    <h2 className="text-[40px] leading-[48px] font-medium text-center text-white mb-16">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <div className="space-y-12">
                        {[
                            {
                                q: "Q1: Why are more startups considering IPOs in India by 2026?",
                                a: "Improved regulatory clarity, domestic investor appetite, and the need for liquidity are making IPOs an attractive exit option."
                            },
                            {
                                q: "Q2: What risks do investors face in this convergence?",
                                a: "Key risks include valuation mismatches, governance lapses, and volatility in high-growth sectors."
                            },
                            {
                                q: "Q3: Will domestic capital dominate foreign capital by 2026?",
                                a: "While foreign capital remains significant, domestic pools are catching up and could surpass them by 2030."
                            },
                            {
                                q: "Q4: How do retail investors benefit?",
                                a: "They gain access to innovative companies earlier in their lifecycle, but must balance this with risk awareness."
                            },
                            {
                                q: "Q5: What role does policy play in shaping this landscape?",
                                a: "Regulation is central—simplifying listings, protecting retail investors, and ensuring global competitiveness."
                            }
                        ].map((item, index) => (
                            <div key={index} className="border-b border-[#333] pb-8">
                                <h3 className="text-[32px] leading-[35px] font-medium text-white mb-4">{item.q}</h3>
                                <p className="text-xl leading-[35px] font-medium text-[#a7a7a7]">A: {item.a}</p>
                            </div>
                        ))}
                    </div> */}
                </section>

                {/* Conclusion */}
                <section className="mb-32">
                    <h2 className="text-5xl leading-[35px] font-bold !text-[#8b7355] mb-8">
                        Conclusion
                    </h2>
                    <p className="text-2xl leading-[35px] font-medium text-white text-justify">
                        India in 2026 is not merely a destination for capital; it is an ecosystem where private innovation and public scale reinforce each other. Private equity no longer ends with a sale to another fund, and IPOs are no longer the preserve of traditional giants. Instead, the two worlds are converging into a single, dynamic cycle of capital creation, deployment, and renewal. For founders, investors, and regulators alike, the challenge is to manage this convergence with wisdom, foresight, and balance. If done right, India will not just bridge the private and public markets but will emerge as a global leader in integrated capital systems by the end of the decade.
                    </p>
                    <br />
                    <div className="mt-12">
                        <button className="flex items-center justify-center gap-3 w-40 h-12 px-16 py-6 bg-[#8b7355] rounded-[5px] text-[#161616] font-bold">
                            <ArrowLeft className="w-4 h-4" />
                            Read More

                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default InsightsPage;