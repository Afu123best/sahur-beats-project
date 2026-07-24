import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { LayoutDashboard, Users, Stethoscope, CalendarClock, Building2, FlaskConical, Receipt, Package, Pill, LineChart, Settings } from "lucide-react";

const items: NavItem[] = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/patients", label: "Patients", icon: Users },
  { to: "/admin/doctors", label: "Doctors", icon: Stethoscope },
  { to: "/admin/appointments", label: "Appointments", icon: CalendarClock },
  { to: "/admin/departments", label: "Departments", icon: Building2 },
  { to: "/admin/laboratory", label: "Laboratory", icon: FlaskConical },
  { to: "/admin/billing", label: "Billing", icon: Receipt },
  { to: "/admin/inventory", label: "Inventory", icon: Package },
  { to: "/admin/pharmacy", label: "Pharmacy", icon: Pill },
  { to: "/admin/reports", label: "Reports", icon: LineChart },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Gulab Devi" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <DashboardShell
      items={items}
      brand="Admin Console"
      home="/admin/dashboard"
      user={{ name: "Dr. Rashid Malik", role: "Medical Director" }}
    >
      <Outlet />
    </DashboardShell>
  ),
});
