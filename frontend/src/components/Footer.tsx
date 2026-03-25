const Footer = () => {
  return (
    <footer className="h-[52px] border-t border-sky-fog flex items-center justify-between px-6 md:px-10 max-w-[1400px] mx-auto">
      <span className="font-mono-label text-[10px] text-sky-horizon">
        Our Sky · さびな
      </span>
      <span className="font-body text-xs text-sky-mist">
        сделано с ♡
        <span className="ml-1" style={{ color: "hsl(212, 38%, 91%)" }}>·</span>
      </span>
    </footer>
  );
};

export default Footer;
