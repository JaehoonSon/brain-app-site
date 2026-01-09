import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/026/421/357/original/cartoon-animated-blue-sky-moving-background-with-clouds-seamless-loop-video.jpg"
            alt="Cloud background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>

        {/* Floating Brain Icons - Hidden on mobile, visible on larger screens */}
        <div className="absolute inset-0 z-5 hidden lg:block pointer-events-none">
          {/* Top Left - Brain Workout */}
          <div className="absolute top-16 left-8 animate-in fade-in slide-in-from-left duration-1000 delay-300 rotate-[-8deg]">
            <div className="bg-card border-2 border-border rounded-3xl p-4 shadow-lg hover:scale-110 hover:rotate-0 transition-all duration-300">
              <Image
                src="/brain-workout.png"
                alt="Brain workout"
                width={120}
                height={120}
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>
          </div>

          {/* Top Right - Brain Focus */}
          <div className="absolute top-24 right-12 animate-in fade-in slide-in-from-right duration-1000 delay-500 rotate-[12deg]">
            <div className="bg-card border-2 border-border rounded-3xl p-4 shadow-lg hover:scale-110 hover:rotate-0 transition-all duration-300">
              <Image
                src="/brain-focus.png"
                alt="Brain focus"
                width={120}
                height={120}
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>
          </div>

          {/* Bottom Left - Brain Happy */}
          <div className="absolute bottom-28 left-16 animate-in fade-in slide-in-from-left duration-1000 delay-700 rotate-[6deg]">
            <div className="bg-card border-2 border-border rounded-3xl p-4 shadow-lg hover:scale-110 hover:rotate-0 transition-all duration-300">
              <Image
                src="/brain-happy.png"
                alt="Brain happy"
                width={120}
                height={120}
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>
          </div>

          {/* Bottom Right - Brain Stats */}
          <div className="absolute bottom-20 right-16 animate-in fade-in slide-in-from-right duration-1000 delay-900 rotate-[-10deg]">
            <div className="bg-card border-2 border-border rounded-3xl p-4 shadow-lg hover:scale-110 hover:rotate-0 transition-all duration-300">
              <Image
                src="/brain-stats.png"
                alt="Brain stats"
                width={120}
                height={120}
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Train your brain.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Train your mathematical, language, and memory skills with our daily
            workouts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
