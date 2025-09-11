import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Music, ArrowRight } from "lucide-react";

const EventsSection = () => {
  return (
    <section id="events" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fundraising Events
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Watch our recent event celebrating our 3rd anniversary, featuring many talented musicians from the Bay Area!
          </p>
        </div>

        {/* Featured Event Card */}
        <div className="mb-16 animate-slide-up">
          <Card className="group hover-lift border-0 shadow-large bg-card overflow-hidden">
            <div className="md:flex">
              {/* Image Placeholder */}
              <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Event photos and videos to be added from original website
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-8 lg:p-12">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  3rd Anniversary Celebration
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                  Bay Area Musicians Fundraiser
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A special celebration featuring talented musicians from the Bay Area, 
                  bringing together our community to support animal welfare causes and 
                  celebrate our ongoing mission.
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Users className="h-4 w-4 mr-2" />
                  Community event supporting Sri Surabhi Go Ksetra
                </div>
                
                <Button 
                  variant="outline" 
                  className="group/btn"
                  asChild
                >
                  <a href="/videos">
                    Watch Full Event Video
                    <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Event Gallery Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="group hover-lift border-0 shadow-medium bg-card overflow-hidden animate-scale-in" style={{ animationDelay: `${item * 0.1}s` }}>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-4">
                  <Music className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Event photo {item}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            In Support of Sri Surabhi Go Ksetra
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            An organization that aligns with our values in supporting animals in need, protecting the voiceless.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth group"
            asChild
          >
            <a href="/events">
              View All Annual Events
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;