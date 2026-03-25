import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-sky.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero — full viewport */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Photo */}
        <img
          src={heroImage}
          alt="Sky"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Fade overlay */}
        <div className="photo-fade-bottom absolute inset-0" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 px-7 pb-14 md:px-[72px] md:pb-[88px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="section-label">01 · 始まり</span>
          </motion.div>

          <motion.h1
            className="heading-cinematic text-[44px] md:text-[76px] mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ты изменила всё.
          </motion.h1>

          <motion.div
            className="accent-line my-[22px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="font-body text-base text-sky-steel leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            эта страница — для тебя. загляни внутрь.
          </motion.p>

          <motion.div
            className="mt-9"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link to="/about" className="sky-btn inline-block">
              ВОЙТИ →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
