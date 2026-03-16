import CategoryPageLayout from "@/components/CategoryPageLayout";

interface PlaceholderSubPageProps {
  title: string;
  parentLabel?: string;
  parentHref?: string;
}

const ProgrammePlaceholder = ({ title, parentLabel = "Programme", parentHref = "/sammlung/programme" }: PlaceholderSubPageProps) => {
  return (
    <CategoryPageLayout
      title={title}
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: parentLabel, href: parentHref },
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

export const Liga = () => <ProgrammePlaceholder title="Liga" />;
export const DfbPokal = () => <ProgrammePlaceholder title="DFB Pokal" />;
export const DfbPokalEndspiele = () => <ProgrammePlaceholder title="DFB Pokal Endspiele" />;
export const DmEndspiele = () => <ProgrammePlaceholder title="DM Endspiele" />;
export const EuropaPokal = () => <ProgrammePlaceholder title="Europa Pokal" />;
export const EuropaPokalEndspiele = () => <ProgrammePlaceholder title="Europa Pokal Endspiele" />;
export const EcSpiele = () => <ProgrammePlaceholder title="EC Spiele" />;
export const DieBlaue = () => <ProgrammePlaceholder title="Die Blaue" />;
export const PrivateAusgaben = () => <ProgrammePlaceholder title="Private Ausgaben" />;
