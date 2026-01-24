import { Footer } from "@/components/footer";
import {
  HeroSection,
  HowItWorksSection,
  GamesShowcaseSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <HeroSection />
      <HowItWorksSection />
      <GamesShowcaseSection />
      <Footer className="bg-background" />
    </div>
  );
}
