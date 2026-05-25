import { Users, Rocket, Headphones, Shield, Cpu, BadgeDollarSign, Layers } from "lucide-react";

const reasons = [
  { icon: Users, title: "Tim Profesional", text: "Engineer berpengalaman di multi industri." },
  { icon: Cpu, title: "Teknologi Modern", text: "Selalu update dengan stack terkini." },
  { icon: Headphones, title: "Support Cepat", text: "Respon cepat dan komunikasi jelas." },
  { icon: Layers, title: "Scalable", text: "Arsitektur dirancang untuk tumbuh." },
  { icon: Shield, title: "Keamanan", text: "Best practice security & compliance." },
  { icon: Rocket, title: "AI Integration", text: "Integrasi AI native dalam produk." },
  { icon: BadgeDollarSign, title: "Harga Kompetitif", text: "Value terbaik untuk investasi Anda." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Kenapa Memilih <span className="text-gradient">Sedati Dev</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="gradient-border-glow rounded-2xl p-5 bg-surface group hover:bg-surface-elevated transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30 group-hover:shadow-glow transition">
                  <r.icon className="h-4.5 w-4.5 text-primary-glow" />
                </div>
                <h3 className="font-semibold">{r.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground pl-13">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
