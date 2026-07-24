import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { DEPARTMENTS, DOCTORS } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({ meta: [
    { title: "Book Appointment — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Book an appointment with a specialist in minutes." },
    { property: "og:title", content: "Book an Appointment" },
    { property: "og:description", content: "Book in minutes." },
  ]}),
  component: Book,
});

const STEPS = ["Department", "Doctor", "Date", "Time", "Details", "Confirm"];
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

function Book() {
  const [step, setStep] = useState(0);
  const [dept, setDept] = useState<string>();
  const [docId, setDocId] = useState<string>();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slot, setSlot] = useState<string>();
  const [details, setDetails] = useState({ name: "", phone: "", email: "", reason: "" });
  const [confirmed, setConfirmed] = useState(false);

  const doctors = dept ? DOCTORS.filter((d) => d.department === dept) : [];
  const doctor = DOCTORS.find((d) => d.id === docId);

  const canNext = [!!dept, !!docId, !!date, !!slot, !!details.name && !!details.phone, true][step];

  return (
    <PublicLayout>
      <PageHeader breadcrumb="Appointment" title="Book an appointment" subtitle="Choose your department, doctor and preferred time." />
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* Progress */}
        <ol className="mb-8 grid grid-cols-6 gap-2">
          {STEPS.map((s, i) => (
            <li key={s} className="flex flex-col items-center gap-1">
              <div className={cn("grid h-8 w-8 place-items-center rounded-full text-xs font-semibold",
                i < step ? "gradient-brand text-primary-foreground" : i === step ? "border-2 border-primary text-primary" : "bg-muted text-muted-foreground")}>
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              <span className={cn("hidden text-[10px] font-medium uppercase tracking-widest sm:block", i === step ? "text-primary" : "text-muted-foreground")}>{s}</span>
            </li>
          ))}
        </ol>

        <Card className="border-0 shadow-elegant"><CardContent className="p-6 md:p-8">
          {step === 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold">Choose a department</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {DEPARTMENTS.map((d) => (
                  <button key={d.slug} type="button" onClick={() => { setDept(d.slug); setDocId(undefined); }} className={cn("rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft", dept === d.slug && "border-primary bg-primary/5")}>
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><DepartmentIcon name={d.icon} className="h-5 w-5" /></div>
                    <div className="mt-3 font-display font-semibold">{d.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{d.short}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <h2 className="font-display text-xl font-semibold">Choose a doctor</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {doctors.map((d) => (
                  <button key={d.id} type="button" onClick={() => setDocId(d.id)} className={cn("rounded-2xl border p-4 text-left transition-all hover:border-primary", docId === d.id && "border-primary bg-primary/5")}>
                    <div className="flex items-center gap-3">
                      <img src={d.photo} alt={d.name} className="h-12 w-12 rounded-full object-cover" />
                      <div className="min-w-0">
                        <div className="truncate font-semibold">{d.name}</div>
                        <div className="text-xs text-muted-foreground">{d.experience} yrs · ★ {d.rating.toFixed(1)}</div>
                      </div>
                    </div>
                  </button>
                ))}
                {doctors.length === 0 && <div className="col-span-full text-sm text-muted-foreground">No doctors in this department.</div>}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="font-display text-xl font-semibold">Choose a date</h2>
              <div className="mt-6 flex justify-center">
                <Calendar mode="single" selected={date} onSelect={setDate} disabled={{ before: new Date() }} className="rounded-xl border p-3 pointer-events-auto" />
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="font-display text-xl font-semibold">Choose a time slot</h2>
              <p className="mt-1 text-sm text-muted-foreground">{date?.toDateString()}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                {SLOTS.map((s) => (
                  <button key={s} type="button" onClick={() => setSlot(s)} className={cn("rounded-xl border p-3 text-sm font-medium transition-all hover:border-primary", slot === s && "border-primary bg-primary text-primary-foreground")}>
                    <Clock className="mx-auto mb-1 h-3.5 w-3.5" />{s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <h2 className="sm:col-span-2 font-display text-xl font-semibold">Your details</h2>
              <div><Label>Full name</Label><Input value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} required /></div>
              <div><Label>Phone</Label><Input value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} required /></div>
              <div className="sm:col-span-2"><Label>Email</Label><Input type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} /></div>
              <div className="sm:col-span-2"><Label>Reason for visit</Label><Input value={details.reason} onChange={(e) => setDetails({ ...details, reason: e.target.value })} /></div>
            </div>
          )}
          {step === 5 && (
            <div className="text-center">
              {!confirmed ? (
                <>
                  <h2 className="font-display text-xl font-semibold">Review & confirm</h2>
                  <div className="mx-auto mt-6 max-w-md rounded-2xl border bg-[color:var(--surface)] p-6 text-left text-sm">
                    <Row k="Department" v={DEPARTMENTS.find(d => d.slug === dept)?.name} />
                    <Row k="Doctor" v={doctor?.name} />
                    <Row k="Date" v={date?.toDateString()} />
                    <Row k="Time" v={slot} />
                    <Row k="Patient" v={details.name} />
                    <Row k="Phone" v={details.phone} />
                  </div>
                  <Button size="lg" className="mt-6" onClick={() => { setConfirmed(true); toast.success("Appointment confirmed!"); }}>Confirm Booking</Button>
                </>
              ) : (
                <div className="py-8">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-brand text-primary-foreground shadow-elegant"><CheckCircle2 className="h-8 w-8" /></div>
                  <h2 className="mt-4 font-display text-2xl font-bold">Appointment confirmed!</h2>
                  <p className="mt-2 text-sm text-muted-foreground">A confirmation has been sent to {details.email || "your phone"}. Reference #GDT-{Math.floor(Math.random()*90000+10000)}</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <Button asChild><Link to="/patient/appointments">View my appointments</Link></Button>
                    <Button asChild variant="outline"><Link to="/">Back to home</Link></Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {!confirmed && (
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}><ChevronLeft className="mr-1 h-4 w-4" /> Back</Button>
              {step < 5 && <Button onClick={() => setStep((s) => Math.min(5, s + 1))} disabled={!canNext}>Next <ChevronRight className="ml-1 h-4 w-4" /></Button>}
            </div>
          )}
        </CardContent></Card>
      </section>
    </PublicLayout>
  );
}

function Row({ k, v }: { k: string; v?: string }) {
  return <div className="flex items-center justify-between border-b py-2 last:border-0"><span className="text-muted-foreground">{k}</span><span className="font-medium">{v || "—"}</span></div>;
}
