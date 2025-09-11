import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Users, Target, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Animal Welfare",
      description: "Promoting the ethical treatment of all animals and supporting cruelty-free practices.",
    },
    {
      icon: Users,
      title: "Educational Outreach",
      description: "Conducting lectures and activities in schools to raise awareness about veganism.",
    },
    {
      icon: Target,
      title: "Community Fundraising",
      description: "Organizing events with local artists to support animal welfare organizations.",
    },
    {
      icon: Globe,
      title: "Vegan Advocacy",
      description: "Providing guidance and support for individuals transitioning to plant-based living.",
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
              The No Animal Cruelty Project is dedicated to promoting veganism and 
              animal welfare through education, fundraising, and community outreach. 
              We organize events, conduct school presentations, and create educational 
              content to raise awareness about animal rights and cruelty-free living.
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
                We are committed to educating communities about the benefits of veganism 
                and the importance of treating all animals with compassion and respect. 
                Through our work, we aim to create a more conscious and caring world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our educational initiatives include conducting lectures and organizing 
                community-driven activities in schools across the country to raise 
                awareness about animal welfare and promote cruelty-free lifestyle choices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also organize fundraising events that bring together talented artists 
                and community members to support organizations like Sri Surabhi Go Ksetra, 
                which aligns with our values in protecting animals and supporting those in need.
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
              Our Core Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These key areas represent our commitment to creating meaningful change 
              through education, advocacy, and community engagement.
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