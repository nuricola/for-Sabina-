import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import finalHero from "@/assets/final-hero.jpg";

const letterText = `Я долго думал, что написать. Перебирал слова, удалял, начинал заново.

Но правда проста: ты — лучшее, что случилось со мной.

Я не идеальный. Я делал ошибки. Но то, что я чувствую к тебе — это настоящее. Это не проходит. Это только растёт.

Каждый раз, когда ты смеёшься, мир становится лучше. Каждый раз, когда ты рядом, я чувствую, что всё правильно.

Я хочу быть тем, кому ты доверяешь. Тем, кто рядом — в хорошие и плохие дни. Тем, кто всегда выберет тебя.

Это не просто слова на экране. Это я — перед тобой. Без масок.`;

const vibes = [
  { emoji: "🕯", name: "Уютно и близко", desc: "свечи, тихо, только мы" },
  { emoji: "🌿", name: "Активно и весело", desc: "движение, смех, улица" },
  { emoji: "🌙", name: "Романтично", desc: "вечер, огни, магия" },
  { emoji: "✦", name: "Сюрприз", desc: "доверяю тебе полностью" },
];

const times = [
  { emoji: "🌅", name: "Днём" },
  { emoji: "🌆", name: "Вечером" },
  { emoji: "🌃", name: "Ночью" },
];

