import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { DEPARTMENTS, DOCTORS, HOSPITAL } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Star } from "lucide-react";

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
  const doctors = DOCTORS.filter((d) => d.department === dep.slug);

  return (
    <PublicLayout>
      <section className="border-b bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          {dep.image && (
            <div className="mb-6 aspect-[21/9] overflow-hidden rounded-2xl">
              <img src={dep.image} alt={dep.name} className="h-full w-full object-cover" />
            </div>
          )}
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
          <div className="mt-6 flex gap-3">
            <Button asChild><Link to="/book-appointment">Book Appointment</Link></Button>
            <Button variant="outline" asChild><Link to="/contact">Contact Department</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Tabs defaultValue="overview">
          <TabsList className="flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <Card><CardContent className="p-6 prose prose-sm max-w-none text-foreground"><p>{dep.description}</p></CardContent></Card>
          </TabsContent>
          <TabsContent value="doctors" className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {doctors.length === 0 && <p className="text-muted-foreground">No doctors listed for this department yet.</p>}
            {doctors.map((d) => (
              <Card key={d.id} className="overflow-hidden border-0 shadow-soft">
                <div className="aspect-[4/3] bg-muted"><img src={d.photo} alt={d.name} className="h-full w-full object-cover" /></div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-semibold">{d.name}</h3>
                      <p className="text-sm text-muted-foreground">{d.qualifications}</p>
                    </div>
                    <Badge variant="secondary" className="gap-1"><Star className="h-3 w-3 fill-current" />{d.rating.toFixed(1)}</Badge>
                  </div>
                  <Button asChild className="mt-4 w-full" variant="outline"><Link to="/doctors/$id" params={{ id: d.id }}>View Profile</Link></Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <Card><CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" />{HOSPITAL.phone}</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />{dep.slug}@gulabdevi.org</div>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </section>
    </PublicLayout>
  );
}