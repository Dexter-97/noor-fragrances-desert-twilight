import saffron from "@/assets/saffron.jpg";
import sandalwood from "@/assets/sandalwood.jpg";
import taifRose from "@/assets/taif-rose.jpg";
import cambodianOud from "@/assets/cambodian-oud.jpg";

const ingredients = [
  { image: saffron, name: "Kashmiri Saffron", origin: "Kashmir, India", note: "Warm, honeyed, leathery — the world's most precious spice." },
  { image: sandalwood, name: "Mysore Sandalwood", origin: "Karnataka, India", note: "Creamy, meditative, celestial — liquid gold of the East." },
  { image: taifRose, name: "Taif Rose", origin: "Taif, Saudi Arabia", note: "Velvety, spiced, intoxicating — harvested at dawn." },
  { image: cambodianOud, name: "Cambodian Oud", origin: "Pursat, Cambodia", note: "Deep, resinous, transcendent — aged agarwood perfection." },
];

const IngredientsSection = () => (
  <section id="ingredients" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-3">Sourced with Reverence</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-4">
          Raw Materials
        </h2>
        <div className="divider-gold" />
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
        {ingredients.map((ing) => (
          <div key={ing.name} className="luxury-card min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img
                src={ing.image}
                alt={ing.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{ing.name}</h3>
              <p className="text-[10px] tracking-[0.15em] uppercase text-primary/70 mb-3">{ing.origin}</p>
              <p className="text-xs text-cream-muted leading-relaxed italic">{ing.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
