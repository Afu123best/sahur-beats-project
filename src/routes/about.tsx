import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, History, Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Our history, mission, vision and managing committee." },
    { property: "og:title", content: "About Gulab Devi Teaching Hospital" },
    { property: "og:description", content: "Our history, mission, vision and managing committee." },
  ]}),
  component: About,
});

const SECTIONS = [
  { to: "/about/vision-mission", icon: Target, title: "Vision & Mission", text: "What drives our commitment to free, quality healthcare." },
  { to: "/about/our-history", icon: History, title: "Our History", text: "Nine decades of service, from a TB sanatorium to South Asia's largest chest hospital." },
  { to: "/about/managing-committee", icon: Users, title: "Managing Committee", text: "The trustees and members guiding our strategic direction." },
];

function About() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Who we are" title="Nine decades of caring, without compromise." subtitle="Lala Lajpat Rai established the Gulab Devi Trust in 1927 in memory of his mother, who died of tuberculosis in Lahore. What began as a 50-bed sanctuary in 1934 has grown into South Asia's largest chest and cardiac hospital, with 1,500 beds and over 25 specialized departments — providing free, high-quality care to underprivileged patients for over 50 years." />

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {SECTIONS.map((s) => (
          <Card key={s.to} className="border-0 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <Button asChild variant="link" className="mt-2 h-auto p-0 text-primary">
                <Link to={s.to}>Read more <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </PublicLayout>
  );
}