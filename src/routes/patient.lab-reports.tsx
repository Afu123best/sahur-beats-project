import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LAB_REPORTS } from "@/lib/mock-data";
import { Download, Eye } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/lab-reports")({
  head: () => ({ meta: [{ title: "Lab Reports" }, { name: "robots", content: "noindex" }] }),
  component: LabReports,
});

const colors: Record<string, string> = {
  Completed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  Pending: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  Processing: "bg-primary/10 text-primary",
};

function LabReports() {
  return (
    <div>
      <DashPageHeader title="Lab Reports" subtitle="Download and preview your laboratory reports." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Report</TableHead><TableHead>Department</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {LAB_REPORTS.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-medium">{r.name}</TableCell>
                <TableCell>{r.department}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell><Badge className={colors[r.status]}>{r.status}</Badge></TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => toast("Preview (mock)")}><Eye className="mr-1 h-4 w-4" />Preview</Button>
                  <Button variant="ghost" size="sm" onClick={() => toast("Downloading PDF…")}><Download className="mr-1 h-4 w-4" />PDF</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
