import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PublicLayout({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {show && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="icon"
          className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full shadow-elegant"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export function PageHeader({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <section className="relative overflow-hidden border-b bg-[color:var(--surface)]">
      <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 gradient-brand opacity-10" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {breadcrumb && (
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{breadcrumb}</div>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
