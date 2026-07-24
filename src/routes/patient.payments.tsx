import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { INVOICES } from "@/lib/mock-data";
import { CreditCard } from "lucide-react";

export const Route = createFileRoute("/patient/payments")({
  head: () => ({ meta: [{ title: "Payments" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const paid = INVOICES.filter(i => i.status === "Paid");
    const outstanding = INVOICES.filter(i => i.status === "Outstanding").reduce((s,i)=>s+i.amount,0);
    return (
      <div>
        <DashPageHeader title="Payments" subtitle="Payment history, receipts and outstanding balances." />
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Total paid</div><div className="mt-2 font-display text-2xl font-bold text-primary">PKR {paid.reduce((s,i)=>s+i.amount,0).toLocaleString()}</div></CardContent></Card>
          <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Outstanding</div><div className="mt-2 font-display text-2xl font-bold text-destructive">PKR {outstanding.toLocaleString()}</div></CardContent></Card>
          <Card className="border-0 shadow-soft"><CardContent className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">Receipts</div><div className="mt-2 font-display text-2xl font-bold">{paid.length}</div></CardContent></Card>
        </div>
        <h2 className="mt-8 font-display text-lg font-semibold">Payment history</h2>
        <div className="mt-4 space-y-3">
          {paid.map((p) => (
            <Card key={p.id} className="border shadow-none"><CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><CreditCard className="h-4 w-4" /></div>
                <div><div className="font-medium">{p.desc}</div><div className="text-xs text-muted-foreground">{p.date} · {p.id}</div></div>
              </div>
              <div className="text-right"><div className="font-semibold">PKR {p.amount.toLocaleString()}</div><Badge variant="secondary" className="mt-1">Paid</Badge></div>
            </CardContent></Card>
          ))}
        </div>
      </div>
    );
  },
});
