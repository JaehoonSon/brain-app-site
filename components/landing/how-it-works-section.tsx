"use client";

import {
  Brain,
  Gamepad2,
  TrendingUp,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// Decoration/Feature icons floating around content
const FLOATING_ITEMS = [
  {
    icon: Brain,
    color: "bg-orange-500 text-white",
    position: "top-10 left-[10%] md:top-20 md:left-[20%]", // Top Left
    delay: 0,
  },
  {
    icon: Gamepad2,
    color: "bg-purple-500 text-white",
    position: "bottom-20 left-[5%] md:bottom-32 md:left-[15%]", // Bottom Left
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    color: "bg-emerald-500 text-white",
    position: "top-16 right-[5%] md:top-24 md:right-[15%]", // Top Right
    delay: 0.1,
  },
  {
    icon: Zap,
    color: "bg-blue-500 text-white",
    position: "bottom-10 right-[10%] md:bottom-20 md:right-[20%]", // Bottom Right
    delay: 0.3,
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-secondary overflow-hidden">
      {/* CSS for float animation - keeping this for the continuous float */}
      <style jsx>{`
        @keyframes subtle-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: subtle-float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {FLOATING_ITEMS.map((item, idx) => (
          <div key={idx} className={`absolute ${item.position}`}>
            {/* Wrapper for the entrance animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: item.delay,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              // The inner div handles the continuous CSS float
              className="animate-float"
              style={{ animationDelay: `${idx * 1}s` }}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl ${item.color} shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Central Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter">
          How it works
        </h2>
        <p className="text-xl md:text-3xl font-medium text-foreground leading-tight">
          Lobe strengthens your mind through science-backed brain games.
        </p>

        {/* Small badge/indicator below */}
        {/* <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Simple & Effective
          </span>
        </div> */}
      </motion.div>
    </section>
  );
}
