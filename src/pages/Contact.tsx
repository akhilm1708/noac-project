import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Youtube, Instagram, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for direct communication",
      value: "Phone number to be added",
      action: "tel:",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email for inquiries",
      value: "Contact email to be added",
      action: "mailto:",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Follow our video content",
      value: "@noacproject",
      action: "https://www.youtube.com/@noacproject",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Connect with us on social media",
      value: "Instagram handle to be added",
      action: "#",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get in touch with The NOAC Project. We'd love to hear from you 
              and answer any questions about our mission and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose your preferred method to connect with us. We're here to help 
              and answer any questions you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="group hover-lift border-0 shadow-medium bg-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-8">
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110`}>
                    <method.icon className={`h-8 w-8 ${method.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {method.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-foreground mb-4">
                    {method.value}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-primary-foreground"
                    asChild
                    disabled={method.action === "tel:" || method.action === "mailto:" || method.action === "#"}
                  >
                    <a 
                      href={method.action === "#" ? "#" : method.action + (method.action.includes("http") ? "" : method.value)}
                      target={method.action.includes("http") ? "_blank" : "_self"}
                      rel={method.action.includes("http") ? "noopener noreferrer" : ""}
                    >
                      {method.title === "YouTube" ? "Visit Channel" : "Contact"}
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-large bg-card animate-scale-in">
              <CardHeader className="p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
                  Let's Work Together
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're interested in volunteering, partnering with us, 
                  attending our events, or simply want to learn more about our mission, 
                  we welcome your involvement in creating a more compassionate world for animals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here are some common questions about The NOAC Project and our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How can I get involved?",
                answer: "There are many ways to support our mission - from volunteering at events to spreading awareness about animal welfare in your community."
              },
              {
                question: "Where do the fundraising proceeds go?",
                answer: "We support organizations that align with our values, such as Sri Surabhi Go Ksetra, which works to protect and care for animals in need."
              },
              {
                question: "Do you offer educational programs?",
                answer: "Yes, we conduct lectures and organize community-driven activities in schools across the country to raise awareness about animal welfare."
              },
              {
                question: "How can I stay updated on events?",
                answer: "Follow us on our YouTube channel and social media platforms for the latest updates on our events and initiatives."
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 shadow-medium bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-semibold text-card-foreground mb-3">
                    {faq.question}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;