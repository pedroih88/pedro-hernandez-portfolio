const education = [
  { degree: "M.Eng., Project Management", school: "University of Maryland" },
  { degree: "B.S., Manufacturing Engineering", school: "Boston University" },
];

const certs = [
  "Project Management Professional (PMP) · PMI",
  "ISO 9001 Lead Auditor",
  "ISO 13485 Lead Auditor",
  "Lean Six Sigma — Green Belt",
  "APQP & PPA — Thors eLearning Solutions",
];

const tools = [
  "MS Project", "Smartsheet", "JIRA", "Miro", "Visio", "SharePoint",
  "Propel PLM", "Power BI", "Tableau", "SOP Authorship",
];

const Credentials = () => {
  return (
    <section id="credentials" className="relative py-24 lg:py-32 bg-cream border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Education */}
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 04 — Education</p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-emerald-deep leading-[1.05] mb-8">
              Trained in engineering. <em className="text-gold not-italic">Honed</em> in programs.
            </h2>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree} className="border-l-2 border-gold pl-5">
                  <div className="font-display text-lg text-emerald-deep">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 05 — Credentials</p>
            <h3 className="font-display text-xl text-emerald-deep mb-6">Active certifications</h3>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 text-foreground/80 text-sm">
                  <span className="text-gold font-display mt-0.5">◆</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6 italic">
              Languages — English (fluent) · Spanish (native & fluent)
            </p>
          </div>

          {/* Tools */}
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 06 — Toolkit</p>
            <h3 className="font-display text-xl text-emerald-deep mb-6">Working instruments</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="text-xs tracking-wider uppercase border border-emerald/30 text-emerald-deep px-3 py-1.5 rounded-sm hover:bg-emerald-deep hover:text-cream-soft transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service feature strip */}
        <div className="mt-20 bg-gradient-emerald rounded-sm p-10 lg:p-14 grid grid-cols-12 gap-8 items-center grain relative overflow-hidden">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 07 — Service Beyond Work</p>
            <h3 className="font-display font-light text-3xl lg:text-4xl text-cream-soft leading-[1.1] text-balance">
              Two decades developing youth — Scoutmaster, Troop Guide, high-adventure
              coordinator, and Eagle Scout Board of Review member.
            </h3>
            <p className="mt-5 text-cream-soft/70 text-base leading-relaxed max-w-2xl">
              Philmont · Northern Tier · National Youth Leadership Training. Active in natural
              conservation and cultural-awareness initiatives.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="inline-block">
              <div className="font-display text-7xl lg:text-8xl text-gold font-light leading-none">10+</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-cream-soft/60 mt-3">
                Years of volunteer service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
