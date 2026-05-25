import {
  Globe, Code2, LayoutDashboard, Database, Brain, Cpu, Bot, Workflow, BarChart3,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Website modern, cepat, dan SEO-friendly dengan teknologi terkini." },
  { icon: LayoutDashboard, title: "Company Profile", desc: "Branding digital premium yang merepresentasikan bisnis Anda." },
  { icon: Code2, title: "Web Application", desc: "Aplikasi web custom scalable untuk operasional bisnis modern." },
  { icon: Database, title: "Data Science", desc: "Analisis data mendalam untuk pengambilan keputusan strategis." },
  { icon: Brain, title: "Machine Learning", desc: "Model ML prediktif untuk klasifikasi, regresi, dan rekomendasi." },
  { icon: Cpu, title: "Deep Learning", desc: "Solusi computer vision, NLP, dan neural network kompleks." },
  { icon: Bot, title: "AI Implementation", desc: "Integrasi LLM, chatbot, dan AI assistant ke produk Anda." },
  { icon: Workflow, title: "AI Automation", desc: "Otomasi workflow bisnis berbasis AI agar lebih efisien." },
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "Dashboard interaktif untuk monitoring KPI real-time." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30 bg-radial-fade" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Solusi Lengkap untuk{" "}
            <span className="text-gradient">Bisnis Digital</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Dari website company profile hingga implementasi AI tingkat enterprise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="gradient-border-glow group relative overflow-hidden rounded-2xl p-7 bg-surface hover:bg-surface-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 ring-1 ring-primary/30 group-hover:shadow-glow transition">
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
