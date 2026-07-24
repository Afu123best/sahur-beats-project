import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LAB_REPORTS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/laboratory")({
  head: () => ({ meta: [{ title: "Laboratory — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Laboratory" subtitle="Lab orders and turnaround times." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Test</TableHead><TableHead>Section</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{LAB_REPORTS.map((r) => (
          <TableRow key={r.id}><TableCell className="font-medium">{r.name}</TableCell><TableCell>{r.department}</TableCell><TableCell>{r.date}</TableCell><TableCell><Badge variant={r.status === "Completed" ? "secondary" : "outline"}>{r.status}</Badge></TableCell></TableRow>
        ))}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
