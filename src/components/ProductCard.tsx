import IntensityScale from "./IntensityScale";

interface ProductCardProps {
  image: string;
  name: string;
  subtitle: string;
  price: string;
  intensity: number;
  badge?: string;
  concentration?: string;
}

const ProductCard = ({ image, name, subtitle, price, intensity, badge, concentration }: ProductCardProps) => (
  <div className="luxury-card group overflow-hidden flex flex-col">
    <div className="relative overflow-hidden aspect-[3/4]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      {badge && (
        <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 font-semibold">
          {badge}
        </span>
      )}
      {concentration && (
        <span className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm text-primary text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-gold/20">
          {concentration}
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col gap-3 flex-1">
      <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-xs text-cream-muted leading-relaxed flex-1">{subtitle}</p>
      <IntensityScale level={intensity} />
      <div className="flex items-center justify-between mt-2 pt-3 border-t border-gold/10">
        <span className="text-lg font-display font-bold text-primary">{price}</span>
        <button className="btn-luxury text-[10px] px-5 py-2">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
