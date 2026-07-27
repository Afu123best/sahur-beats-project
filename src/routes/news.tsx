import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout, PageHeader } from "@/components/site/PublicLayout";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const REELS = [
  "https://www.instagram.com/reel/DWomVVfjbqh/?igsh=eXphM21tcmNnZXpu",
  "https://www.instagram.com/reel/DBqOmKlxEwW/?igsh=MWlpdzc1M2pyc2FwMg==",
  "https://www.instagram.com/reel/DBqg6ngPMxP/?igsh=bng4cDhxd2JxZ3dy",
  "https://www.instagram.com/reel/DCi4UNFuPgI/?igsh=MXM4c2tob25kZngwMw==",
  "https://www.instagram.com/reel/DFGXWqJP5ze/?igsh=MTlmbGl3N3ZtbTF6bw==",
  "https://www.instagram.com/reel/DFKDtdCx823/?igsh=MTlmM2o2cWlxanh6cw==",
  "https://www.instagram.com/reel/DFn0TZbTkCR/?igsh=Ym1udGx3MWNoaDU=",
  "https://www.instagram.com/reel/DGfRslnIU1A/?igsh=dG1iNXBqMGhwbm5h",
  // add real reel URLs here
];

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — Gulab Devi Teaching Hospital" },
      { name: "description", content: "Latest updates and stories from our Instagram." },
    ]
  }),
  component: News,
});

function News() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <PublicLayout>
      <PageHeader breadcrumb="Newsroom" title="News & Media" subtitle="The latest updates, straight from our Instagram." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ margin: 0, width: "100%", minHeight: 400 }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex h-full min-h-[400px] items-center justify-center p-6 text-center text-sm text-primary underline">
                View this reel on Instagram
              </a>
            </blockquote>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}