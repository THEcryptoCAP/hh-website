import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/ScrollAnimations';

export function AboutPreviewSection() {
    return (
        <section className="section-padding bg-surface">
            <div className="content-wrapper">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image/Visual */}
                    <FadeIn direction="right">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/assets/resources/about-image.svg"
                                    alt="About Hanshills & Co."
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl shadow-2xl">
                                <div className="font-display text-4xl font-bold mb-1">10+</div>
                                <div className="text-sm font-medium">Years of Excellence</div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Content */}
                    <FadeIn delay={0.2} direction="left">
                        <div className="space-y-6">
                            <div className="inline-block px-5 py-2 bg-secondary/10 rounded-full">
                                <span className="text-sm font-semibold text-secondary tracking-wide">
                                    ABOUT HANSHILLS & CO.
                                </span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                                Building Legacies,<br />
                                <span className="text-secondary">One Summit at a Time</span>
                            </h2>

                            <p className="text-lg text-muted leading-relaxed">
                                At Hanshills & Co., we believe that every business has the
                                potential to reach new heights. Our mission is to empower
                                visionary founders and established enterprises through strategic
                                guidance, smart capital, and innovative ventures.
                            </p>

                            <p className="text-lg text-muted leading-relaxed">
                                With over a decade of experience in venture capital, private
                                equity, and strategic advisory, we've helped 50+ businesses scale
                                from early-stage startups to market leaders.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <div className="font-display text-4xl font-bold text-secondary mb-2">
                                        $100M+
                                    </div>
                                    <div className="text-sm text-muted font-medium">Capital Deployed</div>
                                </div>
                                <div>
                                    <div className="font-display text-4xl font-bold text-secondary mb-2">
                                        50+
                                    </div>
                                    <div className="text-sm text-muted font-medium">Portfolio Companies</div>
                                </div>
                            </div>

                            <Link
                                href="/about"
                                className="inline-flex items-center text-secondary font-semibold hover:gap-3 transition-all group pt-4"
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
