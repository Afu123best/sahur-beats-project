import { createFileRoute, Link } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APPOINTMENTS, LAB_REPORTS, INVOICES, PRESCRIPTIONS, NOTIFICATIONS } from "@/lib/mock-data";
import { CalendarClock, FlaskConical, Receipt, HeartPulse, Pill, Bell, CalendarPlus, MessageSquare, FileText } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export const Route = createFileRoute("/patient/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Patient Portal" }, { name: "robots", content: "noindex" }] }),
  component: PatientDashboard,
});

const HEALTH = [
  { d: "Mon", v: 72 }, { d: "Tue", v: 74 }, { d: "Wed", v: 71 },
  { d: "Thu", v: 76 }, { d: "Fri", v: 73 }, { d: "Sat", v: 75 }, { d: "Sun", v: 72 },
];

function PatientDashboard() {
  const upcoming = APPOINTMENTS.find((a) => a.status === "Upcoming");
  const outstanding = INVOICES.filter((i) => i.status === "Outstanding").reduce((s, i) => s + i.amount, 0);

  return (
    <div>
      <DashPageHeader title="Welcome back, Sana" subtitle="Here's a snapshot of your health today." action={
        <Button asChild><Link to="/book-appointment"><CalendarPlus className="mr-2 h-4 w-4" />Book Appointment</Link></Button>
      } />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={CalendarClock} label="Next appointment" value={upcoming ? `${upcoming.date}` : "—"} sub={upcoming ? `${upcoming.doctor} · ${upcoming.time}` : ""} />
        <StatCard icon={FlaskConical} label="Recent reports" value={String(LAB_REPORTS.length)} sub="2 ready to view" />
        <StatCard icon={Receipt} label="Outstanding bills" value={`PKR ${outstanding.toLocaleString()}`} sub={`${INVOICES.filter(i => i.status === "Outstanding").length} invoices`} />
        <StatCard icon={HeartPulse} label="Resting HR" value="72 bpm" sub="Normal range" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-soft"><CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div><div className="font-display font-semibold">Health summary</div><div className="text-xs text-muted-foreground">Last 7 days · Resting heart rate</div></div>
            <Badge variant="secondary">Stable</Badge>
          </div>
          <div className="mt-4 h-52">
            <ResponsiveContainer>
              <LineChart data={HEALTH}>
                <Tooltip />
                <Line dataKey="v" type="monotone" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Quick actions</div>
          <div className="mt-4 grid gap-2">
            <QA to="/book-appointment" icon={CalendarPlus} label="Book appointment" />
            <QA to="/patient/lab-reports" icon={FileText} label="View lab reports" />
            <QA to="/patient/prescriptions" icon={Pill} label="Prescriptions" />
            <QA to="/patient/messages" icon={MessageSquare} label="Message hospital" />
          </div>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Upcoming medicines</div>
          <ul className="mt-4 space-y-3">
            {PRESCRIPTIONS[0].medicines.map((m) => (
              <li key={m.name} className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Pill className="h-4 w-4" /></div>
                <div className="min-w-0"><div className="truncate text-sm font-medium">{m.name}</div><div className="text-xs text-muted-foreground">{m.freq} · {m.days} days</div></div>
              </li>
            ))}
          </ul>
        </CardContent></Card>

        <Card className="lg:col-span-2 border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Recent notifications</div>
          <ul className="mt-4 divide-y">
            {NOTIFICATIONS.slice(0, 5).map((n) => (
              <li key={n.id} className="flex items-center gap-3 py-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary"><Bell className="h-4 w-4" /></div>
                <div className="flex-1 text-sm">{n.title}</div>
                <div className="text-xs text-muted-foreground">{n.time}</div>
              </li>
            ))}
          </ul>
        </CardContent></Card>

        <Card className="lg:col-span-3 border-0 gradient-brand text-primary-foreground shadow-elegant"><CardContent className="p-6 md:p-8">
          <div className="text-xs uppercase tracking-widest opacity-80">Health tip</div>
          <div className="mt-2 font-display text-xl font-semibold">Aim for 7–8 hours of sleep and 30 minutes of moderate activity daily to support cardiovascular health.</div>
        </CardContent></Card>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub?: string }) {
  return (
    <Card className="border-0 shadow-soft"><CardContent className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
      </div>
      <div className="mt-3 font-display text-2xl font-bold">{value}</div>
      {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
    </CardContent></Card>
  );
}

function QA({ to, icon: Icon, label }: { to: string; icon: any; label: string }) {
  return (
    <Link to={to} className="flex items-center gap-3 rounded-xl border p-3 text-sm transition-colors hover:border-primary hover:bg-primary/5">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
