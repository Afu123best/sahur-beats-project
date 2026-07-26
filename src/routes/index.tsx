import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { HOSPITAL } from "@/lib/mock-data";
import { ArrowRight, Heart, Quote } from "lucide-react";

const IMG = {
  hero: "https://gulabdevi.org/wp-content/uploads/2026/01/history_plat-1024x743.jpg",
  heroBg: "https://gulabdevi.org/wp-content/uploads/2025/12/Cath-Lab-1024x682.jpg",
  honor: "https://gulabdevi.org/wp-content/uploads/2026/01/history_plat-1024x743.jpg",
  cathLab: "https://gulabdevi.org/wp-content/uploads/2025/12/Cath-Lab-1.jpg",
  cardiacSurgery: "https://gulabdevi.org/wp-content/uploads/2026/01/CS-OT-1-1.jpg",
  pulmonology: "https://gulabdevi.org/wp-content/uploads/2026/01/ameer-din.jpg",
  thoracic: "https://gulabdevi.org/wp-content/uploads/2026/01/building-5.jpg",
  cathLabBanner: "https://gulabdevi.org/wp-content/uploads/2025/12/Cath-Lab-1024x682.jpg",
  urology: "https://gulabdevi.org/wp-content/uploads/2026/01/urology-dept.jpg",
  news1: "https://gulabdevi.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-19-at-11.31.51-AM-4-768x512.jpeg",
  news2: "https://gulabdevi.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-05-at-11.51.13-AM-768x512.jpeg",
  news3: "https://gulabdevi.org/wp-content/uploads/2026/05/IMG_9973-768x509.jpg",
};

const IMPACT = [
  { k: 1500, s: "", label: "Bed Strength" },
  { k: 396000, s: "+", label: "Bed Occupancy" },
  { k: 417000, s: "+", label: "Outdoor Patients" },
  { k: 77000, s: "+", label: "Emergency Treatments" },
  { k: 199000, s: "+", label: "Radiology Procedures" },
  { k: 94000, s: "+", label: "Cardiology Procedures" },
  { k: 2000, s: "+", label: "Cath Lab Procedures" },
  { k: 99000, s: "+", label: "Surgeries & Procedures" },
  { k: 578000, s: "+", label: "Laboratory Tests" },
];

const DEPTS = [
  { name: "Cardiology", img: IMG.cathLab, slug: "cardiology" },
  { name: "Cardiac Surgery", img: IMG.cardiacSurgery, slug: "cardiac-surgery" },
  { name: "Pulmonology", img: IMG.pulmonology, slug: "pulmonology" },
  { name: "Thoracic Surgery", img: IMG.thoracic, slug: "cardiology" },
];

