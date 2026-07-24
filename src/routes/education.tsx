import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FlaskConical, Users, CalendarDays, BookOpen } from "lucide-react";

const AREAS = [
  { icon: GraduationCap, title: "Medical College", desc: "Undergraduate MBBS program affiliated with UHS Lahore, class of 250+." },
  { icon: FlaskConical, title: "Research", desc: "Active clinical research across cardiology, pulmonology and oncology." },
  { icon: Users, title: "Training", desc: "FCPS, MRCP, and structured house-job training in 22 specialties." },
  { icon: CalendarDays, title: "Events", desc: "Grand rounds, CMEs, symposia and international guest lectures." },
  { icon: BookOpen, title: "Publications", desc: "150+ peer-reviewed papers annually in national and international journals." },
];

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [
    { title: "Education & Research — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Medical college, research, training programs and academic events." },
    { property: "og:title", content: "Education & Research" },
    { property: "og:description", content: "Medical college, research and training." },
  ]}),
  component: () => (
    <PublicLayout>
      <PageHeader breadcrumb="Learn & discover" title="Education & Research" subtitle="Training tomorrow's clinicians and advancing evidence-based medicine." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <Card key={a.title} className="border-0 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><a.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});
