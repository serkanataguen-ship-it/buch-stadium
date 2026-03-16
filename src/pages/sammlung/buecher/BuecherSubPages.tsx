import CategoryPageLayout from "@/components/CategoryPageLayout";

interface BuecherPlaceholderProps {
  title: string;
}

const BuecherPlaceholder = ({ title }: BuecherPlaceholderProps) => {
  return (
    <CategoryPageLayout
      title={title}
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Bücher & Magazine", href: "/sammlung/buecher" },
        { label: title },
      ]}
    >
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-8 text-center">
          <p className="text-muted-foreground font-heading">
            Inhalte werden in Kürze hinzugefügt.
          </p>
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export const Jahrbuecher = () => <BuecherPlaceholder title="Jahrbücher" />;
export const KlebeAlben = () => <BuecherPlaceholder title="Klebe-Alben" />;
export const FussballAbteilung = () => <BuecherPlaceholder title="Fußball Abteilung" />;
export const Gesamtverein = () => <BuecherPlaceholder title="Gesamtverein" />;
