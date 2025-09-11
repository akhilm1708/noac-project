import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Video, ArrowRight } from "lucide-react";

const OutreachSection = () => {
  const outreachItems = [
    {
      icon: Heart,
      title: "Fundraising Initiatives",
      description: "We host fundraisers to support organizations and causes that align with our mission of promoting animal welfare and cruelty-free living.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: GraduationCap,
      title: "Educational Campaigns",
      description: "Conducting lectures and organizing community-driven activities in schools across the country to raise awareness about animal cruelty and the benefits of veganism.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Video,
      title: "YouTube Videos",
      description: "Producing entertaining and informative videos that educate viewers on veganism and provide guidance and support for individuals transitioning to a plant-based lifestyle.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section id="outreach" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Outreach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're committed to creating positive change through multiple channels of impact, 
            reaching communities and individuals with our message of compassion.
          </p>
        </div>

        {/* Outreach Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outreachItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover-lift border-0 shadow-medium bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center p-8">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-large hover:shadow-hover transition-smooth group"
            asChild
          >
            <a href="#events">
              View Our Recent Events
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;