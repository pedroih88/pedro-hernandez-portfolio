const stats = [
  { value: "10+", label: "Years leading regulated programs" },
  { value: "250+", label: "SUPPLIERS GOVERNED" },
  { value: "0", label: "Major audit findings — ISO 13485 / 9001" },
  { value: "30%", label: "Validation cycle reduction" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 01 — Profile</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
            A practitioner who brings <em className="text-gold not-italic">rigor</em> and{" "}
            <em className="not-italic">calm</em> to high-stakes change.
          </h2>
          <div className="editorial-rule mt-8 max-w-[160px]" />
        </div>
        <div className="col-span-12 lg:col-span-8 lg:pl-8 lg:border-l border-border/60">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-body">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:font-light first-letter:text-emerald-deep first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              At HP Health Solutions and HP Inc., Pedro has led enterprise QMS migrations,
              supplier governance programs, and process validation efforts that support
              regulatory submissions and new-product introductions across global, matrixed
              organizations.
            </p>
            <p>
              He is recognized for translating evolving digital platforms and manufacturing
              processes into scalable, audit-ready systems — and for enabling cross-functional
              teams through periods of structural change with mentorship, governance, and
              disciplined program execution.
            </p>
            <p className="text-foreground/65 italic">
              "Combine engineering rigor with disciplined program execution, strong stakeholder
              alignment, and a people-centered leadership approach."
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">What I'm looking for</p>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg font-body">
              <p>
                Senior program, operations, or transformation roles where the mission matters,
                leadership is honest about the problem, and execution discipline is valued over
                performance theater. Open across MedTech, medical device, in vitro diagnostics,
                advanced manufacturing, and adjacent regulated and high-tech industries.
              </p>
              <p>
                If you're navigating a high-stakes program, scaling a quality system, or need
                someone to bring structure to a situation that's drifting —{" "}
                <a
                  href="#contact"
                  className="text-emerald-deep underline underline-offset-4 decoration-gold/60 hover:decoration-gold transition-colors text-lg border-dotted shadow-sm opacity-100 rounded-sm text-lime-800 bg-slate-200 border-0"
                >
                  let's talk
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 mt-12 rounded-sm overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-cream-soft p-6 group hover:bg-emerald-deep transition-colors duration-500">
                <div className="font-display text-4xl lg:text-5xl font-light text-emerald-deep group-hover:text-gold transition-colors duration-500">
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] tracking-widest uppercase text-muted-foreground group-hover:text-cream-soft/80 transition-colors duration-500 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
