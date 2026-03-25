import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  life: number;
  maxLife: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    starsRef.current = Array.from({ length: 260 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 5000 + 2000,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "255,255,255" : "197,223,245",
    }));

    let animId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        const twinkle =
          0.3 + 0.7 * ((Math.sin(time / star.twinkleSpeed + star.twinkleOffset) + 1) / 2);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color},${twinkle * star.opacity})`;
        ctx.fill();
      });

      // Shooting stars
      if (time - lastShootingRef.current > (12000 + Math.random() * 6000)) {
        lastShootingRef.current = time;
        const angle = Math.PI / 6 + Math.random() * Math.PI / 6;
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * canvas.height * 0.3,
          angle,
          speed: 6 + Math.random() * 4,
          length: 60 + Math.random() * 40,
          life: 0,
          maxLife: 60,
        });
      }

      shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        const alpha = 1 - ss.life / ss.maxLife;

        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        gradient.addColorStop(0, `rgba(197,223,245,${alpha})`);
        gradient.addColorStop(1, "rgba(197,223,245,0)");

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        return ss.life < ss.maxLife;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default StarField;
