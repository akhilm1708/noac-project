import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Youtube, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Videos", path: "/videos" },
    { name: "Annual Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-smooth group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
              The NOAC Project
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-smooth relative group",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-smooth",
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border">
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
                  <Youtube className="h-4 w-4" />
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
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-large border-t border-border">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block text-base font-medium transition-smooth py-2",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;