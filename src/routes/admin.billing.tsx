import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { INVOICES } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/billing")({
  head: () => ({ meta: [{ title: "Billing — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Billing" subtitle="Invoices and revenue tracking." />
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Revenue (Month)</div><div className="mt-2 font-display text-2xl font-bold text-primary">PKR 28.4L</div></CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Outstanding</div><div className="mt-2 font-display text-2xl font-bold text-destructive">PKR 3.2L</div></CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Invoices</div><div className="mt-2 font-display text-2xl font-bold">1,204</div></CardContent></Card>
      </div>
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Desc</TableHead><TableHead>Date</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{INVOICES.map((i) => (
          <TableRow key={i.id}><TableCell className="font-mono text-xs">{i.id}</TableCell><TableCell>{i.desc}</TableCell><TableCell>{i.date}</TableCell><TableCell>PKR {i.amount.toLocaleString()}</TableCell><TableCell><Badge variant={i.status === "Paid" ? "secondary" : "destructive"}>{i.status}</Badge></TableCell></TableRow>
        ))}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
