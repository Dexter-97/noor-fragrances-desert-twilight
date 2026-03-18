import { Crown, Star, Gift } from "lucide-react";

const tiers = [
  { icon: Star, name: "Connoisseur", spend: "First Purchase", perks: ["Welcome gift", "Early access to new launches", "Birthday exclusive"] },
  { icon: Crown, name: "Aficionado", spend: "$500+ Lifetime", perks: ["10% on all orders", "Complimentary engraving", "Private consultations"] },
  { icon: Gift, name: "Patron", spend: "$2,000+ Lifetime", perks: ["15% on all orders", "Bespoke layering sessions", "Annual vault reserve access"] },
];

const LoyaltySection = () => (
  <section id="loyalty" className="section-padding relative">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-3">Rewards for Devotees</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-4">
        The Elite Circle
      </h2>
      <div className="divider-gold mb-6" />
      <p className="text-sm text-cream-muted max-w-xl mx-auto mb-12">
        Join our inner circle and receive exclusive privileges reserved for those who 
        appreciate the finest fragrances on earth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <div key={tier.name} className={`luxury-card p-8 flex flex-col items-center text-center ${idx === 2 ? 'gold-border' : ''}`}>
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4">
              <tier.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-1">{tier.name}</h3>
            <p className="text-[10px] tracking-[0.15em] uppercase text-primary/70 mb-5">{tier.spend}</p>
            <ul className="space-y-2.5 w-full">
              {tier.perks.map((perk) => (
                <li key={perk} className="text-xs text-cream-muted flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="btn-luxury mt-10">Join the Elite Circle</button>
    </div>
  </section>
);

export default LoyaltySection;
