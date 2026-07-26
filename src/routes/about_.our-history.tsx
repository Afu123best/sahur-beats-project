import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { TIMELINE } from "@/lib/mock-data";

export const Route = createFileRoute("/about_/our-history")({
  head: () => ({ meta: [{ title: "Our History — Gulab Devi Teaching Hospital" }] }),
  component: OurHistory,
});

function OurHistory() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="About Us" title="Our History" />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Nearly a century ago, freedom leader Lala Lajpat Rai transformed personal grief into a gift for humanity. In 1927, he founded the Gulab Devi Trust in memory of his mother, who lost her life to tuberculosis. By 1934, the hospital opened its doors as a sanctuary for tuberculosis patients.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          From these humble beginnings, guided by visionary leaders such as Begum Raana Liaquat Ali Khan, Syed Wajid Ali and Syed Shahid Ali, what started as a modest 50-bed facility has grown into South Asia's largest chest and cardiac hospital, with 1,500 beds and over 25 specialized departments.
        </p>
        <div className="mt-12 relative border-l-2 border-primary/20 pl-8">
          {TIMELINE.map((t) => (
            <div key={t.year} className="relative mb-10">
              <div className="absolute -left-[42px] grid h-8 w-8 place-items-center rounded-full gradient-brand text-xs font-bold text-primary-foreground">{String(t.year).slice(2)}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.year}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}