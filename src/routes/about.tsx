import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { TIMELINE, LEADERSHIP } from "@/lib/mock-data";
import { Target, Eye, HeartHandshake, Trophy } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Our history, mission, values, leadership and 90+ year journey of compassionate healthcare." },
    { property: "og:title", content: "About Gulab Devi Teaching Hospital" },
    { property: "og:description", content: "Our history, mission, values and leadership." },
  ]}),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Mission", text: "To deliver accessible, compassionate and world-class healthcare and education." },
  { icon: Eye, title: "Vision", text: "A healthier Pakistan powered by knowledge, science and empathy." },
  { icon: HeartHandshake, title: "Values", text: "Integrity · Excellence · Compassion · Innovation · Stewardship." },
  { icon: Trophy, title: "Achievements", text: "2M+ patients served, 214 nurses trained annually, ISO certified pathology." },
];

function About() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Who we are" title="Nine decades of caring, without compromise." subtitle="Since 1934, Gulab Devi Teaching Hospital has grown from a small TB sanatorium into one of South Asia's largest teaching hospitals — always guided by a promise to treat every patient like family." />

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v) => (
          <Card key={v.title} className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><v.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold">Our Journey</h2>
          <div className="mt-10 relative border-l-2 border-primary/20 pl-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative mb-10">
                <div className="absolute -left-[42px] grid h-8 w-8 place-items-center rounded-full gradient-brand text-xs font-bold text-primary-foreground">{String(t.year).slice(2)}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.year}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold">Leadership</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">Guiding the hospital's clinical, academic and operational excellence.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {LEADERSHIP.map((l) => (
            <Card key={l.name} className="border-0 text-center shadow-soft">
              <CardContent className="p-6">
                <Avatar className="mx-auto h-24 w-24"><AvatarImage src={l.photo} /><AvatarFallback>{l.name[0]}</AvatarFallback></Avatar>
                <div className="mt-4 font-display font-semibold">{l.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{l.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
