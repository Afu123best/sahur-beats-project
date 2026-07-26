import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Quote } from "lucide-react";

const HERO_IMG = "/slab-image.jpg";
const JINNAH_VISIT_IMG = "/quote-of-ali-jinnah.jpg";

export const Route = createFileRoute("/about_/our-history")({
  head: () => ({
    meta: [
      { title: "Our History — Gulab Devi Teaching Hospital" },
      { name: "description", content: "From a 50-bed TB sanatorium in 1934 to South Asia's largest chest and cardiac hospital." },
    ]
  }),
  component: OurHistory,
});

const TIMELINE = [
  { year: "1927", title: "The Trust is established", desc: "Lala Lajpat Rai founds the Gulab Devi Trust in memory of his mother, Gulab Devi, who died of tuberculosis in Lahore. The hospital is reportedly built on the very spot where she passed away." },
  { year: "1930", title: "Land acquired", desc: "The Trust purchases 40 acres of land, and the Punjab Government grants an additional 10 acres to support construction." },
  { year: "1931–1934", title: "Construction & opening", desc: "Construction begins in 1931. On 17 July 1934, the hospital is formally inaugurated by Mahatma Gandhi, opening its doors to tuberculosis patients with an initial capacity of 50 beds." },
  { year: "1947", title: "Refuge during Partition", desc: "Located near Walton Station, the hospital treats wounded and exhausted refugees arriving from across the newly-drawn border, during one of the most difficult chapters in the subcontinent's history." },
  { year: "6 Nov 1947", title: "A visit from the Quaid", desc: "Muhammad Ali Jinnah, accompanied by Fatima Jinnah, visits the hospital to inquire personally about the condition of the migrants being treated — a visit still honored at the hospital today." },
  { year: "1948", title: "A new Managing Committee", desc: "Following the migration of the original trustees, the Government of Pakistan invites Begum Raana Liaquat Ali Khan, Syed Maratab Ali, Professor Dr. Amiruddin and other philanthropists to become acting trustees, forming a Managing Committee chaired by Begum Raana." },
  { year: "1958–1961", title: "Continuity of leadership", desc: "Syed Maratab Ali is unanimously elected Chairman of the Managing Committee in 1958. Upon his passing in 1961, Syed Wajid Ali is elected Chairman for Life." },
  { year: "1984", title: "The Cardiac Wing opens", desc: "Recognising that many chest patients also presented with cardiac co-morbidities, the hospital establishes a dedicated Cardiac Wing — now equipped for advanced diagnostic and therapeutic cardiac procedures." },
  { year: "2004", title: "Postgraduate Medical Institute", desc: "The Gulab Devi Postgraduate Medical Institute is established and affiliated with the University of Health Sciences, Lahore, launching Diploma programs in Cardiology and in Tuberculosis & Chest Diseases the following year." },
  { year: "2013–2014", title: "A new generation of leadership", desc: "Mrs. Manzoor Ellahi is elected Chairperson of the Managing Committee in June 2013. Following her resignation, Syed Shahid Ali is unanimously elected Chairman in June 2014." },
  { year: "2017", title: "Al-Aleem Medical College", desc: "Established under the Gulab Devi Educational Complex, Al-Aleem Medical College brings the hospital's decades of clinical experience directly into undergraduate medical education." },
  { year: "Today", title: "South Asia's largest chest hospital", desc: "With 1,500 beds and over 25 specialized departments, Gulab Devi Teaching Hospital continues to provide free and subsidised care to thousands of patients, sustained by Zakat, Sadqah and public donations." },
];

function OurHistory() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Gulab Devi Teaching Hospital history" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">About Us</div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Our History</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 md:text-lg">
            Nearly a century of grief transformed into healing, one milestone at a time.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          What began as one man's tribute to his mother has grown into South Asia's largest chest and cardiac hospital — a living record of compassion, resilience, and service that spans nearly a century.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="relative border-l-2 border-primary/20 pl-8">
          {TIMELINE.map((t) => (
            <div key={t.title} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-primary" />
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.year}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* JINNAH VISIT SPOTLIGHT */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-muted shadow-elegant">
            {JINNAH_VISIT_IMG ? (
              <img src={JINNAH_VISIT_IMG} alt="Muhammad Ali Jinnah's visit to Gulab Devi Hospital, 1947" className="h-full w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center text-sm text-muted-foreground">
                Image placeholder — add JINNAH_VISIT_IMG
              </div>
            )}
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">A Visit From The Quaid</div>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">6th November, 1947</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              In the chaos and grief of Partition, as trains of wounded and exhausted refugees arrived at nearby Walton Station, Gulab Devi Hospital opened its wards to the injured — men, women and children who had survived one of the largest mass migrations in human history.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              On 6th November 1947, Muhammad Ali Jinnah — Pakistan's Father of the Nation, sworn in as Governor-General barely three months earlier — visited the hospital personally, accompanied by his sister, Fatima Jinnah. Amid the responsibilities of building a new nation, he came to see firsthand how the wounded were being cared for.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Moved by what he witnessed, Jinnah put his thoughts to paper — a short note of gratitude to the hospital's doctors and nurses that has since become one of the most treasured artifacts in the hospital's history, still referenced and displayed to this day.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[color:var(--surface)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-8 w-8 text-primary/40" />
          <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
            "I visited the Gulab Devi Hospital, which is now tending to the refugees on 6th November, 1947. Those who are in charge of it — doctors, nurses, and others — are doing excellent work and deserve our thanks for their selfless devotion to this humanitarian work."
          </blockquote>
          <div className="mt-6 font-display font-semibold">Fatima Jinnah</div>
          <div className="text-sm text-muted-foreground">November 6, 1947</div>
        </div>
      </section>
    </PublicLayout>
  );
}