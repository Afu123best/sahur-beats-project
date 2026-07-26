import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, ShieldCheck } from "lucide-react";

const HERO_IMG = "/gulab-devi-building.jpg";

export const Route = createFileRoute("/about_/vision-mission")({
  head: () => ({ meta: [{ title: "Vision & Mission — Gulab Devi Teaching Hospital" }] }),
  component: VisionMission,
});

function VisionMission() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Gulab Devi Teaching Hospital" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">About Us</div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Vision & Mission</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 md:text-lg">
            The principles that have guided Gulab Devi Teaching Hospital for nearly a century.
          </p>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-2">
        <Card className="border-0 shadow-soft"><CardContent className="p-8">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Target className="h-5 w-5" /></div>
          <h3 className="mt-4 font-display text-xl font-semibold">Mission</h3>
          <p className="mt-2 text-muted-foreground">Dedicated to providing quality medical treatment free of cost to the underprivileged and destitute patients of the society.</p>
        </CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-8">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Eye className="h-5 w-5" /></div>
          <h3 className="mt-4 font-display text-xl font-semibold">Vision</h3>
          <p className="mt-2 text-muted-foreground">To treat all patients with respect and dignity, instilling in them a sense of confidence while ensuring quality care.</p>
        </CardContent></Card>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><ShieldCheck className="h-5 w-5" /></div>
          <h3 className="mt-4 font-display text-xl font-semibold">Our Commitment</h3>
          <p className="mt-3 text-muted-foreground">
            Gulab Devi Teaching Hospital is committed to fostering a culture of excellence, patient safety, and evidence-based clinical practice through a structured, continuous quality improvement system — employing proactive, data-driven methods to enhance clinical outcomes, operational efficiency, and patient satisfaction.
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}