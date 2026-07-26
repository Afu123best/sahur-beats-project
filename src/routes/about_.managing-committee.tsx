import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { LEADERSHIP } from "@/lib/mock-data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/about_/managing-committee")({
  head: () => ({ meta: [{ title: "Managing Committee — Gulab Devi Teaching Hospital" }] }),
  component: ManagingCommittee,
});

function ManagingCommittee() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="About Us" title="Managing Committee" subtitle="Overseeing the strategic direction and operations of South Asia's largest chest and cardiac hospital." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
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