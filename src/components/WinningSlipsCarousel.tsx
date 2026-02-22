import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const slips = [
  { user: "Brian K.", amount: "KES 12,500", sport: "Football", time: "2 mins ago" },
  { user: "Mercy W.", amount: "KES 8,200", sport: "Basketball", time: "5 mins ago" },
  { user: "Samuel M.", amount: "KES 34,000", sport: "Jackpot", time: "12 mins ago" },
  { user: "Grace N.", amount: "KES 5,800", sport: "Football", time: "18 mins ago" },
  { user: "Peter O.", amount: "KES 22,100", sport: "Jackpot", time: "25 mins ago" },
];

const WinningSlipsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-heading font-bold text-lg text-center">Live Winning Slips</h3>
        </div>

        <div className="relative h-16 overflow-hidden max-w-md mx-auto">
          {slips.map((slip, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                y: i === current ? 0 : i === (current + 1) % slips.length ? 64 : -64,
                opacity: i === current ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="glass-card rounded-lg px-6 py-3 flex items-center gap-4 w-full">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{slip.user} won <span className="text-primary">{slip.amount}</span></p>
                  <p className="text-xs text-muted-foreground">{slip.sport} • {slip.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinningSlipsCarousel;
