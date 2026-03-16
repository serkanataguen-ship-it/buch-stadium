import CategoryPageLayout from "@/components/CategoryPageLayout";

const Heimspiele = () => {
  return (
    <CategoryPageLayout
      title="Heimspiele"
      subtitle="Die Programmhistorie der Münchner Löwen"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Heimspiele" },
      ]}
    >
      <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-6">
          <h3 className="text-lg font-heading font-bold text-foreground mb-4">
            Die Programmhistorie der Münchner Löwen
          </h3>
          <div className="space-y-4 text-sm font-body text-foreground leading-relaxed">
            <p>
              Die Geschichte der Spielprogramme des TSV 1860 München reicht weit zurück. 
              Bereits in den frühen Jahren des Vereins wurden zu besonderen Anlässen 
              Programme gedruckt, die heute begehrte Sammlerstücke sind.
            </p>
            <h4 className="font-heading font-bold text-foreground">Saison 1963/64</h4>
            <p>
              Mit dem Aufstieg in die neu gegründete Bundesliga begann eine neue Ära 
              der Programmgestaltung. Die ersten Bundesliga-Programme waren schlicht gehalten, 
              entwickelten aber schnell einen eigenen Charakter.
            </p>
            <h4 className="font-heading font-bold text-foreground">Saison 1964/65</h4>
            <p>
              In der Meistersaison 1964/65 erschienen die Programme in einer besonderen 
              Aufmachung. Diese Ausgaben sind heute besonders gesucht.
            </p>
            <h4 className="font-heading font-bold text-foreground">Saison 1965/66</h4>
            <p>
              Die letzte Saison im alten Grünwalder Stadion brachte nochmals besondere 
              Programmhefte hervor, bevor der Umzug ins Olympiastadion erfolgte.
            </p>
          </div>
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export default Heimspiele;
