import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Andi Pratama", role: "CEO, TechVision", text: "Hasil website-nya luar biasa. Tim Sedati Dev sangat profesional dan responsif. Performa & desain top!" },
  { name: "Sarah Wijaya", role: "Founder, Bloomly", text: "Implementasi AI chatbot mereka berhasil meningkatkan konversi kami hingga 40%. Sangat recommended." },
  { name: "Budi Hartono", role: "CTO, FinSmart", text: "Dashboard analytics yang dibangun sangat detail dan real-time. Sangat membantu pengambilan keputusan." },
  { name: "Maya Putri", role: "Marketing Lead", text: "Company profile yang dibuat benar-benar premium. Klien kami terkesan sejak first impression." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Testimoni
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Apa Kata <span className="text-gradient">Klien Kami</span>
          </h2>
        </div>

        <div className="relative gradient-border-glow rounded-3xl p-8 md:p-12 bg-surface text-center min-h-[280px]">
          <Quote className="h-10 w-10 text-primary-glow mx-auto mb-5 opacity-60" />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
            "{items[i].text}"
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-primary-glow text-primary-glow" />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-bold text-primary-foreground">
              {items[i].name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">{items[i].name}</div>
              <div className="text-xs text-muted-foreground">{items[i].role}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary-glow" : "w-1.5 bg-white/20"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
