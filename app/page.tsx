import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhyBestSection from "@/components/WhyBestSection";
import ReadyToExperienceSection from "@/components/ReadyToExperienceSection";
import PricingSection from "@/components/PricingSection";
import LiveSportsSection from "@/components/LiveSportsSection";
import CompatibleDevicesSection from "@/components/CompatibleDevicesSection";
import StreamingPerformanceSection from "@/components/StreamingPerformanceSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import IptvPopularSection from "@/components/IptvPopularSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />
      <Hero />
      <ScrollReveal>
        <WhyBestSection />
      </ScrollReveal>
      <ScrollReveal>
        <ReadyToExperienceSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <LiveSportsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CompatibleDevicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <StreamingPerformanceSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyTrustSection />
      </ScrollReveal>
      <ScrollReveal>
        <IptvPopularSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
