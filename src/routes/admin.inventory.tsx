import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ITEMS = [
  { name: "Surgical Gloves (Box)", stock: 420, capacity: 800, status: "OK" },
  { name: "N95 Masks", stock: 120, capacity: 500, status: "Low" },
  { name: "IV Fluids (500ml)", stock: 900, capacity: 1200, status: "OK" },
  { name: "Insulin Vials", stock: 40, capacity: 200, status: "Low" },
  { name: "Sutures (Assorted)", stock: 260, capacity: 400, status: "OK" },
  { name: "Oxygen Cylinders", stock: 18, capacity: 40, status: "Critical" },
];

export const Route = createFileRoute("/admin/inventory")({
  head: () => ({ meta: [{ title: "Inventory — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Inventory" subtitle="Medical supplies and consumables." />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Item</TableHead><TableHead>Stock</TableHead><TableHead>Level</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{ITEMS.map((i) => {
          const pct = Math.round((i.stock/i.capacity)*100);
          return (
            <TableRow key={i.name}>
              <TableCell className="font-medium">{i.name}</TableCell>
              <TableCell>{i.stock}/{i.capacity}</TableCell>
              <TableCell className="w-64"><Progress value={pct} /></TableCell>
              <TableCell><Badge variant={i.status === "OK" ? "secondary" : i.status === "Low" ? "outline" : "destructive"}>{i.status}</Badge></TableCell>
            </TableRow>
          );
        })}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
