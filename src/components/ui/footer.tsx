import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Youtube, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  The NOAC Project
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                A group of animal activists promoting cruelty-free living through 
                education, fundraising, and community outreach initiatives.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-2 hover:bg-primary/10 hover:text-primary"
                >
                  <a 
                    href="https://www.youtube.com/@noacproject" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube channel"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-2 hover:bg-primary/10 hover:text-primary"
                >
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    title="Instagram link to be added"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-2 hover:bg-primary/10 hover:text-primary"
                >
                  <a 
                    href="/contact"
                    aria-label="Contact us"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Videos", href: "/videos" },
                  { name: "Annual Events", href: "/events" },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-muted-foreground">
                    Animal Welfare
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">
                    Vegan Education
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">
                    Community Outreach
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">
                    Fundraising Events
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} The NOAC Project. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for animals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;