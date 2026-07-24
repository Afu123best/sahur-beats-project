import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { DOCTORS, DEPARTMENTS } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, Languages } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/doctors/")({
  head: () => ({ meta: [
    { title: "Doctors — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Meet 380+ expert consultants across 42 medical specialties." },
    { property: "og:title", content: "Our Doctors" },
    { property: "og:description", content: "Meet our expert consultants." },
  ]}),
  component: Doctors,
});

function Doctors() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState<string>("all");

  const filtered = DOCTORS.filter((d) =>
    (dept === "all" || d.department === dept) &&
    (d.name.toLowerCase().includes(q.toLowerCase()) || d.specialization.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <PublicLayout>
      <PageHeader breadcrumb="Care team" title="Find a Doctor" subtitle="Search and connect with our expert consultants." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_240px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or specialty…" className="h-11 pl-9" />
          </div>
          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="h-11"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {DEPARTMENTS.map((d) => <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((d) => (
            <Card key={d.id} className="overflow-hidden border-0 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={d.photo} alt={d.name} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link to="/doctors/$id" params={{ id: d.id }} className="font-display font-semibold hover:text-primary">{d.name}</Link>
                    <p className="truncate text-sm text-muted-foreground">{d.specialization}</p>
                  </div>
                  <Badge variant="secondary" className="gap-1"><Star className="h-3 w-3 fill-current" />{d.rating.toFixed(1)}</Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{d.qualifications} · {d.experience} yrs</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground"><Languages className="h-3 w-3" />{d.languages.join(", ")}</div>
                <Button asChild className="mt-4 w-full" size="sm"><Link to="/book-appointment">Book Appointment</Link></Button>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && <div className="col-span-full py-16 text-center text-muted-foreground">No doctors match your filters.</div>}
        </div>
      </section>
    </PublicLayout>
  );
}
