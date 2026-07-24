import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Users, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IMPACT = [
  { icon: Heart, k: "2.4M+", v: "Patients treated" },
  { icon: HandHeart, k: "60%", v: "Free care provided" },
  { icon: Users, k: "3,200+", v: "Staff supported" },
  { icon: Building2, k: "42", v: "Departments funded" },
];

const AMOUNTS = [1000, 5000, 10000, 25000, 50000, 100000];

export const Route = createFileRoute("/donate")({
  head: () => ({ meta: [
    { title: "Donate — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Your donation funds subsidised treatment for thousands of families each year." },
    { property: "og:title", content: "Donate to Gulab Devi" },
    { property: "og:description", content: "Support life-saving healthcare." },
  ]}),
  component: Donate,
});

function Donate() {
  const [amount, setAmount] = useState(5000);
  return (
    <PublicLayout>
      <PageHeader breadcrumb="Support us" title="Your gift saves lives." subtitle="Every rupee helps us provide free and subsidised treatment to those who need it most." />
      <section className="mx-auto max-w-7xl px-6 py-16">
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
            <h2 className="font-display text-2xl font-bold">Choose an amount</h2>
            <p className="mt-1 text-sm text-muted-foreground">Zakat and tax-eligible donations accepted.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {AMOUNTS.map((a) => (
                <button key={a} type="button" onClick={() => setAmount(a)} className={`rounded-xl border p-4 text-center font-display font-semibold transition-all ${amount === a ? "border-primary bg-primary/10 text-primary" : "hover:border-primary/40"}`}>
                  PKR {a.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="mt-6"><Label>Custom amount (PKR)</Label><Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} /></div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div><Label>Full name</Label><Input placeholder="Your name" /></div>
              <div><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
            </div>
            <Button className="mt-6 w-full" size="lg" onClick={() => toast.success(`Thank you! PKR ${amount.toLocaleString()} donation initiated.`)}>Donate PKR {amount.toLocaleString()}</Button>
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
