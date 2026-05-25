import { Target, Eye, Heart, Award } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Visi",
    text: "Menjadi mitra teknologi terdepan yang mendorong transformasi digital bisnis di Indonesia melalui AI dan inovasi.",
  },
  {
    icon: Target,
    title: "Misi",
    text: "Menghadirkan solusi digital, AI, dan otomasi yang scalable, terjangkau, dan berdampak nyata bagi klien.",
  },
  {
    icon: Heart,
    title: "Nilai",
    text: "Profesionalisme, inovasi, transparansi, dan komitmen panjang terhadap kesuksesan setiap project.",
  },
  {
    icon: Award,
    title: "Keunggulan",
    text: "Tim engineer berpengalaman, teknologi terkini, dan pendekatan riset-driven untuk hasil terbaik.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Membangun Masa Depan dengan{" "}
            <span className="text-gradient">Teknologi Cerdas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Sedati Dev adalah studio teknologi yang berfokus pada pengembangan website, web app,
            dan implementasi AI untuk membantu bisnis tumbuh lebih cepat di era digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="gradient-border-glow group relative rounded-2xl p-6 bg-surface hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 ring-1 ring-primary/30 group-hover:shadow-glow transition">
                <it.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
