import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectsSection() {
  const projects: Array<{
    title: string
    subtitle: string
    description: string
    viewUrl: string
  }> = [
    {
      title: "Apple TV+ Formula One Strategy Analysis",
      subtitle: "Financial Modeling",
      description:
        "Developed a $1.05B investment financial model projecting $2.2B profit over 5 years and evaluating a 5-7M subscriber acquisition strategy. Analyzed demand engineering and competitive positioning vs. Netflix to justify $1.05B spending for ecosystem lock-in and customer lifetime value.",
      viewUrl:
        "https://drive.google.com/file/d/1_jZHzztRy6tK2KF9RgAb9fNCfDxn9xj8/view",
    },
    {
      title: "Xbox GamePass Tiered Pricing Profitability Model",
      subtitle: "Subscription Finance Modeling",
      description:
        "Built a multi-tier financial model (Standard, Premium, Ultimate) simulating churn, ARPU, CAC, and breakeven timelines. Forecasted subscriber growth from 5M to 30M and benchmarked pricing and retention vs. EA Play and PS Plus.",
      viewUrl:
        "https://docs.google.com/document/d/144E-MvbatSYVLd3Ii-HM05Dpphk4qwxKCwXEqXfsvkU/edit?tab=t.0",
    },
  ]

  return (
    <section
      id="projects"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Projects
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-3 px-0 py-3 md:flex-row md:items-center md:gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                {project.viewUrl && (
                  <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap md:justify-end">
                    {project.viewUrl && (
                      <Button asChild size="sm" className="w-full sm:w-auto">
                        <Link
                          href={project.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
