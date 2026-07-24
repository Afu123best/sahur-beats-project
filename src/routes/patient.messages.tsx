import { createFileRoute } from "@tanstack/react-router";
import { DashPageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MESSAGES } from "@/lib/mock-data";
import { Paperclip, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/patient/messages")({
  head: () => ({ meta: [{ title: "Messages" }, { name: "robots", content: "noindex" }] }),
  component: Messages,
});

const THREAD = [
  { from: "them", text: "Hello Sana, please share your latest ECG report before Monday's follow-up.", time: "09:04" },
  { from: "me", text: "Sure, I'll upload it today. Thanks doctor.", time: "09:12" },
  { from: "them", text: "Perfect. Also please continue your current medications as prescribed.", time: "09:15" },
];

function Messages() {
  const [active, setActive] = useState(MESSAGES[1].id);
  const [text, setText] = useState("");
  return (
    <div>
      <DashPageHeader title="Messages" subtitle="Secure conversations with your care team." />
      <Card className="border-0 shadow-soft"><CardContent className="grid gap-0 p-0 md:grid-cols-[280px_1fr]">
        <div className="border-b md:border-b-0 md:border-r">
          <div className="p-3"><Input placeholder="Search conversations…" /></div>
          <ul>
            {MESSAGES.map((m) => (
              <li key={m.id}>
                <button onClick={() => setActive(m.id)} className={`flex w-full items-center gap-3 border-l-2 p-3 text-left transition-colors ${active === m.id ? "border-primary bg-primary/5" : "border-transparent hover:bg-muted"}`}>
                  <Avatar><AvatarFallback>{m.from[0]}</AvatarFallback></Avatar>
                  <div className="min-w-0 flex-1"><div className="flex items-center justify-between"><span className="truncate text-sm font-semibold">{m.from}</span><span className="text-[10px] text-muted-foreground">{m.time}</span></div><div className="truncate text-xs text-muted-foreground">{m.last}</div></div>
                  {m.unread > 0 && <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{m.unread}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-h-[500px] flex-col">
          <div className="border-b p-4"><div className="font-semibold">{MESSAGES.find(m=>m.id===active)?.from}</div><div className="text-xs text-muted-foreground">Online</div></div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {THREAD.map((t, i) => (
              <div key={i} className={`flex ${t.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${t.from === "me" ? "gradient-brand text-primary-foreground" : "bg-muted"}`}>
                  {t.text}<div className={`mt-1 text-[10px] ${t.from === "me" ? "opacity-80" : "text-muted-foreground"}`}>{t.time}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setText(""); }} className="flex items-center gap-2 border-t p-3">
            <Button type="button" size="icon" variant="ghost"><Paperclip className="h-4 w-4" /></Button>
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message…" />
            <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </CardContent></Card>
    </div>
  );
}
