const Footer = () => (
  <footer className="section-padding bg-secondary/30 border-t border-gold/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <span className="text-2xl font-display font-bold gold-gradient-text">NOOR</span>
          <p className="text-[9px] tracking-[0.35em] uppercase text-cream-muted mt-1 mb-4">Fragrances</p>
          <p className="text-xs text-cream-muted leading-relaxed">
            Heritage. Artistry. Luxury.
            <br />
            Crafted at the crossroads of East and West.
          </p>
        </div>

        {/* Links */}
        {[
          { title: "Collections", links: ["The Oudh Vault", "Concentrated Ittars", "French-Arabian Fusion", "Layering Sets"] },
          { title: "Maison", links: ["Our Story", "Raw Materials", "Craftsmanship", "Sustainability"] },
          { title: "Service", links: ["Contact Us", "Shipping & Returns", "FAQs", "The Elite Circle"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-cream-muted hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider-gold !w-full mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-cream-muted">© 2026 Noor Fragrances. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#" className="text-[10px] text-cream-muted hover:text-primary transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
