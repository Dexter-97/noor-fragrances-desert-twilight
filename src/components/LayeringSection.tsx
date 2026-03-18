import layeringSet from "@/assets/layering-set.jpg";

const LayeringSection = () => (
  <section id="layering" className="section-padding bg-secondary/20 border-y border-gold/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="luxury-card overflow-hidden">
          <img
            src={layeringSet}
            alt="The Art of Layering"
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-cream-muted mb-3">Signature Experience</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-4">
            The Art of Layering
          </h2>
          <div className="divider-gold !mx-0 mb-8" />
          <p className="text-sm text-cream-muted leading-relaxed mb-6">
            In the tradition of Arabian perfumery, true connoisseurs layer scents to create 
            a signature that is uniquely theirs. Begin with a concentrated Ittar as your 
            intimate base, then crown it with a French-Arabian spray for majestic projection.
          </p>

          {/* Layering steps */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start p-4 gold-border-hover rounded-sm">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-xs text-primary font-bold shrink-0">1</span>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Choose Your Base Ittar</h4>
                <p className="text-xs text-cream-muted">A concentrated, alcohol-free oil worn close to the skin for lasting warmth.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 gold-border-hover rounded-sm">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-xs text-primary font-bold shrink-0">2</span>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Crown with a Spray</h4>
                <p className="text-xs text-cream-muted">An alcoholic EDP that projects your scent with elegance and sillage.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 gold-border-hover rounded-sm">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-xs text-primary font-bold shrink-0">3</span>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Your Signature Emerges</h4>
                <p className="text-xs text-cream-muted">A bespoke scent profile that evolves throughout the day — truly yours.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-luxury">Curate Your Set — Save 20%</button>
            <button className="btn-outline-gold">Explore Combinations</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LayeringSection;
