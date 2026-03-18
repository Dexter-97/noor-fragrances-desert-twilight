import giftingImg from "@/assets/gifting.jpg";
import { Gift, Pen, Package } from "lucide-react";

const features = [
  { icon: Gift, title: "Silk-Lined Boxes", desc: "Hand-finished velvet boxes with magnetic closure" },
  { icon: Pen, title: "Calligraphy Notes", desc: "Personalized messages in Arabic or English script" },
  { icon: Package, title: "Premium Wrapping", desc: "Gold-embossed tissue and wax-sealed ribbons" },
];

const GiftingSection = () => (
  <section id="gifting" className="section-padding bg-secondary/20 border-y border-gold/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-3">The Luxury Gifting Suite</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-4">
            A Gift Beyond Compare
          </h2>
          <div className="divider-gold !mx-0 mb-8" />
          <p className="text-sm text-cream-muted leading-relaxed mb-8">
            Every Noor gift is an experience unto itself. From hand-selected silk-lined presentation boxes 
            to personalized calligraphy notes, we ensure the unboxing is as memorable as the scent within.
          </p>

          <div className="space-y-5 mb-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">{f.title}</h4>
                  <p className="text-xs text-cream-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-luxury">Explore Gifting</button>
        </div>

        <div className="luxury-card overflow-hidden">
          <img
            src={giftingImg}
            alt="Luxury gift set"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default GiftingSection;