const NEWS_ITEMS = [
  { img: IMG.news1, title: "Hypertension Awareness Walk Held at Gulab Devi Teaching Hospital to Promote Early Detection and Preventive Care" },
  { img: IMG.news2, title: "World Asthma Day Awareness Walk Held to Promote Accessible Respiratory Care" },
  { img: IMG.news3, title: "Paediatric Department Conducts School Medical Camp at Gulab Devi School" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gulab Devi Teaching Hospital — Give Your Zakat & Donations to Save Lives" },
      { name: "description", content: "Non-profit teaching hospital in Lahore. Your Zakat and donations fund free treatment for thousands." },
      { property: "og:title", content: "Gulab Devi Teaching Hospital" },
      { property: "og:description", content: "Give your Zakat, Sadqah and donations to help save lives." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.heroBg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.heroBg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={IMG.heroBg} alt="Gulab Devi Teaching Hospital" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{HOSPITAL.name}</div>
          <h1 className="mt-6 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Non-Profit Hospital
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">
            For over 90 years, treating the deserving and non-affording — supported entirely by your Zakat, Sadqah and Donations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-none bg-red-600 px-10 text-base font-semibold uppercase tracking-wider hover:bg-red-700">
              <Link to="/donate"><Heart className="mr-2 h-4 w-4" />Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-white bg-transparent px-10 text-base font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-primary">
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DONATION CALL BAND */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-red-600 md:text-4xl">
            Give Your Zakat, Sadqah and Donations to Gulab Devi Teaching Hospital — Help Save Lives
          </h2>
          <p className="mt-6 text-lg font-semibold text-foreground">
            Your Zakat and Donations enable us to provide free and highly subsidised treatment to deserving and non-affording patients.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            At Gulab Devi Hospital, care continues every day for patients who arrive with trust in the institution and hope for recovery. As a non-profit, charity-based hospital, a significant share of our patients rely entirely on your Zakat and Donations. These contributions help ensure patients receive treatment, medicines, and support with dignity and professionalism.
          </p>
          <Button asChild size="lg" className="mt-10 rounded-none bg-red-600 px-12 text-base font-semibold uppercase tracking-wider hover:bg-red-700">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>

      {/* OUR HONOR */}
      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Honor</div>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Quote className="h-10 w-10 text-primary/40" />
              <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
                "I visited the Gulab Devi Hospital, which is now tending to the refugees on 6th November, 1947. Those who are in charge of it viz doctors, nurses, and others, are doing excellent work and deserve our thanks for their selfless devotion to this humanitarian work."
              </blockquote>
              <div className="mt-6 border-l-4 border-primary pl-4">
                <div className="font-display text-lg font-bold">Quaid-e-Azam Muhammad Ali Jinnah</div>
                <div className="text-sm text-muted-foreground">6/11/47</div>
              </div>
              <Button asChild variant="outline" className="mt-8 rounded-none">
                <Link to="/about">Our History <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-elegant">
              <img src={IMG.honor} alt="Quaid-e-Azam visit plaque" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">2024–25</div>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase md:text-4xl">Our Impact</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {IMPACT.map((i) => (
              <div key={i.label} className="border-l-2 border-white/30 pl-6">
                <div className="font-display text-4xl font-extrabold md:text-5xl">
                  <AnimatedCounter value={i.k} suffix={i.s} />
                </div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-widest opacity-90">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DEPARTMENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Our Departments</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEPTS.map((d) => (
            <Link key={d.name} to="/departments/$slug" params={{ slug: d.slug }} className="group block overflow-hidden rounded-lg shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="bg-primary p-4 text-center text-primary-foreground">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-none">
            <Link to="/departments">View All Departments <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={IMG.cathLabBanner} alt="Cath lab" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-relaxed opacity-95">
            Gulab Devi Teaching Hospital offers comprehensive medical, surgical, and critical care services across multiple specialized departments. From emergency care and advanced surgeries to diagnostic, pediatric, and intensive care services, our teams are committed to delivering high-quality, patient-centered treatment.
          </p>
          <p className="mt-4 opacity-90">Explore each department to learn more about the full range of services available.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-none">
            <Link to="/departments">See More</Link>
          </Button>
        </div>
      </section>

      {/* NEWS & EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Newsroom</div>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase md:text-4xl">Latest News</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((n) => (
            <Link key={n.title} to="/news" className="group block overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary">{n.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORIES / CLOSING DONATE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={IMG.urology} alt="Urology department" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <Quote className="mx-auto h-10 w-10 text-white/50" />
          <blockquote className="mt-6 font-display text-2xl italic leading-relaxed md:text-3xl">
            "My children don't need my money, why shouldn't it be used for a more noble cause?"
          </blockquote>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="rounded-none border-white bg-transparent px-10 text-white hover:bg-white hover:text-primary">
              <Link to="/stories">View All Stories</Link>
            </Button>
            <Button asChild size="lg" className="rounded-none bg-red-600 px-10 hover:bg-red-700">
              <Link to="/donate"><Heart className="mr-2 h-4 w-4" />Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
