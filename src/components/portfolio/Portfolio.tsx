const artifacts = [
  {
    no: "01",
    tag: "Supplier Quality",
    title: "AI-Enabled Supplier Quality Assessment Workflow",
    lede:
      "Reimagining supplier qualification and ongoing monitoring with NLP-driven document ingestion, dynamic ML-based risk scoring, and automated audit orchestration — replacing static quarterly reviews with continuous supplier health intelligence.",
    capabilities: [
      "NLP analysis of qualification packages, certificates, and audit reports",
      "Dynamic supplier risk scoring tuned to product criticality and risk appetite",
      "Audit scheduling auto-triggered by risk thresholds and regulatory calendars",
      "Root-cause pattern recognition across CAPA databases",
      "Real-time dashboards with commodity, regional, and risk-category drill-downs",
    ],
    standards: ["ISO 13485:2016 §7.4", "FDA 21 CFR 820.50", "ISO 9001"],
    integrations: "MasterControl · Veeva · ETQ",
  },
  {
    no: "02",
    tag: "Digital Transformation",
    title: "Digital Transformation in Regulated Operations — Mini Portfolio",
    lede:
      "A consulting-ready vision for layering AI, IoT, cloud QMS, and analytics onto validated processes without disrupting compliance — spanning maturity assessment, a process-validation digital twin, AI-augmented document control, and a connected training platform.",
    capabilities: [
      "Five-dimension QMS maturity model with AI-generated improvement roadmaps",
      "IQ / OQ / PQ digital twin with real-time SPC and Cpk/Ppk trending",
      "AI-augmented document control with regulatory-impact flagging",
      "Connected training platform with competency-gap detection",
      "Continuous-assurance model in place of point-in-time validation",
    ],
    standards: ["ISO 13485:2016", "FDA 21 CFR 820", "21 CFR Part 11", "GAMP 5"],
    integrations: "MES · IoT · eQMS · LMS",
  },
  {
    no: "03",
    tag: "Risk Management",
    title: "AI-Enabled Risk Management & Dynamic Risk Register",
    lede:
      "A living risk register that ingests operational, supplier, and regulatory intelligence in real time — combining classical S × O × D scoring with predictive confidence, Bayesian cascade analysis, and ranked mitigation recommendations.",
    capabilities: [
      "Continuous risk monitoring replacing periodic static assessments",
      "Multi-source ingestion: MES, eQMS, ERP, regulatory intelligence feeds",
      "NLP analysis of quality-event narratives surfacing emerging failure modes",
      "Bayesian cascade analysis predicting cross-functional risk propagation",
      "Mitigation recommendations ranked by predicted effectiveness, cost, and time-to-closure",
    ],
    standards: ["ISO 14971:2019", "ISO 13485:2016 §8.2.1", "ICH Q9"],
    integrations: "MES / ERP · OPC-UA · REST APIs",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-cream-soft"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 04 — Proof of Work
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              An AI-enabled <em className="text-gold not-italic">quality &amp; operations</em> portfolio.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              Three interconnected artifacts translating AI from concept into compliance-ready
              workflow — designed and prototyped through hands-on AI collaboration, grounded in
              ISO 13485, FDA 21 CFR 820, ISO 14971, and APQP / PPAP discipline.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-border">
          {artifacts.map((a) => (
            <article
              key={a.no}
              className="bg-cream p-8 lg:p-12 grid grid-cols-12 gap-6 lg:gap-10 group hover:bg-cream-soft transition-colors duration-500"
            >
              <div className="col-span-12 lg:col-span-3">
                <div className="font-display text-6xl lg:text-7xl font-light text-gold/80 leading-none">
                  {a.no}
                </div>
                <div className="mt-4 text-[11px] tracking-[0.3em] uppercase text-emerald-mid">
                  {a.tag}
                </div>
                <div className="editorial-rule mt-6 max-w-[120px]" />
              </div>

              <div className="col-span-12 lg:col-span-9 lg:border-l border-border/70 lg:pl-10">
                <h3 className="font-display text-2xl lg:text-3xl font-light text-emerald-deep leading-snug">
                  {a.title}
                </h3>
                <p className="mt-5 text-foreground/80 leading-relaxed text-base lg:text-lg">
                  {a.lede}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
                  <div className="md:col-span-7">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                      Key capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {a.capabilities.map((c, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-display text-gold text-xs mt-1 tracking-widest">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5 md:border-l border-border/70 md:pl-8 space-y-6">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                        Regulatory alignment
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {a.standards.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] tracking-wider uppercase border border-emerald-deep/30 text-emerald-deep px-2.5 py-1 rounded-sm"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                        Integration surface
                      </p>
                      <p className="text-sm text-foreground/75 italic">{a.integrations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-xs tracking-widest uppercase text-muted-foreground text-center">
          Prototyped with AI collaboration · Designed for regulated, compliance-critical environments
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
