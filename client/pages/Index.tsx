import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  TrendingUp,
  Timer,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const RESUME_URL =
  "https://cdn.builder.io/o/assets%2F17db03806b94418b9f29ad4f92804c87%2Ffc71e2920afa4ffbbbf2d972e367b64f?alt=media&token=62cbc3dd-7800-440b-8e6c-c66d8e00a576&apiKey=17db03806b94418b9f29ad4f92804c87";
const LINKEDIN_URL = "https://www.linkedin.com/in/paridha-talmale/";
const PROFILE_URL = "https://cdn.builder.io/api/v1/image/assets%2F17db03806b94418b9f29ad4f92804c87%2Fab736c5f55fc44db9444dd1b5f118631?format=webp&width=800";

export default function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-transparent"
      >
        <div className="absolute inset-0 -z-10 [background:radial-gradient(60rem_60rem_at_40%_-10%,hsl(var(--primary)/0.12),transparent)]" />
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:gap-16 md:grid-cols-2 md:items-start">
            <div className="md:pr-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary">Graduating May 2026</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:whitespace-nowrap">
                Paridha Talmale
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Master's in Engineering Management at Purdue (GPA 3.83). I drive
                innovation at the intersection of product, data, and
                operations—turning insights into impact through cross-functional
                leadership and execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={RESUME_URL} target="_blank" rel="noreferrer noopener">
                  <Button size="lg">Download Resume</Button>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <ExternalLink className="size-4" /> View LinkedIn
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" /> Reno, Nevada
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="size-4" /> Purdue University
                </span>
                <span className="inline-flex items-center gap-2">
                  <TrendingUp className="size-4" /> Data-driven,
                  operations-focused
                </span>
              </div>
            </div>
            <div className="md:ml-auto md:pl-4 flex flex-col items-center md:items-start gap-6">
              <img
                src={PROFILE_URL}
                alt="Paridha Talmale portrait"
                className="w-full max-w-sm rounded-2xl border shadow-md object-cover h-64 md:h-80"
                loading="eager"
              />
              <Card className="w-full max-w-sm md:max-w-md">
                <CardHeader>
                  <CardTitle>Key Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-extrabold">$3M+</div>
                  <p className="text-sm text-muted-foreground">
                    Excess inventory identified via real-time dashboard
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-extrabold">75% ↓</div>
                  <p className="text-sm text-muted-foreground">
                    Manual tracking effort eliminated (Palantir + WMS)
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-extrabold">20% ↑</div>
                  <p className="text-sm text-muted-foreground">
                    Efficiency improvement via fixture design optimization
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-extrabold">18% ↑</div>
                  <p className="text-sm text-muted-foreground">
                    Forecast accuracy boost; 75% cost reduction
                  </p>
                </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-8 rounded-xl border bg-card p-4 md:p-6 shadow-sm">
            <div className="flex flex-nowrap items-center gap-3 text-sm overflow-x-auto">
              <span className="uppercase tracking-wider text-xs font-semibold text-muted-foreground/70">Worked with</span>
              <Badge variant="outline" className="whitespace-nowrap">Panasonic Energy</Badge>
              <Badge variant="outline" className="whitespace-nowrap">BAE Systems</Badge>
              <Badge variant="outline" className="whitespace-nowrap">FinIQ Consulting</Badge>
              <Badge variant="outline" className="whitespace-nowrap">Mitacs Globalink - Canada</Badge>
              <Badge variant="outline" className="whitespace-nowrap">Bayer Crop Science</Badge>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Experience */}
      <section id="experience" className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        </div>
        <div className="grid gap-6">
          <ExperienceItem
            company="Panasonic Energy of North America - Gigafactory"
            role="Production & Operations Optimization Intern"
            location="Sparks, NV"
            period="May 2025 – Present"
            points={[
              "Built real-time inventory dashboard using Palantir + WMS; eliminated 75% manual tracking and flagged $3M+ excess inventory.",
              "Optimized electrode fixture design using ERP/WMS data; improved efficiency by 20% and delivered $96K potential savings.",
              "Executed cell can sampling kits to improve procurement and quality, lowering defect-related losses.",
            ]}
          />
          <ExperienceItem
            company="BAE Systems | The Data Mine – Purdue"
            role="Controls & Support Project Manager"
            location="West Lafayette, IN"
            period="Jan 2025 – May 2025"
            points={[
              "Led 15 engineers to build predictive sales forecasting with ML for supply chain/inventory ops.",
              "Increased forecast accuracy by 18% and reduced production costs by 75% via buyer segmentation and optimized order volumes.",
            ]}
          />
          <ExperienceItem
            company="FinIQ Consulting | B2B Financial Engineering Firm"
            role="Application Consultant"
            location="Pune, India"
            period="July 2023 – July 2024"
            points={[
              "Designed and implemented data-driven solutions for 7 global investment banks using Microsoft SQL Server, optimizing trade workflows through UAT and translating business requirements into technical specifications.",
              "Managed client relationships across Europe, Singapore, Malaysia, and Taiwan, achieving a 98% client satisfaction rate and improving operational efficiency with tailored financial engineering solutions.",
              "Led a cross-functional team of 6 to build an employee data management platform, improving efficiency by 20% via process optimization.",
            ]}
          />
          <ExperienceItem
            company="Mitacs Globalink – Dalhousie University"
            role="Research Intern"
            location="Nova Scotia, Canada"
            period="May 2022 – Aug 2022"
            points={[
              "Developed innovative data collection and calibration methods; reduced pesticide usage by 26%.",
              "Analyzed datasets across 150 acres to create prescription maps; presented actionable insights to stakeholders.",
            ]}
          />
        </div>
      </section>

      <Separator />

      {/* Projects */}
      <section id="projects" className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Bayer – Fresh Harvest 365"
            role="Program Manager"
            period="Aug 2024 – Dec 2024"
            location="St. Louis, MO"
            bullets={[
              "Led market analysis for vertical farming startup enabling employment for 12,000+ in food desert communities.",
              "Proposed Tableau exec dashboard to track $2M state savings and monitor KPIs/ROI across departments.",
            ]}
          />
          <ProjectCard
            title="Inertial Navigation System for Missiles"
            role="Systems Engineer"
            period="Aug 2022 – May 2023"
            location="Pune, India"
            bullets={[
              "Managed end-to-end prototype development; achieved 96.4% position and 95.32% orientation accuracy.",
              "Integrated accelerometer/gyroscope for robust real-time trajectory prediction in dynamic conditions.",
            ]}
          />
          <ProjectCard
            title="FSAE Team Octane Racing Electric"
            role="Technical Lead, Design Engineer"
            period="Feb 2021 – Feb 2022"
            location="Pune, India"
            bullets={[
              "Directed suspension system development; managed $53,000 budget and procurement to spec.",
              "Instituted quality checks reducing assembly errors by 15% across critical components.",
            ]}
          />
        </div>
      </section>

      <Separator />

      {/* Skills */}
      <section id="skills" className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[
                "SQL",
                "Python",
                "Palantir",
                "Tableau",
                "JIRA",
                "Microsoft Office",
                "Smartsheet",
                "CATIA",
                "ANSYS",
                "AutoCAD",
                "Fusion",
                "SolidWorks",
              ].map((s) => (
                <Badge key={s} variant="secondary" className="px-3 py-1">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Competencies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[
                "Porter’s 5 Forces",
                "Pyramid Principle",
                "Gantt Chart",
                "Agile",
                "Kanban",
                "Scrum",
                "GD&T",
                "BOM",
                "Data Analytics",
              ].map((s) => (
                <Badge key={s} className="px-3 py-1">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Education */}
      <section id="education" className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5" /> Purdue University
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">
                Master’s in Engineering Management (GPA: 3.83 / 4.00)
              </p>
              <p className="text-sm text-muted-foreground">
                Aug 2024 – May 2026 · West Lafayette, Indiana
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  Coursework: Project Management, Strategic Management,
                  Accounting for Managers, Marketing Management
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5" /> College of Engineering Pune
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">
                B.Tech Mechanical Engineering, Honors in Automotive Technology
                (GPA: 3.82 / 4.00)
              </p>
              <p className="text-sm text-muted-foreground">
                Aug 2019 – Aug 2023 · Pune, India
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  Coursework: EVs, Mechanical Design, Project Planning, Data
                  Analytics, Design Thinking
                </li>
                <li>
                  Member, School Council of Mechanical & Materials Engineering
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="container py-16 md:py-24">
        <div className="rounded-2xl border p-8 md:p-12 bg-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Let’s build impactful products
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                I love solving complex operational and product problems with
                data-driven execution.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" /> Reno, Nevada
                </span>
                <span className="inline-flex items-center gap-2">
                  <Timer className="size-4" /> Graduating May 2026
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[260px]">
              <a href="mailto:talmaleparidha@gmail.com">
                <Button className="w-full gap-2">
                  <Mail className="size-4" /> talmaleparidha@gmail.com
                </Button>
              </a>
              <a href="tel:+17657673025">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="size-4" /> (+1) 765-767-3025
                </Button>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                <Button variant="ghost" className="w-full gap-2">
                  <ExternalLink className="size-4" /> LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceItem({
  company,
  role,
  location,
  period,
  points,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span className="inline-flex items-center gap-2">
            <Building2 className="size-5" /> {company}
          </span>
          <span className="text-sm text-muted-foreground">
            {location} · {period}
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 text-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectCard({
  title,
  role,
  period,
  location,
  bullets,
}: {
  title: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span className="inline-flex items-center gap-2">
            <Briefcase className="size-5" /> {title}
          </span>
          <span className="text-sm text-muted-foreground">
            {location} · {period}
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {bullets.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 text-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
