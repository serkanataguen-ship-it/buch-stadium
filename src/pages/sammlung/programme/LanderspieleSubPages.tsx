import CategoryPageLayout from "@/components/CategoryPageLayout";

interface LanderspielPageProps {
  title: string;
  content?: React.ReactNode;
}

const LanderspielPage = ({ title, content }: LanderspielPageProps) => {
  return (
    <CategoryPageLayout
      title={title}
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Länderspiele", href: "/sammlung/programme/landerspiele" },
        { label: title },
      ]}
    >
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        {content || (
          <div className="bg-card border border-border rounded-sm p-8 text-center">
            <p className="text-muted-foreground font-heading">
              Inhalte werden in Kürze hinzugefügt.
            </p>
          </div>
        )}
      </div>
    </CategoryPageLayout>
  );
};

export const Deutschland = () => (
  <LanderspielPage
    title="Deutschland"
    content={
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-sm p-6">
          <h3 className="text-lg font-heading font-bold text-foreground mb-4">
            Länderspiel-Programme Deutschland
          </h3>
          <div className="space-y-4 text-sm font-body text-foreground leading-relaxed">
            <h4 className="font-heading font-bold">Vorkrieg</h4>
            <p>
              Die ältesten Programme der Sammlung stammen aus der Vorkriegszeit. 
              Diese seltenen Stücke dokumentieren die frühe Geschichte des deutschen Fußballs.
            </p>
            <h4 className="font-heading font-bold">Heimspiele</h4>
            <p>
              Programme zu Heim-Länderspielen der deutschen Nationalmannschaft, 
              darunter Begegnungen in München, Berlin, Stuttgart und anderen Städten.
            </p>
            <h4 className="font-heading font-bold">Auswärtsspiele</h4>
            <p>
              Programme zu Auswärtsspielen der deutschen Nationalmannschaft 
              aus verschiedenen Jahrzehnten.
            </p>
          </div>
        </div>
      </div>
    }
  />
);

export const Schweiz = () => <LanderspielPage title="Schweiz" />;
export const DDR = () => <LanderspielPage title="DDR" />;
export const Oesterreich = () => <LanderspielPage title="Österreich" />;
export const Liechtenstein = () => <LanderspielPage title="Liechtenstein" />;
