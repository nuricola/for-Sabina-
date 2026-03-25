import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const secretLetter = `Если ты здесь — значит, ты нашла скрытое.

Я не хотел писать это на виду. Некоторые вещи — только для нас.

Ты знаешь, что я не умею красиво говорить. Но я умею чувствовать. И то, что я чувствую к тебе — это больше, чем я могу выразить.

Ты — мой дом. Не место, не стены. Ты.

Когда ты улыбаешься — я знаю, что всё будет хорошо. Когда ты грустишь — я хочу забрать это. Когда ты далеко — я считаю дни.

Это не просто сайт. Это моя попытка показать тебе — ты важнее всего.

И если ты дочитала до сюда — значит, тебе не всё равно. А мне — тем более.

Я люблю тебя. Без условий. Без ограничений. Просто — люблю.`;

const SecretPage = () => {
  return (
    <div className="min-h-screen bg-secret">
      <NavBar />

      <div className="pt-28 pb-20 px-6 max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono-label text-[11px] text-sky-ocean">
            ты нашла это место · 見つけた
          </span>
        </div>

        {/* Secret letter */}
        <div className="bg-cloud border border-sky-fog rounded-lg p-8 md:p-12"
          style={{ boxShadow: "0 4px 32px hsla(204,69%,32%,0.07)" }}
        >
          <p className="font-display italic text-xl text-sky-deep mb-6">Сабина,</p>
          <div className="font-body text-base text-sky-steel leading-[1.8] whitespace-pre-line">
            {secretLetter}
          </div>
          <p className="font-display italic text-xl text-sky-navy text-right mt-8">
            Твой. Всегда.
          </p>
        </div>

        {/* Dream map placeholder */}
        <div className="mt-16">
          <div className="font-body text-[10px] text-sky-mist tracking-[2.5px] uppercase text-center mb-4">
            НАШИ МЕСТА · 私たちの場所
          </div>
          <div className="sky-card overflow-hidden" style={{ height: 500 }}>
            <div className="w-full h-full bg-sky-tint flex items-center justify-center">
              <div className="text-center">
                <span className="font-display italic text-sky-ocean text-lg">[ карта загружается ]</span>
                <p className="font-body text-xs text-sky-mist mt-2">Almaty · 43.238, 76.889</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="font-mono-label text-[10px] text-sky-mist">
              ❤ 0 мест вместе · ✦ 0 мечты
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecretPage;
