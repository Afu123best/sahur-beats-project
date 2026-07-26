import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Users, Building2, Landmark, Wallet, HandCoins } from "lucide-react";

const IMPACT = [
  { icon: Heart, k: "15M+", v: "Patients treated" },
  { icon: HandHeart, k: "90%", v: "Free care provided" },
  { icon: Users, k: "1,000+", v: "Staff supported" },
  { icon: Building2, k: "25", v: "Departments funded" },
];


export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Gulab Devi Teaching Hospital" },
      { name: "description", content: "Your donation funds subsidised treatment for thousands of families each year." },
      { property: "og:title", content: "Donate to Gulab Devi" },
      { property: "og:description", content: "Support life-saving healthcare." },
    ]
  }),
  component: Donate,
});

function Donate() {
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Zakat · Sadqah · Donations" title="Your gift saves lives." subtitle="Gulab Devi is a non-profit hospital. Your Zakat and Donations enable free and highly subsidised treatment for deserving patients." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          {[
            "https://gulabdevi.org/wp-content/uploads/2025/12/Cath-Lab-1.jpg",
            "https://gulabdevi.org/wp-content/uploads/2026/01/CS-OT-1-1.jpg",
            "https://gulabdevi.org/wp-content/uploads/2026/01/ameer-din.jpg",
          ].map((src) => (
            <div key={src} className="aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
              <img src={src} alt="Hospital care" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((i) => (
            <Card key={i.v} className="border-0 shadow-soft"><CardContent className="p-6 text-center">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><i.icon className="h-5 w-5" /></div>
              <div className="mt-4 font-display text-2xl font-bold text-primary">{i.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.v}</div>
            </CardContent></Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-0 shadow-elegant"><CardContent className="p-8">
            <h2 className="font-display text-2xl font-bold">Bank Account Details</h2>
            <p className="mt-1 text-sm text-muted-foreground">MCB Gulab Devi Hospital Branch, Ferozpur Road Lahore</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-5">
                <div className="flex items-center gap-2">
                  <img src="/mcb-logo-Photoroom.png" alt="MCB Bank" className="h-8 w-auto object-contain" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Zakat Account No.</div>
                </div>
                <div className="mt-2 font-display text-lg font-semibold">01008-0101-0002144</div>
              </div>
              <div className="rounded-xl border p-5">
                <div className="flex items-center gap-2">
                  <img src="/mcb-logo-Photoroom.png" alt="MCB Bank" className="h-8 w-auto object-contain" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Donation Account No.</div>
                </div>
                <div className="mt-2 font-display text-lg font-semibold">01008-0101-0000024</div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-xl border p-5 text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Landmark className="h-5 w-5" /></div>
                <h3 className="mt-3 font-semibold">Bank Transfer</h3>
                <p className="mt-1 text-xs text-muted-foreground">Deposit directly via online funds transfer or through any bank in Pakistan.</p>
              </div>
              <div className="rounded-xl border p-5 text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Wallet className="h-5 w-5" /></div>
                <h3 className="mt-3 font-semibold">Mobile Wallet</h3>
                <p className="mt-1 text-xs text-muted-foreground">Use JazzCash, EasyPaisa or UPaisa to contribute to Gulab Devi Teaching Hospital.</p>
              </div>
              <div className="rounded-xl border p-5 text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><HandCoins className="h-5 w-5" /></div>
                <h3 className="mt-3 font-semibold">Pay In Cash/By Cheque</h3>
                <p className="mt-1 text-xs text-muted-foreground">Deposit in cash or by cheque at the account office of Gulab Devi Teaching Hospital.</p>
              </div>
            </div>
          </CardContent></Card>

          <div className="rounded-2xl gradient-brand p-8 text-primary-foreground shadow-elegant">
            <h3 className="font-display text-2xl font-bold">Where your donation goes</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>PKR 1,000 — supports a full lab panel for one patient.</li>
              <li>PKR 5,000 — funds a specialist consultation & medicines.</li>
              <li>PKR 25,000 — covers a full day in the ICU.</li>
              <li>PKR 100,000 — sponsors a cardiac angioplasty.</li>
            </ul>
            <p className="mt-6 text-xs opacity-80">Donations are used exclusively for patient welfare. Official receipts are issued for every donation.</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