const FinalPage = () => {
  const [letterDone, setLetterDone] = useState(false);
  const [answered, setAnswered] = useState<"yes" | null>(null);
  const [noHovers, setNoHovers] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [place, setPlace] = useState("");
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visits] = useState(Math.floor(Math.random() * 12) + 3);

  const handleNoHover = useCallback(() => {
    if (noHovers >= 5) return;
    setNoHovers((p) => p + 1);
    setNoOffset({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
  }, [noHovers]);

  // Show hint after 3s hold logic
  const handleNoMouseDown = useCallback(() => {
    const timer = setTimeout(() => setShowHint(true), 3000);
    const onUp = () => { clearTimeout(timer); document.removeEventListener("mouseup", onUp); };
    document.addEventListener("mouseup", onUp);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <img src={finalHero} alt="Final" className="absolute inset-0 w-full h-full object-cover" />
        <div className="photo-fade-bottom absolute inset-0" />
        <div className="absolute bottom-8 left-7 md:left-[72px]">
          <span className="section-label">06 · あなたへ</span>
        </div>
      </section>

      {/* Act 1 — Letter */}
      <section className="max-w-[600px] mx-auto mt-20 px-6">
        <div className="bg-cloud border border-sky-fog rounded-lg p-8 md:p-12"
          style={{ boxShadow: "0 4px 32px hsla(204,69%,32%,0.07)" }}
        >
          <div className="font-mono-label text-[10px] text-sky-mist text-right mb-6">
            08.03.2026
          </div>
          <p className="font-display italic text-xl text-sky-deep mb-6">Дорогая Сабина,</p>
          <div className="font-body text-base text-sky-steel leading-[1.8]">
            <TypewriterText text={letterText} speed={28} onComplete={() => setLetterDone(true)} />
          </div>
          {letterDone && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="font-display italic text-xl text-sky-navy text-right mt-8">
                Навсегда твой.
              </p>
              <div className="hairline mt-6" />
              <p className="font-body text-xs text-sky-mist text-center mt-4">
                — ты дочитала. спасибо.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Act 2 — Question */}
      {letterDone && !answered && (
        <motion.section
          className="max-w-[600px] mx-auto mt-24 px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="font-display italic text-[32px] md:text-[46px] text-sky-navy leading-tight">
            дать нам ещё один шанс?
          </h2>
          <p className="font-jp text-xs text-sky-mist mt-2">もう一度だけ</p>

          <button
            onClick={() => setAnswered("yes")}
            className="sky-btn-full mt-12"
          >
            ДА →
          </button>

          <motion.div
            className="mt-[18px] relative"
            animate={{ x: noOffset.x, y: noOffset.y }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            style={{ opacity: noHovers >= 5 ? 0 : 1 - noHovers * 0.18 }}
          >
            <button
              className="font-body text-[13px] text-sky-horizon"
              onMouseEnter={handleNoHover}
              onMouseDown={handleNoMouseDown}
            >
              нет...
            </button>
          </motion.div>

          {showHint && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-2">
              <p className="font-body text-xs text-sky-ocean">ты уверена? · 本当に?</p>
              <Link to="/secret" className="font-mono-label text-[11px] text-sky-mist hover:text-sky-ocean transition-colors">
                нашла →
              </Link>
            </motion.div>
          )}
        </motion.section>
      )}

      {/* Act 3 — Date constructor */}
      <AnimatePresence>
        {answered === "yes" && !submitted && (
          <motion.section
            className="max-w-[600px] mx-auto mt-16 px-6 pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display italic text-[24px] md:text-[34px] text-sky-navy text-center leading-snug">
              как должно выглядеть наше первое свидание?
            </h2>
            <p className="font-jp text-[11px] text-sky-mist text-center mt-2">デートプラン</p>

            {/* Progress */}
            <div className="flex items-center justify-center gap-1 mt-8 mb-10">
              {["НАСТРОЕНИЕ", "ВРЕМЯ", "МЕСТО", "ЖЕЛАНИЯ"].map((s, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className={`h-[2px] w-[70px] rounded-full ${
                    (i === 0 && selectedVibe !== null) || (i === 1 && selectedTime !== null) ||
                    (i === 2 && place) || (i === 3 && wish) ? "bg-sky-ocean" : "bg-sky-fog"
                  }`} />
                  <span className="font-mono-label text-[9px] text-sky-mist">{s}</span>
                </div>
              ))}
            </div>

            {/* Vibe cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {vibes.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVibe(i)}
                  className={`sky-card p-6 text-left transition-all duration-250 ${
                    selectedVibe === i ? "border-sky-navy bg-sky-tint" : ""
                  }`}
                >
                  <span className="text-2xl">{v.emoji}</span>
                  <h4 className="font-display text-lg text-sky-navy mt-2">{v.name}</h4>
                  <p className="font-body text-xs text-sky-mist mt-1">{v.desc}</p>
                </button>
              ))}
            </div>

            {/* Time */}
            <div className="flex gap-3 mb-8">
              {times.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTime(i)}
                  className={`sky-card p-4 flex-1 text-center transition-all duration-250 ${
                    selectedTime === i ? "border-sky-navy bg-sky-tint" : ""
                  }`}
                >
                  <span className="text-xl">{t.emoji}</span>
                  <p className="font-body text-sm text-sky-navy mt-1">{t.name}</p>
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="space-y-6 mb-10">
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="куда пойдём?"
                className="w-full bg-transparent border-b border-sky-fog pb-2 font-body text-base text-sky-navy placeholder:font-body placeholder:italic placeholder:text-sky-mist focus:border-sky-ocean focus:outline-none transition-colors"
              />
              <input
                type="text"
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="что ты хочешь больше всего?"
                className="w-full bg-transparent border-b border-sky-fog pb-2 font-body text-base text-sky-navy placeholder:font-body placeholder:italic placeholder:text-sky-mist focus:border-sky-ocean focus:outline-none transition-colors"
              />
            </div>

            <button onClick={() => setSubmitted(true)} className="sky-btn-full mx-auto block">
              ОТПРАВИТЬ →
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Success */}
      {submitted && (
        <motion.div
          className="max-w-[600px] mx-auto mt-16 px-6 pb-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-display italic text-xl text-sky-deep">
            я увижу это. всё будет идеально.
          </p>
          <p className="font-jp text-[11px] text-sky-mist mt-2">完璧にする</p>
        </motion.div>
      )}

      {/* Visit counter */}
      <div className="text-center py-8">
        <span className="font-mono-label text-[10px] text-sky-horizon">
          открыла {visits} раз
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default FinalPage;
