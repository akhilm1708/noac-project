import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import OutreachSection from "@/components/ui/outreach-section";
import EventsSection from "@/components/ui/events-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OutreachSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
