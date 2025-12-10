import { CustomerStorySection } from "./sections/customer-story-section"
import { FeatureSection } from "./sections/feature-section"
import { HeroSection } from "./sections/hero-section"
import { SupportSection } from "./sections/support-section"

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  )
}