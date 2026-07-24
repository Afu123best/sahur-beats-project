import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { NEWS } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [
    { title: "News & Media — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Latest announcements, research and community outreach news." },
    { property: "og:title", content: "News & Media" },
    { property: "og:description", content: "Latest news and announcements." },
  ]}),
  component: News,
});

function News() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const cats = useMemo(() => ["All", ...Array.from(new Set(NEWS.map((n) => n.category)))], []);
  const filtered = NEWS.filter((n) => (cat === "All" || n.category === cat) && n.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <PublicLayout>
      <PageHeader breadcrumb="Newsroom" title="News & Media" subtitle="Announcements, research updates and community stories." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search news…" className="h-11 pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <Button key={c} variant={c === cat ? "default" : "outline"} size="sm" onClick={() => setCat(c)} className="rounded-full">{c}</Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((n) => (
            <article key={n.slug} className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="rounded-full">{n.category}</Badge>
                  <span>·</span>
                  <time>{new Date(n.date).toLocaleDateString()}</time>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <Button variant="link" className="mt-2 h-auto p-0 text-primary">Read article →</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
