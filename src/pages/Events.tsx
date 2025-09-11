import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Music, MapPin, ExternalLink } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Fundraising Gala",
      date: "To be announced",
      location: "Bay Area",
      description: "Our signature annual event bringing together the community for animal welfare.",
      status: "upcoming",
    },
  ];

  const pastEvents = [
    {
      title: "3rd Anniversary Celebration",
      date: "Recent",
      location: "Bay Area",
      description: "Featuring many talented musicians from the Bay Area, supporting Sri Surabhi Go Ksetra.",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Annual <span className="text-primary">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join us for meaningful events that bring together our community 
              in support of animal welfare and cruelty-free living.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mark your calendars for these exciting upcoming opportunities to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.title} 
                className="group hover-lift border-0 shadow-large bg-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  {/* Event Image Placeholder */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">
                        Event flyer to be added (yellow Google Drive flyer)
                      </p>
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="md:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center text-sm text-primary font-medium mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled
                    >
                      Details Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Past Events
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Look back at the meaningful events we've organized to support our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title} 
                className="group hover-lift border-0 shadow-large bg-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  {/* Event Media Placeholder */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">
                        Event photos & videos from original website
                      </p>
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="md:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex space-x-4">
                      <Button 
                        variant="outline" 
                        className="group/btn"
                        asChild
                      >
                        <a href="/videos">
                          Watch Event Video
                          <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Event Gallery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Screenshots and highlights from our past fundraising events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card 
                key={item} 
                className="group hover-lift border-0 shadow-medium bg-card overflow-hidden animate-scale-in"
                style={{ animationDelay: `${item * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Music className="h-12 w-12 text-primary mx-auto mb-3 transition-smooth group-hover:scale-110" />
                    <p className="text-sm text-muted-foreground">
                      Event photo/video {item}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Sponsors
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're grateful for the support of our sponsors who help make our events possible.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-12 shadow-large text-center animate-scale-in">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground mb-4">
              Sponsor logos to be added from attached files
            </p>
            <p className="text-sm text-muted-foreground">
              All sponsor logos are available in the provided folder
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;