import { Shield, Droplets, Plane } from "lucide-react";

const signals = [
  { icon: Shield, label: "100% Pure Essential Oils", sub: "Ethically sourced, lab certified" },
  { icon: Droplets, label: "Paraben & Alcohol-Free Options", sub: "Skin-safe concentrated elixirs" },
  { icon: Plane, label: "Express Global Shipping", sub: "Luxury packaging, worldwide delivery" },
];

const TrustSignals = () => (
  <section className="section-padding bg-secondary/30 border-y border-gold/10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {signals.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">{s.label}</h4>
          <p className="text-xs text-cream-muted">{s.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustSignals;
