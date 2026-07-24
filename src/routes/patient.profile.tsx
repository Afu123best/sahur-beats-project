import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/patient/profile")({
  head: () => ({ meta: [{ title: "Profile" }, { name: "robots", content: "noindex" }] }),
  component: Profile,
});

function Profile() {
  return (
    <div>
      <DashPageHeader title="Profile" subtitle="Manage your personal, emergency and insurance information." />
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="border-0 shadow-soft"><CardContent className="p-6 text-center">
          <Avatar className="mx-auto h-28 w-28"><AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" /><AvatarFallback>SA</AvatarFallback></Avatar>
          <div className="mt-4 font-display text-lg font-semibold">Sana Ahmed</div>
          <div className="text-xs text-muted-foreground">MR#-49281 · Registered 2019</div>
          <Button className="mt-4 w-full" variant="outline">Change photo</Button>
        </CardContent></Card>

        <Card className="border-0 shadow-soft"><CardContent className="p-6">
          <form onSubmit={(e)=>{e.preventDefault();toast.success("Profile updated");}} className="grid gap-4 sm:grid-cols-2">
            <div><Label>First name</Label><Input defaultValue="Sana" /></div>
            <div><Label>Last name</Label><Input defaultValue="Ahmed" /></div>
            <div><Label>Email</Label><Input type="email" defaultValue="sana@example.com" /></div>
            <div><Label>Phone</Label><Input defaultValue="+92 300 1234567" /></div>
            <div><Label>Date of birth</Label><Input type="date" defaultValue="1992-04-11" /></div>
            <div><Label>Blood group</Label><Input defaultValue="O+" /></div>
            <div className="sm:col-span-2"><Label>Address</Label><Input defaultValue="12 Model Town, Lahore" /></div>
            <div className="sm:col-span-2 pt-4 border-t"><h3 className="font-display font-semibold">Emergency contact</h3></div>
            <div><Label>Name</Label><Input defaultValue="Imran Ahmed" /></div>
            <div><Label>Relation</Label><Input defaultValue="Spouse" /></div>
            <div className="sm:col-span-2"><Label>Phone</Label><Input defaultValue="+92 301 7654321" /></div>
            <div className="sm:col-span-2 pt-4 border-t"><h3 className="font-display font-semibold">Insurance</h3></div>
            <div><Label>Provider</Label><Input defaultValue="EFU Health" /></div>
            <div><Label>Policy #</Label><Input defaultValue="EFU-99231-7" /></div>
            <div className="sm:col-span-2 flex justify-end"><Button type="submit">Save changes</Button></div>
          </form>
        </CardContent></Card>
      </div>
    </div>
  );
}
