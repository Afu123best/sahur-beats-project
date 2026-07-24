import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRESCRIPTIONS } from "@/lib/mock-data";
import { Download, Pill } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/prescriptions")({
  head: () => ({ meta: [{ title: "Prescriptions" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Prescriptions" subtitle="Your active and past prescriptions." />
      <div className="grid gap-4 md:grid-cols-2">
        {PRESCRIPTIONS.map((p) => (
          <Card key={p.id} className="border-0 shadow-soft"><CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-display font-semibold">{p.doctor}</div>
                <div className="text-xs text-muted-foreground">{p.date}</div>
              </div>
              <Button size="sm" variant="outline" onClick={() => toast("Downloading PDF…")}><Download className="mr-1 h-4 w-4" />PDF</Button>
            </div>
            <ul className="mt-4 space-y-3">
              {p.medicines.map((m) => (
                <li key={m.name} className="flex items-start gap-3 rounded-xl bg-[color:var(--surface)] p-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Pill className="h-4 w-4" /></div>
                  <div><div className="font-medium">{m.name}</div><div className="text-xs text-muted-foreground">{m.dose} · {m.freq} · {m.days} days</div></div>
                </li>
              ))}
            </ul>
            {p.notes && <div className="mt-4 rounded-lg border border-dashed p-3 text-xs text-muted-foreground">Note: {p.notes}</div>}
          </CardContent></Card>
        ))}
      </div>
    </div>
  ),
});
