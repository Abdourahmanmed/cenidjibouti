import { BriefSection } from "@/components/landing/brief-section"
import { CalendarSection } from "@/components/landing/calendar-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FrameworkSection } from "@/components/landing/framework-section"
import { HeroSection } from "@/components/landing/hero-section"
import { MissionSection } from "@/components/landing/mission-section"
import { OrganizationSection } from "@/components/landing/organization-section"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export function LandingPage() {
  return (
    <div className="institutional-wave min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <FrameworkSection />
        <OrganizationSection />
        <BriefSection />
        <CalendarSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
