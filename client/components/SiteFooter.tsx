export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Paridha Talmale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
