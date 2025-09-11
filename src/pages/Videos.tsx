import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Play, ExternalLink, Video } from "lucide-react";

const Videos = () => {
  const videoCategories = [
    {
      title: "Educational Content",
      description: "Informative videos about veganism and animal welfare",
      icon: Video,
    },
    {
      title: "Event Highlights",
      description: "Footage from our fundraising events and community gatherings",
      icon: Play,
    },
    {
      title: "Advocacy & Outreach",
      description: "Documentation of our educational campaigns and outreach efforts",
      icon: ExternalLink,
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
              Our <span className="text-primary">Videos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Producing entertaining and informative videos that educate viewers on veganism 
              and provide guidance and support for individuals transitioning to a plant-based lifestyle.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-large hover:shadow-hover transition-smooth group"
              asChild
            >
              <a 
                href="https://www.youtube.com/@noacproject" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5 transition-smooth group-hover:scale-110" />
                Visit Our YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Video Categories
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse content library covers various aspects of animal welfare 
              and vegan advocacy, designed to educate and inspire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {videoCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="group hover-lift border-0 shadow-medium bg-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110 group-hover:bg-primary/20">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Event Video
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Watch the full video of our 3rd anniversary celebration event
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-scale-in">
            <Card className="border-0 shadow-large bg-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Play className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    3rd Anniversary Fundraiser Event
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Full event video to be embedded from YouTube channel
                  </p>
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a 
                      href="https://www.youtube.com/@noacproject" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube Thumbnails Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Recent Videos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Screenshots and thumbnails from our latest YouTube content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card 
                key={item} 
                className="group hover-lift border-0 shadow-medium bg-card overflow-hidden animate-scale-in"
                style={{ animationDelay: `${item * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Play className="h-12 w-12 text-primary mx-auto mb-3 transition-smooth group-hover:scale-110" />
                    <p className="text-sm text-muted-foreground">
                      YouTube thumbnail {item}
                    </p>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium text-card-foreground group-hover:text-primary transition-smooth">
                    Video Title Placeholder
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    To be replaced with actual YouTube thumbnails
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth group"
              asChild
            >
              <a 
                href="https://www.youtube.com/@noacproject" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Videos on YouTube
                <ExternalLink className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;