"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const GAMES = [
  {
    id: "word-game",
    src: "/game-icons/word-game-square.png",
    alt: "Word Game",
    // Using solid colors with gradients looks sharper than transparent opacity
    bgClass: "bg-gradient-to-br from-fuchsia-500 to-purple-600",
  },
  {
    id: "memory-matrix",
    src: "/game-icons/memory-matrix-game-square.png",
    alt: "Memory Matrix",
    bgClass: "bg-gradient-to-br from-orange-400 to-orange-500",
  },
  {
    id: "stroop-clash",
    src: "/game-icons/stroop-clash-game-square.png",
    alt: "Stroop Clash",
    bgClass: "bg-gradient-to-br from-emerald-400 to-green-600",
  },
];

export function GamesShowcaseSection({ dict }: { dict?: any }) {
  // Update game names based on dictionary if available
  const games = GAMES.map((game) => {
    let name = game.alt;
    if (dict?.games) {
      if (game.id === "word-game") name = dict.games.wordGame;
      if (game.id === "memory-matrix") name = dict.games.memoryMatrix;
      if (game.id === "stroop-clash") name = dict.games.stroopClash;
    }
    return { ...game, alt: name };
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* VISUAL: Stacked Game Cards */}
          <div className="relative w-full max-w-[320px] h-[320px] md:max-w-[400px] md:h-[400px] flex items-center justify-center perspective-1000">
            {games.map((game, idx) => {
              // Programmatically determine position relative to the center
              const totalItems = games.length;
              const centerIdx = Math.floor(totalItems / 2);
              const distFromCenter = idx - centerIdx; // -1, 0, 1

              const isCenter = idx === centerIdx;

              return (
                <motion.div
                  key={game.id}
                  className={`
                    absolute top-1/2 left-1/2 
                    w-40 h-40 md:w-56 md:h-56 
                    rounded-[2rem] shadow-2xl 
                    border border-white/10
                    ${game.bgClass}
                    group cursor-pointer
                    ${isCenter ? "z-20" : "z-10"}
                  `}
                  initial={{
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    scale: 0.8,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: `calc(-50% + ${distFromCenter * 60}%)`,
                    y: `calc(-50% + ${Math.abs(distFromCenter) * 15}px)`,
                    rotate: distFromCenter * 12,
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Inner Card Gloss/Sheen Effect */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                  {/* Icon Container - Tightened padding (p-2) to reduce gaps */}
                  <div className="flex items-center justify-center h-full p-2 md:p-3">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/10 shadow-inner">
                      <Image
                        src={game.src}
                        alt={game.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 160px, 224px"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CONTENT: Text */}
          <motion.div
            className="text-center lg:text-left max-w-lg relative z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] whitespace-pre-line">
              {dict?.title || "Stay sharp\nwith puzzles"}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {dict?.description ||
                "Solve daily puzzles designed to increase problem-solving skills and boost creativity. From memory challenges to language games, train your brain your way."}
            </p>
            {/* CTA Button (Optional based on design) */}
            <div className="mt-8">
              <Link
                href={siteConfig.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
              >
                {dict?.cta || "Start Training"}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
