import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { SERVICES } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Gulab Devi Teaching Hospital" },
    { name: "description", content: "24/7 emergency, laboratory, blood bank, radiology, pharmacy, ICU and more." },
    { property: "og:title", content: "Healthcare Services" },
    { property: "og:description", content: "Comprehensive healthcare services." },
  ]}),
  component: () => (
    <PublicLayout>
      <PageHeader breadcrumb="What we offer" title="Healthcare Services" subtitle="Integrated services covering every step of your care journey." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-soft">
                <DepartmentIcon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});
