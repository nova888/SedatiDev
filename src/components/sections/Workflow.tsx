const steps = [
  { n: "01", t: "Konsultasi", d: "Diskusi kebutuhan, tujuan, dan target bisnis Anda." },
  { n: "02", t: "Analisis", d: "Riset, pemetaan, dan dokumentasi requirement." },
  { n: "03", t: "Desain UI/UX", d: "Wireframe, mockup, dan prototype interaktif." },
  { n: "04", t: "Development", d: "Implementasi dengan teknologi modern & best practice." },
  { n: "05", t: "Testing", d: "QA mendalam: fungsional, performa, dan keamanan." },
  { n: "06", t: "Deployment", d: "Go-live cepat dengan infrastruktur production-ready." },
  { n: "07", t: "Maintenance", d: "Monitoring, update, dan support berkelanjutan." },
];

export function Workflow() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Alur Kerja <span className="text-gradient">Profesional</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-6 md:space-y-12">
            {steps.map((s, i) => (
              <div key={s.n} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 md:max-w-md">
                  <div className="gradient-border-glow rounded-2xl p-6 bg-surface">
                    <div className="text-xs font-mono text-primary-glow mb-1">STEP {s.n}</div>
                    <h3 className="text-xl font-semibold mb-1.5">{s.t}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
                <div className="relative z-10 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-bold shadow-glow shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
