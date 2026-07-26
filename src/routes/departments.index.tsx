import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { DEPARTMENTS } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/departments/")({
  head: () => ({ meta: [
    { title: "Departments — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Explore 25+ specialised medical departments — from Cardiology to Urology." },
    { property: "og:title", content: "Departments" },
    { property: "og:description", content: "Explore our clinical specialties." },
  ]}),
  component: Departments,
});

function Departments() {
  const [q, setQ] = useState("");
  const filtered = DEPARTMENTS.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Care areas" title="Our Departments" subtitle="25+ clinical specialties, one integrated hospital." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative mx-auto mb-10 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search departments…" className="h-11 pl-9" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((d) => (
            <Link key={d.slug} to="/departments/$slug" params={{ slug: d.slug }} className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              {d.image && (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={d.image} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:gradient-brand group-hover:text-primary-foreground">
                  <DepartmentIcon name={d.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.short}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">Learn more <ArrowRight className="ml-1 h-4 w-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}