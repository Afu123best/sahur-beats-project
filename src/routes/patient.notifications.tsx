import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NOTIFICATIONS } from "@/lib/mock-data";
import { Bell, CalendarClock, FlaskConical, Pill, CreditCard, Megaphone } from "lucide-react";

const iconMap = { appointment: CalendarClock, report: FlaskConical, prescription: Pill, payment: CreditCard, announce: Megaphone } as const;

export const Route = createFileRoute("/patient/notifications")({
  head: () => ({ meta: [{ title: "Notifications" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Notifications" subtitle="Stay up to date with your care." action={<Button variant="outline">Mark all read</Button>} />
      <Card className="border-0 shadow-soft"><CardContent className="p-0">
        <ul className="divide-y">
          {NOTIFICATIONS.map((n) => {
            const Icon = (iconMap as any)[n.type] ?? Bell;
            return (
              <li key={n.id} className={`flex items-center gap-4 p-4 ${!n.read ? "bg-primary/5" : ""}`}>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                <div className="flex-1 min-w-0"><div className="text-sm font-medium">{n.title}</div><div className="text-xs text-muted-foreground">{n.time}</div></div>
                {!n.read && <Badge>New</Badge>}
              </li>
            );
          })}
        </ul>
      </CardContent></Card>
    </div>
  ),
});
