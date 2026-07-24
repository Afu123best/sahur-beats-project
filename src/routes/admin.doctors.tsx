import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DOCTORS } from "@/lib/mock-data";
import { Plus, Star } from "lucide-react";

export const Route = createFileRoute("/admin/doctors")({
  head: () => ({ meta: [{ title: "Doctors — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Doctors" subtitle="Manage medical staff and schedules." action={<Button><Plus className="mr-1 h-4 w-4" />Add doctor</Button>} />
      <Card className="border-0 shadow-soft"><CardContent className="p-0"><Table>
        <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Department</TableHead><TableHead>Experience</TableHead><TableHead>Rating</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
        <TableBody>{DOCTORS.map((d) => (
          <TableRow key={d.id}><TableCell><div className="flex items-center gap-3"><img src={d.photo} className="h-9 w-9 rounded-full object-cover" /><div><div className="font-medium">{d.name}</div><div className="text-xs text-muted-foreground">{d.qualifications}</div></div></div></TableCell><TableCell>{d.specialization}</TableCell><TableCell>{d.experience} yrs</TableCell><TableCell><span className="inline-flex items-center gap-1"><Star className="h-3 w-3 fill-current text-primary" />{d.rating.toFixed(1)}</span></TableCell><TableCell><Badge variant="secondary">Active</Badge></TableCell></TableRow>
        ))}</TableBody>
      </Table></CardContent></Card>
    </div>
  ),
});
