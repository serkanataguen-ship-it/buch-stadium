import { useState } from "react";
import { Home, BookOpen, ShoppingCart, Users, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Startseite", icon: Home, href: "/" },
  {
    label: "Sammlung",
    icon: BookOpen,
    href: "/sammlung",
    children: [
      { label: "Länderspiele", href: "/sammlung/programme/landerspiele" },
      { label: "DFB Pokal Endspiele", href: "/sammlung/programme/dfb-pokal-endspiele" },
      { label: "DM Endspiele", href: "/sammlung/programme/dm-endspiele" },
      { label: "Europa Pokal Endspiele", href: "/sammlung/programme/europa-pokal-endspiele" },
      { label: "1860 Heimspiele", href: "/sammlung/programme/heimspiele" },
      { label: "1860 Auswärts", href: "/sammlung/programme/die-blaue" },
      { label: "Liga", href: "/sammlung/programme/liga" },
      { label: "DFB Pokal", href: "/sammlung/programme/dfb-pokal" },
      { label: "Europa Pokal", href: "/sammlung/programme/europa-pokal" },
      { label: "EC Spiele", href: "/sammlung/programme/ec-spiele" },
      { label: "Offizielle Ausgaben", href: "/sammlung/programme/offizielle-ausgaben" },
      { label: "Private Ausgaben", href: "/sammlung/programme/private-ausgaben" },
      { label: "Eintrittskarten", href: "/sammlung/eintrittskarten" },
      { label: "Bücher & Magazine", href: "/sammlung/buecher" },
      { label: "Sammelbilder", href: "/sammlung/sammelbilder" },
      { label: "Autogrammkarten", href: "/sammlung/autogrammkarten" },
      { label: "Postkarten", href: "/sammlung/postkarten" },
      { label: "Sonstiges", href: "/sammlung/sonstiges" },
    ],
  },
  { label: "Verkaufslisten", icon: ShoppingCart, href: "/verkaufslisten" },
  { label: "Die OBu Family", icon: Users, href: "/obu-family" },
];

interface SidebarProps {
  activeItem?: string;
}

const Sidebar = ({ activeItem = "/" }: SidebarProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Auto-open Sammlung if we're on a sammlung sub-page
    const initial: Record<string, boolean> = {};
    if (activeItem.startsWith("/sammlung")) {
      initial["/sammlung"] = true;
    }
    return initial;
  });

  const toggleSection = (href: string) => {
    setOpenSections((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  return (
    <aside className="w-56 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col overflow-y-auto">
      <div className="p-4 border-b border-sidebar-border">
        <p className="text-xs font-heading uppercase tracking-widest text-sidebar-foreground/60">
          Navigation
        </p>
      </div>
      <nav className="flex-1 py-2">
        {navItems.map((item) => (
          <div key={item.href}>
            {/* Parent item */}
            <div className="flex items-center">
              <a
                href={item.children ? undefined : item.href}
                onClick={
                  item.children
                    ? (e) => {
                        e.preventDefault();
                        toggleSection(item.href);
                      }
                    : undefined
                }
                className={cn(
                  "flex-1 flex items-center gap-3 px-4 py-3 text-sm font-heading tracking-wide transition-all duration-200 cursor-pointer",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  activeItem === item.href
                    ? "bg-sidebar-accent text-sidebar-primary border-l-2 border-sidebar-primary"
                    : "text-sidebar-foreground/80 border-l-2 border-transparent"
                )}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.children && (
                  openSections[item.href] ? (
                    <ChevronDown className="w-3 h-3 text-sidebar-foreground/50" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-sidebar-foreground/50" />
                  )
                )}
              </a>
            </div>

            {/* Children */}
            {item.children && openSections[item.href] && (
              <div className="ml-4 border-l border-sidebar-border/50">
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "flex items-center gap-2 pl-5 pr-4 py-2 text-xs font-heading tracking-wide transition-all duration-200",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      activeItem === child.href
                        ? "bg-sidebar-accent/60 text-sidebar-primary font-semibold"
                        : "text-sidebar-foreground/70"
                    )}
                  >
                    <span className="w-1 h-1 rounded-full bg-current shrink-0 opacity-50" />
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-[10px] text-sidebar-foreground/40 font-heading">
          © Oliver Buch
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
