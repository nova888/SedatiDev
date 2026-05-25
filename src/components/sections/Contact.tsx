import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Linkedin, Instagram, Github } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30 bg-radial-fade" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Kontak
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Mari Wujudkan <span className="text-gradient">Project Anda</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Konsultasi gratis. Tim kami siap membantu Anda merancang solusi terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@sedatidev.com" },
              { icon: Phone, label: "WhatsApp", value: "+62 812-3456-7890" },
              { icon: MapPin, label: "Lokasi", value: "Sedati, Sidoarjo, Indonesia" },
            ].map((c) => (
              <div key={c.label} className="gradient-border-glow rounded-2xl p-5 bg-surface flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-sm">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              {[Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-xl glass hover:bg-primary/20 hover:border-primary/30 transition flex items-center justify-center">
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 gradient-border-glow rounded-2xl p-6 md:p-8 bg-surface space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nama" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Perusahaan" name="company" />
            <div>
              <label className="text-xs text-muted-foreground">Pesan</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-xl bg-background/50 border border-input px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                placeholder="Ceritakan project Anda..."
              />
            </div>
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] disabled:opacity-50 transition"
            >
              {sent ? (<><Check className="h-4 w-4" /> Pesan terkirim!</>) : loading ? "Mengirim..." : (<>Kirim Pesan <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-background/50 border border-input px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        placeholder={label}
      />
    </div>
  );
}
