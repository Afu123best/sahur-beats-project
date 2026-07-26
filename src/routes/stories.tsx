import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { STORIES } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const Route = createFileRoute("/stories")({
  head: () => ({ meta: [
    { title: "Stories of Gulab Devi — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Real stories of patients whose lives were changed by donor support." },
  ]}),
  component: Stories,
});

function Stories() {
  const [active, setActive] = useState<(typeof STORIES)[number] | null>(null);

  return (
    <PublicLayout>
      <PageHeader breadcrumb="Stories" title="Stories of Gulab Devi" subtitle="Real patients. Real recoveries. Made possible by your Zakat and Donations." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActive(s)}
              className="group overflow-hidden rounded-2xl border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.excerpt}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {active && (
            <>
              <DialogTitle className="font-display text-xl">{active.title}</DialogTitle>
              <div className="mt-2 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover object-top" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{active.fullText}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PublicLayout>
  );
}