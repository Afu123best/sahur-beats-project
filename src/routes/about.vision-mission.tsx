import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({ meta: [{ title: "Vision & Mission — Gulab Devi Teaching Hospital" }] }),
  component: VisionMission,
});

function VisionMission() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="About Us" title="Vision & Mission" />
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
    </PublicLayout>
  );
}