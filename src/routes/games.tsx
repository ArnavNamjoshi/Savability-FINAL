import { createFileRoute, Link } from "@tanstack/react-router";
import { Swords } from "lucide-react";
import { PageTitle } from "@/components/AppShell";
import { PLANTS } from "@/lib/art";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — Savability" },
      { name: "description", content: "Play saving games, earn XP and unlock new gear." },
      { property: "og:title", content: "Games — Savability" },
      { property: "og:description", content: "Saving games for kids." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Games,
});

function Games() {
  return (
    <div className="space-y-5">
      <PageTitle title="Games" sub="Play, save and level up." />
      <div className="grid gap-4 sm:grid-cols-2">
        <Link to="/battle" className="card-soft flex items-center gap-4 bg-coral">
          <Swords className="h-14 w-14 shrink-0" />
          <div>
            <h2 className="text-xl font-bold">Savings Battle Royale</h2>
            <p className="text-sm">Outlast the other savers by skipping treats in real life.</p>
          </div>
        </Link>
        <div className="card-soft flex items-center gap-4 opacity-70">
          <img src={PLANTS.sprout} alt="" className="h-14 w-14 shrink-0" />
          <div>
            <h2 className="text-xl font-bold">Growth Garden</h2>
            <p className="text-sm">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
