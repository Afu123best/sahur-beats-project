import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Settings" subtitle="Hospital configuration and preferences." />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0 shadow-soft"><CardContent className="p-6 space-y-4">
          <div className="font-display font-semibold">Hospital Info</div>
          <div><Label>Hospital name</Label><Input defaultValue="Gulab Devi Teaching Hospital" /></div>
          <div><Label>Contact email</Label><Input defaultValue="info@gulabdevi.org" /></div>
          <div><Label>Emergency line</Label><Input defaultValue="1122" /></div>
          <Button onClick={() => toast.success("Saved")}>Save</Button>
        </CardContent></Card>
        <Card className="border-0 shadow-soft"><CardContent className="p-6 space-y-4">
          <div className="font-display font-semibold">System</div>
          {["Enable patient portal","Enable online payments","SMS notifications","Email notifications"].map((l) => (
            <div key={l} className="flex items-center justify-between"><Label>{l}</Label><Switch defaultChecked /></div>
          ))}
        </CardContent></Card>
      </div>
    </div>
  ),
});
