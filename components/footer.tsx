import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer({
  className,
  dict,
  lang,
}: {
  className?: string;
  dict?: any;
  lang: string;
}) {
  return (
    <footer className={cn("w-full py-6 md:px-8 md:py-0 mt-auto", className)}>
      <div className="container mx-auto flex flex-col items-center gap-4 md:h-24 md:flex-row md:justify-between ">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {dict?.builtBy || "Built by "}
          <a
            href="mailto:son.jaehoon0826@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {dict?.appName || "Lobe"}
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <Link
            href={`/${lang}`}
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {dict?.links?.home || "Home"}
          </Link>
          <Link
            href={`/${lang}/terms`}
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {dict?.links?.terms || "Terms"}
          </Link>
          <Link
            href={`/${lang}/privacy`}
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {dict?.links?.privacy || "Privacy"}
          </Link>
          <Link
            href={`/${lang}/eula`}
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {dict?.links?.eula || "EULA"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
