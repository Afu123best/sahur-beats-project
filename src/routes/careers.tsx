import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { JOBS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, ShieldCheck, TrendingUp, MapPin, Briefcase } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BENEFITS = [
  { icon: Heart, title: "Health coverage", desc: "Comprehensive medical for you and dependents." },
  { icon: GraduationCap, title: "Continuous learning", desc: "Fully funded CMEs and fellowships." },
  { icon: ShieldCheck, title: "Job security", desc: "Structured career paths in a 90-year institution." },
  { icon: TrendingUp, title: "Growth", desc: "Leadership tracks and internal mobility." },
];

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Join Pakistan's leading teaching hospital. Clinical and non-clinical openings." },
    { property: "og:title", content: "Careers at Gulab Devi" },
    { property: "og:description", content: "Join Pakistan's leading teaching hospital." },
  ]}),
  component: Careers,
});

function Careers() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Work with us" title="Build your career, save lives." subtitle="Join 3,200+ colleagues delivering compassionate care across Punjab." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <Card key={b.title} className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><b.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold">Open positions</h2>
        <div className="mt-6 space-y-3">
          {JOBS.map((j) => (
            <Card key={j.id} className="border shadow-none transition-colors hover:border-primary/40">
              <CardContent className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="font-display text-lg font-semibold">{j.title}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{j.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{j.location}</span>
                    <Badge variant="secondary">{j.type}</Badge>
                    <span>Posted {new Date(j.posted).toLocaleDateString()}</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild><Button>Apply Now</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>Apply — {j.title}</DialogTitle></DialogHeader>
                    <form onSubmit={(e) => { e.preventDefault(); toast.success("Application submitted!"); }} className="space-y-3">
                      <div><Label>Full name</Label><Input required /></div>
                      <div><Label>Email</Label><Input type="email" required /></div>
                      <div><Label>Phone</Label><Input required /></div>
                      <div><Label>Cover letter</Label><Textarea rows={4} /></div>
                      <DialogFooter><Button type="submit">Submit</Button></DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
