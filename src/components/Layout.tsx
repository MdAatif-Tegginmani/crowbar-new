
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "News & Insights", href: "/news" },
    { name: "Payments", href: "/payments" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background blueprint-grid">
      {/* Header */}
      <header className="bg-primary text-primary-foreground industrial-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary industrial-shadow-orange"></div>
              <span className="font-headline text-xl font-bold">CrowbarLtd</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-body text-sm font-semibold transition-colors hover:text-secondary ${
                    isActive(item.href) ? "text-secondary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 industrial-shadow bg-secondary"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-body text-sm font-semibold py-2 px-4 transition-colors hover:text-secondary ${
                      isActive(item.href) ? "text-secondary bg-primary/20" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-secondary industrial-shadow-orange"></div>
                <span className="font-headline text-lg font-bold">CrowbarLtd</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Digital-ops shell powering micro-services and raffle infrastructure. 
                Standing for reliability, efficiency, and industrial strength.
              </p>
            </div>
            
            <div>
              <h3 className="font-headline text-sm font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm font-body">
                <li>Micro-Services Infrastructure</li>
                <li>Digital Operations</li>
                <li>Raffle Systems</li>
                <li>Industrial Solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-headline text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="font-body text-sm hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted mt-8 pt-8 text-center">
            <p className="font-body text-sm text-muted-foreground">
              © 2025 CrowbarLtd. All rights reserved. Built for reliability, efficiency, and industrial strength.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
