import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Siren, Clock, Navigation } from "lucide-react";
import { HOSPITAL, DEPARTMENTS } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Reach us 24/7: emergency, departments, general enquiries and directions." },
    { property: "og:title", content: "Contact Gulab Devi" },
    { property: "og:description", content: "Reach our team 24/7." },
  ]}),
  component: Contact,
});

const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/place/Gulab+Devi+Teaching+Hospital/@31.483076,74.3397872,17z";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=Gulab+Devi+Teaching+Hospital,+Lahore&output=embed";

function Contact() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Get in touch" title="Contact us" subtitle="We're here to help — 24 hours a day, every day of the year." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-0 shadow-soft"><CardContent className="p-8">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We typically respond within one business day.</p>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent. We'll be in touch shortly."); }} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div><Label>First name</Label><Input required /></div>
              <div><Label>Last name</Label><Input required /></div>
              <div><Label>Email</Label><Input type="email" required /></div>
              <div><Label>Phone</Label><Input /></div>
              <div className="sm:col-span-2"><Label>Subject</Label><Input required /></div>
              <div className="sm:col-span-2"><Label>Message</Label><Textarea rows={5} required /></div>
              <div className="sm:col-span-2"><Button type="submit" className="w-full">Send message</Button></div>
            </form>
          </CardContent></Card>

          <div className="space-y-4">
            <Card className="border-0 shadow-soft"><CardContent className="p-6 space-y-3">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-semibold">Address</div><div className="text-sm text-muted-foreground">{HOSPITAL.address}</div></div></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-semibold">Helpline</div><div className="text-sm text-muted-foreground">{HOSPITAL.phone}</div></div></div>
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground">{HOSPITAL.email}</div></div></div>
              <div className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-semibold">OPD Hours</div><div className="text-sm text-muted-foreground">Mon–Sat, 8:00 AM – 2:00 PM</div></div></div>
            </CardContent></Card>

            <Card className="border-0 gradient-brand text-primary-foreground shadow-elegant"><CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm opacity-90"><Siren className="h-4 w-4" /> Emergency & Ambulance</div>
              <div className="mt-1 font-display text-4xl font-bold">{HOSPITAL.emergency}</div>
              <p className="mt-1 text-sm opacity-90">Available 24/7</p>
            </CardContent></Card>

            <div className="overflow-hidden rounded-2xl border shadow-soft">
              <div className="aspect-[16/10]">
                <iframe
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  className="h-full w-full border-0"
                  title="Gulab Devi Teaching Hospital location"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-card p-3 text-sm font-medium text-primary hover:underline"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold">Department contacts</h2>
        <p className="mt-1 text-sm text-muted-foreground">Reach a specific department directly.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {DEPARTMENTS.slice(0, 9).map((d) => (
            <div key={d.slug} className="rounded-xl border bg-card p-4 transition-colors hover:border-primary/40">
              <div className="font-semibold">{d.name}</div>
              <div className="text-xs text-muted-foreground">{d.slug}@gulabdevi.org · Ext. {100 + DEPARTMENTS.indexOf(d)}</div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}