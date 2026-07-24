import { createFileRoute, Link } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DOCTORS } from "@/lib/mock-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/patient/doctors")({
  head: () => ({ meta: [{ title: "My Doctors" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="My Doctors" subtitle="Doctors you've consulted with." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {DOCTORS.slice(0, 8).map((d) => (
          <Card key={d.id} className="overflow-hidden border-0 shadow-soft">
            <div className="aspect-[4/3] bg-muted"><img src={d.photo} alt={d.name} className="h-full w-full object-cover" /></div>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div><div className="font-display font-semibold">{d.name}</div><div className="text-xs text-muted-foreground">{d.specialization}</div></div>
                <Badge variant="secondary" className="gap-1"><Star className="h-3 w-3 fill-current" />{d.rating.toFixed(1)}</Badge>
              </div>
              <Button asChild size="sm" className="mt-4 w-full"><Link to="/book-appointment">Book Again</Link></Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
});
