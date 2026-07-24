import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import {
  LayoutDashboard, CalendarCheck, CalendarPlus, FileHeart, FlaskConical, ScanLine,
  Pill, Receipt, CreditCard, Stethoscope, MessageSquare, Bell, User, Settings,
} from "lucide-react";

const items: NavItem[] = [
  { to: "/patient/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/patient/appointments", label: "My Appointments", icon: CalendarCheck },
  { to: "/book-appointment", label: "Book Appointment", icon: CalendarPlus },
  { to: "/patient/records", label: "Medical Records", icon: FileHeart },
  { to: "/patient/lab-reports", label: "Lab Reports", icon: FlaskConical },
  { to: "/patient/radiology", label: "Radiology Reports", icon: ScanLine },
  { to: "/patient/prescriptions", label: "Prescriptions", icon: Pill },
  { to: "/patient/invoices", label: "Invoices", icon: Receipt },
  { to: "/patient/payments", label: "Payments", icon: CreditCard },
  { to: "/patient/doctors", label: "Doctors", icon: Stethoscope },
  { to: "/patient/messages", label: "Messages", icon: MessageSquare, badge: "3" },
  { to: "/patient/notifications", label: "Notifications", icon: Bell, badge: "2" },
  { to: "/patient/profile", label: "Profile", icon: User },
  { to: "/patient/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/patient")({
  head: () => ({ meta: [
    { title: "Patient Portal — Gulab Devi Teaching Hospital" },
    { name: "description", content: "Access appointments, reports, prescriptions and bills." },
    { name: "robots", content: "noindex" },
  ]}),
  component: () => (
    <DashboardShell
      items={items}
      brand="Patient Portal"
      home="/patient/dashboard"
      user={{ name: "Sana Ahmed", role: "Patient · MR#-49281", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" }}
    >
      <Outlet />
    </DashboardShell>
  ),
});
