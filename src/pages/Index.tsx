import HeaderNavigation from "@/components/HeaderNavigation";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      <HeaderNavigation />
      <main>
        <HeroSection />
        <PricingSection />
        <CalculatorSection />
        <GuaranteeSection />
      </main>
    </div>
  );
};

export default Index;
