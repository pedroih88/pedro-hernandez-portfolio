import pmpBadge from "@/assets/pmp-badge.png";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-10 items-end">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 08 — Closing</p>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-emerald-deep leading-[1] text-balance">
            Open to senior roles where{" "}
            <em className="text-gold not-italic">quality systems leadership</em> drives
            measurable organizational impact.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l border-border/70 space-y-6">
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
              Correspondence
            </div>
            <a
              href="mailto:ordepih@outlook.com"
              className="font-display text-xl text-emerald-deep hover:text-gold transition-colors break-all"
            >
              ordepih@outlook.com
            </a>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
              Telephone
            </div>
            <a
              href="tel:+19396449251"
              className="font-display text-xl text-emerald-deep hover:text-gold transition-colors"
            >
              (939) 644-9251
            </a>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
              Located
            </div>
            <div className="font-display text-xl text-emerald-deep">Corvallis, Oregon</div>
          </div>
          <div className="pt-2">
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
              Certification
            </div>
            <img
              src={pmpBadge}
              alt="Project Management Professional (PMP)® Certification Badge"
              className="w-24 h-auto object-contain"
            />
          </div>
          <div className="pt-4">
            <a
              href="https://linkedin.com/in/pedro-i-hernandez-perez"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-emerald-deep text-cream-soft px-6 py-3 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              <span className="text-sm tracking-wider uppercase">Connect on LinkedIn</span>
              <span className="w-5 h-px bg-gold transition-all duration-500 group-hover:w-9" />
            </a>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span>© {new Date().getFullYear()} Pedro I. Hernández — All rights reserved</span>
        <span>Designed as an editorial dossier · Set in Outfit & Figtree</span>
      </footer>
    </section>
  );
};

export default Contact;
