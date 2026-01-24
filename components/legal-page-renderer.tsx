import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";

export interface SectionContent {
  type?: "p" | "list"; // default to p if undefined or handling simple strings
  text?: string;
  items?: string[];
}

export interface Section {
  title?: string;
  content?: (string | SectionContent)[] | string; // Can be simple string, or object, or array
  subsections?: Section[];
  list?: string[]; // Direct list in section
  note?: string;
}

export interface LegalDict {
  title: string;
  lastUpdated?: string;
  intro?: string[];
  sections?: Section[];
}

export function LegalPageRenderer({
  dict,
  footerDict,
  lang,
}: {
  dict: LegalDict;
  footerDict?: any;
  lang: string;
}) {
  const renderContent = (content: (string | SectionContent)[]) => {
    return content.map((item, idx) => {
      if (typeof item === "string") {
        return <P key={idx}>{item}</P>;
      }
      if (item.type === "list" && item.items) {
        return (
          <List key={idx}>
            {item.items.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </List>
        );
      }
      return <P key={idx}>{item.text}</P>;
    });
  };

  const renderSection = (section: Section, idx: number) => {
    return (
      <section key={idx} className="mb-8">
        {section.title && <H2>{section.title}</H2>}

        {/* Direct content array */}
        {section.content &&
          (typeof section.content === "string" ? (
            <P>{section.content}</P>
          ) : (
            renderContent(section.content as (string | SectionContent)[])
          ))}

        {/* Direct list in section (Support/Terms schema variation) */}
        {section.list && (
          <List>
            {section.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </List>
        )}

        {/* Subsections */}
        {section.subsections && (
          <div className="mt-4 space-y-6">
            {section.subsections.map((sub, i) => (
              <div key={i}>
                {sub.title && (
                  <h3 className="font-semibold text-lg mb-2">{sub.title}</h3>
                )}
                {sub.content &&
                  (typeof sub.content === "string" ? (
                    <P>{sub.content}</P>
                  ) : (
                    renderContent(sub.content as (string | SectionContent)[])
                  ))}
                {sub.list && (
                  <List>
                    {sub.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </List>
                )}
                {sub.note && <P className="mt-2">{sub.note}</P>}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">{dict.title}</H1>
        {dict.lastUpdated && (
          <Muted>
            {dict.lastUpdated.startsWith("Last")
              ? dict.lastUpdated
              : `Last Updated: ${dict.lastUpdated}`}
          </Muted>
        )}
      </div>

      <div className="space-y-8">
        {dict.intro && (
          <section>
            {dict.intro.map((p, idx) => (
              <P key={idx}>{p}</P>
            ))}
          </section>
        )}

        {dict.sections?.map((section, idx) => renderSection(section, idx))}
      </div>
      <Footer dict={footerDict} lang={lang} />
    </div>
  );
}
