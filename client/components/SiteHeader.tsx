import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const RESUME_URL = "https://cdn.builder.io/o/assets%2F17db03806b94418b9f29ad4f92804c87%2F0154cd5ff62a47908f7f7cbbaafd56f3?alt=media&token=adbeab9b-9855-4af1-87bd-88791e0a3b25&apiKey=17db03806b94418b9f29ad4f92804c87";
const LINKEDIN_URL = "https://www.linkedin.com/in/paridha-talmale/";

export function SiteHeader() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight">
          <span className="text-primary">Paridha</span>
          <span className="text-foreground"> Talmale</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Button variant="outline" className="gap-2">
              <Linkedin className="size-4" />
              <span className="hidden md:inline">LinkedIn</span>
            </Button>
          </a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer noopener">
            <Button>Download Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
