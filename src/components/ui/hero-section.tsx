import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful nature scene with animals in a protected environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 font-medium mb-6 animate-slide-up">
            The No Animal Cruelty Project
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            A group of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              animal activists
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Promoting animal welfare and cruelty-free living through education, 
            fundraising, and community outreach initiatives.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-large hover:shadow-hover transition-smooth group"
              asChild
            >
              <a href="#outreach">
                Learn About Our Mission
                <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-smooth group"
              asChild
            >
              <a 
                href="https://www.youtube.com/@noacproject" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5 transition-smooth group-hover:scale-110" />
                Watch Our Videos
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;