import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

const TypewriterText = ({ text, speed = 28, onComplete, className = "" }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="opacity-60">|</span>}
    </span>
  );
};

export default TypewriterText;
