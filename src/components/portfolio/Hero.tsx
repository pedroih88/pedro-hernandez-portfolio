import Monogram from "./Monogram";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative top meta bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
        <span className="col-span-6 md:col-span-3">Vol. XX · No. 04</span>
        <span className="hidden md:block col-span-3">Corvallis, Oregon</span>
        <span className="hidden md:block col-span-3">Quality · Programs · People</span>
        <span className="col-span-6 md:col-span-3 text-right">Portfolio · 2026</span>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left — main headline */}
        <div className="col-span-12 lg:col-span-8 animate-fade-up">
          <p className="font-display text-sm tracking-[0.4em] uppercase text-emerald-mid mb-6">
            The Feature — A Senior Leader's Portfolio
          </p>
          <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] text-emerald-deep text-balance">
            Building quality systems
            <br />
            that <em className="text-gold not-italic font-normal">scale</em>,
            <br />
            programs that <em className="not-italic italic font-light">endure</em>.
          </h1>
          <div className="editorial-rule animate-rule mt-10 max-w-md" />
          <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-relaxed font-body">
            Pedro I. Hernández is a senior Program & Quality leader with 10+ years orchestrating
            enterprise QMS migrations, supplier governance, and audit-ready operations across
            medical devices, regulated manufacturing, and global high-tech.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-emerald-deep text-cream-soft px-7 py-3.5 rounded-sm shadow-elegant hover:shadow-gold transition-all duration-500"
            >
              <span className="text-sm tracking-wider uppercase">Open the Conversation</span>
              <span className="w-6 h-px bg-gold transition-all duration-500 group-hover:w-10" />
            </a>
            <a
              href="#experience"
              className="text-sm tracking-wider uppercase text-emerald-deep hover:text-gold transition-colors px-4 py-3"
            >
              Read the dossier ↓
            </a>
          </div>
        </div>

        {/* Right — monogram card */}
        <div className="col-span-12 lg:col-span-4 animate-fade-in">
          <div className="relative">
            <div className="relative bg-gradient-emerald rounded-sm p-10 shadow-elegant overflow-hidden grain">
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[9px] tracking-[0.3em] uppercase text-cream-soft/60">
                <span>P · I · H</span>
                <span>2026</span>
              </div>
              <div className="flex items-center justify-center py-6">
                <Monogram size={240} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[9px] tracking-[0.3em] uppercase text-cream-soft/60">
                <span>ISO 9001 · 13485</span>
                <span>PMP</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="tracking-widest uppercase">Plate I.</span>
              <span className="italic">"Structure & clarity in change."</span>
            </div>
          </div>
        </div>
      </div>

      {/* Big background mark */}
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 font-display text-[22rem] leading-none text-emerald-deep/[0.04] select-none pointer-events-none hidden lg:block"
      >
        PIH
      </div>
    </section>
  );
};

export default Hero;
