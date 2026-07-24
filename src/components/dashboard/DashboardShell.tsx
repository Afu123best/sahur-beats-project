import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ReactNode } from "react";
import {
  SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarHeader, SidebarTrigger, SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, HeartPulse } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon; badge?: string };

export function DashboardShell({
  items,
  brand,
  user,
  children,
  home,
}: {
  items: NavItem[];
  brand: string;
  home: string;
  user: { name: string; role: string; avatar?: string };
  children?: ReactNode;
}) {
  const currentPath = useRouterState({ select: (r) => r.location.pathname });
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[color:var(--surface)]">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <Link to={home} className="flex items-center gap-2.5 px-2 py-2">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-soft">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                <div className="truncate font-display text-sm font-semibold">Gulab Devi</div>
                <div className="truncate text-[10px] uppercase tracking-widest text-muted-foreground">{brand}</div>
              </div>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((it) => {
                    const active = currentPath === it.to;
                    return (
                      <SidebarMenuItem key={it.to}>
                        <SidebarMenuButton asChild isActive={active} tooltip={it.label}>
                          <Link to={it.to} className="flex items-center gap-2">
                            <it.icon className="h-4 w-4" />
                            <span>{it.label}</span>
                            {it.badge && <Badge variant="secondary" className="ml-auto h-5 rounded-full px-1.5 text-[10px]">{it.badge}</Badge>}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-2 px-2 py-2">
              <Avatar className="h-8 w-8"><AvatarImage src={user.avatar} /><AvatarFallback>{user.name[0]}</AvatarFallback></Avatar>
              <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                <div className="truncate text-sm font-semibold">{user.name}</div>
                <div className="truncate text-[11px] text-muted-foreground">{user.role}</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b bg-background/85 px-4 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Back to site</Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
              </Button>
              <Avatar className="h-8 w-8"><AvatarImage src={user.avatar} /><AvatarFallback>{user.name[0]}</AvatarFallback></Avatar>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8">
            {children ?? <Outlet />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export function DashPageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <div className="min-w-0">
        <h1 className="font-display text-2xl font-bold md:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
