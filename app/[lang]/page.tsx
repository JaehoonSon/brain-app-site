import { Footer } from "@/components/footer";
import {
  HeroSection,
  HowItWorksSection,
  GamesShowcaseSection,
} from "@/components/landing";
import { getDictionary } from "../utils/get-dictionary";
import { Locale } from "@/lib/locales";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen mx-auto">
      <HeroSection dict={dict.landing.hero} />
      <HowItWorksSection dict={dict.landing.howItWorks} />
      <GamesShowcaseSection dict={dict.landing.gamesShowcase} />
      <Footer className="bg-background" dict={dict.footer} lang={lang} />
    </div>
  );
}
