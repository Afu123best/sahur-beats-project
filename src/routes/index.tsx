import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { STATS, DEPARTMENTS, DOCTORS, SERVICES, TESTIMONIALS, NEWS, FAQS, HOSPITAL } from "@/lib/mock-data";
import { ArrowRight, CalendarCheck, Heart, Phone, Star, ShieldCheck, Award, Clock } from "lucide-react";
import hero from "@/assets/hero-hospital.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gulab Devi Teaching Hospital — Lahore's Trusted Care Since 1934" },
      { name: "description", content: "1,800+ beds, 380+ doctors and 42 departments delivering compassionate, world-class care in Lahore." },
      { property: "og:title", content: "Gulab Devi Teaching Hospital" },
      { property: "og:description", content: "Compassionate care. World-class expertise. Since 1934." },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredDeps = DEPARTMENTS.slice(0, 8);
  const spotlight = DOCTORS.slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Hospital lobby" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-5 gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted since 1934 · ISO Certified
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              World-class healthcare, <span className="text-gradient-brand">delivered with heart.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              For over nine decades, Gulab Devi Teaching Hospital has been Punjab's home for compassionate,
              advanced medical care — with 1,800+ beds, 42 specialties and 380+ expert consultants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/book-appointment"><CalendarCheck className="mr-2 h-4 w-4" />Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/donate"><Heart className="mr-2 h-4 w-4" />Donate Now</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> JCI-inspired standards</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24/7 Emergency</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 4.8 avg patient rating</div>
            </div>
          </div>

          <Card className="hidden lg:block border-primary/10 shadow-elegant">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" /> Emergency & Ambulance
              </div>
              <div className="font-display text-4xl font-bold">{HOSPITAL.emergency}</div>
              <p className="mt-1 text-sm text-muted-foreground">Available around the clock. Helpline: {HOSPITAL.phone}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link to="/services" className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Find</div>
                  <div className="mt-1 font-display font-semibold">Services</div>
                </Link>
                <Link to="/doctors" className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Meet</div>
                  <div className="mt-1 font-display font-semibold">Our Doctors</div>
                </Link>
                <Link to="/departments" className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore</div>
                  <div className="mt-1 font-display font-semibold">Departments</div>
                </Link>
                <Link to="/patient/dashboard" className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Access</div>
                  <div className="mt-1 font-display font-semibold">Patient Portal</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[color:var(--surface)] border-y">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Specialties</div>
            <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Featured Departments</h2>
          </div>
          <Button asChild variant="ghost" className="gap-1">
            <Link to="/departments">All 42 departments <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredDeps.map((d) => (
            <Link
              key={d.slug}
              to="/departments/$slug"
              params={{ slug: d.slug }}
              className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:gradient-brand group-hover:text-primary-foreground">
                <DepartmentIcon name={d.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{d.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.short}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DOCTOR SPOTLIGHT */}
      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Meet the team</div>
              <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Doctor Spotlight</h2>
            </div>
            <Button asChild variant="ghost" className="gap-1">
              <Link to="/doctors">View all doctors <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {spotlight.map((d) => (
              <Card key={d.id} className="overflow-hidden border-0 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={d.photo} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold truncate">{d.name}</h3>
                      <p className="text-sm text-muted-foreground">{d.specialization}</p>
                    </div>
                    <Badge variant="secondary" className="gap-1"><Star className="h-3 w-3 fill-current" />{d.rating.toFixed(1)}</Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{d.qualifications} · {d.experience} yrs</p>
                  <Button asChild className="mt-4 w-full" variant="outline">
                    <Link to="/book-appointment">Book Appointment</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Healthcare Services</div>
          <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Everything under one roof</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-2xl border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-primary">
                <DepartmentIcon name={s.icon} className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-semibold">{s.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Patient Stories</div>
            <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Care that touches lives</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">“{t.quote}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <Avatar><AvatarImage src={t.avatar} /><AvatarFallback>{t.name[0]}</AvatarFallback></Avatar>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Newsroom</div>
            <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Latest News</h2>
          </div>
          <Button asChild variant="ghost" className="gap-1"><Link to="/news">All news <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((n) => (
            <Link key={n.slug} to="/news" className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="rounded-full">{n.category}</Badge>
                <h3 className="mt-3 font-display font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl gradient-brand p-8 text-primary-foreground shadow-elegant md:p-12">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">24/7 Emergency</div>
              <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">In an emergency, every second counts.</h3>
              <p className="mt-3 max-w-xl opacity-90">Level-1 trauma centre with dedicated ambulance fleet and rapid triage.</p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a href={`tel:${HOSPITAL.emergency}`} className="font-display text-5xl font-bold">{HOSPITAL.emergency}</a>
              <Button variant="secondary" asChild size="lg" className="rounded-full">
                <Link to="/contact">Contact Hospital</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Support us</div>
            <h3 className="mt-2 font-display text-3xl font-bold">Your donation saves lives.</h3>
            <p className="mt-3 text-muted-foreground">Over 60% of our patients receive free or subsidised treatment. Every rupee counts.</p>
            <Button asChild className="mt-6" size="lg"><Link to="/donate">Donate Now</Link></Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[["60%","Free care"],["1934","Founded"],["4.8★","Patient rating"]].map(([k,v]) => (
              <div key={k} className="rounded-2xl bg-[color:var(--surface)] p-5 text-center">
                <div className="font-display text-xl font-bold text-primary">{k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</div>
          <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border bg-card px-4">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PublicLayout>
  );
}
