'use client';

import { PerspectivesSection } from './PerspectivesSection';
import { PartnerCTASection } from './PartnerCTASection';

/**
 * Bottom Sections Wrapper
 * 
 * This component wraps the Perspectives and Partner CTA sections
 * with the hill-bottom.png background image.
 * 
 * The hill-bottom image is positioned so its bottom edge aligns with the
 * bottom of the PartnerCTASection, NOT extending into the footer.
 * The footer is handled separately in layout.tsx for all pages.
 */
export function BottomSectionsWrapper() {
    return (
        <div className="relative overflow-hidden" style={{ paddingBottom: '200px' }}>
            {/* Hill Background Image - extends beyond wrapper for footer overlap */}
            <div
                className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0"
                style={{ height: 'calc(100%)' }}
            >
                <img
                    src="/assets/images/extras/hill-bottom.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom"
                />
                {/* Very subtle gradient overlay - fade at top and bottom edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0) 0%, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.7) 12%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0.9) 95%, rgba(0,0,0,1) 100%)'
                    }}
                />
            </div>

            {/* Content sections - positioned above the background */}
            <div className="relative z-10">
                <PerspectivesSection />
                {/* Gap between Perspectives and Partner CTA */}
                <div>
                    <PartnerCTASection />
                </div>
            </div>
        </div>
    );
}

