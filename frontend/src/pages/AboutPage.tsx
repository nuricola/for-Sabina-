import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import aboutHero from "@/assets/about-hero.jpg";

const poem = [
  ["ты — не человек,", "ты — состояние.", "как утренний свет,", "как тёплый ветер."],
  ["я не знаю, как ты это делаешь —", "но рядом с тобой", "всё становится настоящим."],
  ["и я хочу быть рядом.", "просто — рядом.", "всегда."],
];

const qualities = [
  { num: "01", name: "Нежность", jp: "優しさ", desc: "Ты умеешь говорить без слов. Одним взглядом — всё." },
  { num: "02", name: "Сила", jp: "強さ", desc: "За мягкостью — внутренний стержень, который сильнее всего." },
  { num: "03", name: "Свет", jp: "光", desc: "Ты светишь. Не потому что стараешься — потому что это ты." },
  { num: "04", name: "Глубина", jp: "深さ", desc: "Ты чувствуешь всё — и это делает тебя невероятной." },
  { num: "05", name: "Красота", jp: "美しさ", desc: "Не только внешняя. Но внешняя тоже — невозможная." },
  { num: "06", name: "Смех", jp: "笑い", desc: "Твой смех — лучший звук на этой планете." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero */}
      <section className="relative w-full h-[72vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="photo-fade-bottom absolute inset-0" />
        <div className="absolute bottom-8 left-7 md:left-[72px]">
          <span className="section-label">02 · 彼女について</span>
          <h1 className="heading-cinematic text-[56px] mt-2">Сабина</h1>
        </div>
      </section>

      {/* Poem */}
      <section className="max-w-[560px] mx-auto py-24 px-6">
        <ScrollReveal>
          <div className="font-body text-[10px] text-sky-mist tracking-[2.5px] uppercase">
            СТИХОТВОРЕНИЕ · 詩
          </div>
          <div className="hairline mt-3" />
        </ScrollReveal>

        <div className="mt-[52px] space-y-9">
          {poem.map((stanza, si) => (
            <div key={si} className="space-y-1">
              {stanza.map((line, li) => (
                <ScrollReveal key={li} delay={si * 100 + li * 150}>
                  <p className="font-display italic text-[23px] text-sky-navy leading-[2.1]">
                    {line}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Qualities */}
      <section className="bg-cloud border-t border-sky-fog py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <div className="font-body text-[10px] text-sky-mist tracking-[2.5px] uppercase text-center mb-12">
              ТАКАЯ ОНА · 彼女らしさ
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualities.map((q, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="sky-card-hover p-7">
                  <span className="font-mono-label text-[10px] text-sky-ocean">{q.num}</span>
                  <h3 className="font-display text-2xl text-sky-navy mt-2">{q.name}</h3>
                  <span className="font-jp text-[10px] text-sky-mist">{q.jp}</span>
                  <p className="font-body text-sm text-sky-steel leading-relaxed mt-3">{q.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/animation"
              className="font-body text-[13px] text-sky-ocean hover:text-sky-deep transition-colors duration-[180ms]"
            >
              посмотри кое-что важное →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
