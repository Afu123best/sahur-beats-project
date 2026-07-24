import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ADMIN_STATS, APPT_CHART, REVENUE_CHART, DEPT_VISITS, GROWTH_CHART, APPOINTMENTS, LAB_REPORTS } from "@/lib/mock-data";
import { Users, CalendarCheck2, Wallet, BedDouble, Siren, FileClock, TrendingUp, TrendingDown } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, LineChart, Line, CartesianGrid, PieChart, Pie, Cell } from "recharts";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard" }, { name: "robots", content: "noindex" }] }),
  component: AdminDash,
});

const COLORS = ["var(--primary)", "var(--accent)", "var(--secondary)", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

function AdminDash() {
  const s = ADMIN_STATS;
  return (
    <div>
      <DashPageHeader title="Hospital Overview" subtitle="Real-time operational metrics across all departments." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Metric icon={Users} label="Today's Patients" value={s.todayPatients} trend={+6.2} />
        <Metric icon={CalendarCheck2} label="Today's Appts" value={s.todayAppointments} trend={+4.1} />
        <Metric icon={Wallet} label="Revenue" value={`PKR ${(s.revenue/1000).toFixed(0)}K`} trend={+12.4} />
        <Metric icon={BedDouble} label="Bed Occupancy" value={`${s.bedOccupancy}%`} trend={-1.2} />
        <Metric icon={Siren} label="Emergency Cases" value={s.emergencyCases} trend={+9.8} />
        <Metric icon={FileClock} label="Pending Reports" value={s.pendingReports} trend={-3.4} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Appointments per Day</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <AreaChart data={APPT_CHART}>
                <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--primary)" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="day" /><YAxis /><Tooltip />
                <Area dataKey="value" stroke="var(--primary)" fill="url(#g1)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Department Visits</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={DEPT_VISITS} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {DEPT_VISITS.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Revenue (PKR Lakhs)</div>
          <div className="mt-4 h-52">
            <ResponsiveContainer><BarChart data={REVENUE_CHART}><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="value" fill="var(--accent)" radius={[8,8,0,0]} /></BarChart></ResponsiveContainer>
          </div>
        </CardContent></Card>

        <Card className="lg:col-span-2 border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Patient Growth</div>
          <div className="mt-4 h-52">
            <ResponsiveContainer><LineChart data={GROWTH_CHART}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="month" /><YAxis /><Tooltip /><Line dataKey="patients" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3 }} /></LineChart></ResponsiveContainer>
          </div>
        </CardContent></Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Latest Appointments</div>
          <Table><TableHeader><TableRow><TableHead>Patient/Doctor</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>
            {APPOINTMENTS.slice(0,5).map((a) => (
              <TableRow key={a.id}><TableCell><div className="font-medium">{a.doctor}</div><div className="text-xs text-muted-foreground">{a.department}</div></TableCell><TableCell>{a.date} {a.time}</TableCell><TableCell><Badge variant={a.status === "Upcoming" ? "default" : a.status === "Completed" ? "secondary" : "destructive"}>{a.status}</Badge></TableCell></TableRow>
            ))}
          </TableBody></Table>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <div className="font-display font-semibold">Pending Lab Reports</div>
          <Table><TableHeader><TableRow><TableHead>Report</TableHead><TableHead>Dept</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>
            {LAB_REPORTS.map((r) => (
              <TableRow key={r.id}><TableCell className="font-medium">{r.name}</TableCell><TableCell>{r.department}</TableCell><TableCell><Badge variant={r.status === "Completed" ? "secondary" : r.status === "Pending" ? "destructive" : "default"}>{r.status}</Badge></TableCell></TableRow>
            ))}
          </TableBody></Table>
        </CardContent></Card>
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value, trend }: { icon: any; label: string; value: string | number; trend: number }) {
  const up = trend >= 0;
  return (
    <Card className="border-0 shadow-soft"><CardContent className="p-5">
      <div className="flex items-center justify-between"><div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div><div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div></div>
      <div className="mt-3 font-display text-2xl font-bold">{value}</div>
      <div className={`mt-1 flex items-center gap-1 text-xs ${up ? "text-emerald-600" : "text-destructive"}`}>{up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />} {Math.abs(trend)}% vs last week</div>
    </CardContent></Card>
  );
}
