import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/settings")({
  head: () => ({ meta: [{ title: "Settings" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Settings" subtitle="Preferences, notifications and privacy." />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0 shadow-soft"><CardContent className="p-6 space-y-4">
          <div className="font-display font-semibold">Notifications</div>
          {["Appointment reminders","Report ready alerts","Prescription updates","Billing reminders","Hospital announcements"].map((l) => (
            <div key={l} className="flex items-center justify-between"><Label>{l}</Label><Switch defaultChecked /></div>
          ))}
        </CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-6 space-y-4">
          <div className="font-display font-semibold">Privacy & Security</div>
          <div className="flex items-center justify-between"><Label>Two-factor authentication</Label><Switch /></div>
          <div className="flex items-center justify-between"><Label>Share data with research</Label><Switch defaultChecked /></div>
          <Button variant="outline" onClick={() => toast("Session ended")}>Sign out all devices</Button>
        </CardContent></Card>
      </div>
    </div>
  ),
});
