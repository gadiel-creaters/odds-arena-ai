import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SportCategories from "@/components/SportCategories";
import WinningSlipsCarousel from "@/components/WinningSlipsCarousel";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { Brain, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WinningSlipsCarousel />
      <SportCategories />
      <PricingSection />
      <TestimonialsSection />

      {/* CTA Footer */}
      <section className="py-20 relative">
        <div className="absolute inset-0 neural-dots opacity-20" />
        <div className="container mx-auto px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Brain className="w-10 h-10 text-primary mx-auto mb-4 animate-glow-pulse" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Win with <span className="text-primary text-glow">AI?</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Join thousands of Kenyan bettors using AI-powered predictions to make smarter decisions.
            </p>
            <Link
              to="/predictions"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity glow-green pulse-green"
            >
              <Zap className="w-4 h-4" />
              Start Winning Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
