import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { DEPARTMENTS } from "@/lib/mock-data";
import { DepartmentIcon } from "@/components/site/DepartmentIcon";

export const Route = createFileRoute("/admin/departments")({
  head: () => ({ meta: [{ title: "Departments — Admin" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <div>
      <DashPageHeader title="Departments" subtitle="42 clinical departments in operation." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DEPARTMENTS.map((d) => (
          <div key={d.slug} className="rounded-2xl border bg-card p-5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><DepartmentIcon name={d.icon} className="h-5 w-5" /></div>
            <div className="mt-3 font-display font-semibold">{d.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{d.services.length} services · {d.facilities.length} facilities</div>
          </div>
        ))}
      </div>
    </div>
  ),
});
