import { getDictionary } from "../../utils/get-dictionary";
import { Locale } from "@/lib/locales";
import { LegalPageRenderer, LegalDict } from "@/components/legal-page-renderer";

export default async function Terms({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <LegalPageRenderer
      dict={dict.legal.terms as LegalDict}
      footerDict={dict.footer}
      lang={lang}
    />
  );
}
