import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MEDICAL_RECORD } from "@/lib/mock-data";
import { AlertTriangle, Syringe, Activity, Pill, Scissors } from "lucide-react";

export const Route = createFileRoute("/patient/records")({
  head: () => ({ meta: [{ title: "Medical Records" }, { name: "robots", content: "noindex" }] }),
  component: Records,
});

function Records() {
  const r = MEDICAL_RECORD;
  return (
    <div>
      <DashPageHeader title="Medical Records" subtitle="A complete overview of your health history." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Panel icon={AlertTriangle} title="Allergies">{r.allergies.map((a) => <Badge key={a} variant="destructive" className="mr-1 mt-1">{a}</Badge>)}</Panel>
        <Panel icon={Activity} title="Conditions">{r.conditions.map((c) => <Badge key={c} variant="secondary" className="mr-1 mt-1">{c}</Badge>)}</Panel>
        <Panel icon={Pill} title="Current Medications">
          <ul className="mt-2 space-y-1.5 text-sm">{r.medications.map((m) => <li key={m.name}>{m.name} — <span className="text-muted-foreground">{m.schedule}</span></li>)}</ul>
        </Panel>
        <Panel icon={Syringe} title="Vaccinations">
          <ul className="mt-2 space-y-1.5 text-sm">{r.vaccinations.map((v) => <li key={v.name}>{v.name} <span className="text-muted-foreground">· {v.date}</span></li>)}</ul>
        </Panel>
        <Panel icon={Scissors} title="Past Surgeries">
          <ul className="mt-2 space-y-1.5 text-sm">{r.surgeries.map((s) => <li key={s.name}>{s.name} <span className="text-muted-foreground">· {s.date}</span></li>)}</ul>
        </Panel>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Visit Timeline</h2>
      <div className="mt-4 border-l-2 border-primary/20 pl-6">
        {r.timeline.map((t) => (
          <div key={t.date} className="relative mb-6">
            <div className="absolute -left-[31px] h-3 w-3 rounded-full gradient-brand" />
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.date}</div>
            <div className="mt-1 font-display font-semibold">{t.title}</div>
            <div className="text-sm text-muted-foreground">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-0 shadow-soft"><CardContent className="p-5">
      <div className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary" /><span className="font-display font-semibold">{title}</span></div>
      <div className="mt-2">{children}</div>
    </CardContent></Card>
  );
}
