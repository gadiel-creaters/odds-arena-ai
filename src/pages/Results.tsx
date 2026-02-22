import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, XCircle, BarChart3 } from "lucide-react";

const yesterdayResults = [
  { home: "Man City", away: "Arsenal", prediction: "Home Win", result: "3-1", correct: true },
  { home: "Barcelona", away: "Real Madrid", prediction: "BTTS Yes", result: "2-2", correct: true },
  { home: "Liverpool", away: "Chelsea", prediction: "Over 2.5", result: "1-0", correct: false },
  { home: "Lakers", away: "Celtics", prediction: "Over 215.5", result: "118-105", correct: true },
  { home: "Warriors", away: "Bucks", prediction: "Home Win", result: "112-108", correct: true },
  { home: "PSG", away: "Bayern", prediction: "Draw", result: "1-1", correct: true },
];

const winRate = 83;
const monthlyStats = [
  { month: "Sep", rate: 78 },
  { month: "Oct", rate: 82 },
  { month: "Nov", rate: 85 },
  { month: "Dec", rate: 81 },
  { month: "Jan", rate: 87 },
  { month: "Feb", rate: 83 },
];

const Results = () => {
  const wins = yesterdayResults.filter((r) => r.correct).length;
  const total = yesterdayResults.length;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-bold text-2xl md:text-3xl">Results & Performance</h1>
            </div>
            <p className="text-muted-foreground text-sm mb-8">Transparent tracking of our AI prediction accuracy.</p>
          </motion.div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Overall Win Rate", value: `${winRate}%`, color: "text-primary" },
              { label: "Yesterday", value: `${wins}/${total}`, color: "text-primary" },
              { label: "Total Predictions", value: "15,234", color: "text-foreground" },
              { label: "This Month", value: "87%", color: "text-primary" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <p className={`font-heading font-bold text-2xl ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Performance chart (simple bar chart) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-xl p-6 mb-10"
          >
            <h3 className="font-heading font-semibold text-lg mb-6">Monthly Performance</h3>
            <div className="flex items-end justify-between gap-2 h-40">
              {monthlyStats.map((stat, i) => (
                <div key={stat.month} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-heading text-primary">{stat.rate}%</span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(stat.rate / 100) * 100}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="w-full bg-primary/80 rounded-t-md min-h-[4px]"
                  />
                  <span className="text-xs text-muted-foreground">{stat.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Yesterday's results */}
          <h3 className="font-heading font-semibold text-lg mb-4">Yesterday's Results</h3>
          <div className="space-y-2">
            {yesterdayResults.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card rounded-lg p-4 flex items-center gap-4"
              >
                {r.correct ? (
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-sm font-semibold truncate">
                    {r.home} vs {r.away}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Prediction: {r.prediction} • Result: {r.result}
                  </p>
                </div>
                <span className={`text-xs font-heading font-bold ${r.correct ? "text-primary" : "text-destructive"}`}>
                  {r.correct ? "WIN" : "LOSS"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
