import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import StarField from "@/components/StarField";

const memories = [
  {
    id: 1,
    date: "12.01.2024",
    title: "Первый раз",
    story: "Тот день, когда всё началось. Я помню каждую деталь — твою улыбку, свет в окне, и то, как мир вдруг стал другим.",
    song: "♫ Arctic Monkeys — Do I Wanna Know?",
  },
  {
    id: 2,
    date: "14.02.2024",
    title: "Наш вечер",
    story: "Мы просто гуляли. Но это было больше, чем просто прогулка. Это было начало чего-то.",
    song: "♫ Cigarettes After Sex — Apocalypse",
  },
  {
    id: 3,
    date: "08.03.2024",
    title: "Тёплый день",
    story: "Солнце, ветер, и ты рядом. Больше ничего не нужно.",
    song: "♫ Lana Del Rey — Young and Beautiful",
  },
  {
    id: 4,
    date: "21.04.2024",
    title: "Молчание",
    story: "Иногда мы просто молчали. И это было лучше любых слов.",
    song: "♫ Radiohead — Exit Music",
  },
  {
    id: 5,
    date: "09.05.2024",
    title: "Далеко",
    story: "Расстояние ничего не значит, когда ты — в каждой мысли.",
    song: "♫ The Neighbourhood — Sweater Weather",
  },
  {
    id: 6,
    date: "15.06.2024",
    title: "Смех",
    story: "Ты смеялась так, что весь мир остановился. Я запомнил.",
    song: "♫ Mac DeMarco — My Kind of Woman",
  },
  {
    id: 7,
    date: "22.07.2024",
    title: "Звёзды",
    story: "Мы смотрели вверх. И я понял — я нашёл свою.",
    song: "♫ Bon Iver — Skinny Love",
  },
  {
    id: 8,
    date: "01.09.2024",
    title: "Сейчас",
    story: "Это не конец. Это только начало. Я обещаю.",
    song: "♫ Frank Ocean — Thinkin Bout You",
  },
];

const MemoriesPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [opened, setOpened] = useState<Set<number>>(new Set());

  const handleOpen = useCallback((id: number) => {
    setOpenId(id);
    setOpened((prev) => new Set(prev).add(id));
  }, []);

  return (
    <div className="min-h-screen bg-sky-deep-night relative overflow-hidden">
      <NavBar dark />
      <StarField />

      {/* Atmosphere blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, hsl(204 69% 32%), transparent)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, hsl(204 60% 56%), transparent)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />

      {/* Counter */}
      <div className="fixed top-20 right-6 z-20 font-mono-label text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
        ✦ {opened.size} / 8 открыто
      </div>

      {/* Stars grid */}
      <div className="relative z-10 pt-28 pb-20 px-6 max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">04 · 星</span>
          <h1 className="font-display italic text-[40px] md:text-[56px] text-sky-cloud mt-4">
            наши звёзды
          </h1>
          <p className="font-body text-sm mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            нажми на звезду, чтобы открыть воспоминание
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memories.map((m) => (
            <motion.button
              key={m.id}
              onClick={() => handleOpen(m.id)}
              className="flex flex-col items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  opened.has(m.id)
                    ? "border-sky-ocean bg-sky-ocean/20"
                    : "border-sky-ocean/40 bg-transparent"
                }`}
                style={{
                  boxShadow: opened.has(m.id)
                    ? "0 0 20px hsla(204,60%,56%,0.4)"
                    : "0 0 12px hsla(204,60%,56%,0.15)",
                }}
              >
                <span className="text-sky-horizon text-lg">✦</span>
              </div>
              <span className="font-mono-label text-[10px] text-sky-horizon opacity-60 group-hover:opacity-100 transition-opacity">
                {m.date}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Envelope after 3 */}
        {opened.size >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <Link
              to="/final"
              className="inline-flex flex-col items-center gap-2 group"
            >
              <div
                className="w-14 h-14 rounded-full border border-sky-ocean/30 flex items-center justify-center"
                style={{ boxShadow: "0 0 24px hsla(204,60%,56%,0.25)" }}
              >
                <span className="text-2xl">💌</span>
              </div>
              <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                тебе написали
              </span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Memory card modal */}
      <AnimatePresence>
        {openId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-sky-deep-night/80"
              onClick={() => setOpenId(null)}
            />
            <motion.div
              className="sky-card p-7 max-w-[440px] w-full relative z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.3)" }}
            >
              {(() => {
                const m = memories.find((mem) => mem.id === openId);
                if (!m) return null;
                return (
                  <>
                    <span className="font-mono-label text-[10px] text-sky-ocean">{m.date}</span>
                    <div className="w-full h-40 rounded-md bg-sky-tint mt-3 flex items-center justify-center">
                      <span className="font-display italic text-sky-ocean text-sm">[ фото ]</span>
                    </div>
                    <h3 className="font-display text-[22px] text-sky-navy mt-4">{m.title}</h3>
                    <p className="font-body text-[15px] text-sky-steel leading-[1.7] mt-3">{m.story}</p>
                    <p className="font-mono-label text-[11px] text-sky-ocean mt-4">{m.song}</p>
                    <button
                      onClick={() => setOpenId(null)}
                      className="font-body text-xs text-sky-mist mt-6 hover:text-sky-navy transition-colors"
                    >
                      закрыть
                    </button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesPage;
