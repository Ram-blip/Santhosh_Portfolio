import { MapPin, Briefcase, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ProfileSection() {
  return (
    <section className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="h-28 w-28 overflow-hidden rounded-2xl border border-border/50 bg-card/80 dark:border-border/60">
          <Image
            src="/rafaa.jpg"
            alt="Santhosh Kumar Gopinath"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Santhosh Kumar Gopinath
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5" />
              Financial Accountant
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Seattle, WA
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="w-full sm:w-auto">
            <Link
              href="/SanthoshKumarGopinath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="mailto:santhoshkumar3730@gmail.com">
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/santhoshkumargopinath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
