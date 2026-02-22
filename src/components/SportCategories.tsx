import { motion } from "framer-motion";
import { Trophy, Dribbble, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Trophy,
    title: "Football",
    emoji: "⚽",
    desc: "Premier League, La Liga, Serie A, and all major leagues analyzed with AI precision.",
    predictions: "50+ daily",
    accuracy: "89%",
  },
  {
    icon: Dribbble,
    title: "Basketball",
    emoji: "🏀",
    desc: "NBA, EuroLeague, and international basketball predictions powered by deep learning.",
    predictions: "40+ daily",
    accuracy: "86%",
  },
  {
    icon: Ticket,
    title: "Jackpots",
    emoji: "🎰",
    desc: "SportPesa, Betika, MozzartBet — Kenyan jackpot predictions with AI confidence scoring.",
    predictions: "3 jackpots",
    accuracy: "74%",
  },
];

const SportCategories = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            AI Predictions for <span className="text-primary">Every Sport</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose your sport. Our AI does the heavy lifting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/predictions"
                className="block glass-card rounded-xl p-6 hover:glow-green transition-all duration-300 group scan-line"
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cat.title} Predictions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-heading">{cat.predictions}</span>
                  <span className="text-muted-foreground">
                    Accuracy: <span className="text-primary font-semibold">{cat.accuracy}</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportCategories;
