import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Financial Accountant (Contract) · Seattle, USA",
      company: "Partner Therapeutics",
      period: "Dec 2025 – Present",
      logo: "/PTX.png",
      logoClassName: "scale-110",
      responsibilities: [
        "Supported month-end close by preparing Excel-based headcount and payroll accrual schedules, recording $300K-$500K in monthly accrued expenses in QAD ERP.",
        "Tracked fixed assets totaling approximately $2M-$3M in book value, supporting asset transfers and reconciliations between Excel schedules and QAD general ledger balances.",
        "Assisted the accounting team with variance checks and supporting documentation to ensure accruals and fixed asset records were complete and audit-ready.",
      ],
    },
    {
      title: "Business Analyst · Seattle, USA",
      company: "Val-U-Max Consulting",
      period: "Mar 2025 – Nov 2025",
      logo: "/placeholder.svg",
      responsibilities: [
        "Analyzed logistics, packaging, and indirect spend using benchmark data and price trends, identifying 10-15% savings opportunities for clients.",
        "Built automated Power BI dashboards to track supplier performance, SKU-level costs, and contract compliance, improving reporting speed and accuracy.",
        "Worked with procurement and operations teams to consolidate vendors and reduce high-variance categories, strengthening negotiations and cost control.",
      ],
    },
    {
      title: "Financial Analyst (Full time) · Chennai, IND",
      company: "MSD Apparels",
      period: "May 2020 – Aug 2023",
      logo: "/placeholder.svg",
      responsibilities: [
        "Managed $1.3M in controllable spend across 22 stores using SAP FICO, improving forecast accuracy by 10-12% through tighter cost tracking and month-end reviews.",
        "Built Tableau dashboards to analyze SKU-level margins and store profitability, helping leadership identify underperforming locations and supporting a decision that saved $250K annually.",
        "Automated monthly invoice processing for $87K in vendor payments using Excel VBA, cutting processing time by 4 days and lowering manual errors by 40%.",
        "Prepared monthly P&L summaries, variance reports, and cost insights using SAP and Excel, enabling store managers to adjust staffing, pricing, and inventory decisions.",
      ],
    },
    {
      title: "Co-Founder / Head of Finance (Part time) · Chennai, IND",
      company: "Falcon3D",
      period: "Feb 2017 – Aug 2023",
      logo: "/Falcon.png",
      logoClassName: "object-center",
      responsibilities: [
        "Built pricing, budgeting, and billing processes for 3D printing and prototype orders using Excel and Power Query, supporting revenue growth from $60K to $250K across 35+ clients.",
        "Forecasted costs for filament, resin, aluminum frames, and imported printer parts, improving spend visibility and reducing budget variance by 20% ($15K+ avoided).",
        "Managed AR/AP, cash flow, GST filings, and vendor reconciliations, ensuring steady liquidity for production and client delivery.",
      ],
    },
    {
      title: "Credit & Business Analysis Intern · Chennai, IND",
      company: "HDFC Bank",
      period: "Nov 2019 – Jan 2020",
      logo: "/hdfc.webp",
      responsibilities: [
        "Analyzed SME financial statements and cash flows for loan underwriting, supporting credit decisions on portfolios totaling $1M+ using Excel-based risk and profitability models.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Experience
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-3 px-0 py-4 md:flex-row md:items-start md:gap-5">
                <div className="flex items-center gap-3 md:w-44">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className={`h-10 w-10 rounded-lg object-cover ${
                      exp.logoClassName || ""
                    }`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    {exp.title}
                  </p>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
