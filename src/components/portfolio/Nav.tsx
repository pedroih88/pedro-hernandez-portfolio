import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#portfolio", label: "Value Proposition" },
  { href: "#artifacts", label: "Artifacts Under Development" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-soft/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-display text-xl tracking-tight text-emerald-deep">
            Pedro I. Hernández
          </span>
          <span className="hidden md:inline text-[10px] tracking-[0.25em] text-muted-foreground uppercase border-l border-border pl-3 text-center">
            Quality · Programs
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-emerald-deep transition-colors relative group text-center"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
