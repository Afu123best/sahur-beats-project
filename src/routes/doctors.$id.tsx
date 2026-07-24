import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { DOCTORS, DEPARTMENTS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, Languages, GraduationCap, Clock, Award } from "lucide-react";

export const Route = createFileRoute("/doctors/$id")({
  loader: ({ params }) => {
    const doc = DOCTORS.find((d) => d.id === params.id);
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.doc.name} — ${loaderData.doc.specialization}` },
    { name: "description", content: loaderData.doc.bio },
    { property: "og:title", content: loaderData.doc.name },
    { property: "og:description", content: loaderData.doc.bio },
    { property: "og:image", content: loaderData.doc.photo },
    { name: "twitter:image", content: loaderData.doc.photo },
  ] : [{ title: "Doctor not found" }, { name: "robots", content: "noindex" }] }),
  component: DoctorProfile,
});

function DoctorProfile() {
  const { doc } = Route.useLoaderData();
  const dep = DEPARTMENTS.find((d) => d.slug === doc.department);
  return (
    <PublicLayout>
      <section className="border-b bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[280px_1fr] md:items-center">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-elegant">
            <img src={doc.photo} alt={doc.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground"><Link to="/doctors" className="hover:text-primary">Doctors</Link> / {doc.name}</div>
            <h1 className="mt-2 font-display text-4xl font-bold">{doc.name}</h1>
            <p className="mt-1 text-primary font-medium">{doc.specialization}</p>
            <p className="mt-1 text-sm text-muted-foreground">{doc.qualifications}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1"><Star className="h-3 w-3 fill-current" />{doc.rating.toFixed(1)} ({doc.reviews} reviews)</Badge>
              <Badge variant="secondary" className="gap-1"><Clock className="h-3 w-3" />{doc.experience} years experience</Badge>
              <Badge variant="secondary" className="gap-1"><Languages className="h-3 w-3" />{doc.languages.join(", ")}</Badge>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild><Link to="/book-appointment">Book Appointment</Link></Button>
              {dep && <Button variant="outline" asChild><Link to="/departments/$slug" params={{ slug: dep.slug }}>Department: {dep.name}</Link></Button>}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Tabs defaultValue="bio">
          <TabsList>
            <TabsTrigger value="bio">Biography</TabsTrigger>
            <TabsTrigger value="edu">Education</TabsTrigger>
            <TabsTrigger value="exp">Experience</TabsTrigger>
            <TabsTrigger value="hours">Hours</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="bio"><Card><CardContent className="p-6 text-muted-foreground">{doc.bio}</CardContent></Card></TabsContent>
          <TabsContent value="edu"><Card><CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-primary" /> King Edward Medical University — MBBS</div>
            <div className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-primary" /> CPSP — FCPS ({doc.specialization})</div>
            <div className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-primary" /> Fellowship — Aga Khan University Hospital</div>
          </CardContent></Card></TabsContent>
          <TabsContent value="exp"><Card><CardContent className="p-6 text-muted-foreground">Senior Consultant, Gulab Devi Teaching Hospital (2015–present). Previously at Mayo Hospital, Lahore and Shaukat Khanum.</CardContent></Card></TabsContent>
          <TabsContent value="hours"><Card><CardContent className="p-6"><div className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" />{doc.hours}</div></CardContent></Card></TabsContent>
          <TabsContent value="awards"><Card><CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3"><Award className="h-4 w-4 text-primary" />Excellence in Patient Care — 2024</div>
            <div className="flex items-center gap-3"><Award className="h-4 w-4 text-primary" />Best Teacher Award — 2022</div>
          </CardContent></Card></TabsContent>
          <TabsContent value="reviews"><div className="grid gap-4 md:grid-cols-2">
            {[1,2,3,4].map((i) => (
              <Card key={i}><CardContent className="p-5">
                <div className="flex gap-0.5 text-primary">{[...Array(5)].map((_,k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</div>
                <p className="mt-2 text-sm text-muted-foreground">“Very attentive, explained everything clearly. Highly recommended.”</p>
                <div className="mt-3 text-xs text-muted-foreground">— Patient · verified</div>
              </CardContent></Card>
            ))}
          </div></TabsContent>
        </Tabs>
      </section>
    </PublicLayout>
  );
}
