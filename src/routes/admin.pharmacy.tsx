import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DRUGS = [
  { name: "Atorvastatin 20mg", stock: 1240, form: "Tablet" },
  { name: "Metformin 500mg", stock: 3200, form: "Tablet" },
  { name: "Amoxicillin 500mg", stock: 860, form: "Capsule" },
  { name: "Salbutamol Inhaler", stock: 120, form: "Inhaler" },
  { name: "Paracetamol 500mg", stock: 5400, form: "Tablet" },
  { name: "Insulin Glargine", stock: 60, form: "Injection" },
];

export const Route = createFileRoute("/admin/pharmacy")({
  head: () => ({ meta: [{ title: "Pharmacy — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Pharmacy" subtitle="In-house drug inventory." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Drug</TableHead><TableHead>Form</TableHead><TableHead>Stock</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{DRUGS.map((d) => (
          <TableRow key={d.name}><TableCell className="font-medium">{d.name}</TableCell><TableCell>{d.form}</TableCell><TableCell>{d.stock}</TableCell><TableCell><Badge variant={d.stock > 200 ? "secondary" : "destructive"}>{d.stock > 200 ? "In stock" : "Low"}</Badge></TableCell></TableRow>
        ))}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
