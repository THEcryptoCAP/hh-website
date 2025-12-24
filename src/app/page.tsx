import { HeroSection } from '@/components/sections/HeroSection';
import { CohortCTASection } from '@/components/sections/CohortCTASection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BottomSectionsWrapper } from '@/components/sections/BottomSectionsWrapper';

/**
 * Homepage
 *
 * Section order:
 * 1. Hero Section - Mountain background, headline, three CTAs
 * 2. Cohort CTA Banner - "Register For Our Upcoming Cohort Now!"
 * 3. Philosophy Section - "Our Philosophy" with philosophy statement
 * 4. Services Section - 3-column numbered layout (01, 02, 03)
 * 5. Perspectives Section - "Perspectives That Move Markets" (in BottomSectionsWrapper)
 * 6. Partner CTA Section - "Ready to Create Value Together?" (in BottomSectionsWrapper)
 * 
 * Spacing: Using design system variables for consistent vertical rhythm
 * - var(--spacing-4xl) = 6rem (96px) for smaller gaps
 * - var(--spacing-5xl) = 8rem (128px) for larger section gaps
 */
export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Cohort CTA Section - with proper vertical spacing */}
      <div>
        <CohortCTASection />
      </div>

      {/* Philosophy Section - with proper vertical spacing and isolation */}
      <div className="relative z-20 bg-black">
        <PhilosophySection />
      </div>

      {/* Services Section - with proper vertical spacing and isolation */}
      <div className="relative z-20 bg-black">
        <ServicesSection />
      </div>

      {/* Bottom Sections (Perspectives + Partner CTA) with hill background */}
      {/* This wrapper contains only Perspectives & Partner - Footer is in layout.tsx */}
      <div>
        <BottomSectionsWrapper />
      </div>
    </div>
  );
}
