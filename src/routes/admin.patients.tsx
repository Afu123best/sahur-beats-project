import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const PATIENTS = Array.from({ length: 12 }, (_, i) => ({
  id: `P-${1000 + i}`,
  name: ["Sana Ahmed","Imran Khan","Fatima Butt","Ali Raza","Ayesha Malik","Bilal Chaudhry","Nadia Farooq","Omar Siddiqui","Kiran Butt","Zara Abbas","Hamza Iqbal","Rabia Nawaz"][i],
  age: 22 + i * 3,
  gender: i % 2 ? "M" : "F",
  phone: `+92 300 12345${(10+i)%99}`,
  lastVisit: `2026-07-${20 - i}`,
  status: ["Active", "Discharged", "Admitted"][i % 3],
}));

export const Route = createFileRoute("/admin/patients")({
  head: () => ({ meta: [{ title: "Patients — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Patients" subtitle="Registered patient directory." action={<Button><Plus className="mr-1 h-4 w-4" />Add patient</Button>} />
      <Card className="border-0 shadow-soft"><CardContent className="p-4">
        <div className="relative mb-4"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search patients…" className="pl-9" /></div>
        <Table><TableHeader><TableRow><TableHead>MR#</TableHead><TableHead>Name</TableHead><TableHead>Age</TableHead><TableHead>Gender</TableHead><TableHead>Phone</TableHead><TableHead>Last visit</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>
          {PATIENTS.map((p) => (
            <TableRow key={p.id}><TableCell className="font-mono text-xs">{p.id}</TableCell><TableCell className="font-medium">{p.name}</TableCell><TableCell>{p.age}</TableCell><TableCell>{p.gender}</TableCell><TableCell>{p.phone}</TableCell><TableCell>{p.lastVisit}</TableCell><TableCell><Badge variant={p.status === "Admitted" ? "default" : p.status === "Discharged" ? "secondary" : "outline"}>{p.status}</Badge></TableCell></TableRow>
          ))}
        </TableBody></Table>
      </CardContent></Card>
    </div>
  ),
});
