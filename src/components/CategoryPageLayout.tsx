import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CategoryPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
}

const CategoryPageLayout = ({ title, subtitle, breadcrumbs, children }: CategoryPageLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem="/sammlung" />

      <div className="flex-1 flex flex-col">
        <Banner />

        <main className="flex-1 px-6 md:px-12 py-8 max-w-4xl mx-auto w-full">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1.5 text-sm font-heading text-muted-foreground mb-6 opacity-0 animate-fade-in">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3 h-3" />}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm md:text-base font-heading text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
};

export default CategoryPageLayout;
