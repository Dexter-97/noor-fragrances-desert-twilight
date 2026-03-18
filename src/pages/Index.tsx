import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSignals from "@/components/TrustSignals";
import CollectionsSection from "@/components/CollectionsSection";
import LayeringSection from "@/components/LayeringSection";
import IngredientsSection from "@/components/IngredientsSection";
import GiftingSection from "@/components/GiftingSection";
import LoyaltySection from "@/components/LoyaltySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustSignals />
    <CollectionsSection />
    <LayeringSection />
    <IngredientsSection />
    <GiftingSection />
    <LoyaltySection />
    <Footer />
  </div>
);

export default Index;
