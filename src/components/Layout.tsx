import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/predictions", label: "Predictions" },
  { to: "/results", label: "Results" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-green">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              ODDS<span className="text-primary">ARENA</span>
              <span className="text-muted-foreground text-xs ml-1">AI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/predictions"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity pulse-green"
            >
              Get Predictions
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass-card border-t border-border/50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === link.to
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/predictions"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold mt-2"
                >
                  Get Predictions
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-bold text-lg">
                  ODDS<span className="text-primary">ARENA</span>
                  <span className="text-muted-foreground text-xs ml-1">AI</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                AI-powered sports predictions for the Kenyan market. Smart analytics, data-driven results.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Jackpots</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>SportPesa Mega Jackpot</p>
                <p>Betika Mega Jackpot</p>
                <p>MozzartBet Jackpot</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Responsible Gambling</p>
                <p className="text-xs mt-4 text-muted-foreground/60">
                  18+ | Please gamble responsibly
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Odds Arena AI. All rights reserved. AI-powered predictions for entertainment purposes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
