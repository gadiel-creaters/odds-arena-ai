import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, Database, Shield, Eye, Target, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-bold text-2xl md:text-3xl">About Odds Arena AI</h1>
            </div>
            <p className="text-muted-foreground text-sm mb-10">
              How our AI prediction engine works and why you can trust our results.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: Brain,
                title: "Our AI Model",
                text: "Odds Arena AI uses advanced machine learning algorithms trained on millions of historical match results, player statistics, team form data, and real-time odds movements. Our models continuously learn and adapt to improve prediction accuracy.",
              },
              {
                icon: Database,
                title: "Data Sources",
                text: "We aggregate data from 50+ trusted sports data providers, including official league statistics, player performance metrics, weather conditions, head-to-head records, and real-time market odds from major bookmakers.",
              },
              {
                icon: Eye,
                title: "Transparency Mission",
                text: "We believe in full transparency. Every prediction comes with a confidence score, and we publicly track our win/loss ratio. Our Results page shows historical performance so you can verify our track record.",
              },
              {
                icon: Shield,
                title: "Responsible Betting",
                text: "We promote responsible gambling. Our predictions are for entertainment and informational purposes. Never bet more than you can afford to lose. If you or someone you know has a gambling problem, please seek help.",
              },
              {
                icon: Target,
                title: "Our Vision",
                text: "To be Kenya's most trusted AI-powered sports prediction platform, empowering bettors with data-driven insights and promoting responsible, informed decision-making in sports betting.",
              },
              {
                icon: BarChart3,
                title: "Probability Modeling",
                text: "Each prediction undergoes probability modeling using Bayesian inference, Poisson distribution for goal scoring, and ensemble methods that combine multiple AI models to produce the most reliable confidence scores.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
