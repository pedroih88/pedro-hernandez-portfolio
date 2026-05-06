const artifacts = [
  {
    no: "03",
    title: "ISO 13485 + FDA QMSR Readiness Map",
    status: "Beta Test",
    body: "Cross-walk and gap-assessment tool aligning ISO 13485:2016, FDA QMSR (21 CFR 820 harmonization), and MDSAP into a single audit-ready operating model.",
  },
];

const Artifacts = () => {
  return (
    <section
      id="artifacts"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 03 — Artifact Under Development
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Frameworks, playbooks, and tools — <em className="text-gold not-italic">in active build</em>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              A working asset distilled from 30+ years of program and quality
              leadership — engineered to compress decision time, reduce ambiguity, and make
              complex compliance environments operable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {artifacts.map((a) => (
            <article
              key={a.no}
              className="bg-cream-soft p-8 lg:p-10 group hover:bg-cream transition-colors duration-500 min-h-[280px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl font-light text-gold/80 leading-none">
                  {a.no}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-mid border border-emerald-mid/30 px-2 py-1 rounded-sm">
                  {a.status}
                </span>
              </div>
              <h4 className="font-display text-xl lg:text-2xl font-normal text-emerald-deep mb-3 leading-snug">
                {a.title}
              </h4>
              <p className="text-foreground/75 text-sm leading-relaxed font-body">
                {a.body}
              </p>
              <div className="mt-auto pt-6">
                <span className="w-8 h-px bg-emerald-deep/20 inline-block group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground italic">
          Interested in early access or collaboration on a specific artifact? Reach out via the Contact section.
        </p>
      </div>
    </section>
  );
};

export default Artifacts;
