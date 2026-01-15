import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function EducationSection() {
  const educationEntries = [
    {
      institution: "University of California, Riverside",
      degree: "Master of Science in Finance",
      period: "Sep 2023 – Dec 2024",
      logo: "/UCR.png",
    },
    {
      institution: "Loyola College, Chennai",
      degree: "Bachelors in Accounting & Finance",
      period: "Jun 2016 – Mar 2019",
      logo: "/Loyola.png",
    },
  ]

  return (
    <section
      id="education"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Education
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {educationEntries.map((edu, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-2 px-0 py-0">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      width={36}
                      height={36}
                      className="h-7 w-7 rounded-lg object-cover"
                    />
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-foreground">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight md:text-right">
                    {edu.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
