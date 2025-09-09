export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Paridha Talmale. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Open to roles: Product / Project / Program Manager, Business Analyst
        </p>
      </div>
    </footer>
  );
}
