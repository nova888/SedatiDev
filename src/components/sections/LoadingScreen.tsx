import { useEffect, useState } from "react";
import logo from "@/assets/sedati-logo.png";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1200);
    const t2 = setTimeout(() => setHide(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-grid opacity-40 bg-radial-fade" />
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl animate-glow-pulse" style={{ background: "var(--gradient-glow)" }} />
          <img src={logo} alt="Sedati Dev" className="relative h-24 w-24 animate-float" />
        </div>
        <div className="mt-6 text-lg font-bold tracking-tight">
          Sedati<span className="text-primary">Dev</span>
        </div>
        <div className="mt-4 h-0.5 w-32 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary-glow animate-[marquee_1.2s_ease-out_forwards]" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
