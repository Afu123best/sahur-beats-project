import { Link } from "@tanstack/react-router";
import { Menu, Phone, Search, Moon, Sun, HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HOSPITAL } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/departments", label: "Departments" },
  { to: "/donate", label: "For Donors" },
  { to: "/stories", label: "Stories" },
  { to: "/education", label: "Our Institutions" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      {/* Top strip */}
      <div className="hidden md:block gradient-brand text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Phone className="h-3 w-3" /> Emergency: {HOSPITAL.emergency}</span>
            <span className="opacity-80">Helpline: {HOSPITAL.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/patient/dashboard" className="hover:underline">Patient Portal</Link>
            <Link to="/admin/dashboard" className="hover:underline">Admin</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-soft">
            <img src="/logo.png" alt="Gulab Devi Teaching Hospital" className="h-11 w-11" />
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-[15px] font-bold text-foreground truncate">Gulab Devi</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Teaching Hospital</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search" className="hidden sm:inline-flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark((d) => !d)}>
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild className="hidden sm:inline-flex rounded-none bg-red-600 font-semibold uppercase tracking-wider hover:bg-red-700">
            <Link to="/donate">Donate Us</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-8 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <Link to="/patient/dashboard" className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted">Patient Portal</Link>
                <Link to="/admin/dashboard" className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted">Admin Dashboard</Link>
                <Button asChild className="mt-3"><Link to="/book-appointment">Book Appointment</Link></Button>
                <Button asChild variant="outline"><Link to="/donate">Donate Now</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
