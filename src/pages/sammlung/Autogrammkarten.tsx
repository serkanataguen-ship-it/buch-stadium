import CategoryPageLayout from "@/components/CategoryPageLayout";

const Autogrammkarten = () => {
  return (
    <CategoryPageLayout
      title="Autogrammkarten"
      subtitle="Signierte Karten der Spieler"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Autogrammkarten" },
      ]}
    >
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-8 text-center">
          <p className="text-muted-foreground font-heading">
            Inhalte werden in Kürze hinzugefügt.
          </p>
          <p className="text-sm text-muted-foreground font-heading mt-2">
            Bitte schauen Sie bald wieder vorbei.
          </p>
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export default Autogrammkarten;
