import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Stethoscope, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTITUTIONS = [
  {
    icon: GraduationCap,
    title: "Gulab Devi Educational Complex",
    image: "/gdec.jpg", // TODO: add your image
    text: "Gulab Devi Educational Complex transforms clinical experience into world-class healthcare education. The complex offers programs in Allied Health Sciences, Physiotherapy, and postgraduate diplomas, providing students with hands-on training and opportunities to engage in pioneering research. By combining practical skills with scientific inquiry, it cultivates a new generation of healthcare professionals equipped to advance patient care and medical knowledge in Pakistan and beyond.",
    link: "https://gdec.edu.pk/",
  },
  {
    icon: Stethoscope,
    title: "Al-Aleem Medical College",
    image: "/aamc.jpg", // TODO: add your image
    text: "Al-Aleem Medical College (AAMC) is a cornerstone of Gulab Devi Teaching Hospital's commitment to advancing healthcare through education. Established in 2017 under the Gulab Devi Educational Complex, AAMC brings the hospital's vast clinical experience into the classroom, training future doctors in a high-volume, real-world environment. Through this integration, the hospital not only delivers patient care but also shapes the next generation of compassionate, skilled, and ethical physicians. Recognized by PMDC and affiliated with UHS, AAMC exemplifies Gulab Devi Hospital's dedication to combining service, learning, and innovation.",
    link: null,
  },
];

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Our Institutions — Gulab Devi Teaching Hospital" },
      { name: "description", content: "Gulab Devi Educational Complex and Al-Aleem Medical College — training the next generation of healthcare professionals." },
      { property: "og:title", content: "Our Institutions" },
      { property: "og:description", content: "Gulab Devi Educational Complex and Al-Aleem Medical College." },
    ]
  }),
  component: Education,
});

function Education() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Learn & discover" title="Our Institutions" subtitle="Transforming clinical experience into world-class healthcare education." />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10">
          {INSTITUTIONS.map((inst, i) => (
            <div key={inst.title} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl shadow-elegant">
                <img src={inst.image} alt={inst.title} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><inst.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-xl font-semibold">{inst.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{inst.text}</p>
                {inst.link && (
                  <Button asChild variant="link" className="mt-2 h-auto p-0 text-primary">
                    <a href={inst.link} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}