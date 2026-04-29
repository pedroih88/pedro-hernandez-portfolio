const projects = [
  {
    no: "01",
    title: "Supplier Management Process & QMS Migration",
    org: "HP Health Solutions (HPHS)",
    scope:
      "Led the enterprise rollout of the Supplier Management Process and supported the migration to Propel PLM (eQMS/PLM) to strengthen scalability and compliance with ISO 13485, FDA 21 CFR 820, and EU MDR/IVDR.",
    methods: [
      "Conducted supplier audits and onboarding across 250+ vendors",
      "Applied ISO 13485 and FDA 21 CFR 820 to redesign workflows",
      "Coordinated QA, Legal, Operations, and Supply Chain via cross-functional team leadership and PM methodologies",
      "Delivered supplier training and compliance workshops across NA/EU",
    ],
    outcomes: [
      "Zero major audit findings across all suppliers",
      "Reduced compliance gaps by 40%",
      "Enabled multisite ISO 13485 certification and audit readiness",
      "Strengthened traceability and documentation control across the supply base",
    ],
  },
  {
    no: "02",
    title: "Customer Feedback & Product Identification Workflows",
    org: "HP Health Solutions (HPHS)",
    scope:
      "Designed and implemented integrated workflows for customer feedback, supplier qualification and audits, SCARS (CAPA), product identification, and contract management to support certification readiness.",
    methods: [
      "Led cross-functional teams using project management approaches",
      "Coordinated QA, Legal, Operations, and Supply Chain to align requirements",
      "Developed QMS training and documentation for global teams",
    ],
    outcomes: [
      "Improved traceability and compliance documentation",
      "Implemented KPI and OKR dashboards with monitoring & traceability",
      "Reduced CAPA and audit preparation cycle time",
      "Supported readiness for EU MDR/IVDR and ISO 13485 audits",
    ],
  },
  {
    no: "03",
    title: "Global Escalation & Recall Management — “War Rooms”",
    org: "HP Imaging & Printing Group (IPG) — Customer Assurance",
    scope:
      "Directed global escalation teams to manage recalls, high-risk customer issues, and field-performance crises for inkjet and 3D printing platforms.",
    methods: [
      "Deployed diagnostic tools and real-time telemetry dashboards",
      "Led structured, Hybrid-managed cross-functional War Rooms across engineering, QA, and field support",
      "Delivered bilingual training across LATAM and EMEA",
    ],
    outcomes: [
      "Reduced claims-resolution time by 50%",
      "Protected customer trust during high-risk events",
      "Integrated customer feedback into product development, influencing design improvements",
    ],
  },
  {
    no: "04",
    title: "Validation & Certification Readiness for IVD Manufacturing",
    org: "HP Health Solutions (HPHS)",
    scope:
      "Supported certification readiness for Class II IVD manufacturing under ISO 13485 and FDA 21 CFR 820.",
    methods: [
      "Streamlined IQ/OQ/PQ protocols and lifecycle documentation",
      "Applied Hybrid PM methodologies aligned with ISO 13485 and FDA expectations",
      "Incorporated APQP-aligned principles to strengthen planning structure",
      "Mentored engineering, QA, and operations teams in risk-based validation",
    ],
    outcomes: [
      "Reduced validation cycle time by 30%",
      "Strengthened compliance with FDA QMSR and ISO 13485",
      "Improved documentation quality and audit readiness",
    ],
  },
  {
    no: "05",
    title: "CAPEX & Technology Transfer Projects",
    org: "HP Inkjet Supplies Organization",
    scope:
      "Led CAPEX quality projects and technology transfers supporting cleanroom manufacturing operations.",
    methods: [
      "Applied GMP and ISO 9001 frameworks",
      "Managed equipment qualifications for Class 7/8 cleanrooms",
      "Used SPC and OEE to improve process reliability",
      "Applied Hybrid PM approaches to coordinate engineering, operations, and quality",
    ],
    outcomes: [
      "Delivered scalable cleanroom operations",
      "Improved equipment uptime and process stability",
      "Authored SOPs and compliance documentation supporting ISO submissions",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 05 — Career Portfolio
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Project portfolio in <em className="text-gold not-italic">quality, auditing &amp; compliance</em> leadership.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              Five flagship programs spanning supplier quality, QMS migration, global escalation
              management, IVD validation, and CAPEX technology transfer — delivered across HP
              Health Solutions, HP IPG Customer Assurance, and HP Inkjet Supplies under ISO 13485,
              FDA 21 CFR 820, EU MDR/IVDR, ISO 9001, and GMP frameworks.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-border">
          {projects.map((p) => (
            <article
              key={p.no}
              className="bg-cream p-8 lg:p-12 grid grid-cols-12 gap-6 lg:gap-10 group hover:bg-cream-soft transition-colors duration-500"
            >
              <div className="col-span-12 lg:col-span-3">
                <div className="font-display text-6xl lg:text-7xl font-light text-gold/80 leading-none">
                  {p.no}
                </div>
                <div className="mt-4 text-[11px] tracking-[0.3em] uppercase text-emerald-mid">
                  {p.org}
                </div>
                <div className="editorial-rule mt-6 max-w-[120px]" />
              </div>

              <div className="col-span-12 lg:col-span-9 lg:border-l border-border/70 lg:pl-10">
                <h3 className="font-display text-2xl lg:text-3xl font-light text-emerald-deep leading-snug">
                  {p.title}
                </h3>
                <p className="mt-5 text-foreground/80 leading-relaxed text-base lg:text-lg">
                  {p.scope}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                      Methods
                    </p>
                    <ul className="space-y-2.5">
                      {p.methods.map((m, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-display text-gold text-xs mt-1 tracking-widest">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:border-l border-border/70 md:pl-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                      Outcomes
                    </p>
                    <ul className="space-y-2.5">
                      {p.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-foreground/85 leading-relaxed"
                        >
                          <span className="text-gold text-xs mt-1.5">◆</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
