import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Landmark } from "lucide-react";

const HERO_IMG = "/gulab-devi-building.jpg";

const CHAIRMAN = { name: "Syed Shahid Ali", role: "Chairman" };

const MEMBERS = [
  { name: "Mr. Ahmad Hasnain", role: "Secretary" },
  { name: "Ms. Sidra Fatima", role: "Member" },
  { name: "Mr. Tassaduq Hussain Jillani", role: "Member" },
  { name: "Ms. Rukhsana Jabbar", role: "Member" },
  { name: "Mr. Shahid Najam", role: "Member" },
  { name: "Mr. Bilal Ilahi", role: "Member" },
  { name: "Lt. General (Retd) Sikandar Afzal", role: "Member" },
  { name: "Syed Sheharyar Ali", role: "Member" },
  { name: "Mr. Farid Ud Din Ahmed", role: "Member" },
  { name: "Mr. Tasneem Noorani", role: "Member" },
  { name: "Mr. Muhammad Amjad", role: "Member" },
  { name: "Mr. Anjum Nasir", role: "Member" },
  { name: "Ahmad Nauman", role: "Member" },
];

const EX_OFFICIO = [
  { role: "Secretary", body: "Health Department, Government of the Punjab" },
  { role: "Secretary", body: "Finance Department, Government of the Punjab" },
  { role: "Secretary", body: "Social Welfare Department, Government of the Punjab" },
  { role: "Chairman", body: "Evacuee Property Trust Board, Lahore" },
  { role: "Administrator", body: "City District Government, Lahore" },
  { role: "Chief Executive / MS", body: "Gulab Devi Hospital, Lahore" },
];

function initials(name: string) {
  const clean = name.replace(/\(.*?\)/g, "").trim();
  const parts = clean.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

function ManagingCommittee() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Gulab Devi Teaching Hospital" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">About Us</div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Managing Committee</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 md:text-lg">
            Overseeing the strategic direction of South Asia's largest chest and cardiac hospital.
          </p>
        </div>
      </section>

      {/* CHAIRMAN SPOTLIGHT */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Card className="border-0 bg-[color:var(--surface)] shadow-elegant">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <Avatar className="h-24 w-24"><AvatarFallback className="text-xl">{initials(CHAIRMAN.name)}</AvatarFallback></Avatar>
            <div>
              <div className="font-display text-xl font-bold">{CHAIRMAN.name}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-primary">{CHAIRMAN.role}</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* MEMBERS GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-display text-xl font-bold">Committee Members</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {MEMBERS.map((m) => (
            <Card key={m.name} className="border-0 text-center shadow-soft">
              <CardContent className="p-6">
                <Avatar className="mx-auto h-16 w-16"><AvatarFallback>{initials(m.name)}</AvatarFallback></Avatar>
                <div className="mt-3 font-display text-sm font-semibold leading-snug">{m.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{m.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* EX-OFFICIO MEMBERS */}
      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-display text-xl font-bold">Ex-Officio Members</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Government and civic representatives who serve on the committee by virtue of their office.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EX_OFFICIO.map((e) => (
              <div key={e.role + e.body} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Landmark className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">{e.role}</div>
                  <div className="text-sm text-muted-foreground">{e.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export const Route = createFileRoute("/about_/managing-committee")({
  head: () => ({ meta: [{ title: "Managing Committee — Gulab Devi Teaching Hospital" }] }),
  component: ManagingCommittee,
});