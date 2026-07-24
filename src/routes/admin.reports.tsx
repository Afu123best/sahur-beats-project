import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { REVENUE_CHART, GROWTH_CHART, DEPT_VISITS } from "@/lib/mock-data";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const COLORS = ["var(--primary)", "var(--accent)", "var(--secondary)", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

export const Route = createFileRoute("/admin/reports")({
  head: () => ({ meta: [{ title: "Reports — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Reports" subtitle="Operational and financial analytics." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-0 shadow-soft"><CardContent className="p-6"><div className="font-display font-semibold">Revenue (PKR Lakhs)</div><div className="mt-4 h-64"><ResponsiveContainer><BarChart data={REVENUE_CHART}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="value" fill="var(--primary)" radius={[8,8,0,0]} /></BarChart></ResponsiveContainer></div></CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-6"><div className="font-display font-semibold">Patient Growth</div><div className="mt-4 h-64"><ResponsiveContainer><LineChart data={GROWTH_CHART}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="month" /><YAxis /><Tooltip /><Line dataKey="patients" stroke="var(--accent)" strokeWidth={2.5} /></LineChart></ResponsiveContainer></div></CardContent></Card>
        <Card className="lg:col-span-2 border-0 shadow-soft"><CardContent className="p-6"><div className="font-display font-semibold">Department Distribution</div><div className="mt-4 h-72"><ResponsiveContainer><PieChart><Pie data={DEPT_VISITS} dataKey="value" nameKey="name" outerRadius={110} label>{DEPT_VISITS.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div></CardContent></Card>
      </div>
    </div>
  ),
});
