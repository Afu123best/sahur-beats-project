import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INVOICES } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/invoices")({
  head: () => ({ meta: [{ title: "Invoices" }, { name: "robots", content: "noindex" }] }),
  component: Invoices,
});

function Invoices() {
  return (
    <div>
      <DashPageHeader title="Invoices" subtitle="All hospital bills and receipts." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow>
          <TableHead>Invoice #</TableHead><TableHead>Description</TableHead><TableHead>Date</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {INVOICES.map((i) => (
            <TableRow key={i.id}>
              <TableCell className="font-mono text-xs">{i.id}</TableCell>
              <TableCell>{i.desc}</TableCell>
              <TableCell>{i.date}</TableCell>
              <TableCell className="font-medium">PKR {i.amount.toLocaleString()}</TableCell>
              <TableCell><Badge variant={i.status === "Paid" ? "secondary" : "destructive"}>{i.status}</Badge></TableCell>
              <TableCell className="text-right">
                {i.status === "Outstanding" ? <Button size="sm" onClick={() => toast.success("Payment initiated")}>Pay Now</Button> : <Button size="sm" variant="ghost" onClick={() => toast("Downloading receipt…")}>Receipt</Button>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></CardContent></Card>
    </div>
  );
}
