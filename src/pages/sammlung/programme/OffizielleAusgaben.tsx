import CategoryPageLayout from "@/components/CategoryPageLayout";

const OffizielleAusgaben = () => {
  return (
    <CategoryPageLayout
      title="Offizielle Ausgaben"
      subtitle="Offizielle Vereinspublikationen und Programmhefte"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Offizielle Ausgaben" },
      ]}
    >
      <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-6">
          <div className="space-y-4 text-sm font-body text-foreground leading-relaxed">
            <p>
              Die offiziellen Ausgaben umfassen alle vom Verein oder dem DFB herausgegebenen 
              Programmhefte und Publikationen zu Spielen des TSV 1860 München.
            </p>
            <p>
              Diese Programme zeichnen sich durch ihre professionelle Aufmachung und 
              den offiziellen Charakter aus. Sie enthalten häufig Aufstellungen, 
              Vereinsnachrichten und Werbeanzeigen der jeweiligen Zeit.
            </p>
          </div>
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export default OffizielleAusgaben;
