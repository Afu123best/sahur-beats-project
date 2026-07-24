import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RADIOLOGY } from "@/lib/mock-data";
import { Download, Eye } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/radiology")({
  head: () => ({ meta: [{ title: "Radiology Reports" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Radiology Reports" subtitle="Imaging studies and radiologist reports." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {RADIOLOGY.map((r) => (
          <Card key={r.id} className="overflow-hidden border-0 shadow-soft">
            <div className="aspect-[4/3] bg-black">
              <img src={r.image} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-display font-semibold">{r.name}</div>
                <Badge variant={r.status === "Completed" ? "secondary" : "outline"}>{r.status}</Badge>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{r.date}</div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline" onClick={() => toast("Opening viewer…")}><Eye className="mr-1 h-4 w-4" />View</Button>
                <Button size="sm" variant="ghost" onClick={() => toast("Downloading…")}><Download className="mr-1 h-4 w-4" />Report</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
});
