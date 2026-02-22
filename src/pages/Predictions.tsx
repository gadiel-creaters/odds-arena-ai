import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Lock, TrendingUp, Brain, Eye, ChevronRight } from "lucide-react";

type Sport = "football" | "basketball" | "jackpot";

const matchData = {
  football: [
    { home: "Man City", away: "Arsenal", prediction: "Home Win", odds: "1.85", confidence: 92, locked: false },
    { home: "Barcelona", away: "Real Madrid", prediction: "BTTS Yes", odds: "1.65", confidence: 88, locked: false },
    { home: "Gor Mahia", away: "AFC Leopards", prediction: "Over 2.5", odds: "2.10", confidence: 79, locked: true },
    { home: "Liverpool", away: "Chelsea", prediction: "Draw", odds: "3.20", confidence: 71, locked: true },
    { home: "PSG", away: "Bayern Munich", prediction: "Away Win", odds: "2.45", confidence: 67, locked: true },
  ],
  basketball: [
    { home: "Lakers", away: "Celtics", prediction: "Over 215.5", odds: "1.90", confidence: 85, locked: false },
    { home: "Warriors", away: "Bucks", prediction: "Home Win", odds: "1.75", confidence: 82, locked: false },
    { home: "Heat", away: "76ers", prediction: "Under 210.5", odds: "1.95", confidence: 78, locked: true },
    { home: "Nuggets", away: "Suns", prediction: "Home -4.5", odds: "1.85", confidence: 74, locked: true },
  ],
  jackpot: [
    { home: "SportPesa Mega", away: "17 Games", prediction: "AI Pick Bundle", odds: "—", confidence: 74, locked: true },
    { home: "Betika Mega", away: "15 Games", prediction: "AI Pick Bundle", odds: "—", confidence: 71, locked: true },
    { home: "MozzartBet", away: "13 Games", prediction: "AI Pick Bundle", odds: "—", confidence: 69, locked: true },
  ],
};

const sportTabs: { key: Sport; label: string; emoji: string }[] = [
  { key: "football", label: "Football", emoji: "⚽" },
  { key: "basketball", label: "Basketball", emoji: "🏀" },
  { key: "jackpot", label: "Jackpots", emoji: "🎰" },
];

const Predictions = () => {
  const [sport, setSport] = useState<Sport>("football");

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-bold text-2xl md:text-3xl">AI Predictions</h1>
            </div>
            <p className="text-muted-foreground text-sm mb-6">Real-time AI-analyzed predictions with confidence scoring.</p>
          </motion.div>

          {/* Sport tabs */}
          <div className="flex gap-2 mb-8">
            {sportTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSport(tab.key)}
                className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all ${
                  sport === tab.key
                    ? "bg-primary text-primary-foreground glow-green"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>

          {/* Predictions table */}
          <div className="space-y-3">
            {matchData[sport].map((match, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:glow-green transition-all scan-line"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-sm truncate">
                    {match.home} <span className="text-muted-foreground">vs</span> {match.away}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {match.locked ? (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3" /> Premium Only
                      </span>
                    ) : (
                      <span className="text-xs text-primary font-heading">{match.prediction}</span>
                    )}
                  </div>
                </div>

                {!match.locked && (
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-muted-foreground">Odds</p>
                    <p className="font-heading font-bold text-sm">{match.odds}</p>
                  </div>
                )}

                {/* Confidence */}
                <div className="w-20 text-right">
                  <p className="text-xs text-muted-foreground">AI Confidence</p>
                  <div className="flex items-center justify-end gap-1">
                    <div className="w-12 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${match.confidence}%` }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                        className={`h-full rounded-full ${
                          match.confidence >= 80
                            ? "bg-primary"
                            : match.confidence >= 70
                            ? "bg-yellow-500"
                            : "bg-orange-500"
                        }`}
                      />
                    </div>
                    <span className="font-heading font-bold text-xs text-primary">{match.confidence}%</span>
                  </div>
                </div>

                {match.locked ? (
                  <Lock className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Unlock CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 glass-card rounded-xl p-6 text-center gradient-border"
          >
            <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-heading font-bold text-lg mb-2">Unlock All Predictions</h3>
            <p className="text-sm text-muted-foreground mb-4">Get full access to AI predictions with detailed analysis.</p>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 glow-green">
              Get Premium Access — KES 100
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Predictions;
