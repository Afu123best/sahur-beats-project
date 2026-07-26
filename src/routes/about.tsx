import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Telescope, BookOpen, Users, ArrowRight } from "lucide-react";

const FOUNDER_IMG = "/lala-lajpat-rai.jpg";
const HERO_IMG = "/gulab-devi-building.jpg";
const HISTORY_IMG = "/slab-image.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gulab Devi Teaching Hospital" },
      { name: "description", content: "Our history, mission, vision and managing committee." },
      { property: "og:title", content: "About Gulab Devi Teaching Hospital" },
      { property: "og:description", content: "Our history, mission, vision and managing committee." },
    ]
  }),
  component: About,
});

const SECTIONS = [
  { to: "/about/vision-mission", icon: Telescope, title: "Vision & Mission", text: "What drives our commitment to free, quality healthcare.", accent: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" },
  { to: "/about/our-history", icon: BookOpen, title: "Our History", text: "Nine decades of service, from a TB sanatorium to South Asia's largest chest hospital.", accent: "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white" },
  { to: "/about/managing-committee", icon: Users, title: "Managing Committee", text: "The trustees and members guiding our strategic direction.", accent: "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white" },
];

const STATS = [
  { k: "1927", label: "Trust founded" },
  { k: "1,500", label: "Hospital beds" },
  { k: "25+", label: "Departments" },
];

function About() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Gulab Devi Teaching Hospital" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white md:py-32">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Who We Are</div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Nine decades of caring, without compromise.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/90 md:text-lg">
            Lala Lajpat Rai established the Gulab Devi Trust in 1927 in memory of his mother, who died of tuberculosis in Lahore. What began as a 50-bed sanctuary in 1934 has grown into South Asia's largest chest and cardiac hospital.
          </p>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl font-display text-lg italic text-white/80">
            "Not wealth locked away, but lives healed."
          </p>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <img src={FOUNDER_IMG} alt="Lala Lajpat Rai" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Founder</div>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">Lala Lajpat Rai</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Known as "Punjab Kesari," Lala Lajpat Rai was one of the most prominent freedom fighters of pre-Independence India. In 1927, his mother Gulab Devi died of tuberculosis in Lahore — a disease that, at the time, offered little hope and even less access to care for ordinary families.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Rather than let his grief end there, Lajpat Rai established the Gulab Devi Trust that same year, reportedly building the hospital on the very spot where his mother passed away. The Trust acquired 40 acres of land, and by 1934 — inaugurated by Mahatma Gandhi himself — the hospital opened its doors to TB patients who had nowhere else to turn.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lajpat Rai did not live to see his hospital fully realized — he passed away in 1928, a year after founding the Trust. But his vision, born from personal loss, continues to guide the institution today: care for those who need it most, regardless of ability to pay.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link key={s.to} to={s.to} className="group block">
            <Card className="h-full border-0 shadow-soft transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-elegant">
              <CardContent className="p-8">
                <div className={`grid h-12 w-12 place-items-center rounded-xl transition-colors ${s.accent}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </PublicLayout>
  );
}