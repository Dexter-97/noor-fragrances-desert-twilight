import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const navLinks = [
  { label: "The Majlis", href: "#collections" },
  { label: "Layering", href: "#layering" },
  { label: "Raw Materials", href: "#ingredients" },
  { label: "Gifting", href: "#gifting" },
  { label: "Elite Circle", href: "#loyalty" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/10">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-display font-bold tracking-wider gold-gradient-text">
            NOOR
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-cream-muted">
            Fragrances
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-cream-muted hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-4 h-4 text-cream-muted hover:text-primary transition-colors cursor-pointer hidden md:block" />
          <User className="w-4 h-4 text-cream-muted hover:text-primary transition-colors cursor-pointer hidden md:block" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-4 h-4 text-cream-muted hover:text-primary transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-primary text-primary-foreground text-[8px] flex items-center justify-center font-bold">
              0
            </span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cream-muted"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-gold/10 animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.2em] uppercase text-cream-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
