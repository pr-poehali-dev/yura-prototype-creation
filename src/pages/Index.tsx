import HeaderNavigation from "@/components/HeaderNavigation";
import HeroSection from "@/components/HeroSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      <HeaderNavigation />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
