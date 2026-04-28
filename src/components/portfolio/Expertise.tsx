const pillars = [
  {
    no: "I",
    title: "Audit Leadership",
    body: "ISO 9001 & ISO 13485 Lead Auditor; FDA 21 CFR 820; supplier audits; external audit readiness; remediation programs.",
  },
  {
    no: "II",
    title: "Quality Program Leadership",
    body: "eQMS / PLM migrations, supplier management process rollout, governance dashboards, risk management.",
  },
  {
    no: "III",
    title: "Regulatory Compliance",
    body: "FDA QMSR, EU MDR/IVDR, ISO 14971, IEC 62304, risk-based assessments, validation protocols.",
  },
  {
    no: "IV",
    title: "Customer Assurance",
    body: 'Global "War Rooms", recall management, diagnostic tool deployment, customer feedback integration.',
  },
  {
    no: "V",
    title: "Process Validation",
    body: "IQ / OQ / PQ, PFMEA, DFMEA, cleanroom operations (Class 7/8), lifecycle documentation.",
  },
  {
    no: "VI",
    title: "Program Methods",
    body: "PMP-based planning & communication, Process Validation FDA Guidance, NPI readiness, CAPEX execution, APQP-aligned planning.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-gradient-emerald text-cream-soft overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 02 — Capabilities</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.05]">
              Six pillars of <em className="text-gold not-italic">practiced</em> leadership.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-cream-soft/75 text-lg leading-relaxed">
              A practice built across regulated manufacturing, medical devices, and global
              operations — and refined through hundreds of audits, validations, and program
              cycles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-soft/10">
          {pillars.map((p) => (
            <article
              key={p.no}
              className="bg-emerald-deep p-8 lg:p-10 group hover:bg-emerald-mid transition-colors duration-500 cursor-default min-h-[260px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl font-light text-gold/80">{p.no}</span>
                <span className="w-8 h-px bg-cream-soft/30 mt-7 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl font-normal mb-4 text-cream-soft">{p.title}</h3>
              <p className="text-cream-soft/70 text-sm leading-relaxed font-body">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
