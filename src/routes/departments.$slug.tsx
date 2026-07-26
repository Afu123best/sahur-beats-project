import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { DEPARTMENTS, HOSPITAL } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dep = DEPARTMENTS.find((d) => d.slug === params.slug);
    if (!dep) throw notFound();
    return { dep };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.dep.name} — Gulab Devi Teaching Hospital` },
    { name: "description", content: loaderData.dep.description },
    { property: "og:title", content: `${loaderData.dep.name} Department` },
    { property: "og:description", content: loaderData.dep.description },
  ] : [{ title: "Department not found" }, { name: "robots", content: "noindex" }] }),
  component: DepartmentDetail,
});

function DepartmentDetail() {
  const { dep } = Route.useLoaderData();

  return (
    <PublicLayout>
      {/* HERO IMAGE */}
      {dep.image && (
        <div className="relative aspect-[21/9] max-h-[420px] w-full overflow-hidden">
          <img src={dep.image} alt={dep.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-8">
            <div className="text-xs text-white/70"><Link to="/departments" className="hover:underline">Departments</Link> / {dep.name}</div>
            <div className="mt-2 flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground shadow-soft">
                <DepartmentIcon name={dep.icon} className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">{dep.name}</h1>
                <p className="text-white/90">{dep.short}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!dep.image && (
        <section className="border-b bg-[color:var(--surface)]">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="text-xs text-muted-foreground"><Link to="/departments" className="hover:text-primary">Departments</Link> / {dep.name}</div>
            <div className="mt-3 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-primary-foreground shadow-soft">
                <DepartmentIcon name={dep.icon} className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold md:text-4xl">{dep.name}</h1>
                <p className="text-muted-foreground">{dep.short}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link to="/book-appointment">Book Appointment</Link></Button>
          <Button variant="outline" asChild><Link to="/contact">Contact Department</Link></Button>
        </div>

        {/* ABOUT */}
        <h2 className="mt-10 font-display text-xl font-bold">About the Department</h2>
        <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">{dep.description}</p>

        {/* STATISTICS */}
        {dep.stats && dep.stats.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-bold">Department Statistics</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dep.stats.map((s) => (
                <Card key={s.label} className="border-0 text-center shadow-soft">
                  <CardContent className="p-6">
                    <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* HEAD(S) OF DEPARTMENT */}
        {dep.heads && dep.heads.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-bold">{dep.heads.length > 1 ? "Department Leadership" : "Head of Department"}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {dep.heads.map((h, i) => (
                <Card key={h.name + i} className="border-0 shadow-soft">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Avatar className="h-16 w-16">
                      {h.photo && <AvatarImage src={h.photo} />}
                      <AvatarFallback>{h.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-display font-semibold">{h.name}</div>
                      {h.qualifications && <div className="text-sm text-muted-foreground">{h.qualifications}</div>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* CONSULTANTS */}
        {dep.consultants && dep.consultants.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-bold">Our Consultants</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {dep.consultants.map((c, i) => (
                <Card key={c.name + i} className="border-0 text-center shadow-soft">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto h-20 w-20">
                      {c.photo && <AvatarImage src={c.photo} />}
                      <AvatarFallback>{c.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="mt-3 font-display font-semibold">{c.name}</div>
                    {c.qualifications && <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.qualifications}</div>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* SERVICES */}
        {dep.services && dep.services.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-bold">Services</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dep.services.map((s) => (
                <div key={s} className="rounded-xl border bg-card p-4 text-sm">{s}</div>
              ))}
            </div>
          </>
        )}

        {/* CONTACT */}
        <h2 className="mt-12 font-display text-xl font-bold">Contact</h2>
        <Card className="mt-5 max-w-md border-0 shadow-soft">
          <CardContent className="space-y-3 p-6">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" />{HOSPITAL.phone}</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />{dep.slug}@gulabdevi.org</div>
          </CardContent>
        </Card>
      </section>
    </PublicLayout>
  );
}