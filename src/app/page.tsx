import Navbar from "@/components/navbar";
import CalculatorPopup from "@/components/calculator-popup";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyPPMReady from "@/components/why-ppm-ready";
import PortalFeatures from "@/components/portal-features";
import ReimbursementSection from "@/components/reimbursement-section";
import Team from "@/components/team";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <CalculatorPopup />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyPPMReady />
        <PortalFeatures />
        <ReimbursementSection />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
