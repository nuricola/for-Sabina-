import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "ГЛАВНАЯ", jp: "ホーム" },
  { path: "/about", label: "О НЕЙ", jp: "彼女について" },
  { path: "/animation", label: "ВИДЕО", jp: "動画" },
  { path: "/memories", label: "ЗВЁЗДЫ", jp: "星" },
  { path: "/music", label: "МУЗЫКА", jp: "音楽" },
  { path: "/final", label: "ДЛЯ ТЕБЯ", jp: "あなたへ" },
];

interface NavBarProps {
  dark?: boolean;
}

const NavBar = ({ dark = false }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navClass = dark ? "glass-nav-dark" : "glass-nav";
  const textColor = dark ? "text-sky-cloud" : "text-sky-steel";
  const activeColor = dark ? "text-sky-white" : "text-sky-navy";
  const logoColor = dark ? "text-sky-white" : "text-sky-navy";
  const borderClass = scrolled ? "border-b border-sky-fog" : "border-b border-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-16 ${navClass} ${borderClass} transition-colors duration-300`}
      >
        <div className="flex items-center justify-between h-full px-6 md:px-10 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-[2px] h-5 bg-sky-ocean" />
            <div>
              <span className={`font-display italic text-lg ${logoColor}`}>для сабины</span>
              <div className="font-jp text-[9px] text-sky-mist">サビナへ</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-xs uppercase tracking-[1.5px] transition-colors duration-[180ms] pb-1 border-b-[1.5px] ${
                    isActive
                      ? `${activeColor} border-sky-ocean`
                      : `${textColor} border-transparent hover:${activeColor}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Page counter */}
          <div className="hidden md:block font-mono-label text-[10px] text-sky-horizon">
            01 — 06
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Меню"
          >
            <div className={`w-5 h-[1.5px] ${dark ? "bg-sky-white" : "bg-sky-navy"}`} />
            <div className={`w-5 h-[1.5px] ${dark ? "bg-sky-white" : "bg-sky-navy"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col justify-center pl-9 pr-6"
          >
            <button
              className="absolute top-5 right-6 text-sky-navy text-[28px] font-light"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-l-2 border-sky-ocean pl-5"
                >
                  <Link
                    to={link.path}
                    className="font-display text-[30px] text-sky-navy block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label.toLowerCase()}
                  </Link>
                  <span className="font-jp text-[10px] text-sky-mist">{link.jp}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
