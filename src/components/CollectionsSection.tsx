import ProductCard from "./ProductCard";
import oudhVault from "@/assets/oudh-vault.jpg";
import ittars from "@/assets/ittars.jpg";
import fusionSpray from "@/assets/fusion-spray.jpg";
import geometricPattern from "@/assets/geometric-pattern.png";

const collections = [
  {
    category: "The Oudh Vault",
    tagline: "Pure Dahn Al Oudh & Woody Elixirs",
    products: [
      {
        image: oudhVault,
        name: "Royal Cambodian Oud",
        subtitle: "A deep, resinous Cambodian Oud with smoky leather undertones. Pure Dahn Al Oudh — aged 25 years.",
        price: "$285",
        intensity: 5,
        badge: "Vault Reserve",
        concentration: "12-Hour Wear",
      },
    ],
  },
  {
    category: "Concentrated Oils — Ittars",
    tagline: "Alcohol-Free Elixirs · Skin-Safe · Long-Lasting",
    products: [
      {
        image: ittars,
        name: "Saffron Mysore",
        subtitle: "Rare Kashmiri saffron meets Mysore sandalwood in this concentrated oil. An intimate, warm embrace that lasts all day.",
        price: "$145",
        intensity: 3,
        badge: "Alcohol-Free",
        concentration: "High Concentration",
      },
    ],
  },
  {
    category: "The French-Arabian Fusion",
    tagline: "Parisian Florals Meet Middle Eastern Base Notes",
    products: [
      {
        image: fusionSpray,
        name: "Rose de Taif × Oud",
        subtitle: "Taif rose absolute blended with Parisian iris and anchored by pure Cambodian oud. A bridge between two worlds.",
        price: "$195",
        intensity: 4,
        concentration: "Eau de Parfum Intense",
      },
    ],
  },
];

const CollectionsSection = () => (
  <section id="collections" className="section-padding relative">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: `url(${geometricPattern})`, backgroundSize: "400px" }}
    />
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-3">The Majlis Collection</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
          Curated for Connoisseurs
        </h2>
        <div className="divider-gold mb-6" />
        <p className="text-sm text-cream-muted max-w-xl mx-auto">
          Three pillars of olfactory excellence — each crafted for those who understand 
          that fragrance is an art form, not an accessory.
        </p>
      </div>

      {collections.map((col, idx) => (
        <div key={col.category} className="mb-20 last:mb-0">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{col.category}</h3>
            <span className="text-xs tracking-wider text-cream-muted italic">{col.tagline}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {col.products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
            {/* Placeholder cards for visual fullness */}
            {col.products.length < 3 && Array.from({ length: 3 - col.products.length }).map((_, i) => (
              <div key={i} className="luxury-card overflow-hidden flex flex-col">
                <div className="aspect-[3/4] bg-secondary/50 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-cream-muted mb-2">Coming Soon</p>
                    <p className="text-sm font-display text-primary/60 italic">
                      {idx === 0 ? "Indian Mysore Reserve" : idx === 1 ? "Amber Noir Ittar" : "Jasmine Grasse Fusion"}
                    </p>
                  </div>
                </div>
                <div className="p-5 flex-1 flex items-center justify-center">
                  <button className="btn-outline-gold text-[10px] px-5 py-2">Notify Me</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CollectionsSection;
