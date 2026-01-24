"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function HeroSection() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-primary"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div className="animate-in fade-in zoom-in duration-700">
          <Image
            src="/brain_logo_transparent.png"
            alt="Lobe logo"
            width={200}
            height={200}
            className="w-32 h-32 md:w-40 md:h-40"
            priority
          />
        </div>

        {/* App Name */}
        <h2 className="text-3xl font-extrabold md:text-3xl lg:text-4xl text-foreground animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
          Lobe
        </h2>

        {/* Clear CTA Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Brain training personalized for you
        </h1>

        {/* Download Button */}
        <Link
          href={siteConfig.appStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-foreground text-primary-foreground font-bold text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
        >
          Download Now
        </Link>
      </div>
    </motion.section>
  );
}
