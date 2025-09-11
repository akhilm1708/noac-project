import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Users, Target, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every action we take is rooted in compassion for all living beings.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Building stronger communities through education and outreach programs.",
    },
    {
      icon: Target,
      title: "Focused Mission",
      description: "Dedicated to ending animal cruelty through strategic initiatives.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Creating positive change that extends beyond local communities.",
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
              About <span className="text-primary">NOAC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The No Animal Cruelty Project is a passionate group of activists 
              dedicated to promoting animal welfare and cruelty-free living through 
              education, community outreach, and impactful fundraising initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe in a world where all animals are treated with respect and compassion. 
                Through our comprehensive approach combining education, advocacy, and community 
                engagement, we work tirelessly to create lasting change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our initiatives span from school presentations that educate the next generation 
                about animal welfare to large-scale fundraising events that support organizations 
                aligned with our values. Every action we take is a step toward a more compassionate world.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 animate-scale-in">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">3+</div>
                <p className="text-xl font-semibold text-foreground mb-2">Years Active</p>
                <p className="text-muted-foreground">
                  Consistently working toward our mission of animal welfare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These core principles guide everything we do and shape our approach 
              to creating meaningful change in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover-lift border-0 shadow-medium bg-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110 group-hover:bg-primary/20">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A dedicated group of passionate individuals working together 
              to make a difference in animal welfare.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center animate-scale-in">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground mb-4">
              Team photos will be updated with professional images
            </p>
            <p className="text-sm text-muted-foreground">
              Current team pictures are in the folder and will be added as part of the professional redesign
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;