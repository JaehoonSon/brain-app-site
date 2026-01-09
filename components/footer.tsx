import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-6 md:px-8 md:py-0 border-t mt-auto", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="mailto:son.jaehoon0826@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            BrainApp
          </a>
          .
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
