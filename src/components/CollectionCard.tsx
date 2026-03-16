import { cn } from "@/lib/utils";

interface CollectionCardProps {
  title: string;
  href: string;
  imageLabel?: string;
  className?: string;
  delay?: number;
}

const CollectionCard = ({ title, href, imageLabel, className, delay = 0 }: CollectionCardProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group block overflow-hidden rounded-sm border border-border bg-card",
        "hover:shadow-lg hover:border-accent transition-all duration-300",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/5] bg-muted flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
          {imageLabel || "Bild"}
        </span>
      </div>
      <div className="p-2 text-center">
        <p className="text-xs font-heading text-card-foreground truncate">{title}</p>
      </div>
    </a>
  );
};

export default CollectionCard;
