import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

const AnimationPage = () => {
  const [ended, setEnded] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-[1800ms] ${ended ? "bg-background" : "bg-sky-night"}`}>
      <NavBar dark={!ended} />

      <AnimatePresence mode="wait">
        {!ended ? (
          <motion.section
            key="video"
            className="flex flex-col items-center justify-center min-h-screen px-6 pt-16"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            {/* Video placeholder */}
            <div className="w-full max-w-[960px] aspect-video rounded-lg overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, hsl(210 67% 11%), hsl(204 69% 32%))" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  onClick={() => setEnded(true)}
                  className="w-16 h-16 rounded-full border-2 border-sky-cloud/50 flex items-center justify-center hover:border-sky-cloud/80 transition-colors duration-[180ms]"
                >
                  <Play className="w-6 h-6 text-sky-cloud ml-1" fill="currentColor" />
                </button>
                <p className="font-display italic text-[22px] text-sky-ocean mt-6">
                  [ видео загружается ]
                </p>
              </div>
            </div>

            <button
              onClick={() => setEnded(true)}
              className="font-mono-label text-[11px] mt-8 transition-opacity"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              пропустить →
            </button>
          </motion.section>
        ) : (
          <motion.section
            key="end"
            className="flex flex-col items-center justify-center min-h-screen px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <h2 className="font-display italic text-[28px] md:text-[40px] text-sky-navy text-center leading-snug">
              а теперь — наши звёзды.
            </h2>
            <p className="font-mono-label text-[10px] text-sky-mist mt-4">
              続きを見る · продолжай
            </p>
            <Link to="/memories" className="sky-btn mt-10">
              СМОТРЕТЬ →
            </Link>
          </motion.section>
        )}
      </AnimatePresence>

      {ended && <Footer />}
    </div>
  );
};

export default AnimationPage;
