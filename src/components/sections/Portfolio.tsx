import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "AI Customer Chatbot", category: "AI", tech: ["OpenAI", "Next.js", "Vector DB"], desc: "Chatbot berbasis LLM dengan retrieval augmented generation." },
  { title: "Sales Analytics Dashboard", category: "Dashboard", tech: ["React", "PostgreSQL", "Recharts"], desc: "Dashboard real-time untuk monitoring revenue & pipeline." },
  { title: "Corporate Profile Website", category: "Website", tech: ["Next.js", "Tailwind", "Framer"], desc: "Company profile premium untuk konsultan internasional." },
  { title: "Sales Forecast System", category: "AI", tech: ["Python", "PyTorch", "FastAPI"], desc: "Sistem prediksi penjualan dengan deep learning." },
  { title: "Modern E-Commerce", category: "Website", tech: ["Next.js", "Stripe", "Prisma"], desc: "E-commerce performant dengan integrasi payment & CMS." },
  { title: "ML Insight Platform", category: "Dashboard", tech: ["React", "TensorFlow.js"], desc: "Platform monitoring model ML dan eksperimen tracking." },
];

const cats = ["All", "AI", "Website", "Dashboard"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Project <span className="text-gradient">Pilihan Kami</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Beberapa hasil karya tim Sedati Dev untuk berbagai industri.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                active === c
                  ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow"
                  : "glass hover:bg-white/10 text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => (
            <article
              key={p.title}
              className="gradient-border-glow group relative overflow-hidden rounded-2xl bg-surface hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.30 0.18 258) 0%, oklch(0.18 0.10 230) 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl glass-strong flex items-center justify-center text-2xl font-bold text-gradient">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass text-[10px] font-medium uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-glow transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-primary/10 text-primary-glow border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-3 py-2 text-xs font-medium text-primary-foreground">
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg glass hover:bg-white/10 px-3 py-2 text-xs font-medium">
                    Detail <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
