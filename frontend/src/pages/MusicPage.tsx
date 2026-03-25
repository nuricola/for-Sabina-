import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const tracks = [
  { title: "Sweater Weather", artist: "The Neighbourhood", comment: "напоминает о тебе каждый раз" },
  { title: "Do I Wanna Know?", artist: "Arctic Monkeys", comment: "наш ритм" },
  { title: "Apocalypse", artist: "Cigarettes After Sex", comment: "тишина и ты" },
  { title: "Young and Beautiful", artist: "Lana Del Rey", comment: "красота, которая не уходит" },
  { title: "Skinny Love", artist: "Bon Iver", comment: "нежнее, чем можно объяснить" },
  { title: "Thinkin Bout You", artist: "Frank Ocean", comment: "каждый день — о тебе" },
  { title: "My Kind of Woman", artist: "Mac DeMarco", comment: "мой тип — это ты" },
  { title: "Exit Music", artist: "Radiohead", comment: "мы уйдём вместе" },
  { title: "Cherry Wine", artist: "Hozier", comment: "сладко и больно" },
];

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero band */}
      <section className="w-full h-40 bg-navy flex flex-col items-center justify-center mt-16">
        <span className="section-label">05 · 音楽</span>
        <h1 className="font-display italic text-[36px] md:text-[48px] text-sky-cloud mt-2">
          наша музыка
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Playlist embed placeholder */}
        <ScrollReveal>
          <div className="sky-card p-6 mb-12">
            <span className="font-mono-label text-[10px] text-sky-mist tracking-[2px] uppercase">
              ПЛЕЙЛИСТ · プレイリスト
            </span>
            <div className="w-full h-[352px] rounded-md bg-sky-tint mt-4 flex items-center justify-center">
              <span className="font-display italic text-sky-ocean">[ Spotify плейлист ]</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Track grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="sky-card-hover p-5">
                <div className="flex items-start gap-3">
                  <div className="w-[52px] h-[52px] rounded bg-sky-tint flex-shrink-0 flex items-center justify-center">
                    <span className="text-sky-ocean text-lg">♫</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-[15px] font-medium text-sky-navy truncate">
                      {track.title}
                    </h3>
                    <p className="font-body text-[13px] text-sky-mist">{track.artist}</p>
                  </div>
                </div>
                <div className="hairline my-3" />
                <p className="font-display italic text-[15px] text-sky-ocean">{track.comment}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-body text-xs text-sky-ocean flex items-center gap-1 cursor-pointer hover:text-sky-deep transition-colors">
                    <ExternalLink className="w-3 h-3" /> Spotify
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Ambient player placeholder */}
      <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-background border-t border-sky-fog z-40 flex items-center px-6"
        style={{ boxShadow: "0 -4px 24px hsla(204,69%,32%,0.06)" }}
      >
        <div className="flex items-center gap-3 max-w-[1100px] mx-auto w-full">
          <div className="w-9 h-9 rounded bg-sky-tint flex items-center justify-center flex-shrink-0">
            <span className="text-sky-ocean text-xs">♫</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-[13px] text-sky-navy truncate">Sweater Weather</p>
            <p className="font-body text-xs text-sky-mist">The Neighbourhood</p>
          </div>
          <div className="w-[200px] h-[2px] bg-sky-fog rounded-full hidden md:block">
            <div className="h-full w-1/3 bg-sky-ocean rounded-full" />
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-sky-navy">
            ▶
          </button>
        </div>
      </div>

      <div className="h-[60px]" /> {/* Spacer for fixed player */}
      <Footer />
    </div>
  );
};

export default MusicPage;
