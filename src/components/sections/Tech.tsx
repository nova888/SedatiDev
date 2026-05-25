const stacks = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python",
  "TensorFlow", "PyTorch", "OpenAI", "PostgreSQL", "Docker", "Firebase",
  "Vercel", "AWS", "FastAPI", "LangChain",
];

export function Tech() {
  const row = [...stacks, ...stacks];
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
          Tech Stack
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Teknologi <span className="text-gradient">Modern & Terpercaya</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Stack teknologi terkini untuk performa, skalabilitas, dan keandalan maksimal.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-4 animate-marquee w-max">
          {row.map((s, i) => (
            <div
              key={i}
              className="glass rounded-xl px-6 py-4 min-w-[160px] text-center text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-12 grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          ["Frontend", "React, Next.js, Tailwind"],
          ["Backend", "Node.js, FastAPI"],
          ["AI & ML", "TensorFlow, PyTorch, OpenAI"],
          ["Database", "PostgreSQL, Firebase"],
          ["Cloud & DevOps", "Docker, Vercel, AWS"],
        ].map(([t, d]) => (
          <div key={t} className="gradient-border-glow rounded-2xl p-5 bg-surface">
            <div className="text-sm font-semibold text-primary-glow">{t}</div>
            <div className="text-xs text-muted-foreground mt-1.5">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
