import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How accurate are the predictions?", a: "Our AI maintains an 83-87% overall accuracy rate, verified transparently on our Results page." },
  { q: "How do I pay via M-Pesa?", a: "Simply select a package, click 'Get Access', and you'll receive an M-Pesa STK push to your phone. Payment is instant." },
  { q: "Can I get a refund?", a: "We offer a satisfaction guarantee. If our predictions don't meet expectations, contact support for a review." },
  { q: "What jackpots do you cover?", a: "We cover SportPesa Mega Jackpot, Betika Mega Jackpot, and MozzartBet Jackpot with AI confidence scores." },
  { q: "How often are predictions updated?", a: "Predictions are updated daily, with real-time adjustments based on team news, injuries, and odds movements." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-bold text-2xl md:text-3xl">Contact & Support</h1>
            </div>
            <p className="text-muted-foreground text-sm mb-8">Get in touch with our support team.</p>
          </motion.div>

          {/* Contact options */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-green transition-all"
            >
              <MessageCircle className="w-6 h-6 text-primary" />
              <div>
                <p className="font-heading font-semibold text-sm">WhatsApp Support</p>
                <p className="text-xs text-muted-foreground">Chat with us instantly</p>
              </div>
            </a>
            <a
              href="mailto:support@oddsarena.ai"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-green transition-all"
            >
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-heading font-semibold text-sm">Email Support</p>
                <p className="text-xs text-muted-foreground">support@oddsarena.ai</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-6 mb-10"
          >
            <h3 className="font-heading font-semibold text-lg mb-4">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs text-muted-foreground block mb-1 font-heading">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1 font-heading">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1 font-heading">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-semibold text-lg">FAQ</h3>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="glass-card rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-heading text-sm font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
