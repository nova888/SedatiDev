import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import logo from "@/assets/sedati-logo.png";

const phrases = [
  "Website Modern",
  "AI Implementation",
  "Machine Learning",
  "Bisnis Masa Depan",
];

export function Hero() {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[pi];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPi((pi + 1) % phrases.length);
      } else {
        setText(deleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, pi]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid bg-radial-fade" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40"
           style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full blur-3xl opacity-30 animate-glow-pulse"
           style={{ background: "var(--gradient-glow)" }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary-glow animate-float"
          style={{
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 13) % 90}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 3)}s`,
            opacity: 0.5 + (i % 3) * 0.15,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <div className="flex justify-center mb-6 animate-fade-up">
          <div className="relative">
            <img src={logo} alt="Sedati Dev" className="h-24 w-24 md:h-28 md:w-28 animate-float" />
            <div className="absolute inset-0 blur-2xl opacity-60" style={{ background: "var(--gradient-glow)" }} />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          AI-Powered Digital Solutions
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
          <span className="text-gradient">Solusi Digital & AI</span>
          <br />
          untuk{" "}
          <span className="relative inline-block">
            <span className="text-gradient">{text}</span>
            <span className="inline-block w-0.5 h-[0.9em] bg-primary-glow ml-1 align-middle animate-blink" />
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-9 animate-fade-up">
          Kami membantu bisnis berkembang melalui teknologi website, data science, machine learning,
          deep learning, dan artificial intelligence kelas internasional.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition"
          >
            Konsultasi Sekarang
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
          >
            <Play className="h-4 w-4" />
            Lihat Portfolio
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            ["50+", "Project Selesai"],
            ["20+", "Happy Clients"],
            ["5+", "AI Technologies"],
            ["99%", "Satisfaction"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
