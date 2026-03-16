import { Home, BookOpen, ShoppingCart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Startseite", icon: Home, href: "/" },
  { label: "Sammlung", icon: BookOpen, href: "/sammlung" },
  { label: "Verkaufslisten", icon: ShoppingCart, href: "/verkaufslisten" },
  { label: "Die OBu Family", icon: Users, href: "/obu-family" },
];

interface SidebarProps {
  activeItem?: string;
}

const Sidebar = ({ activeItem = "/" }: SidebarProps) => {
  return (
    <aside className="w-48 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <p className="text-xs font-heading uppercase tracking-widest text-sidebar-foreground/60">
          Navigation
        </p>
      </div>
      <nav className="flex-1 py-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-heading tracking-wide transition-all duration-200",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              activeItem === item.href
                ? "bg-sidebar-accent text-sidebar-primary border-l-2 border-sidebar-primary"
                : "text-sidebar-foreground/80 border-l-2 border-transparent"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </a>
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
