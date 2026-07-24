import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { APPOINTMENTS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/appointments")({
  head: () => ({ meta: [{ title: "Appointments — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Appointments" subtitle="All hospital appointments across departments." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Doctor</TableHead><TableHead>Department</TableHead><TableHead>Date/Time</TableHead><TableHead>Reason</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{APPOINTMENTS.map((a) => (
          <TableRow key={a.id}><TableCell className="font-medium">{a.doctor}</TableCell><TableCell>{a.department}</TableCell><TableCell>{a.date} · {a.time}</TableCell><TableCell>{a.reason}</TableCell><TableCell><Badge variant={a.status === "Upcoming" ? "default" : a.status === "Completed" ? "secondary" : "destructive"}>{a.status}</Badge></TableCell></TableRow>
        ))}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
