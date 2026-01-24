import { getDictionary, Locale } from "../../utils/get-dictionary";
import { LegalPageRenderer, LegalDict } from "@/components/legal-page-renderer";

export default async function EULA({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <LegalPageRenderer
      dict={dict.legal.eula as LegalDict}
      footerDict={dict.footer}
      lang={lang}
    />
  );
}
