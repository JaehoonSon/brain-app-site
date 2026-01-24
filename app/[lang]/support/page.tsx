import { getDictionary, Locale } from "../../utils/get-dictionary";
import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default async function Support({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const support = dict.support;

  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">{support.title}</H1>
        <Muted>{dict.common.weAreHereToHelp}</Muted>
      </div>

      <div className="space-y-8">
        <section>
          <P>{support.intro}</P>
        </section>

        <section>
          <H2>{support.contact.title}</H2>
          <P>{support.contact.description}</P>
          <P className="mt-2">
            {dict.common.contactLabel}
            <a
              href={`mailto:${dict.common.contactEmail}`}
              className="text-primary hover:underline font-medium"
            >
              {dict.common.contactEmail}
            </a>
          </P>
          <P className="mt-4">
            <strong>{support.contact.responseTime}</strong>
          </P>
        </section>

        <section>
          <H2>{support.faq.title}</H2>
          {support.faq.items.map((item: any, idx: number) => (
            <div key={idx} className="mt-4 first:mt-4 mt-6">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <P>{item.answer}</P>
              {item.list && (
                <List>
                  {item.list.map((li: string, i: number) => (
                    <li key={i}>{li}</li>
                  ))}
                </List>
              )}
              {item.note && <P className="mt-2">{item.note}</P>}
            </div>
          ))}
        </section>

        <section>
          <H2>{support.resources.title}</H2>
          <List>
            {support.resources.items.map((item: any, idx: number) => (
              <li key={idx}>
                <Link href={item.href} className="text-primary hover:underline">
                  {item.label}
                </Link>
                {item.desc}
              </li>
            ))}
          </List>
        </section>

        <section>
          <H2>{support.feedback.title}</H2>
          <P>
            {support.feedback.description}
            <a
              href={`mailto:${dict.common.contactEmail}`}
              className="text-primary hover:underline font-medium"
            >
              {dict.common.contactEmail}
            </a>
            .
          </P>
        </section>
      </div>
      <Footer dict={dict.footer} lang={lang} />
    </div>
  );
}
