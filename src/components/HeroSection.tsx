import heroBg from "@/assets/hero-bg.jpg";
import geometricPattern from "@/assets/geometric-pattern.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Noor Fragrances collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url(${geometricPattern})`, backgroundSize: "400px" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Where Heritage Meets Haute Parfumerie
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
          <span className="gold-gradient-text">NOOR</span>
          <br />
          <span className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light italic">
            Fragrances
          </span>
        </h1>
        <div className="divider-gold mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }} />
        <p className="text-sm md:text-base text-cream-muted max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          The Majlis Collection — Bridging the ancient perfumery traditions of Arabia 
          with the refined elegance of modern Asian luxury.
        </p>
        <p className="text-xs text-primary/80 tracking-[0.15em] uppercase mb-10 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          100% Pure Essential Oils · High Concentration · 12-Hour Wear
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a href="#collections" className="btn-luxury">
            Explore the Majlis
          </a>
          <a href="#layering" className="btn-outline-gold">
            The Art of Layering
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
