import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Berapa lama waktu pengerjaan website?", a: "Tergantung kompleksitas. Company profile umumnya 2-4 minggu, web app 1-3 bulan, dan project AI custom 1-6 bulan." },
  { q: "Apakah bisa custom AI sesuai kebutuhan bisnis?", a: "Tentu. Kami membangun model AI custom mulai dari chatbot, prediksi, computer vision, hingga otomasi workflow end-to-end." },
  { q: "Apakah menerima maintenance jangka panjang?", a: "Ya, kami menyediakan paket maintenance bulanan untuk monitoring, update, dan support teknis berkelanjutan." },
  { q: "Apakah website yang dibuat sudah responsive?", a: "Semua project kami mobile-first dan dioptimalkan untuk semua perangkat: mobile, tablet, desktop, dan ultrawide." },
  { q: "Teknologi apa yang biasanya digunakan?", a: "React, Next.js, TypeScript, Tailwind, Node.js, Python, TensorFlow, PyTorch, OpenAI API, PostgreSQL, Docker, dan banyak lagi." },
  { q: "Bagaimana proses konsultasi awal?", a: "Konsultasi awal gratis. Kami akan mendiskusikan kebutuhan, scope, timeline, dan estimasi budget secara transparan." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pertanyaan <span className="text-gradient">Umum</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="gradient-border-glow rounded-2xl bg-surface overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition"
              >
                <span className="font-medium text-sm md:text-base">{f.q}</span>
                <Plus className={`h-5 w-5 text-primary-glow shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
