import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function DepartmentIcon({ name, className }: { name: string; className?: string }) {
  const map = Icons as unknown as Record<string, LucideIcon>;
  const Icon = map[name] ?? Icons.Stethoscope;
  return <Icon className={className} />;
}
