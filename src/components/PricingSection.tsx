import { motion } from "framer-motion";
import { Check, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Football Pack",
    price: "KES 100",
    icon: "⚽",
    features: ["50 Football Predictions", "AI Confidence Scores", "Match Analysis", "24hr Access"],
  },
  {
    name: "Basketball Pack",
    price: "KES 100",
    icon: "🏀",
    features: ["40 Basketball Predictions", "AI Confidence Scores", "Player Stats Analysis", "24hr Access"],
  },
  {
    name: "Jackpot Pack",
    price: "KES 100",
    icon: "🎰",
    features: ["30 Jackpot Predictions", "SportPesa, Betika, Mozzart", "Correct Score Predictions", "Over/Under Analysis"],
  },
  {
    name: "ALL ACCESS",
    price: "KES 100",
    icon: "🔥",
    popular: true,
    features: ["Football + Basketball + Jackpot", "Full AI Analysis", "Priority Support", "24hr Access"],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            Premium <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Affordable AI-powered predictions. Pay via M-Pesa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-xl p-6 relative ${
                plan.popular ? "glow-green gradient-border" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-heading font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" /> BEST VALUE
                </div>
              )}
              <div className="text-3xl mb-3">{plan.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-1">{plan.name}</h3>
              <p className="font-heading text-2xl font-bold text-primary mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              }`}>
                Get Access
              </button>
            </motion.div>
          ))}
        </div>

        {/* Monthly sub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8 max-w-2xl mx-auto text-center gradient-border"
        >
          <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-heading font-bold text-xl mb-2">💎 Monthly Subscription</h3>
          <p className="font-heading text-3xl font-bold text-primary mb-2">KES 1,000<span className="text-sm text-muted-foreground font-body">/month</span></p>
          <p className="text-sm text-muted-foreground mb-4">Unlimited Premium Access — All Sports, All Jackpots, Every Day</p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity glow-green">
            Subscribe Now via M-Pesa
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
