import { createFileRoute, Link } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APPOINTMENTS } from "@/lib/mock-data";
import { CalendarPlus, Clock, Stethoscope } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/appointments")({
  head: () => ({ meta: [{ title: "My Appointments" }, { name: "robots", content: "noindex" }] }),
  component: MyAppointments,
});

const statusColor: Record<string, string> = {
  Upcoming: "bg-primary/10 text-primary",
  Completed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  Cancelled: "bg-destructive/15 text-destructive",
};

function MyAppointments() {
  const groups = {
    Upcoming: APPOINTMENTS.filter((a) => a.status === "Upcoming"),
    Completed: APPOINTMENTS.filter((a) => a.status === "Completed"),
    Cancelled: APPOINTMENTS.filter((a) => a.status === "Cancelled"),
  };
  return (
    <div>
      <DashPageHeader title="My Appointments" subtitle="View, reschedule and manage your bookings." action={
        <Button asChild><Link to="/book-appointment"><CalendarPlus className="mr-2 h-4 w-4" />New Appointment</Link></Button>
      } />
      <Tabs defaultValue="Upcoming">
        <TabsList>
          {Object.entries(groups).map(([k, v]) => <TabsTrigger key={k} value={k}>{k} <Badge variant="secondary" className="ml-2">{v.length}</Badge></TabsTrigger>)}
        </TabsList>
        {Object.entries(groups).map(([k, v]) => (
          <TabsContent key={k} value={k} className="mt-6 space-y-3">
            {v.length === 0 && <div className="rounded-2xl border bg-card p-8 text-center text-sm text-muted-foreground">No {k.toLowerCase()} appointments.</div>}
            {v.map((a) => (
              <Card key={a.id} className="border shadow-none"><CardContent className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-primary" /><span className="font-display font-semibold">{a.doctor}</span><Badge className={statusColor[a.status]}>{a.status}</Badge></div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span>{a.department}</span><span>·</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.date} · {a.time}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Reason: {a.reason}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => toast("Reschedule flow (mock)")}>Reschedule</Button>
                  {a.status === "Upcoming" && <Button variant="ghost" size="sm" onClick={() => toast("Cancelled (mock)")}>Cancel</Button>}
                </div>
              </CardContent></Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
