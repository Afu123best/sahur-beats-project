import { Link } from "@tanstack/react-router";
import { HeartPulse, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { HOSPITAL } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold">Gulab Devi</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Teaching Hospital</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {HOSPITAL.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[["/about","About"],["/departments","Departments"],["/doctors","Doctors"],["/services","Services"],["/education","Education"]].map(([to,label]) => (
              <li key={to}><Link to={to as string} className="hover:text-primary">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Support Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[["/donate","Donate Us"],["/donate","Give Zakat"],["/donate","Sadqah"],["/careers","Careers"],["/news","Stories"]].map(([to,label], i) => (
              <li key={i}><Link to={to as string} className="hover:text-primary">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{HOSPITAL.address}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />{HOSPITAL.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />{HOSPITAL.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Gulab Devi Teaching Hospital. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
