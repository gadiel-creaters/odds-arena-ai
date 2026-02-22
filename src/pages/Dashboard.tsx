import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { User, CreditCard, Download, History, Settings, Crown } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-bold text-2xl md:text-3xl">Dashboard</h1>
            </div>
            <p className="text-muted-foreground text-sm mb-8">Manage your predictions and subscriptions.</p>
          </motion.div>

          {/* Active plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-6 mb-8 gradient-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-heading font-bold text-lg">Free Plan</h3>
                <p className="text-xs text-muted-foreground">Upgrade for full access to all AI predictions</p>
              </div>
            </div>
            <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 glow-green">
              Upgrade to Premium
            </button>
          </motion.div>

          {/* Dashboard grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "My Subscriptions", desc: "Manage your active plans and billing", items: ["No active subscriptions"] },
              { icon: Download, title: "Download Predictions", desc: "Download today's AI predictions", items: ["Login to access downloads"] },
              { icon: History, title: "Prediction History", desc: "View your past predictions", items: ["No history yet"] },
              { icon: CreditCard, title: "Payment History", desc: "M-Pesa transaction records", items: ["No payments yet"] },
              { icon: Settings, title: "Account Settings", desc: "Update your profile and preferences", items: ["Email: —", "Phone: —"] },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card rounded-xl p-5"
              >
                <card.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{card.desc}</p>
                <div className="space-y-1">
                  {card.items.map((item) => (
                    <p key={item} className="text-xs text-muted-foreground/70">{item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
